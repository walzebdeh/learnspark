// ============================================================
// STORAGE — all localStorage read/write
// ============================================================

const STORAGE_KEY = 'mathkids_v1';
const PROFILES_KEY = 'mathkids_profiles_v2'; // v2: stores objects {name,pin,avatar}
const SHEETS_TO_COMPLETE = 100;
const PASS_SCORE = 18; // out of 20 (90%)

// ── Active player ─────────────────────────────────────────────
let _activePlayer = sessionStorage.getItem('activePlayer') || null;

function setActivePlayer(name) {
  // Clear previous player's local cache so cloud is always authoritative on next login
  if (_activePlayer && _activePlayer !== name) {
    localStorage.removeItem(`mathkids_v1_${_activePlayer}`);
  }
  _activePlayer = name;
  if (name) sessionStorage.setItem('activePlayer', name);
  else sessionStorage.removeItem('activePlayer');
}

function _key() {
  return _activePlayer ? `mathkids_v1_${_activePlayer}` : STORAGE_KEY;
}

// ── Profile list ──────────────────────────────────────────────
function getProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function addProfile(name, pin, avatar) {
  const profiles = getProfiles();
  const idx = profiles.findIndex(p => p.name === name);
  const entry = { name, pin, avatar: avatar || '' };
  if (idx >= 0) profiles[idx] = entry;
  else profiles.push(entry);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

function updateProfileField(name, fields) {
  const profiles = getProfiles();
  const idx = profiles.findIndex(p => p.name === name);
  if (idx >= 0) {
    Object.assign(profiles[idx], fields);
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  }
}

function verifyPin(name, pin) {
  const profile = getProfiles().find(p => p.name === name);
  return profile && profile.pin === pin;
}

function deleteProfile(name) {
  const profiles = getProfiles().filter(p => p.name !== name);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  localStorage.removeItem(`mathkids_v1_${name}`);
  if (_activePlayer === name) _activePlayer = null;
}

// Migrate legacy single-profile data (mathkids_v1) to named storage
function migrateIfNeeded() {
  if (getProfiles().length > 0) return; // already set up
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const p = JSON.parse(raw);
    if (p.playerName) {
      localStorage.setItem(`mathkids_v1_${p.playerName}`, raw);
      addProfile(p.playerName);
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch(e) {}
}

// ── Progress ──────────────────────────────────────────────────
function getProgress() {
  try {
    const raw = localStorage.getItem(_key());
    if (!raw) return defaultProgress();
    return JSON.parse(raw);
  } catch (e) {
    return defaultProgress();
  }
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
  localStorage.setItem(_key(), JSON.stringify(p));
  if (typeof syncProgressToCloud === 'function' && _activePlayer) {
    syncProgressToCloud(_activePlayer, p);
  }
}

function setPlayerName(name, pin, avatar) {
  addProfile(name, pin, avatar);
  setActivePlayer(name);
  const p = getProgress();
  p.playerName = name;
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
      // Advance current level pointer if applicable
      if (p.currentLevelId === levelId && levelId < LEVELS.length - 1) {
        p.currentLevelId = levelId + 1;
      }
    }
  }
  saveProgress(p);
  return p;
}

function resetProgress() {
  localStorage.removeItem(_key());
  if (_activePlayer) deleteProfile(_activePlayer);
  _activePlayer = null;
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
