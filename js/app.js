// ============================================================
// APP.JS — state management, routing, and all screen renderers
// ============================================================

const PROBLEMS_PER_SHEET = 20;
const QUESTIONS_PER_CHECKPOINT = 2; // per placement checkpoint

// ── State ────────────────────────────────────────────────────
const AVATARS = ['🦊','🐼','🦁','🐸','🦋','🦄','🐯','🐨','🦉','🐙'];

let state = {
  screen: 'welcome', // welcome | placement | levelMap | sheet | sheetResults
                     // wordLevelMap | wordPlacement | wordSheet | wordSheetResults
  sheet: null,
  placement: null,
  sheetResult: null,
  wordSheet: null,
  wordPlacement: null,
  wordSheetResult: null,
  mathGrade: null,       // 1-4; null = auto-detect from current level
  welcomeMode: null,     // null | 'new' | 'returning'
  allUnlocked: false,    // review mode: bypass level locks
  choiceTopic: null,     // selected topic id in choices map
  choiceSheet: null,
  choiceSheetResult: null,
};

function setState(partial) {
  Object.assign(state, partial);
  render();
}

// ── Root render ──────────────────────────────────────────────
function renderLoading(app) {
  app.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-size:1.5rem;font-weight:800;gap:14px">
    <span style="animation:spin 1s linear infinite;display:inline-block">⭐</span> Loading…
    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
  </div>`;
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  try {
    switch (state.screen) {
      case 'loading':          renderLoading(app);          break;
      case 'welcome':          renderWelcome(app);          break;
      case 'placement':        renderPlacement(app);        break;
      case 'levelMap':         renderLevelMap(app);         break;
      case 'sheet':            renderSheet(app);            break;
      case 'sheetResults':     renderSheetResults(app);     break;
      case 'wordLevelMap':     renderWordLevelMap(app);     break;
      case 'wordPlacement':    renderWordPlacement(app);    break;
      case 'wordSheet':        renderWordSheet(app);        break;
      case 'wordSheetResults':   renderWordSheetResults(app);   break;
      case 'choiceLevelMap':    renderChoiceLevelMap(app);    break;
      case 'choiceSheet':       renderChoiceSheet(app);       break;
      case 'choiceSheetResults':renderChoiceSheetResults(app);break;
    }
  } catch(e) {
    console.error('Render error:', e);
    app.innerHTML = `<div style="padding:40px;text-align:center;color:#fff">
      <h2>Something went wrong 😕</h2>
      <p style="margin:12px 0;opacity:.8">${e.message}</p>
      <button onclick="setState({screen:'welcome'})" style="margin-top:16px;padding:12px 28px;border-radius:12px;border:none;background:#fff;font-weight:700;cursor:pointer">Go Home</button>
    </div>`;
  }
}

// ── PIN entry overlay ─────────────────────────────────────────
function showPinEntry(profileName, profileAvatar, correctPin, onSuccess) {
  const overlay = document.createElement('div');
  overlay.className = 'avatar-picker-overlay';
  overlay.innerHTML = `
    <div class="avatar-picker-modal pin-modal">
      <div style="font-size:3rem;margin-bottom:8px">${profileAvatar}</div>
      <p>Hi <strong>${esc(profileName)}</strong>! Enter your PIN</p>
      <div class="pin-boxes" id="pin-entry-boxes">
        <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
        <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
        <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
        <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
      </div>
      <div class="pin-error" id="pin-error"></div>
      <button class="btn btn-ghost btn-sm" id="pin-cancel">Cancel</button>
    </div>`;
  document.body.appendChild(overlay);

  const boxes = [...overlay.querySelectorAll('.pin-box')];
  boxes.forEach((box, i) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/\D/g, '').slice(0, 1);
      if (box.value && i < 3) boxes[i + 1].focus();
      if (boxes.every(b => b.value)) {
        const pin = boxes.map(b => b.value).join('');
        if (pin === correctPin) {
          overlay.remove();
          onSuccess();
        } else {
          document.getElementById('pin-error').textContent = '❌ Wrong PIN, try again';
          boxes.forEach(b => b.value = '');
          boxes[0].focus();
        }
      }
    });
    box.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !box.value && i > 0) boxes[i - 1].focus();
    });
  });
  boxes[0].focus();
  overlay.querySelector('#pin-cancel').onclick = () => overlay.remove();
}

// ── Avatar picker overlay ─────────────────────────────────────
function showAvatarPicker(currentAvatar) {
  const overlay = document.createElement('div');
  overlay.className = 'avatar-picker-overlay';
  overlay.innerHTML = `
    <div class="avatar-picker-modal">
      <p>Choose your avatar</p>
      <div class="avatar-grid">
        ${AVATARS.map(a => `<button class="avatar-opt ${a === currentAvatar ? 'selected' : ''}" data-avatar="${a}">${a}</button>`).join('')}
      </div>
      <button class="btn btn-ghost btn-sm" id="avatar-cancel">Cancel</button>
    </div>`;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => {
    const btn = e.target.closest('.avatar-opt');
    if (btn) {
      const avatar = btn.dataset.avatar;
      const p = getProgress();
      p.avatar = avatar;
      saveProgress(p);
      overlay.remove();
      render();
      return;
    }
    if (e.target.closest('#avatar-cancel') || e.target === overlay) overlay.remove();
  });
}

// ============================================================
// WELCOME SCREEN
// ============================================================
function wirePinBoxes(containerId) {
  const boxes = [...document.querySelectorAll(`#${containerId} .pin-box`)];
  boxes.forEach((box, i) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/\D/g, '').slice(0, 1);
      if (box.value && i < 3) boxes[i + 1].focus();
    });
    box.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !box.value && i > 0) boxes[i - 1].focus();
    });
  });
  return () => boxes.map(b => b.value).join('');
}

