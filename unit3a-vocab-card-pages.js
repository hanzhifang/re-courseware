(() => {
  const cards = [
    {
      word: "archaeologist / archaeology",
      spoken: "archaeologist. Archaeology.",
      paired: true,
      wordHtml: "<span>archaeologist</span><small>word family</small><span>archaeology</span>",
      ipa: "<span>/ˌɑːrkiˈɑːlədʒɪst/</span><span>/ˌɑːrkiˈɑːlədʒi/</span>",
      partOfSpeech: "noun · noun",
      definition: "an archaeologist studies ancient people and cultures; archaeology is the study of the human past through objects, buildings, and remains",
      example: "The archaeologist studied archaeology to understand how the ancient community lived.",
      phrases: ["a team of archaeologists", "study archaeology", "archaeological evidence"],
    },
    {
      word: "excavation",
      ipa: "/ˌekskəˈveɪʃn/",
      partOfSpeech: "noun",
      definition: "the process of digging carefully to discover objects or structures from the past",
      example: "The excavation revealed the remains of an ancient building.",
      phrases: ["an archaeological excavation", "carry out an excavation", "an excavation site"],
    },
    {
      word: "career",
      ipa: "/kəˈrɪr/",
      partOfSpeech: "noun",
      definition: "the work a person chooses to do for a large part of their life",
      example: "Maya hopes to have a career in archaeology.",
      phrases: ["choose a career", "begin a career", "career goals"],
    },
    {
      word: "goal",
      ipa: "/ɡoʊl/",
      partOfSpeech: "noun",
      definition: "something that you hope to achieve in the future",
      example: "His main goal is to discover how people lived in the past.",
      phrases: ["set a goal", "achieve a goal", "reach a goal"],
    },
    {
      word: "decide",
      ipa: "/dɪˈsaɪd/",
      partOfSpeech: "verb",
      definition: "to choose something after thinking about different possibilities",
      example: "After visiting the museum, she decided to study history.",
      phrases: ["decide to do something", "decide against something", "decide between A and B"],
    },
    {
      word: "achieve",
      ipa: "/əˈtʃiːv/",
      partOfSpeech: "verb",
      definition: "to succeed in reaching a goal, especially through effort",
      example: "The research team worked for years to achieve its goal.",
      phrases: ["achieve a goal", "achieve success", "achieve excellent results"],
    },
    {
      word: "challenge",
      ipa: "/ˈtʃælɪndʒ/",
      partOfSpeech: "noun · verb",
      definition: "a difficult task that tests someone's ability; to test or question someone or something",
      example: "Working in extreme weather was a serious challenge for the team.",
      phrases: ["face a challenge", "take on a challenge", "overcome a challenge"],
    },
    {
      word: "narrow",
      ipa: "/ˈnæroʊ/",
      partOfSpeech: "adjective · verb",
      definition: "having little distance from side to side; to make something more limited",
      example: "The explorers followed a narrow passage into the tomb.",
      phrases: ["a narrow road", "a narrow passage", "narrow down the choices"],
    },
    {
      word: "grant",
      ipa: "/ɡrænt/",
      partOfSpeech: "noun · verb",
      definition: "money given for a particular purpose; to officially give or allow something",
      example: "The university gave the researchers a grant for the excavation.",
      phrases: ["receive a grant", "apply for a grant", "a research grant"],
    },
    {
      word: "attempt",
      ipa: "/əˈtempt/",
      partOfSpeech: "noun · verb",
      definition: "an act of trying to do something difficult; to try to do something",
      example: "The team made several attempts to locate the entrance.",
      phrases: ["make an attempt", "attempt to do something", "a successful attempt"],
    },
    {
      word: "reject",
      ipa: "/rɪˈdʒekt/",
      partOfSpeech: "verb",
      definition: "to refuse to accept, approve, or consider something",
      example: "The organization rejected his first request for funding.",
      phrases: ["reject an application", "reject an idea", "completely reject"],
    },
    {
      word: "advice",
      ipa: "/ədˈvaɪs/",
      partOfSpeech: "uncountable noun",
      definition: "an opinion or suggestion about what someone should do",
      example: "Her professor gave her useful advice about choosing a career.",
      phrases: ["give advice", "ask for advice", "a piece of advice"],
    },
    {
      word: "focus",
      ipa: "/ˈfoʊkəs/",
      partOfSpeech: "noun · verb",
      definition: "the main subject or point of attention; to give special attention to something",
      example: "The study focuses on the daily lives of ancient workers.",
      phrases: ["focus on something", "the main focus", "remain focused"],
    },
    {
      word: "tomb",
      ipa: "/tuːm/",
      partOfSpeech: "noun",
      definition: "a place or structure where a dead person is buried",
      example: "Archaeologists discovered valuable objects inside the tomb.",
      phrases: ["an ancient tomb", "discover a tomb", "enter a tomb"],
    },
  ];

  const speaker = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4h4l5 4V6L8 10H4z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>`;

  globalThis.unit3AVocabCardPages = cards.map((card) => ({
    id: `unit3a-vocabulary-card-${card.word.replaceAll(" ", "-").replace("/", "and")}`,
    type: "vocab-card",
    title: `3A · Vocabulary Card · ${card.word}`,
    content: `
      <article class="vocab-card vocab-card--unit2b vocab-card--unit3a${card.paired ? " vocab-card--paired" : ""}">
        <div class="vocab-card-media vocab-card-media--empty">
          <span class="vocab-card-label">Unit 3A · Vocabulary Card</span>
        </div>
        <div class="vocab-card-content">
          <p class="vocab-card-kicker">Say it · understand it · use it</p>
          <div class="vocab-card-wordline">
            <h2>${card.wordHtml || card.word}</h2>
            <button class="vocab-card-sound" type="button" data-pronunciation="${card.spoken || card.word}" aria-label="播放 ${card.word} 的美音发音" title="播放美音">${speaker}</button>
          </div>
          <p class="vocab-card-ipa${card.paired ? " vocab-card-ipa--paired" : ""}">${card.ipa}</p>
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
