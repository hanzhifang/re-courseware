const unitDetails = [
  {
    topic: "Mysteries",
    readingA: "A Mysterious Visitor",
    readingB: "The Lost City of Atlantis",
    video: "Moon Mystery",
  },
  {
    topic: "Eating Extremes",
    readingA: "The World of Speed Eating",
    readingB: "The Hottest Chilies",
    video: "Science of Taste",
  },
  {
    topic: "Cool Jobs",
    readingA: "Digging for the Past",
    readingB: "Getting the Shot",
    video: "Right Dog for the Job",
  },
  {
    topic: "Shipwrecks",
    readingA: "I've Found the Titanic!",
    readingB: "My Descent to the Titanic",
    video: "An Ancient Shipwreck",
  },
  {
    topic: "Science Investigators",
    readingA: "The Disease Detective",
    readingB: "At the Scene of a Crime",
    video: "The Flu Virus",
  },
  {
    topic: "Plants and Trees",
    readingA: "Planting for the Planet",
    readingB: "Fatal Attraction",
    video: "Giants of the Forest",
  },
  {
    topic: "Mind's Eye",
    readingA: "Understanding Dreams",
    readingB: "Seeing the Impossible",
    video: "Parasomnia",
  },
  {
    topic: "Animal Wonders",
    readingA: "A Penguin's Year",
    readingB: "Do Animals Laugh?",
    video: "Amazing Narwhals",
  },
  {
    topic: "Building Beauty",
    readingA: "A Love Poem in Stone",
    readingB: "The Great Dome of Florence",
    video: "Brunelleschi's Dome",
  },
  {
    topic: "Forces of Nature",
    readingA: "Wild Weather",
    readingB: "When Weird Weather Strikes",
    video: "Tornado Terror",
  },
  {
    topic: "Giants of the Past",
    readingA: "The Mammoth's Tale",
    readingB: "Monsters of the Deep",
    video: "Ichthyosaurs",
  },
  {
    topic: "Technology",
    readingA: "The Robots are Coming!",
    readingB: "How Will We Live in 2045?",
    video: "A Social Robot",
  },
];

const units = unitDetails.map((unit, index) => {
  const number = index + 1;
  return {
    number,
    title: `Unit ${number}`,
    image: `../RE/unit${number}.png`,
    ...unit,
  };
});