function renderWelcome(app) {
  const mode = state.welcomeMode; // null | 'new' | 'returning'
  const div = el('div', 'screen welcome-screen');

  if (!mode) {
    // ── Landing ──────────────────────────────────────────────
    div.innerHTML = `
      <div class="card welcome-card">
        <div class="big-emoji">🧮</div>
        <h1>LearnSpark ✨</h1>
        <p class="subtitle">Ready to learn? Let's go!</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:8px">
          <button class="btn btn-primary btn-large" id="btn-new-user">🆕 New User</button>
          <button class="btn btn-secondary btn-large" id="btn-returning-user">🔑 I Have an Account</button>
        </div>
      </div>`;
    app.appendChild(div);
    document.getElementById('btn-new-user').onclick      = () => setState({ welcomeMode: 'new' });
    document.getElementById('btn-returning-user').onclick = () => setState({ welcomeMode: 'returning' });

  } else if (mode === 'new') {
    // ── New user form ────────────────────────────────────────
    let selectedAvatar = AVATARS[0];
    const avatarGridHTML = AVATARS.map(a =>
      `<button class="avatar-opt ${a === selectedAvatar ? 'selected' : ''}" data-avatar="${a}">${a}</button>`
    ).join('');

    div.innerHTML = `
      <div class="card welcome-card">
        <div class="big-emoji">🧮</div>
        <h1>LearnSpark ✨</h1>
        <p class="subtitle">Choose your avatar, name, and a 4-digit PIN!</p>
        <div class="avatar-grid" id="avatar-grid">${avatarGridHTML}</div>
        <div class="name-form">
          <label for="name-input">What's your name?</label>
          <input type="text" id="name-input" class="text-input" placeholder="Type your name…"
                 maxlength="20" autocomplete="off" />
        </div>
        <div class="name-form">
          <label>Choose a 4-digit PIN</label>
          <div class="pin-boxes" id="pin-new-boxes">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
          </div>
          <label style="margin-top:10px">Confirm PIN</label>
          <div class="pin-boxes" id="pin-confirm-boxes">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
            <input class="pin-box" type="password" inputmode="numeric" maxlength="1" autocomplete="off">
          </div>
          <div class="pin-error" id="pin-form-error"></div>
        </div>
        <button class="btn btn-primary btn-large" id="btn-start">Let's Go! 🚀</button>
        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>`;
    app.appendChild(div);

    document.getElementById('avatar-grid').addEventListener('click', e => {
      const btn = e.target.closest('.avatar-opt');
      if (!btn) return;
      selectedAvatar = btn.dataset.avatar;
      document.querySelectorAll('#avatar-grid .avatar-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });

    const getPin     = wirePinBoxes('pin-new-boxes');
    const getConfirm = wirePinBoxes('pin-confirm-boxes');
    const nameInput  = document.getElementById('name-input');
    const startBtn   = document.getElementById('btn-start');
    nameInput.focus();

    startBtn.onclick = () => {
      const name  = nameInput.value.trim();
      const pin   = getPin();
      const conf  = getConfirm();
      const errEl = document.getElementById('pin-form-error');
      errEl.textContent = '';

      if (!name) { shake(nameInput); return; }
      if (pin.length < 4) { errEl.textContent = '❌ Enter all 4 PIN digits'; return; }
      if (pin !== conf)   { errEl.textContent = '❌ PINs don\'t match, try again'; return; }

      startBtn.disabled    = true;
      startBtn.textContent = 'Checking…';

      db.collection('progress').doc(name).get().then(doc => {
        if (doc.exists) {
          errEl.textContent    = '❌ That name is already taken — choose another';
          shake(nameInput);
          startBtn.disabled    = false;
          startBtn.textContent = 'Let\'s Go! 🚀';
          return;
        }
        setPlayerName(name, pin, selectedAvatar);
        recordPlayerLogin(name);
        setState({ screen: 'placement', placement: buildPlacement(), welcomeMode: null });
      }).catch(() => {
        // If uniqueness check fails, proceed anyway
        setPlayerName(name, pin, selectedAvatar);
        recordPlayerLogin(name);
        setState({ screen: 'placement', placement: buildPlacement(), welcomeMode: null });
      });
    };

    document.getElementById('btn-back').onclick = () => setState({ welcomeMode: null });

  } else if (mode === 'returning') {
    // ── Returning user ───────────────────────────────────────
    div.innerHTML = `
      <div class="card welcome-card">
        <div class="big-emoji">🔑</div>
        <h1>Welcome Back!</h1>
        <p class="subtitle">Enter your name to sign in</p>
        <div class="name-form">
          <label for="name-input">Your name</label>
          <input type="text" id="name-input" class="text-input" placeholder="Type your name…"
                 maxlength="20" autocomplete="off" />
        </div>
        <div class="pin-error" id="login-error"></div>
        <button class="btn btn-primary btn-large" id="btn-signin">Sign In 🔑</button>
        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>`;
    app.appendChild(div);

    const nameInput = document.getElementById('name-input');
    nameInput.focus();

    const doSignIn = () => {
      const name  = nameInput.value.trim();
      const errEl = document.getElementById('login-error');
      errEl.textContent = '';
      if (!name) { shake(nameInput); return; }

      const signinBtn      = document.getElementById('btn-signin');
      signinBtn.disabled    = true;
      signinBtn.textContent = 'Looking you up…';

      loadProgressFromCloud(name).then(cloudData => {
        if (!cloudData) {
          errEl.textContent    = '❌ Name not found — are you a new user?';
          signinBtn.disabled    = false;
          signinBtn.textContent = 'Sign In 🔑';
          shake(nameInput);
          return;
        }
        const avatar     = cloudData.avatar || '🦊';
        const correctPin = cloudData.pin    || '';
        signinBtn.disabled    = false;
        signinBtn.textContent = 'Sign In 🔑';
        showPinEntry(name, avatar, correctPin, () => {
          setActivePlayer(name);
          saveProgress(cloudData); // load into cache + sync
          recordPlayerLogin(name);
          const p = getProgress();
          if (p.placementDone) {
            setState({ screen: 'levelMap', welcomeMode: null });
          } else {
            setState({ screen: 'placement', placement: buildPlacement(), welcomeMode: null });
          }
        });
      });
    };

    document.getElementById('btn-signin').onclick = doSignIn;
    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSignIn(); });
    document.getElementById('btn-back').onclick = () => setState({ welcomeMode: null });
  }
}

// ============================================================
// PLACEMENT TEST
// ============================================================
function buildPlacement() {
  return {
    cpIndex: 0,                     // which checkpoint we're on
    qIndex:  0,                     // which question within checkpoint
    results: [],                    // { cpIndex, correct }
    problems: sampleLevel(PLACEMENT_CHECKPOINTS[0])
  };
}

function sampleLevel(levelId) {
  return LEVELS[levelId].generate().slice(0, QUESTIONS_PER_CHECKPOINT);
}

function renderPlacement(app) {
  const pt      = state.placement;
  const cpId    = PLACEMENT_CHECKPOINTS[pt.cpIndex];
  const level   = LEVELS[cpId];
  const problem = pt.problems[pt.qIndex];

  const div = el('div', 'screen placement-screen');
  div.innerHTML = `
    <div class="card placement-card">
      <div class="placement-badge">📋 Placement Test</div>
      <div class="placement-subtitle">
        Check ${pt.cpIndex + 1} of ${PLACEMENT_CHECKPOINTS.length} — <em>${esc(level.name)}</em>
      </div>
      <div class="problem-display">
        ${problemHTML(problem)}
        ${isStacked(problem) || problem.type === 'equation' ? '' : '<div class="equals-row">= ?</div>'}
      </div>
      <div class="answer-row">
        <input type="number" id="answer-input" class="answer-input"
               placeholder="?" autocomplete="off" inputmode="numeric" />
        <button class="btn btn-primary" id="btn-check">Check ✓</button>
      </div>
    </div>`;
  app.appendChild(div);
  wireAnswerInput(() => submitPlacement());
}

function submitPlacement() {
  const input = document.getElementById('answer-input');
  const val   = parseInt(input.value, 10);
  if (isNaN(val)) { shake(input); return; }

  const pt      = state.placement;
  const problem = pt.problems[pt.qIndex];
  pt.results.push({ cpIndex: pt.cpIndex, correct: val === problem.answer });
  pt.qIndex++;

  if (pt.qIndex >= QUESTIONS_PER_CHECKPOINT) {
    // Evaluate this checkpoint: pass if at least 1/2 correct
    const thisCP  = pt.results.filter(r => r.cpIndex === pt.cpIndex);
    const passed  = thisCP.filter(r => r.correct).length >= 1;
    const isLast  = pt.cpIndex >= PLACEMENT_CHECKPOINTS.length - 1;

    if (!passed || isLast) {
      const placedLevel = PLACEMENT_CHECKPOINTS[passed ? pt.cpIndex : Math.max(0, pt.cpIndex - 1)];
      try { setPlacementLevel(placedLevel); } catch(e) { console.warn('setPlacementLevel error:', e); }
      setState({ screen: 'levelMap', placement: null });
    } else {
      pt.cpIndex++;
      pt.qIndex   = 0;
      pt.problems = sampleLevel(PLACEMENT_CHECKPOINTS[pt.cpIndex]);
      render();
    }
  } else {
    render();
  }
}

// ============================================================
// LEVEL MAP
// ============================================================

function gradeOfLevel(id) {
  const grades = [1, 2, 3, 4];
  for (let i = grades.length - 1; i >= 0; i--) {
    if (id >= GRADE_STARTS[grades[i]]) return grades[i];
  }
  return 1;
}

// ── Scoring ──────────────────────────────────────────────────
const MATH_PTS_PER_SHEET   = 10;
const WORDS_PTS_PER_SHEET  = 10;
const CHOICE_PTS_PER_SHEET = 5;

function getMathPoints(p) {
  return Object.values(p.levels || {}).reduce((s, v) => s + v.sheetsCompleted * MATH_PTS_PER_SHEET, 0);
}
function getWordPoints(p) {
  return Object.values(p.wordLevels || {}).reduce((s, v) => s + v.sheetsCompleted * WORDS_PTS_PER_SHEET, 0);
}
function getChoicePoints(p) {
  return Object.values(p.choiceLevels || {}).reduce((s, v) => s + v.sheetsCompleted * CHOICE_PTS_PER_SHEET, 0);
}
function totalScoreBadge(p) {
  const math   = getMathPoints(p);
  const words  = getWordPoints(p);
  const choices = getChoicePoints(p);
  const total  = math + words + choices;
  return `
    <div class="total-score-badge">
      <div class="tsb-total">⭐ ${total.toLocaleString()} pts</div>
      <div class="tsb-breakdown">
        <span>🔢 ${math}</span>
        <span>📝 ${words}</span>
        <span>💡 ${choices}</span>
      </div>
    </div>`;
}

function renderLevelMap(app) {
  const progress    = getProgress();
  const savedSheets = getAllSavedSheets();

  // Determine which grade tab to show
  const autoGrade  = gradeOfLevel(progress.currentLevelId || 0);
  const activeGrade = state.mathGrade || autoGrade;

  // A grade is accessible if currentLevelId has reached its start
  function gradeUnlocked(g) {
    return state.allUnlocked || (progress.currentLevelId || 0) >= GRADE_STARTS[g];
  }

  const div = el('div', 'screen levelmap-screen');

  // Grade tabs HTML
  const gradeTabsHTML = [1, 2, 3, 4].map(g => {
    const locked  = !gradeUnlocked(g);
    const active  = g === activeGrade;
    let cls = 'grade-tab';
    if (active)  cls += ' active';
    if (locked)  cls += ' locked-tab';
    const label = GRADE_NAMES[g] + ' Grade';
    return `<button class="${cls}" data-grade="${g}" ${locked ? 'disabled' : ''}>${locked ? '🔒 ' : ''}${esc(label)}</button>`;
  }).join('');

  // Level cards for the active grade
  const gradeStart = GRADE_STARTS[activeGrade];
  const nextGrade  = activeGrade < 4 ? GRADE_STARTS[activeGrade + 1] : LEVELS.length;
  let cardsHTML = '';
  for (let idx = gradeStart; idx < nextGrade && idx < LEVELS.length; idx++) {
    const level       = LEVELS[idx];
    const lp          = progress.levels[idx] || { sheetsCompleted: 0, completed: false };
    const isCompleted = lp.completed;
    const isCurrent   = idx === progress.currentLevelId;
    const isUnlocked  = state.allUnlocked || idx <= progress.currentLevelId;
    const sheets      = lp.sheetsCompleted || 0;
    const pct         = Math.min(100, Math.round((sheets / SHEETS_TO_COMPLETE) * 100));
    const savedHere   = savedSheets[idx];

    let cls = 'level-card';
    if (isCompleted)      cls += ' completed';
    else if (isCurrent)   cls += ' current';
    else if (!isUnlocked) cls += ' locked';

    cardsHTML += `
      <div class="${cls}" data-level="${idx}" style="--lvl-color:${level.color}">
        <div class="lc-emoji">${isCompleted ? '✅' : isUnlocked ? level.emoji : '🔒'}</div>
        <div class="lc-name">${esc(level.name)}</div>
        ${isUnlocked && !isCompleted ? `
          <div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%"></div></div>
          <div class="lc-count">${sheets} / ${SHEETS_TO_COMPLETE} sheets</div>
        ` : ''}
        ${savedHere ? `<div class="lc-resume">▶ Q${savedHere.currentIndex + 1} / ${savedHere.problems.length}</div>` : ''}
        ${isCompleted ? '<div class="lc-done">Mastered! 🌟</div>' : ''}
        ${!isUnlocked ? '<div class="lc-locked">Locked 🔒</div>' : ''}
        ${isCurrent && !isCompleted ? '<div class="lc-current-badge">Current</div>' : ''}
      </div>`;
  }

  div.innerHTML = `
    <div class="mode-tabs-wrap">
      <div class="mode-tabs">
        <button class="mode-tab active" id="tab-math">🔢 Math</button>
        <button class="mode-tab" id="tab-words">📝 Words</button>
        <button class="mode-tab" id="tab-choices">💡 Choices</button>
      </div>
    </div>
    <div class="levelmap-header">
      <h2>Hi, ${esc(progress.playerName)}! 👋</h2>
      <p>Choose a level to practice</p>
      ${totalScoreBadge(progress)}
      <button class="btn btn-ghost btn-sm" id="btn-switch-player">Sign Out</button>
      <button class="btn btn-ghost btn-sm" id="btn-redo-placement">↺ Redo Placement</button>
      <button class="btn btn-sm ${state.allUnlocked ? 'btn-warn' : 'btn-ghost'}" id="btn-unlock-all">
        ${state.allUnlocked ? '🔓 Locks Off' : '🔒 Unlock All'}
      </button>
    </div>
    <div class="grade-tabs-wrap">
      <div class="grade-tabs">${gradeTabsHTML}</div>
    </div>
    <div class="levels-grid">${cardsHTML}</div>`;

  app.appendChild(div);

  document.getElementById('btn-switch-player').onclick = () =>
    { setActivePlayer(null); setState({ screen: 'welcome', welcomeMode: null }); }

  document.getElementById('btn-redo-placement').onclick = () => {
    if (confirm('Redo the placement test? Your progress stays, but your starting level will be updated.')) {
      const p = getProgress();
      p.placementDone = false;
      saveProgress(p);
      setState({ screen: 'placement', placement: buildPlacement() });
    }
  };

  document.getElementById('btn-unlock-all').onclick = () =>
    setState({ allUnlocked: !state.allUnlocked });

  document.getElementById('tab-words').onclick = () =>
    setState({ screen: 'wordLevelMap' });

  document.getElementById('tab-choices').onclick = () =>
    setState({ screen: 'choiceLevelMap', choiceTopic: null });

  div.querySelectorAll('.grade-tab:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = parseInt(btn.dataset.grade, 10);
      setState({ mathGrade: g });
    });
  });

  div.querySelectorAll('.level-card:not(.locked)').forEach(card => {
    card.addEventListener('click', () => {
      const levelId = parseInt(card.dataset.level, 10);
      const saved   = getSavedSheet(levelId);
      // discard any stale save where all problems were already answered
      if (saved && saved.answers.length < saved.problems.length) {
        setState({
          screen: 'sheet',
          sheet: {
            levelId:      saved.levelId,
            problems:     saved.problems,
            currentIndex: saved.currentIndex,
            answers:      saved.answers,
            feedback:     null
          }
        });
      } else {
        if (saved) clearSavedSheet(levelId); // discard stale completed save
        startSheet(levelId);
      }
    });
  });
}

