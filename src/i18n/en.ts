export const en = {
  // App title
  appTitle: "Sujud as-Sahw",
  appSubtitle: "Prostration of Forgetfulness",

  // Nav
  home: "Home",
  guideMe: "Guide Me",
  testMe: "Test Me",
  back: "Back",
  startOver: "Start Over",
  next: "Next",
  prev: "Prev",
  showDetail: "Show more detail",
  hideDetail: "Hide detail",
  learnMore: "Learn more",

  // Home screen
  homeWelcome: "Learn the rules of",
  homeWelcomeLine2: "Sujud as-Sahw",
  homeGuideBtn: "Guide Me",
  homeGuideSub: "Answer 3 questions",
  homeTestBtn: "Test Me",
  homeTestSub: "Flip flashcards",

  // Decision tree questions
  q1: "Did you ADD something extra?",
  q1Sub: "(extra rak'ah, extra sujud, or extra action)",
  q1Yes: "YES",
  q1No: "NO",

  q2: "Did you FORGET something obligatory?",
  q2Sub: "(missed a sujud, missed tashahhud, etc.)",
  q2Yes: "YES",
  q2No: "NO",

  q3: "Are you UNSURE about the count?",
  q3Sub: "(how many rak'ahs you prayed)",
  q3Yes: "YES",
  q3No: "NO",

  q3b: "Does one option seem MORE LIKELY?",
  q3bSub: "(you lean toward a specific count)",
  q3bYes: "YES — more likely",
  q3bNo: "NO — equally unsure",

  // Results
  resultAfterSalam: "AFTER Salam",
  resultBeforeSalam: "BEFORE Salam",

  result1Title: "Added Extra — After Salam",
  result1Ruling: "Perform Sujud as-Sahw AFTER giving salam.",
  result1Detail: "If you added an extra rak'ah or sujud, wait until you give salam, then perform two prostrations, then give salam again. This applies whether you remembered during or after the extra action.",

  result2Title: "Forgot Obligatory — Before Salam",
  result2Ruling: "Perform Sujud as-Sahw BEFORE giving salam.",
  result2Detail: "If you forgot a wajib element (like the first tashahhud or a sujud), perform two prostrations before saying salam. If you remembered after salam and it has been a short time, return to the prayer, complete it, then do sujud as-sahw before salam.",

  result3aTitle: "Unsure — Likely Count — After Salam",
  result3aRuling: "Act on what seems most likely, then do Sujud as-Sahw AFTER salam.",
  result3aDetail: "If you prayed 3 or 4 rak'ahs and one seems more likely correct, complete the prayer based on that assumption. Then perform sujud as-sahw after giving salam.",

  result3bTitle: "Unsure — Equally Unsure — Before Salam",
  result3bRuling: "Build on the lesser count, then do Sujud as-Sahw BEFORE salam.",
  result3bDetail: "If you cannot determine which count is more likely, assume the lesser number (e.g., if unsure between 3 and 4, assume 3). Complete the remaining rak'ahs on that basis, then perform sujud as-sahw before giving salam.",

  resultNoIssue: "No issue found.",
  resultNoIssueDetail: "Based on your answers, no Sujud as-Sahw is required. Your prayer is complete.",

  // Flashcards
  cardOf: "of",
  tapToFlip: "Tap to flip",
  locked: "Complete basic cards first",
  basicCards: "Basic",
  detailedCards: "Detailed",

  fc1Front: "You prayed 5 rak'ahs by mistake",
  fc1Back: "Sujud as-Sahw AFTER salam — you added something extra",

  fc2Front: "You forgot the first tashahhud",
  fc2Back: "Sujud as-Sahw BEFORE salam — you forgot something obligatory",

  fc3Front: "You're not sure: did you pray 3 or 4 rak'ahs?",
  fc3Back: "If more likely = AFTER salam. If equally unsure = build on 3, BEFORE salam.",

  fc4Front: "You added an extra sujud in the 3rd rak'ah",
  fc4Back: "AFTER salam — this is adding something extra, even within a rak'ah",

  fc5Front: "You forgot tashahhud then remembered before standing up",
  fc5Back: "Return and complete tashahhud — no sujud as-sahw needed if you return quickly",

  fc6Front: "You thought you prayed 2, probably prayed 3 — it's clearer now",
  fc6Back: "Act on most likely (3 rak'ahs), then AFTER salam perform sujud as-sahw",
};

export type TranslationKey = keyof typeof en;
