(() => {
  const words = [
    "argue",
    "athlete",
    "exactly",
    "record",
    "tradition",
    "unhealthy",
    "various",
    "work out",
    "contest",
    "legend",
    "immigrant",
  ];

  const definitions = [
    ["A", "to disagree and give reasons for your opinion"],
    ["B", "a person trained to compete in sports"],
    ["C", "in a precise or completely correct way"],
    ["D", "the best result, or an official written account"],
    ["E", "a belief or custom passed down for a long time"],
    ["F", "not good for your health"],
    ["G", "several different kinds of"],
    ["H", "to exercise"],
    ["I", "an organized event in which people try to win"],
    ["J", "a traditional story that may or may not be true"],
    ["K", "a person who comes to live in a new country"],
  ];

  const soundRows = [
    ["argue", "-ue supports the final /yoo/ sound.", "argue + -ment"],
    ["athlete", "Two syllables, not three.", "athlete + -ic"],
    ["exactly", "Keep the /t/ sound before -ly.", "exact + -ly"],
    ["record (noun)", "Stress the first syllable.", "record / recording"],
    ["record (verb)", "Stress the second syllable.", "same spelling, different stress"],
    ["tradition", "-tion sounds like /shun/.", "tradition + -al"],
    ["unhealthy", "Keep the spelling of health.", "un- + health + -y"],
    ["various", "-ous often marks an adjective.", "vary -> various / variety"],
    ["work out", "Give strong stress to out.", "work out (verb) / workout (noun)"],
    ["contest (noun)", "Stress the first syllable.", "contest + -ant"],
    ["contest (verb)", "Stress the second syllable.", "contest + -ed"],
    ["legend", "g sounds like /dzh/ before e.", "legend + -ary"],
    ["immigrant", "Double m follows im-.", "im- + migr + -ant"],
  ];

  const contextRows = [
    ["Four immigrants began to _____ about their new country.", "argue"],
    ["A trained _____ needs speed, strength, and practice.", "athlete"],
    ["Speed eating is _____ what its name suggests.", "exactly"],
    ["The winner hopes to break the world _____.", "record"],
    ["The event has become a yearly _____.", "tradition"],
    ["Eating too much too quickly can be _____.", "unhealthy"],
    ["Eating contests can involve _____ foods.", "various"],
    ["Many athletes _____ regularly to stay strong.", "work-out"],
    ["Nathan's Famous Hot Dog Eating _____ is held every July.", "contest"],
    ["According to _____, the event began with an argument.", "legend"],
    ["An _____ has moved into a new country to live.", "immigrant"],
  ];

  const collocations = [
    ["argue", "argue about / argue with"],
    ["athlete", "professional / successful / Olympic athlete"],
    ["exactly", "exactly right / exactly what"],
    ["record", "break / set / hold a record"],
    ["tradition", "family / local / yearly tradition"],
    ["unhealthy", "diet / habit / lifestyle"],
    ["various", "foods / reasons / methods"],
    ["work out", "work out regularly / at a gym"],
    ["contest", "enter / hold / win a contest"],
    ["legend", "according to / local / ancient legend"],
    ["immigrant", "immigrant family / community"],
  ];

  const familyRows = [
    ["argue", "argument", "argue + -ment"],
    ["athlete", "athletic", "athlete + -ic"],
    ["exact", "exactly", "exact + -ly"],
    ["tradition", "traditional", "tradition + -al"],
    ["health", "unhealthy", "un- + health + -y"],
    ["vary", "various / variety", "vary + -ous / -ety"],
    ["work out", "workout", "phrasal verb -> noun"],
    ["immigrate", "immigrant / immigration", "immigr- + -ant / -ation"],
  ];

  const input = (field, className = "ws-answer") =>
    `<input class="${className}" data-field="${field}" autocomplete="off" />`;

  const page = (part, title, instruction, content) => ({
    id: `unit2a-six-dimension-${part.toLowerCase().replaceAll(" ", "-")}`,
    type: "worksheet",
    title: `${part} · ${title}`,
    content: `
      <section class="ws-slide">
        <header class="ws-heading compact">
          <div>
            <p class="ws-kicker">Unit 2A · Six-Dimension Vocabulary</p>
            <h2>${part} · ${title}</h2>
          </div>
          <p class="ws-instruction">${instruction}</p>
        </header>
        ${content}
      </section>
    `,
  });

  globalThis.unit2AWorksheetPages = [
    page(
      "Part 1",
      "Core Meaning Match",
      "Match A-K, write the Chinese meaning, and mark your confidence.",
      `
        <div class="ws-section">
          <h3>Word Bank</h3>
          <div class="ws-word-bank primary">${words.map((word) => `<strong>${word}</strong>`).join("")}</div>
        </div>
        <div class="ws-definition-bank">
          ${definitions.map(([letter, text]) => `<span><b>${letter}</b> ${text}</span>`).join("")}
        </div>
        <table class="ws-table">
          <thead><tr><th>Word</th><th>Letter</th><th>Chinese meaning</th><th>Confidence</th></tr></thead>
          <tbody>
            ${words
              .map(
                (word) => `
                  <tr>
                    <td><strong>${word}</strong></td>
                    <td>${input(`meaning-${word.replaceAll(" ", "-")}-letter`, "ws-answer short")}</td>
                    <td>${input(`meaning-${word.replaceAll(" ", "-")}-cn`)}</td>
                    <td>
                      <select class="ws-answer" data-field="confidence-${word.replaceAll(" ", "-")}">
                        <option value=""></option><option>Sure</option><option>Not sure</option>
                      </select>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      `,
    ),
    page(
      "Part 2",
      "Sound, Syllables & Word Parts",
      "Use / to divide syllables and CAPITALIZE the stressed syllable.",
      `
        <div class="ws-section ws-tip">
          Read each word aloud. Notice the noun/verb stress changes in
          <strong>record</strong> and <strong>contest</strong>.
        </div>
        <table class="ws-table dense">
          <thead><tr><th>Word</th><th>Syllables + stress</th><th>Sound / spelling rule</th><th>Word parts and meaning</th></tr></thead>
          <tbody>
            ${soundRows
              .map(
                ([word, clue, parts]) => `
                  <tr>
                    <td><strong>${word}</strong></td>
                    <td>${input(`sound-${word.replaceAll(" ", "-").replace(/[().]/g, "")}`)}</td>
                    <td>${clue}</td>
                    <td>${input(`parts-${word.replaceAll(" ", "-").replace(/[().]/g, "")}`, "ws-answer")}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <div class="ws-question-grid">
          <label>How does the stress change in record? ${input("sound-record-check")}</label>
          <label>How does the stress change in contest? ${input("sound-contest-check")}</label>
          <label>Which word is often mispronounced as three syllables? ${input("sound-athlete-check")}</label>
          <label>Write one pronunciation tip for a classmate. ${input("sound-tip")}</label>
        </div>
      `,
    ),
    page(
      "Part 3",
      "Context Meaning",
      "Complete each sentence with one target word. Change the form if needed.",
      `
        <div class="ws-word-strip">${words.join(" · ")}</div>
        <ol class="ws-sentence-list inline-fields">
          ${contextRows
            .map(
              ([sentence, field]) => {
                const [before, after] = sentence.split("_____");
                return `
                  <li>
                    <span>${before}</span>${input(`context-${field}`, "ws-inline-answer")}<span>${after}</span>
                  </li>
                `;
              },
            )
            .join("")}
        </ol>
        <label class="ws-block-label ws-section">
          Choose one sentence. Which context clue helped you?
          <textarea class="ws-answer ws-textarea small" data-field="context-clue"></textarea>
        </label>
      `,
    ),
    page(
      "Part 4",
      "Collocation Builder",
      "Complete one natural phrase and use it in your own sentence.",
      `
        <table class="ws-table dense">
          <thead><tr><th>Word</th><th>Good partners</th><th>My phrase</th><th>My sentence</th></tr></thead>
          <tbody>
            ${collocations
              .map(
                ([word, partners]) => `
                  <tr>
                    <td><strong>${word}</strong></td><td>${partners}</td>
                    <td>${input(`collocation-${word.replaceAll(" ", "-")}`)}</td>
                    <td>${input(`collocation-sentence-${word.replaceAll(" ", "-")}`)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      `,
    ),
    page(
      "Part 5",
      "Word Family",
      "Build word families, then write your own contest / competition distinction.",
      `
        <h3 class="ws-subheading">A. The contest family</h3>
        <div class="ws-origin">
          <div><b>Latin</b><span>con- = together<br />testari = call to witness</span></div>
          <i>→</i><div><b>Earlier meaning</b><span>challenge or argue against a claim</span></div>
          <i>→</i><div><b>Modern meaning</b><span>an event in which people try to win</span></div>
        </div>
        <table class="ws-table dense">
          <thead><tr><th>Word</th><th>Suffix</th><th>Meaning</th><th>Complete the sentence</th></tr></thead>
          <tbody>
            <tr><td><strong>contestant</strong></td><td>${input("family-ant-suffix", "ws-answer short")}</td><td>${input("family-ant-meaning")}</td><td>${input("family-ant-sentence")}</td></tr>
            <tr><td><strong>contested</strong></td><td>${input("family-ed-suffix", "ws-answer short")}</td><td>${input("family-ed-meaning")}</td><td>${input("family-ed-sentence")}</td></tr>
            <tr><td><strong>contestation</strong></td><td>${input("family-ation-suffix", "ws-answer short")}</td><td>${input("family-ation-meaning")}</td><td>${input("family-ation-sentence")}</td></tr>
          </tbody>
        </table>

        <h3 class="ws-subheading">Contest and competition: write your own distinction</h3>
        <div class="ws-meaning-boxes">
          <label>
            <strong>contest</strong>
            <textarea class="ws-answer" data-field="contest-distinction" placeholder="Meaning, use, and one example..."></textarea>
          </label>
          <label>
            <strong>competition</strong>
            <textarea class="ws-answer" data-field="competition-distinction" placeholder="Meaning, use, and one example..."></textarea>
          </label>
        </div>

        <h3 class="ws-subheading">B. Build and compare.</h3>
        <div class="ws-build-compare">
          <label>1. <strong>-ant</strong> means a person who ________. So a contestant is ________. ${input("compare-ant")}</label>
          <label>2. <strong>-ed</strong> shows a past action or state. A contested result is a result that ________. ${input("compare-ed")}</label>
          <label>3. <strong>-ation</strong> forms a noun. Contestation means the act of formally ________. ${input("compare-ation")}</label>
          <label>4. Which word is most formal and least common in everyday speech? ${input("compare-formal")}</label>
        </div>

        <h3 class="ws-subheading">C. Build more word families.</h3>
        <table class="ws-table dense">
          <thead><tr><th>Base</th><th>Related word</th><th>Word parts</th><th>Meaning change</th></tr></thead>
          <tbody>
            ${familyRows
              .map(
                ([base, related, parts]) => `
                  <tr><td><strong>${base}</strong></td><td>${related}</td><td>${parts}</td>
                  <td>${input(`building-${base.replaceAll(" ", "-")}`)}</td></tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      `,
    ),
    page(
      "Part 6",
      "Output Task",
      "Use the vocabulary in connected writing.",
      `
        <div class="ws-output-prompt">
          <h3>Write 6-8 sentences about a speed-eating contest.</h3>
          <p>
            Use at least <strong>six</strong> target words. Include
            <strong>contest</strong> and <strong>competition</strong>, and show
            that you understand their difference.
          </p>
        </div>
        <textarea class="ws-answer ws-writing-box" data-field="output-writing" placeholder="Write your paragraph here..."></textarea>
        <div class="ws-checklist">
          <label><input type="checkbox" data-field="check-sentences" /> 6-8 complete sentences</label>
          <label><input type="checkbox" data-field="check-words" /> at least six target words</label>
          <label><input type="checkbox" data-field="check-distinction" /> contest / competition are used clearly</label>
          <label><input type="checkbox" data-field="check-spelling" /> spelling and punctuation checked</label>
        </div>
      `,
    ),
  ];
})();