// ============================================================
// PRACTICE SHEET
// ============================================================
function startSheet(levelId) {
  const p    = getProgress();
  const done = (p.levels[levelId] || {}).sheetsCompleted || 0;
  const tier = Math.floor(done / 5); // difficulty increases every 5 sheets
  clearSavedSheet(levelId);
  setState({
    screen: 'sheet',
    sheet: {
      levelId,
      problems:     LEVELS[levelId].generate(tier),
      currentIndex: 0,
      answers:      [],
      feedback:     null  // null | 'correct' | 'wrong'
    }
  });
}

function renderSheet(app) {
  const s       = state.sheet;
  const level   = LEVELS[s.levelId];
  const problem = s.problems[s.currentIndex];
  const correct = s.answers.filter(a => a.correct).length;
  const total   = s.problems.length;
  const pct     = Math.round((s.currentIndex / total) * 100);

  const div = el('div', 'screen sheet-screen');

  let feedbackHTML = '';
  if (s.feedback === 'correct') {
    feedbackHTML = `<div class="feedback correct animate-pop">✓ Correct! 🎉</div>`;
  } else if (s.feedback === 'wrong') {
    const last = s.answers[s.answers.length - 1];
    feedbackHTML = `<div class="feedback wrong animate-pop">The answer is <strong>${last.expected}</strong></div>`;
  }

  div.innerHTML = `
    <div class="sheet-header">
      <div class="sheet-header-left">
        <button class="btn btn-ghost btn-sm" id="btn-save-exit">💾 Save &amp; Exit</button>
        <button class="btn btn-ghost btn-sm btn-exit-nosave" id="btn-exit-nosave">✕ Exit</button>
      </div>
      <div class="sheet-title" style="color:${level.color}">${level.emoji} ${esc(level.name)}</div>
      <div class="sheet-correct">✓ ${correct}</div>
    </div>
    <div class="sheet-progress-bar">
      <div class="sheet-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="sheet-counter">${s.currentIndex + 1} / ${total}</div>

    <div class="card problem-card">
      <div class="problem-display">
        ${problemHTML(problem)}
        ${isStacked(problem) || problem.type === 'equation' ? '' : '<div class="equals-row">= ?</div>'}
      </div>
      ${feedbackHTML}
      <div class="answer-row" id="answer-row">
        <input type="number" id="answer-input" class="answer-input"
               placeholder="?" autocomplete="off" inputmode="numeric" />
        <button class="btn btn-primary" id="btn-check">Check ✓</button>
      </div>
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-save-exit').onclick = () => {
    saveSheetInProgress(state.sheet);
    setState({ screen: 'levelMap', sheet: null });
  };

  document.getElementById('btn-exit-nosave').onclick = () => {
    clearSavedSheet(state.sheet.levelId);
    setState({ screen: 'levelMap', sheet: null });
  };

  if (!s.feedback) {
    wireAnswerInput(() => submitSheet());
  }
}

function submitSheet() {
  const input = document.getElementById('answer-input');
  const val   = parseInt(input.value, 10);
  if (isNaN(val)) { shake(input); return; }

  const s       = state.sheet;
  const problem = s.problems[s.currentIndex];
  const correct = val === problem.answer;

  s.answers.push({ given: val, correct, expected: problem.answer });
  s.feedback = correct ? 'correct' : 'wrong';
  const isLastProblem = s.currentIndex === s.problems.length - 1;
  if (!isLastProblem) saveSheetInProgress(s); // don't save on the last answer — finishSheet will clear it
  render();

  // Auto-advance after feedback pause
  setTimeout(() => {
    s.feedback = null;
    s.currentIndex++;

    if (s.currentIndex >= s.problems.length) {
      finishSheet();
    } else {
      render();
    }
  }, correct ? 700 : 1400);
}

function finishSheet() {
  const s          = state.sheet;
  clearSavedSheet(s.levelId); // sheet is done — remove the in-progress save for this level
  const numCorrect = s.answers.filter(a => a.correct).length;
  const passed     = numCorrect >= PASS_SCORE;
  const updated    = recordSheetResult(s.levelId, passed);

  setState({
    screen: 'sheetResults',
    sheet:  null,
    sheetResult: {
      levelId: s.levelId,
      answers: s.answers,
      numCorrect,
      total:   s.problems.length,
      passed,
      progress: updated
    }
  });
}

// ============================================================
// SHEET RESULTS
// ============================================================
function renderSheetResults(app) {
  const r      = state.sheetResult;
  const level  = LEVELS[r.levelId];
  const pct    = Math.round((r.numCorrect / r.total) * 100);
  const lp     = r.progress.levels[r.levelId] || { sheetsCompleted: 0, completed: false };

  let stars    = pct === 100 ? '⭐⭐⭐' : pct >= 90 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';
  let message  = pct === 100 ? 'Perfect score! Amazing! 🎊'
               : pct >= 90  ? 'Great job! Keep it up! 🎉'
               : pct >= 70  ? 'Good try! Practice makes perfect!'
               :               'Keep going — you can do it! 💪';

  const div = el('div', 'screen results-screen');
  div.innerHTML = `
    <div class="card results-card">
      <div class="results-stars animate-pop">${stars}</div>
      <h2 class="results-message">${message}</h2>

      <div class="results-score-box">
        <div class="score-big">${r.numCorrect} / ${r.total}</div>
        <div class="score-pct">${pct}%</div>
      </div>

      ${r.passed ? `
        <div class="results-counted">
          ✅ Sheet counted!
          <strong>${lp.sheetsCompleted} / ${SHEETS_TO_COMPLETE}</strong> sheets completed
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${Math.round((lp.sheetsCompleted / SHEETS_TO_COMPLETE) * 100)}%"></div></div>
        </div>
      ` : `
        <div class="results-not-counted">
          ⚠️ Score below 90% — this sheet doesn't count. Try again!
        </div>
      `}

      ${lp.completed ? `
        <div class="level-complete-banner animate-pop">
          🏆 Level Complete! You've mastered <em>${esc(level.name)}</em>! 🏆
        </div>
      ` : ''}

      <div class="results-actions">
        <button class="btn btn-primary btn-large" id="btn-again">Practice Again 🔄</button>
        <button class="btn btn-secondary" id="btn-map">Level Map 🗺️</button>
      </div>
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-again').onclick = () => startSheet(r.levelId);
  document.getElementById('btn-map').onclick   = () => setState({ screen: 'levelMap', mathGrade: null });
}