const extraPagesByUnit = {
  2: [
    { title: "2A · Naples", image: "../RE/U2/RE-2A-Napels.png", fileName: "RE-2A-Napels.png" },
    { title: "2A · Pizza", image: "../RE/U2/u2-pizza.png", fileName: "u2-pizza.png" },
    {
      title: "2A · Warm-up Whiteboard",
      image: "../RE/unit2.png",
      fileName: "unit2.png",
      layout: "left-whiteboard",
    },
    { title: "2A · Page 22", image: "../RE/U2/u2-22.png", fileName: "u2-22.png" },
    { title: "2A · Page 23", image: "../RE/U2/u2-23.png", fileName: "u2-23.png" },
    { title: "2A · Page 24", image: "../RE/U2/u2-24.png", fileName: "u2-24.png" },
    { title: "2A · Story Map", image: "../RE/U2/2Amap%20story.png", fileName: "2Amap story.png" },
    { title: "2A · Output", image: "../RE/U2/2A%20output.png", fileName: "2A output.png" },
    { title: "2A · Page 25", image: "../RE/U2/u2-25.png?v=20260712", fileName: "u2-25.png" },
    { title: "2A · Page 26", image: "../RE/U2/u2-26.png", fileName: "u2-26.png" },
    { title: "2A · Extra Reading", image: "../RE/U2/2A%E9%A2%9D%E5%A4%96%E9%98%85%E8%AF%BB%E9%A2%98.png", fileName: "2A额外阅读题.png" },
    ...(globalThis.unit2AVocabCardPages || []),
    { title: "2A · Word Family", image: "../RE/U2/word%20family.png", fileName: "word family.png" },
    { title: "2A · Page 27", image: "../RE/U2/u2-27.png", fileName: "u2-27.png" },
    { title: "2A · Critical Thinking", image: "../RE/U2/2A-critical%20thinking.png", fileName: "2A-critical thinking.png" },
    { title: "2A · Critical Thinking 2", image: "../RE/U2/2A-critical%202.png", fileName: "2A-critical 2.png" },
    { title: "2B · Introduction", image: "../RE/U2/U2-2B.png", fileName: "U2-2B.png" },
    { title: "2B · Warm-up", image: "../RE/U2/2B-warmup.png", fileName: "2B-warmup.png" },
    { title: "2B · Page 29", image: "../RE/U2/2B-29.png", fileName: "2B-29.png" },
    { title: "2B · Reading 1", image: "../RE/U2/2B-R1.png", fileName: "2B-R1.png" },
    { title: "2B · Reading 2", image: "../RE/U2/2B-R2.png", fileName: "2B-R2.png" },
    { title: "2B · Story Map", image: "../RE/U2/2B%20storymap.png", fileName: "2B storymap.png" },
    { title: "2B · Page 30", image: "../RE/U2/2B-30.png", fileName: "2B-30.png" },
    { title: "2B · Page 31", image: "../RE/U2/2B-31.png", fileName: "2B-31.png" },
    { title: "2B · Reading Skill 1", image: "../RE/U2/2B-skill1.png", fileName: "2B-skill1.png" },
    { title: "2B · Reading Skill 2", image: "../RE/U2/2B-skill2.png.png", fileName: "2B-skill2.png.png" },
    { title: "2B · Reading Skill 3", image: "../RE/U2/2B-skill3.png.png", fileName: "2B-skill3.png.png" },
    ...(globalThis.unit2BVocabCardPages || []),
    { title: "2B · Word Family", image: "../RE/U2/2B-wordfamily.png", fileName: "2B-wordfamily.png" },
    { title: "2B · Page 32", image: "../RE/U2/2B-32.png", fileName: "2B-32.png" },
    { title: "2B · Output", image: "../RE/U2/2B-output.png", fileName: "2B-output.png" },
    { title: "2V · Page 33", image: "../RE/U2/2V-33.png", fileName: "2V-33.png" },
    { title: "2V · Preview", image: "../RE/U2/2V-pre.png", fileName: "2V-pre.png" },
    { title: "2V · Page 34", image: "../RE/U2/2V-34.png", fileName: "2V-34.png" },
  ],
  3: [
    { title: "3A · Cool Jobs", image: "../RE/U3/cool%20jobs.png", fileName: "cool jobs.png" },
    { title: "3A · Page 36", image: "../RE/U3/3A-36.png", fileName: "3A-36.png" },
    { title: "3A · Daily Work", image: "../RE/U3/daily%20work.png", fileName: "daily work.png" },
    { title: "3A · Page 37", image: "../RE/U3/3A-37.png", fileName: "3A-37.png" },
    { title: "3A · Story Map", image: "../RE/U3/3A-story%20map.png", fileName: "3A-story map.png" },
    { title: "3A · Page 38", image: "../RE/U3/3A-38.png", fileName: "3A-38.png" },
    { title: "3A · Page 38-1", image: "../RE/U3/3A-38-1.png", fileName: "3A-38-1.png" },
    { title: "3A · Page 39", image: "../RE/U3/3A-39.png", fileName: "3A-39.png" },
    { title: "3A · Page 40", image: "../RE/U3/3A-40.png", fileName: "3A-40.png" },
  ],
  12: [
    { title: "12A · Page 160", image: "../RE/12A160.png", fileName: "12A160.png" },
    { title: "12A · Page 161", image: "../RE/12A161.png", fileName: "12A161.png" },
    { title: "12A · Page 162", image: "../RE/12A162.png", fileName: "12A162.png" },
    { title: "12A · Story Map", image: "../RE/12A%20storymap.png", fileName: "12A storymap.png" },
    { title: "12A · Page 163", image: "../RE/12A163.png", fileName: "12A163.png" },
    { title: "12A · Page 164", image: "../RE/12A164.png", fileName: "12A164.png" },
    { title: "12A · Page 165", image: "../RE/12A165.png", fileName: "12A165.png" },
  ],
};

const state = {
  screen: "cover",
  activeUnit: units[0],
  activePageIndex: 0,
  tool: "pen",
  color: "#ef4444",
  brushSize: 6,
  drawing: false,
  lastPoint: null,
  annotationVariant: 0,
  strokes: [],
  texts: [],
  history: [],
  dragText: null,
  resizeText: null,
};

