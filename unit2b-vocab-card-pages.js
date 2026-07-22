(() => {
  const cards = [
    {
      word: "experience",
      ipa: "/ɪkˈspɪriəns/",
      partOfSpeech: "noun",
      image: "../RE/U2/2B-experience.png",
      audio: "audio/unit2b/human/experience-us-human.mp3",
      definition: "knowledge or skill gained from doing something",
      example: "Volunteering at the animal shelter was a valuable experience for Mia.",
      phrases: ["gain experience", "have experience in", "a learning experience"],
    },
    {
      word: "dish",
      ipa: "/dɪʃ/",
      partOfSpeech: "noun",
      image: "../RE/U2/2B-dish.png",
      audio: "audio/unit2b/human/dish-us-human.mp3",
      definition: "a particular type of food prepared in a certain way",
      example: "The restaurant is famous for a noodle dish made with seafood and herbs.",
      phrases: ["a traditional dish", "a local dish", "serve a dish"],
    },
    {
      word: "capsicum",
      ipa: "/ˈkæpsɪkəm/",
      partOfSpeech: "noun",
      image: "../RE/U2/2B-capsicum.png",
      audio: "audio/unit2b/human/capsicum-us-human.mp3",
      definition: "a pepper plant or its fruit, especially a sweet pepper",
      example: "We planted capsicum in the school garden this spring.",
      phrases: ["red capsicum", "green capsicum", "chopped capsicum"],
    },
    {
      word: "capsaicin",
      ipa: "/kæpˈseɪsɪn/",
      partOfSpeech: "noun",
      image: "../RE/U2/2B-Capsaicin.png",
      audio: "audio/unit2b/human/capsaicin-human.wav",
      definition: "the chemical in chili peppers that makes them taste hot",
      example: "Some scientists study capsaicin because it may be used in pain-relief creams.",
      phrases: ["contain capsaicin", "levels of capsaicin", "the effects of capsaicin"],
    },
    {
      word: "contain",
      ipa: "/kənˈteɪn/",
      partOfSpeech: "verb",
      image: "../RE/U2/2B-contain.png",
      audio: "audio/unit2b/human/contain-human.mp3",
      definition: "to have something inside or as a part",
      example: "The museum guide contains useful information about every exhibit.",
      phrases: ["contain vitamins", "contain no ...", "be contained in"],
    },
    {
      word: "calorie",
      ipa: "/ˈkæləri/",
      partOfSpeech: "noun",
      image: "../RE/U2/2B-calories..png",
      audio: "audio/unit2b/human/calorie-us-human.ogg",
      definition: "a unit used to measure the energy in food",
      example: "This fitness app estimates how many calories you burn during a bike ride.",
      phrases: ["high in calories", "burn calories", "calorie intake"],
    },
    {
      word: "barely",
      ipa: "/ˈberli/",
      partOfSpeech: "adverb",
      image: "../RE/U2/2B-barely.png",
      audio: "audio/unit2b/human/barely-us-human.mp3",
      definition: "only just; almost not",
      example: "I barely recognized my cousin after he cut his long hair.",
      phrases: ["barely able to", "barely enough", "barely manage to"],
    },
    {
      word: "health → healthy",
      spoken: "health. Healthy.",
      ipa: "/helθ/ → /ˈhelθi/",
      partOfSpeech: "noun → adjective",
      image: "../RE/U2/2B-healthy.png",
      audio: "audio/unit2b/human/health-us-human.ogg|audio/unit2b/human/healthy-us-human.mp3",
      definition: "health: the condition of your body and mind; healthy: good for your health",
      example: "Regular exercise improves health and helps you stay healthy.",
      phrases: ["good health", "healthy diet", "stay healthy"],
    },
  ];

  const speaker = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4h4l5 4V6L8 10H4z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>`;

  globalThis.unit2BVocabCardPages = cards.map((card) => ({
    id: `unit2b-vocabulary-card-${card.word.replaceAll(" ", "-").replace("→", "to")}`,
    type: "vocab-card",
    title: `2B · Vocabulary Card · ${card.word}`,
    content: `
      <article class="vocab-card vocab-card--unit2b${card.word.includes("→") ? " vocab-card--word-family" : ""}">
        <div class="vocab-card-media">
          <img src="${card.image}" alt="Visual for the word ${card.word}" />
          <span class="vocab-card-label">Unit 2B · Vocabulary Card</span>
        </div>
        <div class="vocab-card-content">
          <p class="vocab-card-kicker">Say it · understand it · use it</p>
          <div class="vocab-card-wordline">
            <h2>${card.word}</h2>
            <button class="vocab-card-sound" type="button" data-pronunciation="${card.spoken || card.word}" data-audio="${card.audio}" aria-label="播放 ${card.word} 的美音发音" title="播放美音">${speaker}</button>
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