// ============================================================
// WORD LEVEL MAP
// ============================================================
function renderWordLevelMap(app) {
  const progress    = getProgress();
  const savedSheets = getAllWordSavedSheets();
  const curLvl      = progress.wordCurrentLevelId || 0;
  const wordLevels  = progress.wordLevels || {};
  const div = el('div', 'screen levelmap-screen');

  let html = `
    <div class="mode-tabs-wrap">
      <div class="mode-tabs">
        <button class="mode-tab" id="tab-math">🔢 Math</button>
        <button class="mode-tab active" id="tab-words">📝 Words</button>
        <button class="mode-tab" id="tab-choices">💡 Choices</button>
      </div>
    </div>
    <div class="levelmap-header">
      <h2>Hi, ${esc(progress.playerName)}! 👋</h2>
      <p>Choose a word level to practice</p>
      ${totalScoreBadge(progress)}
      <button class="btn btn-ghost btn-sm" id="btn-switch-player">Sign Out</button>
      <button class="btn btn-ghost btn-sm" id="btn-redo-word-placement">↺ Redo Placement</button>
      <button class="btn btn-sm ${state.allUnlocked ? 'btn-warn' : 'btn-ghost'}" id="btn-unlock-all">
        ${state.allUnlocked ? '🔓 Locks Off' : '🔒 Unlock All'}
      </button>
    </div>
    <div class="levels-grid">`;

  WORD_LEVELS.forEach((level, idx) => {
    const lp          = wordLevels[idx] || { sheetsCompleted: 0, completed: false };
    const isCompleted = lp.completed;
    const isCurrent   = idx === curLvl;
    const isUnlocked  = state.allUnlocked || idx <= curLvl;
    const sheets      = lp.sheetsCompleted || 0;
    const pct         = Math.min(100, Math.round((sheets / WORD_SHEETS_TO_COMPLETE) * 100));
    const savedHere   = savedSheets[idx];

    let cls = 'level-card';
    if (isCompleted)      cls += ' completed';
    else if (isCurrent)   cls += ' current';
    else if (!isUnlocked) cls += ' locked';

    html += `
      <div class="${cls}" data-level="${idx}" style="--lvl-color:${level.color}">
        <div class="lc-emoji">${isCompleted ? '✅' : isUnlocked ? level.emoji : '🔒'}</div>
        <div class="lc-name">${esc(level.name)}</div>
        ${isUnlocked && !isCompleted ? `
          <div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%"></div></div>
          <div class="lc-count">${sheets} / ${WORD_SHEETS_TO_COMPLETE} sheets</div>
        ` : ''}
        ${savedHere ? `<div class="lc-resume">▶ Word ${savedHere.currentIndex + 1} / ${savedHere.words.length}</div>` : ''}
        ${isCompleted ? '<div class="lc-done">Mastered! 🌟</div>' : ''}
        ${!isUnlocked ? '<div class="lc-locked">Locked 🔒</div>' : ''}
        ${isCurrent && !isCompleted ? '<div class="lc-current-badge">Current</div>' : ''}
      </div>`;
  });

  html += '</div>';
  div.innerHTML = html;
  app.appendChild(div);

  document.getElementById('btn-switch-player').onclick = () =>
    { setActivePlayer(null); setState({ screen: 'welcome', welcomeMode: null }); }
  document.getElementById('btn-redo-word-placement').onclick = () => {
    if (confirm('Redo the word placement test? Your progress stays, but your starting level will be updated.')) {
      const p = getProgress();
      p.wordPlacementDone = false;
      saveProgress(p);
      setState({ screen: 'wordPlacement', wordPlacement: buildWordPlacement() });
    }
  };
  document.getElementById('btn-unlock-all').onclick = () =>
    setState({ allUnlocked: !state.allUnlocked });
  document.getElementById('tab-math').onclick    = () => setState({ screen: 'levelMap' });
  document.getElementById('tab-choices').onclick = () => setState({ screen: 'choiceLevelMap', choiceTopic: null });

  div.querySelectorAll('.level-card:not(.locked)').forEach(card => {
    card.addEventListener('click', () => {
      const levelId = parseInt(card.dataset.level, 10);
      const saved   = getWordSavedSheet(levelId);
      if (saved) {
        setState({
          screen: 'wordSheet',
          wordSheet: {
            levelId:         saved.levelId,
            words:           saved.words,
            currentIndex:    saved.currentIndex,
            answers:         saved.answers,
            currentAttempts: saved.currentAttempts || 0,
            hintVisible:     saved.hintVisible     || false,
            feedback:        null
          }
        });
      } else {
        startWordSheet(levelId);
      }
    });
  });
}