const courseware = document.querySelector(".courseware");
const views = [...document.querySelectorAll(".screen")];
const coverButton = document.querySelector(".cover-enter");
const coverImage = document.querySelector("#coverImage");
const coverFallback = document.querySelector("#coverFallback");
const unitGrid = document.querySelector("#unitGrid");
const menuBackCover = document.querySelector("#menuBackCover");
const backToMenu = document.querySelector("#backToMenu");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonSubtitle = document.querySelector("#lessonSubtitle");
const lessonImage = document.querySelector("#lessonImage");
const worksheetPage = document.querySelector("#worksheetPage");
const lessonFallback = document.querySelector("#lessonFallback");
const pageNav = document.querySelector("#pageNav");
const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const pageCounter = document.querySelector("#pageCounter");
const pageJumpMenu = document.querySelector("#pageJumpMenu");
const pageJumpToggle = document.querySelector("#pageJumpToggle");
const pageJumpPanel = document.querySelector("#pageJumpPanel");
const quickPageButtons = [...document.querySelectorAll("[data-quick-target]")];
const stage = document.querySelector("#lessonStage");
const canvas = document.querySelector("#annotationCanvas");
const textLayer = document.querySelector("#textLayer");
const brushSize = document.querySelector("#brushSize");
const undoButton = document.querySelector("#undoButton");
const clearButton = document.querySelector("#clearButton");
const ctx = canvas.getContext("2d");
let pronunciationAudio = null;

function showScreen(name) {
  state.screen = name;
  courseware.dataset.screen = name;
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === name);
  });

  if (name === "lesson") {
    resizeCanvas();
  }
}

function markMissingImage(image, fallback) {
  image.classList.add("is-missing");
  fallback.classList.add("is-visible");
}

function getUnitPages(unit) {
  return [
    {
      title: "单元首页",
      image: unit.image,
      fileName: `unit${unit.number}.png`,
    },
    ...(extraPagesByUnit[unit.number] || []),
  ];
}

function renderUnits() {
  unitGrid.innerHTML = units
    .map(
      (unit) => `
        <button class="unit-card" type="button" data-unit="${unit.number}" aria-label="打开 ${unit.title}">
          <span class="unit-thumb">
            <img class="unit-cover" src="${unit.image}" alt="${unit.title} cover" data-unit-image="${unit.number}" />
            <span class="unit-placeholder" data-unit-fallback="${unit.number}">${unit.title}</span>
          </span>
          <span class="unit-meta">
            <strong>${unit.title}</strong>
            <span class="unit-topic">${unit.topic}</span>
            <span class="unit-readings">
              <span><b>${unit.number}A</b> ${unit.readingA}</span>
              <span><b>${unit.number}B</b> ${unit.readingB}</span>
              <span><b>video</b> ${unit.video}</span>
            </span>
          </span>
        </button>
      `,
    )
    .join("");

  unitGrid.querySelectorAll(".unit-card").forEach((card) => {
    card.addEventListener("click", () => openUnit(Number(card.dataset.unit)));
  });

  unitGrid.querySelectorAll(".unit-cover").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("is-missing");
      unitGrid
        .querySelector(`[data-unit-fallback="${image.dataset.unitImage}"]`)
        .classList.add("is-visible");
    });
  });
}

function storageKey(unitNumber, pageIndex = state.activePageIndex, variant = state.annotationVariant) {
  const pageKey = pageIndex === 0
    ? `ref-courseware-unit-${unitNumber}`
    : `ref-courseware-unit-${unitNumber}-page-${pageIndex + 1}`;
  return variant > 0 ? `${pageKey}-image-${variant + 1}` : pageKey;
}

function loadUnitState(unitNumber, pageIndex = state.activePageIndex, variant = state.annotationVariant) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey(unitNumber, pageIndex, variant)) || "{}");
    state.strokes = Array.isArray(saved.strokes) ? saved.strokes : [];
    state.texts = Array.isArray(saved.texts) ? saved.texts : [];
  } catch {
    state.strokes = [];
    state.texts = [];
  }

  state.history = [];
}

function saveUnitState() {
  localStorage.setItem(
    storageKey(state.activeUnit.number, state.activePageIndex),
    JSON.stringify({
      strokes: state.strokes,
      texts: state.texts,
    }),
  );
}

