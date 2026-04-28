// ============================================================
// STORAGE — in-memory cache only; Firestore is the source of truth
// ============================================================

const SHEETS_TO_COMPLETE = 100;
const PASS_SCORE = 18; // out of 20 (90%)

// ── Active player (session-scoped, survives refresh but not tab close) ──
let _activePlayer = sessionStorage.getItem('activePlayer') || null;
let _progressCache = null; // in-memory only — no localStorage

function setActivePlayer(name) {
  _activePlayer = name;
  if (name) sessionStorage.setItem('activePlayer', name);
  else sessionStorage.removeItem('activePlayer');
}

// ── Progress ──────────────────────────────────────────────────
function getProgress() {
  return _progressCache || defaultProgress();
}

function defaultProgress() {
  return {
    playerName: '',
    placementDone: false,
    currentLevelId: 0,
    levels: {}
  };
}

function saveProgress(p) {
  _progressCache = p;
  if (typeof syncProgressToCloud === 'function' && _activePlayer) {
    syncProgressToCloud(_activePlayer, p);
  }
}

function setPlayerName(name, pin, avatar) {
  setActivePlayer(name);
  const p = defaultProgress();
  p.playerName = name;
  p.pin        = pin;
  p.avatar     = avatar || '';
  _progressCache = p;
  saveProgress(p);
}

function setPlacementLevel(levelId) {
  const p = getProgress();
  p.currentLevelId = levelId;
  p.placementDone = true;
  saveProgress(p);
}

// Call after a sheet finishes. Returns updated progress object.
function recordSheetResult(levelId, passed) {
  const p = getProgress();
  if (!p.levels[levelId]) {
    p.levels[levelId] = { sheetsCompleted: 0, completed: false };
  }
  if (passed) {
    p.levels[levelId].sheetsCompleted += 1;
    if (p.levels[levelId].sheetsCompleted >= SHEETS_TO_COMPLETE) {
      p.levels[levelId].completed = true;
      if (p.currentLevelId === levelId && levelId < LEVELS.length - 1) {
        p.currentLevelId = levelId + 1;
      }
    }
  }
  saveProgress(p);
  return p;
}

function resetProgress() {
  _progressCache = null;
  setActivePlayer(null);
}

// ── Word progress ─────────────────────────────────────────────
function setWordPlacementLevel(levelId) {
  const p = getProgress();
  p.wordCurrentLevelId = levelId;
  p.wordPlacementDone  = true;
  saveProgress(p);
}

function recordWordSheetResult(levelId) {
  const p = getProgress();
  if (!p.wordLevels) p.wordLevels = {};
  if (!p.wordLevels[levelId]) p.wordLevels[levelId] = { sheetsCompleted: 0, completed: false };
  p.wordLevels[levelId].sheetsCompleted += 1;
  if (p.wordLevels[levelId].sheetsCompleted >= WORD_SHEETS_TO_COMPLETE) {
    p.wordLevels[levelId].completed = true;
    if (p.wordCurrentLevelId === levelId && levelId < WORD_LEVELS.length - 1) {
      p.wordCurrentLevelId = levelId + 1;
    }
  }
  saveProgress(p);
  return p;
}

// ── Word mid-sheet save ───────────────────────────────────────
function saveWordSheetInProgress(sheet) {
  const p = getProgress();
  if (!p.wordSheetsInProgress) p.wordSheetsInProgress = {};
  p.wordSheetsInProgress[sheet.levelId] = {
    levelId:         sheet.levelId,
    words:           sheet.words,
    currentIndex:    sheet.currentIndex,
    answers:         sheet.answers,
    currentAttempts: sheet.currentAttempts,
    hintVisible:     sheet.hintVisible
  };
  saveProgress(p);
}

function getWordSavedSheet(levelId) {
  const p = getProgress();
  if (!p.wordSheetsInProgress) return null;
  return p.wordSheetsInProgress[levelId] || null;
}

function getAllWordSavedSheets() {
  const p = getProgress();
  return p.wordSheetsInProgress || {};
}

function clearWordSavedSheet(levelId) {
  const p = getProgress();
  if (!p.wordSheetsInProgress) return;
  delete p.wordSheetsInProgress[levelId];
  saveProgress(p);
}

// ── Choice progress ───────────────────────────────────────────
function recordChoiceSheetResult(topicId, levelId) {
  const p = getProgress();
  if (!p.choiceLevels) p.choiceLevels = {};
  const key = `${topicId}_${levelId}`;
  if (!p.choiceLevels[key]) p.choiceLevels[key] = { sheetsCompleted: 0, completed: false };
  p.choiceLevels[key].sheetsCompleted += 1;
  if (!p.choiceCurrentLevel) p.choiceCurrentLevel = {};
  const topic = CHOICE_TOPICS[topicId];
  if (p.choiceLevels[key].sheetsCompleted >= CHOICE_SHEETS_TO_COMPLETE) {
    p.choiceLevels[key].completed = true;
    if ((p.choiceCurrentLevel[topicId] || 0) === levelId && levelId < topic.levels.length - 1) {
      p.choiceCurrentLevel[topicId] = levelId + 1;
    }
  }
  if (!p.choiceCurrentLevel[topicId]) p.choiceCurrentLevel[topicId] = 0;
  saveProgress(p);
  return p;
}