// ============================================================
// WORD PLACEMENT TEST
// ============================================================
function buildWordPlacement() {
  return {
    cpIndex:      0,
    qIndex:       0,
    results:      [],
    currentWords: pickWords(WORD_LEVELS[WORD_PLACEMENT_CHECKPOINTS[0]].words, QUESTIONS_PER_CHECKPOINT)
  };
}

function renderWordPlacement(app) {
  const pt    = state.wordPlacement;
  const cpId  = WORD_PLACEMENT_CHECKPOINTS[pt.cpIndex];
  const level = WORD_LEVELS[cpId];
  const word  = pt.currentWords[pt.qIndex];

  const div = el('div', 'screen placement-screen');
  div.innerHTML = `
    <div class="card placement-card">
      <div class="placement-badge">📋 Word Placement Test</div>
      <div class="placement-subtitle">
        Check ${pt.cpIndex + 1} of ${WORD_PLACEMENT_CHECKPOINTS.length} — <em>${esc(level.name)}</em>
      </div>
      <div class="problem-display">
        <div class="letter-tiles">
          ${[...word.scrambled.toUpperCase()].map(l => `<span class="letter-tile">${esc(l)}</span>`).join('')}
        </div>
        <div class="equals-row" style="font-size:1rem;opacity:.7">Unscramble the letters ↑</div>
      </div>
      <div class="answer-row">
        <input type="text" id="word-input" class="word-input"
               placeholder="Type the word…" autocomplete="off" spellcheck="false" autocorrect="off" />
        <button class="btn btn-primary" id="btn-check">Check ✓</button>
      </div>
    </div>`;
  app.appendChild(div);

  const input = document.getElementById('word-input');
  input.focus();
  document.getElementById('btn-check').onclick = submitWordPlacement;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submitWordPlacement(); });
}

function submitWordPlacement() {
  const input = document.getElementById('word-input');
  const val   = (input.value || '').trim().toLowerCase();
  if (!val) { shake(input); return; }

  const pt   = state.wordPlacement;
  const word = pt.currentWords[pt.qIndex];
  pt.results.push({ cpIndex: pt.cpIndex, correct: isAnagram(val, word.word) });
  pt.qIndex++;

  if (pt.qIndex >= QUESTIONS_PER_CHECKPOINT) {
    const thisCP = pt.results.filter(r => r.cpIndex === pt.cpIndex);
    const passed = thisCP.filter(r => r.correct).length >= 1;
    const isLast = pt.cpIndex >= WORD_PLACEMENT_CHECKPOINTS.length - 1;

    if (!passed || isLast) {
      setWordPlacementLevel(WORD_PLACEMENT_CHECKPOINTS[pt.cpIndex]);
      setState({ screen: 'wordLevelMap', wordPlacement: null });
    } else {
      pt.cpIndex++;
      pt.qIndex       = 0;
      pt.currentWords = pickWords(WORD_LEVELS[WORD_PLACEMENT_CHECKPOINTS[pt.cpIndex]].words, QUESTIONS_PER_CHECKPOINT);
      render();
    }
  } else {
    render();
  }
}

// ============================================================
// WORD PRACTICE SHEET
// ============================================================
function startWordSheet(levelId) {
  clearWordSavedSheet(levelId);
  setState({
    screen: 'wordSheet',
    wordSheet: {
      levelId,
      words:           WORD_LEVELS[levelId].generate(),
      currentIndex:    0,
      answers:         [],
      currentAttempts: 0,
      hintVisible:     false,
      feedback:        null
    }
  });
}