function openUnit(unitNumber) {
  state.activeUnit = units.find((unit) => unit.number === unitNumber) || units[0];
  state.activePageIndex = 0;
  state.annotationVariant = 0;
  renderLessonPage();
  loadUnitState(state.activeUnit.number, state.activePageIndex);
  showScreen("lesson");
  renderAll();
}

function renderLessonPage() {
  const pages = getUnitPages(state.activeUnit);
  const page = pages[state.activePageIndex] || pages[0];
  const isWorksheet = page.type === "worksheet";
  const isVocabCard = page.type === "vocab-card";
  const isInteractivePage = isWorksheet || isVocabCard;
  lessonTitle.textContent = state.activeUnit.topic
    ? `${state.activeUnit.title} · ${state.activeUnit.topic}`
    : state.activeUnit.title;
  lessonSubtitle.textContent = page.title;
  courseware.dataset.pageType = isInteractivePage ? page.type : "image";
  stage.dataset.pageType = isInteractivePage ? page.type : "image";
  lessonImage.hidden = isInteractivePage;
  worksheetPage.hidden = !isInteractivePage;

  if (isWorksheet) {
    lessonFallback.classList.remove("is-visible");
    renderWorksheetPage(page);
    renderPageNav(pages.length);
    return;
  }

  if (isVocabCard) {
    lessonFallback.classList.remove("is-visible");
    renderVocabCardPage(page);
    renderPageNav(pages.length);
    return;
  }

  worksheetPage.replaceChildren();
  lessonImage.src = page.image;
  lessonImage.alt = `${state.activeUnit.title} ${page.title}`;
  lessonImage.dataset.layout = page.layout || "standard";
  lessonImage.classList.remove("is-missing");
  lessonFallback.classList.remove("is-visible");
  lessonFallback.querySelector("strong").textContent = page.title;
  lessonFallback.querySelector("small").textContent = `请把 ${page.fileName} 放入 RE 文件夹`;
  renderPageNav(pages.length);
}

function worksheetStorageKey(page) {
  return `ref-courseware-${page.id}`;
}

function readWorksheetAnswers(page) {
  try {
    return JSON.parse(localStorage.getItem(worksheetStorageKey(page)) || "{}");
  } catch {
    return {};
  }
}

function saveWorksheetAnswers(page) {
  const answers = {};
  worksheetPage.querySelectorAll("[data-field]").forEach((control) => {
    answers[control.dataset.field] =
      control.type === "checkbox" ? control.checked : control.value;
  });
  localStorage.setItem(worksheetStorageKey(page), JSON.stringify(answers));
}

function renderWorksheetPage(page) {
  worksheetPage.innerHTML = page.content;
  const answers = readWorksheetAnswers(page);

  worksheetPage.querySelectorAll("[data-field]").forEach((control) => {
    const savedValue = answers[control.dataset.field];
    if (control.type === "checkbox") {
      control.checked = savedValue === true;
    } else if (typeof savedValue === "string") {
      control.value = savedValue;
    }

    control.addEventListener("input", () => saveWorksheetAnswers(page));
    control.addEventListener("change", () => saveWorksheetAnswers(page));
  });
}

function renderVocabCardPage(page) {
  worksheetPage.innerHTML = page.content;
  setTool("move", false);
  if (page.galleryImages) {
    const imageIndex = clamp(state.annotationVariant, 0, page.galleryImages.length - 1);
    state.annotationVariant = imageIndex;
    const galleryImage = worksheetPage.querySelector("[data-card-gallery]");
    const galleryButton = worksheetPage.querySelector("[data-gallery-next]");
    galleryImage.src = page.galleryImages[imageIndex];
    galleryImage.dataset.galleryIndex = String(imageIndex);
    galleryButton.querySelector("span").textContent = `${imageIndex + 1} / ${page.galleryImages.length}`;
  }
  worksheetPage.querySelectorAll("[data-pronunciation]").forEach((button) => {
    button.addEventListener("click", () => speakWord(button.dataset.pronunciation, button.dataset.audio));
  });
  worksheetPage.querySelectorAll("[data-gallery-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = (state.annotationVariant + 1) % page.galleryImages.length;
      saveUnitState();
      state.annotationVariant = nextIndex;
      renderVocabCardPage(page);
      loadUnitState(state.activeUnit.number, state.activePageIndex, nextIndex);
      renderAll();
    });
  });
}

