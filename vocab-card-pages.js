(() => {
  const cards = [
    {
      word: "argue",
      ipa: "/ˈɑːrɡjuː/",
      partOfSpeech: "verb",
      image: "../RE/U2/2A-argue.png",
      audio: "audio/unit2a/argue-us.mp3",
      definition: "to disagree with someone and give reasons for your opinion",
      example: "The two students argued about the rules of the contest.",
      phrases: ["argue with somebody", "argue about something", "argue that ..."],
    },
    {
      word: "athlete",
      ipa: "/ˈæθliːt/",
      partOfSpeech: "noun",
      image: "../RE/U2/2A-athlete.png",
      audio: "audio/unit2a/athlete-us.mp3",
      definition: "a person who is trained to compete in sports",
      example: "Every athlete trained hard before the competition.",
      phrases: ["professional athlete", "Olympic athlete", "a talented athlete"],
    },
    {
      word: "exactly",
      ipa: "/ɪɡˈzæktli/",
      partOfSpeech: "adverb",
      image: "../RE/U2/2A-exactly.png",
      audio: "audio/unit2a/exactly-us.mp3",
      definition: "in a precise or completely correct way",
      example: "That is exactly what the legend says.",
      phrases: ["exactly right", "exactly what", "not exactly"],
    },
    {
      word: "record",
      ipa: "noun /ˈrekərd/ · verb /rɪˈkɔːrd/",
      partOfSpeech: "noun · verb",
      spoken: "record",
      image: "../RE/U2/2A-record.png",
      audio: "audio/unit2a/record-us.mp3",
      definition: "the best result ever achieved, or an official written account",
      example: "She set a new record in the speed-eating contest.",
      phrases: ["break a record", "set a record", "hold a record"],
    },
    {
      word: "tradition",
      ipa: "/trəˈdɪʃn/",
      partOfSpeech: "noun",
      image: "../RE/U2/2A-tradition.png",
      audio: "audio/unit2a/tradition-us.mp3",
      definition: "a belief, activity, or custom passed down for a long time",
      example: "The event has become a yearly tradition.",
      phrases: ["family tradition", "local tradition", "yearly tradition"],
    },
    {
      word: "unhealthy",
      ipa: "/ʌnˈhelθi/",
      partOfSpeech: "adjective",
      image: "../RE/U2/2A-unhealthy.png",
      definition: "not good for your health",
      example: "Eating too much fast food can be unhealthy.",
      phrases: ["unhealthy food", "unhealthy habit", "unhealthy lifestyle"],
    },
    {
      word: "various",
      ipa: "/ˈveriəs/",
      partOfSpeech: "adjective",
      image: "../RE/U2/2A-various.png",
      audio: "audio/unit2a/various-us.mp3",
      definition: "several different kinds of",
      example: "The contest included various kinds of food.",
      phrases: ["various kinds of", "for various reasons", "various ways"],
    },
    {
      word: "work out",
      ipa: "/wɜːrk aʊt/",
      partOfSpeech: "phrasal verb",
      images: ["../RE/U2/2A-work%20out1.png", "../RE/U2/2A-work%20out2.png"],
      definition: "to exercise, especially to improve your health or strength",
      example: "Many athletes work out regularly to stay strong.",
      phrases: ["work out regularly", "work out at a gym", "work out together"],
    },
    {
      word: "contest",
      ipa: "noun /ˈkɑːntest/ · verb /kənˈtest/",
      partOfSpeech: "noun · verb",
      spoken: "contest",
      image: "../RE/U2/2A-contest.png",
      audio: "audio/unit2a/contest-us.mp3",
      definition: "an organized event in which people try to win",
      example: "Nathan's Famous Hot Dog Eating Contest is held every July.",
      phrases: ["enter a contest", "hold a contest", "win a contest"],
    },
    {
      word: "legend",
      ipa: "/ˈledʒənd/",
      partOfSpeech: "noun",
      image: "../RE/U2/2A-legend.png",
      audio: "audio/unit2a/legend-us.mp3",
      definition: "a traditional story that may or may not be true",
      example: "According to legend, the event began with an argument.",
      phrases: ["according to legend", "local legend", "ancient legend"],
    },
    {
      word: "immigrant",
      ipa: "/ˈɪmɪɡrənt/",
      partOfSpeech: "noun",
      image: "../RE/U2/2A-immigrant.png",
      definition: "a person who comes to live permanently in a new country",
      example: "The immigrant brought family traditions to the new country.",
      phrases: ["immigrant family", "immigrant community", "an immigrant to ..."],
    },
  ];

  const speaker = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4h4l5 4V6L8 10H4z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>`;

  const nextImage = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>`;

  globalThis.unit2AVocabCardPages = cards.map((card) => ({
    id: `unit2a-vocabulary-card-${card.word.replaceAll(" ", "-")}`,
    type: "vocab-card",
    galleryImages: card.images || null,
    title: `2A · Vocabulary Card · ${card.word}`,
    content: `
      <article class="vocab-card">
        <div class="vocab-card-media">
          <img src="${card.images ? card.images[0] : card.image}" alt="Visual for the word ${card.word}"${card.images ? ` data-card-gallery data-gallery-index="0" data-images='${JSON.stringify(card.images)}'` : ""} />
          <span class="vocab-card-label">Unit 2A · Vocabulary Card</span>
          ${
            card.images
              ? `<button class="vocab-card-image-next" type="button" data-gallery-next aria-label="切换下一张 ${card.word} 图片" title="切换下一张图片">${nextImage}<span>1 / ${card.images.length}</span></button>`
              : ""
          }
        </div>
        <div class="vocab-card-content">
          <p class="vocab-card-kicker">Say it · understand it · use it</p>
          <div class="vocab-card-wordline">
            <h2>${card.word}</h2>
            <button class="vocab-card-sound" type="button" data-pronunciation="${card.spoken || card.word}" data-audio="${card.audio || ""}" aria-label="播放 ${card.word} 的美音发音" title="播放美音">${speaker}</button>
          </div>
          <p class="vocab-card-ipa">${card.ipa}</p>
          <p class="vocab-card-pos"><span>Part of Speech</span>${card.partOfSpeech}</p>
          <section class="vocab-card-section">
            <h3>Definition</h3>
            <p>${card.definition}</p>
          </section>
          <section class="vocab-card-section vocab-card-example">
            <h3>Example Sentence</h3>
            <p>${card.example}</p>
          </section>
          <section class="vocab-card-section">
            <h3>Useful Phrases</h3>
            <div class="vocab-card-phrases">${card.phrases.map((phrase) => `<span>${phrase}</span>`).join("")}</div>
          </section>
        </div>
      </article>
    `,
  }));
})();