function renderWordSheet(app) {
  const s     = state.wordSheet;
  const level = WORD_LEVELS[s.levelId];
  const curr  = s.words[s.currentIndex];
  const total = s.words.length;
  const pct   = Math.round((s.currentIndex / total) * 100);
  const noHintSoFar = s.answers.filter(a => !a.usedHint).length;

  const tilesHTML = [...curr.scrambled.toUpperCase()]
    .map(l => `<span class="letter-tile">${esc(l)}</span>`).join('');

  let bodyHTML = '';
  if (s.feedback === 'correct') {
    bodyHTML = `<div class="feedback correct animate-pop">✓ Correct! 🎉</div>`;
  } else {
    bodyHTML = `
      <div class="answer-row" id="answer-row">
        <input type="text" id="word-input" class="word-input"
               placeholder="Type the word…" autocomplete="off" spellcheck="false" autocorrect="off" />
        <button class="btn btn-primary" id="btn-check">Check ✓</button>
      </div>
      ${s.currentAttempts >= WORD_HINT_AFTER && !s.hintVisible
        ? `<button class="hint-btn" id="btn-hint">💡 Do you need a hint?</button>`
        : ''}
      ${s.hintVisible
        ? `<div class="hint-text">💡 ${esc(level.hint(curr.word))}</div>`
        : ''}`;
  }

  const div = el('div', 'screen sheet-screen');
  div.innerHTML = `
    <div class="sheet-header">
      <div class="sheet-header-left">
        <button class="btn btn-ghost btn-sm" id="btn-save-exit">💾 Save &amp; Exit</button>
        <button class="btn btn-ghost btn-sm btn-exit-nosave" id="btn-exit-nosave">✕ Exit</button>
      </div>
      <div class="sheet-title" style="color:${level.color}">${level.emoji} ${esc(level.name)}</div>
      <div class="sheet-correct">✓ ${noHintSoFar}</div>
    </div>
    <div class="sheet-progress-bar">
      <div class="sheet-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="sheet-counter">${s.currentIndex + 1} / ${total}</div>
    <div class="card problem-card">
      <div class="letter-tiles">${tilesHTML}</div>
      ${bodyHTML}
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-save-exit').onclick = () => {
    saveWordSheetInProgress(state.wordSheet);
    setState({ screen: 'wordLevelMap', wordSheet: null });
  };

  document.getElementById('btn-exit-nosave').onclick = () => {
    clearWordSavedSheet(state.wordSheet.levelId);
    setState({ screen: 'wordLevelMap', wordSheet: null });
  };

  if (!s.feedback) {
    const input  = document.getElementById('word-input');
    const hintBtn = document.getElementById('btn-hint');
    input.focus();
    document.getElementById('btn-check').onclick = submitWordAnswer;
    input.addEventListener('keydown', e => { if (e.key === 'Enter') submitWordAnswer(); });
    if (hintBtn) hintBtn.onclick = () => { state.wordSheet.hintVisible = true; render(); };
  }
}

function submitWordAnswer() {
  const input = document.getElementById('word-input');
  const val   = (input.value || '').trim().toLowerCase();
  if (!val) { shake(input); return; }

  const s    = state.wordSheet;
  const curr = s.words[s.currentIndex];

  if (isAnagram(val, curr.word)) {
    s.answers.push({ word: curr.word, attemptsBeforeCorrect: s.currentAttempts + 1, usedHint: s.hintVisible });
    s.feedback        = 'correct';
    s.currentAttempts = 0;
    s.hintVisible     = false;
    saveWordSheetInProgress(s);
    render();

    setTimeout(() => {
      s.feedback = null;
      s.currentIndex++;
      if (s.currentIndex >= s.words.length) {
        finishWordSheet();
      } else {
        render();
      }
    }, 700);
  } else {
    // No wrong feedback — just clear and let them try again
    s.currentAttempts++;
    input.value = '';
    shake(input);
    if (s.currentAttempts === WORD_HINT_AFTER) {
      render(); // re-render only to show hint button
    }
  }
}

function finishWordSheet() {
  const s           = state.wordSheet;
  const noHintCount = s.answers.filter(a => !a.usedHint).length;
  clearWordSavedSheet(s.levelId);
  const updated = recordWordSheetResult(s.levelId);

  setState({
    screen: 'wordSheetResults',
    wordSheet: null,
    wordSheetResult: {
      levelId:      s.levelId,
      answers:      s.answers,
      noHintCount,
      total:        s.words.length,
      progress:     updated
    }
  });
}

// ============================================================
// WORD SHEET RESULTS
// ============================================================
function renderWordSheetResults(app) {
  const r     = state.wordSheetResult;
  const level = WORD_LEVELS[r.levelId];
  const pct   = Math.round((r.noHintCount / r.total) * 100);
  const lp    = (r.progress.wordLevels || {})[r.levelId] || { sheetsCompleted: 0, completed: false };

  const stars   = pct === 100 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';
  const message = pct === 100 ? 'Perfect! No hints needed! 🎊'
                : pct >= 70  ? 'Great job! Barely any hints! 🎉'
                : pct >= 40  ? 'Good try! Keep practicing! 💪'
                :               'Keep going — you\'ll get there! 🌟';

  const div = el('div', 'screen results-screen');
  div.innerHTML = `
    <div class="card results-card">
      <div class="results-stars animate-pop">${stars}</div>
      <h2 class="results-message">${message}</h2>

      <div class="results-score-box">
        <div class="score-big">${r.noHintCount} / ${r.total}</div>
        <div class="score-pct">without hints</div>
      </div>

      <div class="results-counted">
        ✅ Sheet counted!
        <strong>${lp.sheetsCompleted} / ${WORD_SHEETS_TO_COMPLETE}</strong> sheets completed
        <div class="mini-bar">
          <div class="mini-bar-fill" style="width:${Math.min(100, Math.round((lp.sheetsCompleted / WORD_SHEETS_TO_COMPLETE) * 100))}%"></div>
        </div>
      </div>

      ${lp.completed ? `
        <div class="level-complete-banner animate-pop">
          🏆 Level Complete! You've mastered <em>${esc(level.name)}</em>! 🏆
        </div>
      ` : ''}

      <div class="results-actions">
        <button class="btn btn-primary btn-large" id="btn-again">Practice Again 🔄</button>
        <button class="btn btn-secondary" id="btn-map">Level Map 🗺️</button>
      </div>
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-again').onclick = () => startWordSheet(r.levelId);
  document.getElementById('btn-map').onclick   = () => setState({ screen: 'wordLevelMap' });
}