function speakWord(word, audioUrl = "") {
  window.speechSynthesis?.cancel();
  if (pronunciationAudio) {
    pronunciationAudio.pause();
    pronunciationAudio = null;
  }

  if (audioUrl) {
    const audioUrls = audioUrl.split("|").filter(Boolean);
    let currentIndex = 0;

    const playNextRecording = () => {
      const recording = new Audio(audioUrls[currentIndex]);
      pronunciationAudio = recording;
      recording.addEventListener("ended", () => {
        currentIndex += 1;
        if (currentIndex < audioUrls.length) {
          playNextRecording();
        } else {
          pronunciationAudio = null;
        }
      });
      recording.addEventListener("error", () => {
        pronunciationAudio = null;
      }, { once: true });
      recording.play().catch(() => {
        pronunciationAudio = null;
      });
    };

    playNextRecording();
    return;
  }

  speakNaturalAmericanVoice(word);
}

function speakNaturalAmericanVoice(word) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const americanVoice =
    voices.find(
      (voice) =>
        voice.lang.toLowerCase() === "en-us" &&
        /samantha|ava|alex|eddy|nathan|nicky|andrew|aria|jenny|guy|tony|joey|ivy|kevin|salli|kimberly|joanna|matthew/i.test(
          voice.name,
        ),
    ) ||
    voices.find((voice) => voice.lang.toLowerCase() === "en-us" && voice.localService) ||
    voices.find((voice) => voice.lang.toLowerCase() === "en-us");
  if (americanVoice) utterance.voice = americanVoice;
  window.speechSynthesis.speak(utterance);
}

function renderPageNav(pageCount) {
  pageNav.classList.toggle("is-hidden", pageCount <= 1);
  pageCounter.textContent = `${state.activePageIndex + 1} / ${pageCount}`;
  prevPageButton.disabled = state.activePageIndex === 0;
  nextPageButton.disabled = state.activePageIndex >= pageCount - 1;
  renderQuickPageMenu();
}

function quickPageIndex(target, pages = getUnitPages(state.activeUnit)) {
  if (target === "unit-start") return 0;
  const targets = {
    "2a-reading": { title: "2A · Page 23", fallback: 5 },
    "2a-cards": { id: "unit2a-vocabulary-card-argue", fallback: 12 },
    "2b-reading": { title: "2B · Introduction", fallback: 27 },
    "2b-cards": { id: "unit2b-vocabulary-card-experience", fallback: 38 },
  };
  const match = targets[target];
  if (!match) return -1;

  const pageIndex = pages.findIndex(
    (page) => (match.id && page.id === match.id) || (match.title && page.title === match.title),
  );
  return pageIndex >= 0 ? pageIndex : match.fallback < pages.length ? match.fallback : -1;
}

function setQuickPageMenuOpen(isOpen) {
  if (pageJumpMenu.hidden) return;
  pageJumpPanel.hidden = !isOpen;
  pageJumpToggle.setAttribute("aria-expanded", String(isOpen));
  pageJumpToggle.setAttribute("aria-label", isOpen ? "收起常用页面" : "打开常用页面");
  pageJumpToggle.title = isOpen ? "收起常用页面" : "常用页面";
}

function renderQuickPageMenu() {
  const isUnitTwo = state.activeUnit.number === 2;
  pageJumpMenu.hidden = !isUnitTwo;
  if (!isUnitTwo) {
    setQuickPageMenuOpen(false);
    return;
  }

  const pages = getUnitPages(state.activeUnit);
  quickPageButtons.forEach((button) => {
    const pageIndex = quickPageIndex(button.dataset.quickTarget, pages);
    button.dataset.quickPage = String(pageIndex);
    button.disabled = pageIndex < 0;
    button.classList.toggle("is-current", pageIndex === state.activePageIndex);
  });
}

function goToLessonPage(pageIndex) {
  const pages = getUnitPages(state.activeUnit);
  const nextIndex = clamp(pageIndex, 0, pages.length - 1);
  if (nextIndex === state.activePageIndex) return;
  saveUnitState();
  state.activePageIndex = nextIndex;
  state.annotationVariant = 0;
  renderLessonPage();
  loadUnitState(state.activeUnit.number, state.activePageIndex);
  renderAll();
  resizeCanvas();
}

