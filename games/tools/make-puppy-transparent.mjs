import { deflateSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const files = process.argv.slice(2);

if (!files.length) throw new Error("Provide one or more PNG files.");

const crcTable = Uint32Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) value = (value >>> 1) ^ (value & 1 ? 0xedb88320 : 0);
  return value >>> 0;
});

function crc32(buffer) {
  let value = 0xffffffff;
  for (const byte of buffer) value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const kind = Buffer.from(type, "ascii");
  const header = Buffer.alloc(8);
  header.writeUInt32BE(data.length, 0);
  kind.copy(header, 4);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([kind, data])), 0);
  return Buffer.concat([header, data, checksum]);
}

function unfilter(data, width, height, bytesPerPixel) {
  const stride = width * bytesPerPixel;
  const output = Buffer.alloc(height * stride);
  let sourceOffset = 0;
  for (let row = 0; row < height; row += 1) {
    const filter = data[sourceOffset++];
    const destination = row * stride;
    for (let column = 0; column < stride; column += 1) {
      const value = data[sourceOffset++];
      const left = column >= bytesPerPixel ? output[destination + column - bytesPerPixel] : 0;
      const above = row ? output[destination - stride + column] : 0;
      const upperLeft = row && column >= bytesPerPixel ? output[destination - stride + column - bytesPerPixel] : 0;
      if (filter === 0) output[destination + column] = value;
      else if (filter === 1) output[destination + column] = (value + left) & 0xff;
      else if (filter === 2) output[destination + column] = (value + above) & 0xff;
      else if (filter === 3) output[destination + column] = (value + Math.floor((left + above) / 2)) & 0xff;
      else if (filter === 4) {
        const prediction = left + above - upperLeft;
        const leftDistance = Math.abs(prediction - left);
        const aboveDistance = Math.abs(prediction - above);
        const upperLeftDistance = Math.abs(prediction - upperLeft);
        output[destination + column] = (value + (leftDistance <= aboveDistance && leftDistance <= upperLeftDistance ? left : aboveDistance <= upperLeftDistance ? above : upperLeft)) & 0xff;
      } else throw new Error(`Unsupported PNG filter: ${filter}`);
    }
  }
  return output;
}

function makeTransparent(path) {
  const input = readFileSync(path);
  if (!input.subarray(0, 8).equals(signature)) throw new Error(`${path} is not a PNG.`);
  let offset = 8;
  let width;
  let height;
  let colorType;
  const idat = [];
  while (offset < input.length) {
    const length = input.readUInt32BE(offset);
    const type = input.toString("ascii", offset + 4, offset + 8);
    const data = input.subarray(offset + 8, offset + 8 + length);
    offset += length + 12;
    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      if (data[8] !== 8 || data[12] !== 0) throw new Error(`${path} must be an 8-bit non-interlaced PNG.`);
      colorType = data[9];
      if (![2, 6].includes(colorType)) throw new Error(`${path} must be RGB or RGBA.`);
    }
    if (type === "IDAT") idat.push(data);
  }
  const sourceBpp = colorType === 6 ? 4 : 3;
  const source = unfilter(inflateSync(Buffer.concat(idat)), width, height, sourceBpp);
  const rgba = Buffer.alloc(width * height * 4);
  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const sourceOffset = pixel * sourceBpp;
    const destination = pixel * 4;
    const red = source[sourceOffset];
    const green = source[sourceOffset + 1];
    const blue = source[sourceOffset + 2];
    const alpha = sourceBpp === 4 ? source[sourceOffset + 3] : 255;
    const isGreenScreen = green > 105 && green > red * 1.4 && green > blue * 1.4;
    rgba[destination] = red;
    rgba[destination + 1] = green;
    rgba[destination + 2] = blue;
    rgba[destination + 3] = isGreenScreen ? 0 : alpha;
  }
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  for (let row = 0; row < height; row += 1) {
    const destination = row * (1 + width * 4);
    scanlines[destination] = 0;
    rgba.copy(scanlines, destination + 1, row * width * 4, (row + 1) * width * 4);
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  writeFileSync(path, Buffer.concat([signature, chunk("IHDR", header), chunk("IDAT", deflateSync(scanlines, { level: 9 })), chunk("IEND", Buffer.alloc(0))]));
  console.log(`Made transparent: ${path}`);
}

files.forEach(makeTransparent);