// ── Choice mid-sheet save ─────────────────────────────────────
function saveChoiceSheetInProgress(sheet) {
  const p = getProgress();
  if (!p.choiceSheetsInProgress) p.choiceSheetsInProgress = {};
  const key = `${sheet.topicId}_${sheet.levelId}`;
  p.choiceSheetsInProgress[key] = {
    topicId:      sheet.topicId,
    levelId:      sheet.levelId,
    questions:    sheet.questions,
    currentIndex: sheet.currentIndex,
    answers:      sheet.answers
  };
  saveProgress(p);
}

function getChoiceSavedSheet(topicId, levelId) {
  const p = getProgress();
  if (!p.choiceSheetsInProgress) return null;
  return p.choiceSheetsInProgress[`${topicId}_${levelId}`] || null;
}

function clearChoiceSavedSheet(topicId, levelId) {
  const p = getProgress();
  if (!p.choiceSheetsInProgress) return;
  delete p.choiceSheetsInProgress[`${topicId}_${levelId}`];
  saveProgress(p);
}

function getAllChoiceSavedSheets() {
  const p = getProgress();
  return p.choiceSheetsInProgress || {};
}

// ── Mid-sheet save ────────────────────────────────────────────
function saveSheetInProgress(sheet) {
  const p = getProgress();
  if (!p.sheetsInProgress) p.sheetsInProgress = {};
  p.sheetsInProgress[sheet.levelId] = {
    levelId:      sheet.levelId,
    problems:     sheet.problems,
    currentIndex: sheet.currentIndex,
    answers:      sheet.answers
  };
  saveProgress(p);
}

function getSavedSheet(levelId) {
  const p = getProgress();
  if (!p.sheetsInProgress) return null;
  return p.sheetsInProgress[levelId] || null;
}

function getAllSavedSheets() {
  const p = getProgress();
  return p.sheetsInProgress || {};
}

function clearSavedSheet(levelId) {
  const p = getProgress();
  if (!p.sheetsInProgress) return;
  delete p.sheetsInProgress[levelId];
  saveProgress(p);
}

// ── Arabic progress ───────────────────────────────────────────
function recordArabicSheetResult(levelId, passed) {
  const p = getProgress();
  if (!p.arabicLevels) p.arabicLevels = {};
  if (!p.arabicLevels[levelId]) p.arabicLevels[levelId] = { sheetsCompleted: 0, completed: false };
  if (passed) {
    p.arabicLevels[levelId].sheetsCompleted += 1;
    if (p.arabicLevels[levelId].sheetsCompleted >= ARABIC_SHEETS_TO_COMPLETE) {
      p.arabicLevels[levelId].completed = true;
      const next = levelId + 1;
      if ((p.arabicCurrentLevelId || 0) === levelId && next < ARABIC_LEVELS.length) {
        p.arabicCurrentLevelId = next;
      }
    }
  }
  if (p.arabicCurrentLevelId === undefined) p.arabicCurrentLevelId = 0;
  saveProgress(p);
  return p;
}

function saveArabicSheetInProgress(sheet) {
  const p = getProgress();
  if (!p.arabicSheetsInProgress) p.arabicSheetsInProgress = {};
  p.arabicSheetsInProgress[sheet.levelId] = {
    levelId:      sheet.levelId,
    questions:    sheet.questions,
    currentIndex: sheet.currentIndex,
    answers:      sheet.answers
  };
  saveProgress(p);
}

function getArabicSavedSheet(levelId) {
  const p = getProgress();
  if (!p.arabicSheetsInProgress) return null;
  return p.arabicSheetsInProgress[levelId] || null;
}

function clearArabicSavedSheet(levelId) {
  const p = getProgress();
  if (!p.arabicSheetsInProgress) return;
  delete p.arabicSheetsInProgress[levelId];
  saveProgress(p);
}

// ── Typing progress ───────────────────────────────────────────
function recordTypingSheetResult(levelId, accuracy) {
  const p = getProgress();
  if (!p.typingLevels) p.typingLevels = {};
  if (!p.typingLevels[levelId]) p.typingLevels[levelId] = { sheetsCompleted: 0, completed: false };
  if (accuracy >= TYPING_PASS_ACCURACY) {
    p.typingLevels[levelId].sheetsCompleted += 1;
    if (p.typingLevels[levelId].sheetsCompleted >= TYPING_SHEETS_TO_COMPLETE) {
      p.typingLevels[levelId].completed = true;
      const next = levelId + 1;
      if ((p.typingCurrentLevelId || 0) === levelId && next < TYPING_LEVELS.length) {
        p.typingCurrentLevelId = next;
      }
    }
  }
  if (p.typingCurrentLevelId === undefined) p.typingCurrentLevelId = 0;
  saveProgress(p);
  return p;
}