function setTool(tool, persist = true) {
  if (persist) persistTextBoxMetrics();
  state.tool = tool;
  courseware.dataset.tool = tool;
  document.querySelectorAll("[data-tool]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tool === tool);
  });
  canvas.style.cursor = tool === "text" ? "text" : tool === "move" ? "default" : "crosshair";
  renderTexts();
}

function setColor(color) {
  state.color = color;
  document.querySelectorAll(".swatch").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.color === color);
  });
}

function getPointer(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height,
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function findTextNote(id) {
  return state.texts.find((item) => item.id === id);
}

function persistTextBoxMetrics() {
  textLayer.querySelectorAll(".text-note").forEach((element) => {
    const note = findTextNote(element.dataset.id);
    if (!note) return;
    const stageRect = stage.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    note.width = rect.width / stageRect.width;
    note.height = rect.height / stageRect.height;
  });
  saveUnitState();
}

function getTextContent(element) {
  const readNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.classList.contains("text-resize-handle")) return "";
    if (node.tagName === "BR") return "\n";

    const childText = [...node.childNodes].map(readNode).join("");
    return node === element || node.tagName === "SPAN" ? childText : `${childText}\n`;
  };

  return [...element.childNodes].map(readNode).join("").replace(/\n+$/g, "");
}

function drawStroke(stroke) {
  if (stroke.points.length < 1) return;
  const rect = canvas.getBoundingClientRect();

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = stroke.size;
  ctx.strokeStyle = stroke.color;
  ctx.globalCompositeOperation =
    stroke.tool === "eraser" ? "destination-out" : "source-over";

  ctx.beginPath();
  stroke.points.forEach((point, index) => {
    const x = point.x * rect.width;
    const y = point.y * rect.height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  ctx.restore();
}

function redrawCanvas() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  state.strokes.forEach(drawStroke);
}

function renderTexts() {
  textLayer.innerHTML = "";
  state.texts.forEach((note) => {
    const element = document.createElement("div");
    element.className = "text-note";
    element.contentEditable = state.tool === "move" ? "false" : "true";
    element.spellcheck = false;
    element.dataset.id = note.id;
    element.textContent = note.text;
    element.style.left = `${note.x * 100}%`;
    element.style.top = `${note.y * 100}%`;
    if (note.width) element.style.width = `${note.width * 100}%`;
    if (note.height) element.style.minHeight = `${note.height * 100}%`;
    element.style.setProperty("--note-color", note.color);
    element.addEventListener("input", () => {
      note.text = getTextContent(element) || " ";
      persistSingleTextBox(note, element);
      saveUnitState();
    });
    element.addEventListener("blur", () => {
      if (state.tool === "move") return;
      note.text = getTextContent(element) || " ";
      if (!note.text.trim()) {
        state.history.push({ type: "text-delete", note: { ...note } });
        state.texts = state.texts.filter((item) => item.id !== note.id);
        renderTexts();
      }
      saveUnitState();
    });
    element.addEventListener("pointerdown", (event) => beginTextDrag(event, note, element));
    element.addEventListener("pointermove", moveTextDrag);
    element.addEventListener("pointerup", endTextDrag);
    element.addEventListener("pointercancel", endTextDrag);
    element.addEventListener("keydown", () => {
      requestAnimationFrame(() => persistSingleTextBox(note, element));
    });
    const handle = document.createElement("span");
    handle.className = "text-resize-handle";
    handle.setAttribute("aria-hidden", "true");
    handle.addEventListener("pointerdown", (event) => beginTextResize(event, note, element));
    handle.addEventListener("pointermove", moveTextResize);
    handle.addEventListener("pointerup", endTextResize);
    handle.addEventListener("pointercancel", endTextResize);
    element.appendChild(handle);
    textLayer.appendChild(element);
  });
}

function persistSingleTextBox(note, element) {
  const stageRect = stage.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  note.width = rect.width / stageRect.width;
  note.height = rect.height / stageRect.height;
}

function renderAll() {
  redrawCanvas();
  renderTexts();
  saveUnitState();
}

function resizeCanvas() {
  const rect = stage.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * ratio));
  canvas.height = Math.max(1, Math.round(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  redrawCanvas();
}

function beginDraw(event) {
  if (state.screen !== "lesson") return;
  event.preventDefault();

  if (state.tool === "text") {
    addTextNote(getPointer(event));
    return;
  }

  if (state.tool === "move") {
    return;
  }

  canvas.setPointerCapture(event.pointerId);
  state.drawing = true;
  const point = getPointer(event);
  state.lastPoint = point;
  const stroke = {
    tool: state.tool,
    color: state.color,
    size: state.tool === "eraser" ? state.brushSize * 2.2 : state.brushSize,
    points: [point],
  };
  state.strokes.push(stroke);
  state.history.push({ type: "stroke" });
}

function continueDraw(event) {
  if (!state.drawing) return;
  event.preventDefault();
  const stroke = state.strokes[state.strokes.length - 1];
  stroke.points.push(getPointer(event));
  redrawCanvas();
}

function endDraw(event) {
  if (!state.drawing) return;
  event.preventDefault();
  state.drawing = false;
  state.lastPoint = null;
  saveUnitState();
}

function beginTextDrag(event, note, element) {
  if (state.tool !== "move") return;
  if (event.target.closest(".text-resize-handle")) return;
  event.preventDefault();
  event.stopPropagation();

  const stageRect = stage.getBoundingClientRect();
  const noteRect = element.getBoundingClientRect();
  persistSingleTextBox(note, element);
  state.dragText = {
    id: note.id,
    element,
    offsetX: event.clientX - noteRect.left,
    offsetY: event.clientY - noteRect.top,
    before: { x: note.x, y: note.y, width: note.width, height: note.height },
    moved: false,
  };
  element.classList.add("is-dragging");
  element.setPointerCapture(event.pointerId);
  updateTextDragPosition(event, stageRect);
}

function moveTextDrag(event) {
  if (!state.dragText) return;
  event.preventDefault();
  event.stopPropagation();
  updateTextDragPosition(event);
}

function updateTextDragPosition(event, currentStageRect) {
  const drag = state.dragText;
  if (!drag) return;

  const note = findTextNote(drag.id);
  if (!note) return;

  const stageRect = currentStageRect || stage.getBoundingClientRect();
  const noteRect = drag.element.getBoundingClientRect();
  const maxX = Math.max(0, (stageRect.width - noteRect.width) / stageRect.width);
  const maxY = Math.max(0, (stageRect.height - noteRect.height) / stageRect.height);
  const nextX = clamp((event.clientX - stageRect.left - drag.offsetX) / stageRect.width, 0, maxX);
  const nextY = clamp((event.clientY - stageRect.top - drag.offsetY) / stageRect.height, 0, maxY);

  drag.moved = drag.moved || Math.abs(nextX - drag.before.x) > 0.002 || Math.abs(nextY - drag.before.y) > 0.002;
  note.x = nextX;
  note.y = nextY;
  drag.element.style.left = `${nextX * 100}%`;
  drag.element.style.top = `${nextY * 100}%`;
}

function endTextDrag(event) {
  if (!state.dragText) return;
  event.preventDefault();
  event.stopPropagation();

  const drag = state.dragText;
  const note = findTextNote(drag.id);
  drag.element.classList.remove("is-dragging");
  if (note && drag.moved) {
    state.history.push({
      type: "move-text",
      id: note.id,
      before: drag.before,
      after: { x: note.x, y: note.y },
    });
  }
  state.dragText = null;
  saveUnitState();
}

function addTextNote(point) {
  const defaultWidth = 0.24;
  const defaultHeight = 0.1;
  const note = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    x: Math.max(0, Math.min(1 - defaultWidth, point.x)),
    y: Math.max(0, Math.min(1 - defaultHeight, point.y)),
    width: defaultWidth,
    height: defaultHeight,
    color: state.color,
    text: "Type here",
  };
  state.texts.push(note);
  state.history.push({ type: "text", id: note.id });
  renderTexts();
  saveUnitState();
  requestAnimationFrame(() => {
    const element = textLayer.querySelector(`[data-id="${note.id}"]`);
    if (!element) return;
    element.focus();
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  });
}