// ============================================================
// CHOICES LEVEL MAP
// ============================================================
function renderChoiceLevelMap(app) {
  const progress = getProgress();
  const choiceLevels = progress.choiceLevels || {};
  const curLevels    = progress.choiceCurrentLevel || {};
  const div = el('div', 'screen levelmap-screen');

  // If a topic is selected, show its levels; otherwise show topic grid
  if (state.choiceTopic !== null) {
    const topic = CHOICE_TOPICS[state.choiceTopic];
    const savedSheets = getAllChoiceSavedSheets();
    let cardsHTML = topic.levels.map((level, idx) => {
      const key         = `${topic.id}_${idx}`;
      const lp          = choiceLevels[key] || { sheetsCompleted: 0, completed: false };
      const curLevel    = curLevels[topic.id] || 0;
      const isCompleted = lp.completed;
      const isCurrent   = idx === curLevel;
      const isUnlocked  = state.allUnlocked || idx <= curLevel;
      const sheets      = lp.sheetsCompleted || 0;
      const pct         = Math.min(100, Math.round((sheets / CHOICE_SHEETS_TO_COMPLETE) * 100));
      const savedHere   = savedSheets[key];

      let cls = 'level-card';
      if (isCompleted)      cls += ' completed';
      else if (isCurrent)   cls += ' current';
      else if (!isUnlocked) cls += ' locked';

      return `
        <div class="${cls}" data-level="${idx}" style="--lvl-color:${topic.color}">
          <div class="lc-emoji">${isCompleted ? '✅' : isUnlocked ? topic.emoji : '🔒'}</div>
          <div class="lc-name">${esc(level.name)}</div>
          ${isUnlocked && !isCompleted ? `
            <div class="lc-bar"><div class="lc-bar-fill" style="width:${pct}%"></div></div>
            <div class="lc-count">${sheets} / ${CHOICE_SHEETS_TO_COMPLETE} sheets</div>
          ` : ''}
          ${savedHere ? `<div class="lc-resume">▶ Q${savedHere.currentIndex + 1} / ${savedHere.questions.length}</div>` : ''}
          ${isCompleted ? '<div class="lc-done">Mastered! 🌟</div>' : ''}
          ${!isUnlocked ? '<div class="lc-locked">Locked 🔒</div>' : ''}
          ${isCurrent && !isCompleted ? '<div class="lc-current-badge">Current</div>' : ''}
        </div>`;
    }).join('');

    div.innerHTML = `
      <div class="mode-tabs-wrap">
        <div class="mode-tabs">
          <button class="mode-tab" id="tab-math">🔢 Math</button>
          <button class="mode-tab" id="tab-words">📝 Words</button>
          <button class="mode-tab active" id="tab-choices">💡 Choices</button>
        </div>
      </div>
      <div class="levelmap-header">
        <h2>${topic.emoji} ${esc(topic.name)}</h2>
        <p>Choose a level to practice</p>
        ${totalScoreBadge(progress)}
        <button class="btn btn-ghost btn-sm" id="btn-back-topics">← All Topics</button>
        <button class="btn btn-sm ${state.allUnlocked ? 'btn-warn' : 'btn-ghost'}" id="btn-unlock-all">
          ${state.allUnlocked ? '🔓 Locks Off' : '🔒 Unlock All'}
        </button>
      </div>
      <div class="levels-grid">${cardsHTML}</div>`;
    app.appendChild(div);

    document.getElementById('tab-math').onclick   = () => setState({ screen: 'levelMap' });
    document.getElementById('tab-words').onclick  = () => setState({ screen: 'wordLevelMap' });
    document.getElementById('btn-back-topics').onclick = () => setState({ choiceTopic: null });
    document.getElementById('btn-unlock-all').onclick  = () => setState({ allUnlocked: !state.allUnlocked });

    div.querySelectorAll('.level-card:not(.locked)').forEach(card => {
      card.addEventListener('click', () => {
        const levelId = parseInt(card.dataset.level, 10);
        startChoiceSheet(state.choiceTopic, levelId);
      });
    });

  } else {
    // Topic grid
    const topicCardsHTML = CHOICE_TOPICS.map(topic => {
      const totalLevels = topic.levels.length;
      const done = topic.levels.filter((_, idx) => {
        const key = `${topic.id}_${idx}`;
        return (choiceLevels[key] || {}).completed;
      }).length;
      return `
        <div class="topic-card" data-topic="${topic.id}" style="--lvl-color:${topic.color}">
          <div class="tc-emoji">${topic.emoji}</div>
          <div class="tc-name">${esc(topic.name)}</div>
          <div class="tc-progress">${done} / ${totalLevels} levels</div>
        </div>`;
    }).join('');

    div.innerHTML = `
      <div class="mode-tabs-wrap">
        <div class="mode-tabs">
          <button class="mode-tab" id="tab-math">🔢 Math</button>
          <button class="mode-tab" id="tab-words">📝 Words</button>
          <button class="mode-tab active" id="tab-choices">💡 Choices</button>
        </div>
      </div>
      <div class="levelmap-header">
        <h2>Hi, ${esc(progress.playerName)}! 👋</h2>
        <p>Choose a topic to practice</p>
        ${totalScoreBadge(progress)}
        <button class="btn btn-ghost btn-sm" id="btn-switch-player">Sign Out</button>
        <button class="btn btn-sm ${state.allUnlocked ? 'btn-warn' : 'btn-ghost'}" id="btn-unlock-all">
          ${state.allUnlocked ? '🔓 Locks Off' : '🔒 Unlock All'}
        </button>
      </div>
      <div class="topics-grid">${topicCardsHTML}</div>`;
    app.appendChild(div);

    document.getElementById('tab-math').onclick   = () => setState({ screen: 'levelMap' });
    document.getElementById('tab-words').onclick  = () => setState({ screen: 'wordLevelMap' });
    document.getElementById('btn-switch-player').onclick = () => { setActivePlayer(null); setState({ screen: 'welcome', welcomeMode: null }); }
    document.getElementById('btn-unlock-all').onclick    = () => setState({ allUnlocked: !state.allUnlocked });

    div.querySelectorAll('.topic-card').forEach(card => {
      card.addEventListener('click', () => {
        setState({ choiceTopic: parseInt(card.dataset.topic, 10) });
      });
    });
  }
}

// ============================================================
// CHOICES SHEET
// ============================================================
// Shuffle a question's options so the correct answer isn't always in the same position
function shuffleQuestionOptions(q) {
  const indices    = shuffleArr([0, 1, 2, 3]);
  return {
    ...q,
    options:   indices.map(i => q.options[i]),
    feedbacks: indices.map(i => q.feedbacks[i]),
    best:      indices.indexOf(q.best)
  };
}

function startChoiceSheet(topicId, levelId) {
  const saved = getChoiceSavedSheet(topicId, levelId);
  if (saved && saved.currentIndex < saved.questions.length) {
    setState({
      screen: 'choiceSheet',
      choiceSheet: {
        topicId:      saved.topicId,
        levelId:      saved.levelId,
        questions:    saved.questions,
        currentIndex: saved.currentIndex,
        answers:      saved.answers,
        lastChoice:   null
      }
    });
    return;
  }
  if (saved) clearChoiceSavedSheet(topicId, levelId);
  const topic = CHOICE_TOPICS[topicId];
  const questions = shuffleArr(topic.levels[levelId].questions)
    .slice(0, CHOICES_PER_SHEET)
    .map(shuffleQuestionOptions);
  setState({
    screen: 'choiceSheet',
    choiceSheet: {
      topicId,
      levelId,
      questions,
      currentIndex: 0,
      lastChoice: null,
      answers: []
    }
  });
}