function beginTextResize(event, note, element) {
  event.preventDefault();
  event.stopPropagation();
  persistSingleTextBox(note, element);
  state.resizeText = {
    id: note.id,
    element,
    startX: event.clientX,
    startY: event.clientY,
    before: { width: note.width, height: note.height },
    moved: false,
  };
  element.classList.add("is-resizing");
  element.setPointerCapture(event.pointerId);
}

function moveTextResize(event) {
  if (!state.resizeText) return;
  event.preventDefault();
  event.stopPropagation();

  const resize = state.resizeText;
  const note = findTextNote(resize.id);
  if (!note) return;

  const stageRect = stage.getBoundingClientRect();
  const nextWidth = clamp(
    resize.before.width + (event.clientX - resize.startX) / stageRect.width,
    0.08,
    1 - note.x,
  );
  const nextHeight = clamp(
    resize.before.height + (event.clientY - resize.startY) / stageRect.height,
    0.06,
    1 - note.y,
  );
  resize.moved = resize.moved || Math.abs(nextWidth - resize.before.width) > 0.002 || Math.abs(nextHeight - resize.before.height) > 0.002;
  note.width = nextWidth;
  note.height = nextHeight;
  resize.element.style.width = `${nextWidth * 100}%`;
  resize.element.style.minHeight = `${nextHeight * 100}%`;
}

function endTextResize(event) {
  if (!state.resizeText) return;
  event.preventDefault();
  event.stopPropagation();

  const resize = state.resizeText;
  const note = findTextNote(resize.id);
  resize.element.classList.remove("is-resizing");
  if (note && resize.moved) {
    state.history.push({
      type: "resize-text",
      id: note.id,
      before: resize.before,
      after: { width: note.width, height: note.height },
    });
  }
  state.resizeText = null;
  saveUnitState();
}

function undo() {
  const action = state.history.pop();
  if (!action) return;

  if (action.type === "stroke") {
    state.strokes.pop();
  }

  if (action.type === "text") {
    state.texts = state.texts.filter((note) => note.id !== action.id);
  }

  if (action.type === "text-delete") {
    state.texts.push(action.note);
  }

  if (action.type === "move-text") {
    const note = findTextNote(action.id);
    if (note) {
      note.x = action.before.x;
      note.y = action.before.y;
    }
  }

  if (action.type === "resize-text") {
    const note = findTextNote(action.id);
    if (note) {
      note.width = action.before.width;
      note.height = action.before.height;
    }
  }

  renderAll();
}

function clearAnnotations() {
  const hasContent = state.strokes.length > 0 || state.texts.length > 0;
  if (!hasContent) return;
  state.strokes = [];
  state.texts = [];
  state.history = [];
  renderAll();
}

coverImage.addEventListener("error", () => markMissingImage(coverImage, coverFallback));
lessonImage.addEventListener("load", () => {
  lessonImage.classList.remove("is-missing");
  lessonFallback.classList.remove("is-visible");
});
lessonImage.addEventListener("error", () => markMissingImage(lessonImage, lessonFallback));
coverButton.addEventListener("click", () => showScreen("menu"));
menuBackCover.addEventListener("click", () => showScreen("cover"));
backToMenu.addEventListener("click", () => showScreen("menu"));
prevPageButton.addEventListener("click", () => goToLessonPage(state.activePageIndex - 1));
nextPageButton.addEventListener("click", () => goToLessonPage(state.activePageIndex + 1));
pageJumpToggle.addEventListener("click", () => {
  setQuickPageMenuOpen(pageJumpPanel.hidden);
});
pageJumpPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quick-target]");
  if (!button || button.disabled) return;
  const pageIndex = Number.parseInt(button.dataset.quickPage, 10);
  goToLessonPage(Number.isFinite(pageIndex) ? pageIndex : 0);
  setQuickPageMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setQuickPageMenuOpen(false);
});
brushSize.addEventListener("input", () => {
  state.brushSize = Number(brushSize.value);
});
undoButton.addEventListener("click", undo);
clearButton.addEventListener("click", clearAnnotations);

document.querySelectorAll("[data-tool]").forEach((button) => {
  button.addEventListener("click", () => setTool(button.dataset.tool));
});

document.querySelectorAll(".swatch").forEach((button) => {
  button.addEventListener("click", () => setColor(button.dataset.color));
});

canvas.addEventListener("pointerdown", beginDraw);
canvas.addEventListener("pointermove", continueDraw);
canvas.addEventListener("pointerup", endDraw);
canvas.addEventListener("pointercancel", endDraw);
window.addEventListener("resize", resizeCanvas);

renderUnits();
setTool(state.tool);
resizeCanvas();