function renderChoiceSheet(app) {
  const s     = state.choiceSheet;
  const topic = CHOICE_TOPICS[s.topicId];
  const level = topic.levels[s.levelId];
  const q     = s.questions[s.currentIndex];
  const total = s.questions.length;
  const pct   = Math.round((s.currentIndex / total) * 100);
  const score = s.answers.filter(a => a.correct).length;

  const optionsHTML = q.options.map((opt, i) => {
    let cls = 'choice-option';
    if (s.lastChoice !== null) {
      if (i === s.lastChoice.optionIndex) cls += s.lastChoice.correct ? ' correct' : ' wrong';
      cls += ' disabled';
    }
    return `<button class="${cls}" data-idx="${i}">${esc(opt)}</button>`;
  }).join('');

  let feedbackHTML = '';
  if (s.lastChoice) {
    if (s.lastChoice.correct) {
      feedbackHTML = `<div class="feedback correct animate-pop">✓ That's right! 🎉</div>`;
    } else {
      feedbackHTML = `
        <div class="feedback wrong animate-pop">${esc(s.lastChoice.feedback)}</div>
        <button class="btn btn-primary" id="btn-try-again">Try Again ↩</button>`;
    }
  }

  const div = el('div', 'screen sheet-screen');
  div.innerHTML = `
    <div class="sheet-header">
      <div class="sheet-header-left">
        <button class="btn btn-ghost btn-sm" id="btn-save-exit">💾 Save &amp; Exit</button>
        <button class="btn btn-ghost btn-sm btn-exit-nosave" id="btn-exit">✕ Exit</button>
      </div>
      <div class="sheet-title" style="color:${topic.color}">${topic.emoji} ${esc(level.name)}</div>
      <div class="sheet-correct">✓ ${score}</div>
    </div>
    <div class="sheet-progress-bar">
      <div class="sheet-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="sheet-counter">${s.currentIndex + 1} / ${total}</div>
    <div class="card problem-card">
      <div class="choice-scenario">${esc(q.scenario)}</div>
      <div class="choice-options">${optionsHTML}</div>
      ${feedbackHTML}
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-save-exit').onclick = () => {
    saveChoiceSheetInProgress(state.choiceSheet);
    setState({ screen: 'choiceLevelMap', choiceSheet: null });
  };

  document.getElementById('btn-exit').onclick = () => {
    clearChoiceSavedSheet(state.choiceSheet.topicId, state.choiceSheet.levelId);
    setState({ screen: 'choiceLevelMap', choiceSheet: null });
  };

  if (!s.lastChoice) {
    div.querySelectorAll('.choice-option').forEach(btn => {
      btn.addEventListener('click', () => submitChoiceAnswer(parseInt(btn.dataset.idx, 10)));
    });
  } else if (!s.lastChoice.correct) {
    document.getElementById('btn-try-again').onclick = () => {
      s.lastChoice = null;
      render();
    };
  }
}

function submitChoiceAnswer(optionIndex) {
  const s       = state.choiceSheet;
  const q       = s.questions[s.currentIndex];
  const correct = optionIndex === q.best;

  s.lastChoice = { optionIndex, correct, feedback: q.feedbacks[optionIndex] };
  render();

  if (correct) {
    s.answers.push({ correct: true });
    const isLast = s.currentIndex === s.questions.length - 1;
    if (!isLast) saveChoiceSheetInProgress(s);
    setTimeout(() => {
      s.lastChoice = null;
      s.currentIndex++;
      if (s.currentIndex >= s.questions.length) {
        finishChoiceSheet();
      } else {
        render();
      }
    }, 1200);
  }
}

function finishChoiceSheet() {
  const s       = state.choiceSheet;
  clearChoiceSavedSheet(s.topicId, s.levelId);
  const updated = recordChoiceSheetResult(s.topicId, s.levelId);
  const score   = s.answers.filter(a => a.correct).length;
  setState({
    screen: 'choiceSheetResults',
    choiceSheet: null,
    choiceSheetResult: {
      topicId:  s.topicId,
      levelId:  s.levelId,
      score,
      total:    s.questions.length,
      progress: updated
    }
  });
}

// ============================================================
// CHOICES SHEET RESULTS
// ============================================================
function renderChoiceSheetResults(app) {
  const r     = state.choiceSheetResult;
  const topic = CHOICE_TOPICS[r.topicId];
  const level = topic.levels[r.levelId];
  const pct   = Math.round((r.score / r.total) * 100);
  const key   = `${r.topicId}_${r.levelId}`;
  const lp    = (r.progress.choiceLevels || {})[key] || { sheetsCompleted: 0, completed: false };

  const stars   = pct === 100 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const message = pct === 100 ? 'Perfect! Great choices! 🎊'
                : pct >= 60  ? 'Good thinking! Keep it up! 🎉'
                :               'Keep practicing — this stuff matters! 💪';

  const div = el('div', 'screen results-screen');
  div.innerHTML = `
    <div class="card results-card">
      <div class="results-stars animate-pop">${stars}</div>
      <h2 class="results-message">${message}</h2>
      <div class="results-score-box">
        <div class="score-big">${r.score} / ${r.total}</div>
        <div class="score-pct">${pct}%</div>
      </div>
      <div class="results-counted">
        ✅ Sheet counted!
        <strong>${lp.sheetsCompleted} / ${CHOICE_SHEETS_TO_COMPLETE}</strong> sheets completed
        <div class="mini-bar">
          <div class="mini-bar-fill" style="width:${Math.round((lp.sheetsCompleted / CHOICE_SHEETS_TO_COMPLETE) * 100)}%"></div>
        </div>
      </div>
      ${lp.completed ? `
        <div class="level-complete-banner animate-pop">
          🏆 Level Complete! You've mastered <em>${esc(level.name)}</em>! 🏆
        </div>` : ''}
      <div class="results-actions">
        <button class="btn btn-primary btn-large" id="btn-again">Practice Again 🔄</button>
        <button class="btn btn-secondary" id="btn-map">All Topics 🗺️</button>
      </div>
    </div>`;
  app.appendChild(div);

  document.getElementById('btn-again').onclick = () => startChoiceSheet(r.topicId, r.levelId);
  document.getElementById('btn-map').onclick   = () => setState({ screen: 'choiceLevelMap', choiceSheetResult: null });
}

// ============================================================
// PROBLEM RENDERING
// ============================================================

// Returns true for addition/subtraction problems that should be shown stacked.
function isStacked(problem) {
  if (problem.type !== 'arithmetic') return false;
  return /^\d+\s*[+−]\s*\d+$/.test(problem.question);
}

function problemHTML(problem) {
  if (problem.type === 'count') {
    const stars = '⭐'.repeat(problem.display);
    return `
      <div class="count-wrap">
        <div class="count-stars">${stars}</div>
        <div class="count-label">${esc(problem.question)}</div>
      </div>`;
  }

  // Stacked vertical format for + and −
  if (isStacked(problem)) {
    const m  = problem.question.match(/^(\d+)\s*([+−])\s*(\d+)$/);
    const op = m[2] === '+' ? '+' : '−';
    return `
      <div class="stacked-problem">
        <div class="stacked-top">${esc(m[1])}</div>
        <div class="stacked-bottom">
          <span class="stacked-op">${op}</span>
          <span class="stacked-val">${esc(m[3])}</span>
        </div>
        <div class="stacked-line"></div>
      </div>`;
  }

  // Equation type (missing addend, rounding, etc.) — smaller font, no "= ?" appended
  if (problem.type === 'equation') {
    return `<div class="equation-display">${esc(problem.question)}</div>`;
  }

  // Default inline format (×, ÷, fractions)
  return `<div class="arithmetic-problem">${esc(problem.question)}</div>`;
}

// ============================================================
// UTILITIES
// ============================================================
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shake(elem) {
  elem.classList.add('shake');
  setTimeout(() => elem.classList.remove('shake'), 500);
}

function wireAnswerInput(onSubmit) {
  const input = document.getElementById('answer-input');
  const btn   = document.getElementById('btn-check');
  if (!input || !btn) return;
  input.focus();
  btn.onclick = onSubmit;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') onSubmit(); });
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (_activePlayer) {
    // Session still active — reload from cloud
    state.screen = 'loading';
    render();
    loadProgressFromCloud(_activePlayer).then(cloudData => {
      if (cloudData) saveProgress(cloudData);
      const p = getProgress();
      if (p.placementDone) {
        setState({ screen: 'levelMap', welcomeMode: null });
      } else {
        setState({ screen: 'welcome', welcomeMode: null });
      }
    });
  } else {
    render(); // shows welcome landing
  }
});
