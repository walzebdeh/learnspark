// ============================================================
// ISLAMIC TAB — Prayer times, Salah checklist, Athkar counter
// For kids: colorful, points-based, encouraging
// ============================================================

// ── Prayer definitions ───────────────────────────────────────

const PRAYERS = [
  {
    id: 'fajr', name: 'Fajr', arabic: 'الفجر', emoji: '🌅', color: '#6366f1', timeKey: 'Fajr',
    rakaats: [
      { id: 'sunnah_b', label: 'Sunnah (2)', count: 2, type: 'sunnah' },
      { id: 'fard',     label: 'Fard (2)',   count: 2, type: 'fard'   },
    ]
  },
  {
    id: 'dhuhr', name: 'Dhuhr', arabic: 'الظهر', emoji: '☀️', color: '#f59e0b', timeKey: 'Dhuhr',
    rakaats: [
      { id: 'sunnah_b', label: 'Sunnah before (4)', count: 4, type: 'sunnah' },
      { id: 'fard',     label: 'Fard (4)',           count: 4, type: 'fard'   },
      { id: 'sunnah_a', label: 'Sunnah after (2)',   count: 2, type: 'sunnah' },
      { id: 'nafl',     label: 'Nafl (2)',            count: 2, type: 'nafl'   },
    ]
  },
  {
    id: 'asr', name: 'Asr', arabic: 'العصر', emoji: '🌤️', color: '#10b981', timeKey: 'Asr',
    rakaats: [
      { id: 'sunnah', label: 'Sunnah (4)', count: 4, type: 'sunnah' },
      { id: 'fard',   label: 'Fard (4)',   count: 4, type: 'fard'   },
    ]
  },
  {
    id: 'maghrib', name: 'Maghrib', arabic: 'المغرب', emoji: '🌇', color: '#ef4444', timeKey: 'Maghrib',
    rakaats: [
      { id: 'fard',   label: 'Fard (3)',   count: 3, type: 'fard'   },
      { id: 'sunnah', label: 'Sunnah (2)', count: 2, type: 'sunnah' },
      { id: 'nafl',   label: 'Nafl (2)',   count: 2, type: 'nafl'   },
    ]
  },
  {
    id: 'isha', name: 'Isha', arabic: 'العشاء', emoji: '🌙', color: '#3b82f6', timeKey: 'Isha',
    rakaats: [
      { id: 'sunnah_b', label: 'Sunnah before (4)', count: 4, type: 'sunnah' },
      { id: 'fard',     label: 'Fard (4)',           count: 4, type: 'fard'   },
      { id: 'sunnah_a', label: 'Sunnah after (2)',   count: 2, type: 'sunnah' },
      { id: 'nafl',     label: 'Nafl (2)',            count: 2, type: 'nafl'   },
      { id: 'witr',     label: 'Witr (3)',            count: 3, type: 'witr'   },
    ]
  },
];

// ── Athkar definitions ───────────────────────────────────────

const ATHKAR = [
  {
    id: 'subhanallah',
    arabic: 'سُبْحَانَ اللهِ',
    translit: 'Sub-haa-na l-laah',
    meaning: 'Glory be to Allah',
    target: 33, color: '#10b981', emoji: '🌿'
  },
  {
    id: 'alhamdulillah',
    arabic: 'الْحَمْدُ لِلَّهِ',
    translit: 'Al-ham-du lil-laah',
    meaning: 'All praise is due to Allah',
    target: 33, color: '#f59e0b', emoji: '☀️'
  },
  {
    id: 'allahuakbar',
    arabic: 'اللهُ أَكْبَرُ',
    translit: 'Al-laa-hu ak-bar',
    meaning: 'Allah is the Greatest',
    target: 33, color: '#6366f1', emoji: '✨'
  },
  {
    id: 'lailaha',
    arabic: 'لَا إِلٰهَ إِلَّا اللهُ',
    translit: 'Laa i-laa-ha il-lal-laah',
    meaning: 'There is no god but Allah',
    target: 100, color: '#ec4899', emoji: '💎'
  },
  {
    id: 'astaghfirullah',
    arabic: 'أَسْتَغْفِرُ اللهَ',
    translit: 'As-tagh-fi-rul-laah',
    meaning: 'I seek forgiveness from Allah',
    target: 100, color: '#8b5cf6', emoji: '🌸'
  },
  {
    id: 'salawat',
    arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',
    translit: "Al-laa-hum-ma sal-li 'a-laa mu-ham-mad",
    meaning: 'O Allah, send blessings upon Muhammad ﷺ',
    target: 10, color: '#0ea5e9', emoji: '🌟'
  },
];

// ── Badges ───────────────────────────────────────────────────

const ISLAMIC_BADGES = [
  { id: 'first_salah',  emoji: '🌙', name: 'First Step',     desc: 'Complete your very first prayer',              color: '#6366f1' },
  { id: 'fajr_done',    emoji: '🌅', name: 'Fajr Warrior',   desc: 'Complete Fajr — the most rewarding one!',     color: '#f59e0b' },
  { id: 'all_fard',     emoji: '⭐', name: 'All 5 Done!',    desc: 'Complete all 5 Fard prayers today',            color: '#10b981' },
  { id: 'perfect_day',  emoji: '🏆', name: 'Perfect Day',    desc: 'Every prayer + Sunnah done today',             color: '#f59e0b' },
  { id: 'dhikr_1',      emoji: '📿', name: 'Dhikr Starter',  desc: 'Reach the target count for any Athkar',        color: '#8b5cf6' },
  { id: 'trio_done',    emoji: '💎', name: 'Tasbih Triple',  desc: 'Complete SubhanAllah, Alhamdulillah & Allahu Akbar', color: '#ec4899' },
  { id: 'streak_3',     emoji: '🔥', name: '3-Day Streak',   desc: 'Complete all Fard prayers 3 days in a row',   color: '#ef4444' },
  { id: 'streak_7',     emoji: '👑', name: 'Week Warrior',   desc: 'Complete all Fard prayers 7 days in a row',   color: '#6366f1' },
];

// ── Storage helpers ───────────────────────────────────────────

function getIslamicData() {
  const p = getProgress();
  if (!p.islamic) {
    p.islamic = {
      city: '', country: '',
      lastDate: '', prayerChecks: {},
      athkarCounts: {}, athkarDate: '',
      totalPoints: 0, badges: [],
      streak: 0, lastStreakDate: ''
    };
    saveProgress(p);
  }
  return p.islamic;
}

function saveIslamicData(d) {
  const p = getProgress();
  p.islamic = d;
  saveProgress(p);
}

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

function ensureToday(d) {
  const today = isoDate();
  if (d.lastDate !== today) {
    // streak logic: if yesterday we had all fard done, increment streak
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (d.lastStreakDate === yesterday) {
      d.streak = (d.streak || 0) + 1;
    } else if (d.lastDate !== yesterday) {
      d.streak = 0;
    }
    d.lastDate = today;
    d.prayerChecks = {};
  }
  if (d.athkarDate !== today) {
    d.athkarDate = today;
    d.athkarCounts = {};
  }
  return d;
}

function isChecked(d, pid, rid) { return !!(d.prayerChecks[pid + '_' + rid]); }
function setChecked(d, pid, rid, v) { d.prayerChecks[pid + '_' + rid] = v; }
function getCount(d, id) { return d.athkarCounts[id] || 0; }

function rakPts(type) {
  return type === 'fard' ? 10 : type === 'witr' ? 8 : type === 'sunnah' ? 5 : 3;
}

function evalBadges(d) {
  const has = new Set(d.badges || []);
  // first_salah
  if (PRAYERS.some(p => { const f = p.rakaats.find(r => r.type==='fard'); return f && isChecked(d, p.id, f.id); })) has.add('first_salah');
  // fajr_done
  if (isChecked(d, 'fajr', 'fard')) has.add('fajr_done');
  // all_fard
  if (PRAYERS.every(p => { const f = p.rakaats.find(r => r.type==='fard'); return f && isChecked(d, p.id, f.id); })) {
    has.add('all_fard');
    d.lastStreakDate = isoDate();
    if (!d.streak) d.streak = 1;
    if ((d.streak || 0) >= 3) has.add('streak_3');
    if ((d.streak || 0) >= 7) has.add('streak_7');
  }
  // perfect_day
  if (PRAYERS.every(p => p.rakaats.every(r => isChecked(d, p.id, r.id)))) has.add('perfect_day');
  // dhikr_1
  if (ATHKAR.some(a => getCount(d, a.id) >= a.target)) has.add('dhikr_1');
  // trio
  if (['subhanallah','alhamdulillah','allahuakbar'].every(id => getCount(d, id) >= 33)) has.add('trio_done');
  d.badges = [...has];
  return d;
}

// ── Prayer times (Aladhan API) ────────────────────────────────

let _prayerCache = null, _pCacheKey = '';

async function loadPrayerTimes(city, country) {
  const key = `${city}|${country}|${isoDate()}`;
  if (_prayerCache && _pCacheKey === key) return _prayerCache;
  try {
    const r = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=5`
    );
    const j = await r.json();
    if (j.code === 200 && j.data?.timings) {
      const t = j.data.timings;
      _prayerCache = { Fajr: t.Fajr, Sunrise: t.Sunrise, Dhuhr: t.Dhuhr, Asr: t.Asr, Maghrib: t.Maghrib, Isha: t.Isha };
      _pCacheKey = key;
      return _prayerCache;
    }
  } catch(_) {}
  return null;
}

function to12h(t) {
  if (!t) return '--:--';
  const parts = t.replace(/ .*/,'').split(':');
  let h = +parts[0], m = +parts[1];
  return `${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`;
}

function nextPrayer(times) {
  const now = new Date();
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const order = ['Fajr','Dhuhr','Asr','Maghrib','Isha'];
  for (const k of order) {
    if (!times[k]) continue;
    const [h, m] = times[k].replace(/ .*/,'').split(':').map(Number);
    if (h * 60 + m > nowMins) return k;
  }
  return 'Fajr'; // next day
}

// ── Main render ───────────────────────────────────────────────

function renderIslamicTab(app) {
  if (!state.islamicScreen) state.islamicScreen = 'salah';
  let d = ensureToday(getIslamicData());

  const sub = state.islamicScreen;
  let body = '';
  if (sub === 'salah')   body = islSalahHTML(d);
  if (sub === 'dhikr')   body = islDhikrHTML(d);
  if (sub === 'rewards') body = islRewardsHTML(d);

  const div = el('div', 'screen islamic-screen');
  div.innerHTML = `
    <div class="mode-tabs-wrap">
      <div class="mode-tabs">
        <button class="mode-tab" id="tab-math">🔢 Math</button>
        <button class="mode-tab" id="tab-words">📝 Words</button>
        <button class="mode-tab" id="tab-choices">💡 Choices</button>
        <button class="mode-tab" id="tab-typing">⌨️ Typing</button>
        <button class="mode-tab" id="tab-puzzles">🧩 Puzzles</button>
        <button class="mode-tab" id="tab-eureka">📚 Eureka</button>
        <button class="mode-tab" id="tab-noetic">🏆 Noetic</button>
        <button class="mode-tab active" id="tab-islamic">☪️ Islamic</button>
      </div>
    </div>
    <div class="isl-header">
      <div class="isl-header-title">☪️ My Islamic Day</div>
      <div class="isl-header-pts">⭐ ${d.totalPoints || 0} pts</div>
    </div>
    <div class="isl-subtabs">
      <button class="isl-stab ${sub==='salah'?'active':''}" data-s="salah">🕌 Salah</button>
      <button class="isl-stab ${sub==='dhikr'?'active':''}" data-s="dhikr">📿 Dhikr</button>
      <button class="isl-stab ${sub==='rewards'?'active':''}" data-s="rewards">🏆 Rewards</button>
    </div>
    <div class="isl-body">${body}</div>`;
  app.appendChild(div);

  // Main tabs
  document.getElementById('tab-math').onclick    = () => setState({ screen: 'levelMap' });
  document.getElementById('tab-words').onclick   = () => setState({ screen: 'wordLevelMap' });
  document.getElementById('tab-choices').onclick = () => setState({ screen: 'choiceLevelMap', choiceTopic: null });
  document.getElementById('tab-typing').onclick  = () => setState({ screen: 'typingLevelMap' });
  document.getElementById('tab-puzzles').onclick = () => setState({ screen: 'puzzleMap' });
  document.getElementById('tab-eureka').onclick  = () => setState({ screen: 'eurekaMap' });
  document.getElementById('tab-noetic').onclick  = () => setState({ screen: 'noeticMap' });

  // Sub-tabs
  div.querySelectorAll('.isl-stab').forEach(b => {
    b.onclick = () => { state.islamicScreen = b.dataset.s; setState({}); };
  });

  if (sub === 'salah')  bindSalahEvents(div, d);
  if (sub === 'dhikr')  bindDhikrEvents(div, d);
}

// ── Salah sub-screen ──────────────────────────────────────────

function islSalahHTML(d) {
  const hasCity = d.city && d.country;
  const timesBlock = hasCity
    ? `<div class="isl-times-wrap" id="isl-times"><div class="isl-times-loading">🕐 Loading times for ${esc(d.city)}…</div></div>`
    : `<div class="isl-city-card">
        <div class="isl-city-icon">📍</div>
        <div class="isl-city-title">Where are you praying?</div>
        <div class="isl-city-inputs">
          <input id="isl-city" class="isl-input" placeholder="City  (e.g. Cairo)" type="text" />
          <input id="isl-country" class="isl-input" placeholder="Country  (e.g. Egypt)" type="text" />
          <button class="btn btn-primary" id="btn-isl-city">Save 💾</button>
        </div>
      </div>`;

  const cards = PRAYERS.map(p => {
    const frd  = p.rakaats.find(r => r.type === 'fard');
    const fDone = frd && isChecked(d, p.id, frd.id);
    const allD  = p.rakaats.every(r => isChecked(d, p.id, r.id));
    const rows  = p.rakaats.map(r => {
      const chk = isChecked(d, p.id, r.id);
      const typeLabel = r.type === 'fard' ? '★ Fard' : r.type === 'witr' ? '🌙 Witr' : r.type === 'sunnah' ? '☆ Sunnah' : '◇ Nafl';
      return `
        <div class="isl-rak ${chk?'checked':''} isl-rak-${r.type}" data-p="${p.id}" data-r="${r.id}">
          <span class="isl-rak-check">${chk?'✅':'⬜'}</span>
          <span class="isl-rak-info">
            <span class="isl-rak-name">${esc(r.label)}</span>
            <span class="isl-rak-type">${typeLabel}</span>
          </span>
          <span class="isl-rak-pts">+${rakPts(r.type) * r.count}</span>
        </div>`;
    }).join('');
    return `
      <div class="isl-prayer ${allD?'done':fDone?'fard-done':''}" style="--pc:${p.color}">
        <div class="isl-prayer-head">
          <span class="isl-prayer-emoji">${p.emoji}</span>
          <span class="isl-prayer-names">
            <span class="isl-prayer-en">${p.name}</span>
            <span class="isl-prayer-ar">${p.arabic}</span>
          </span>
          <span class="isl-prayer-time" id="pt-${p.id}">‒‒:‒‒</span>
          ${allD?'<span class="isl-done-badge">Done! 🌟</span>':fDone?'<span class="isl-done-badge frd">Fard ✓</span>':''}
        </div>
        <div class="isl-raks">${rows}</div>
      </div>`;
  }).join('');

  return `
    ${timesBlock}
    <div class="isl-prayers">${cards}</div>
    ${hasCity ? `<button class="btn btn-ghost btn-sm isl-change-city" id="btn-isl-change">✏️ Change city</button>` : ''}`;
}

function bindSalahEvents(div, d) {
  // City form
  const btnCity = div.querySelector('#btn-isl-city');
  if (btnCity) {
    btnCity.onclick = () => {
      const city    = div.querySelector('#isl-city')?.value.trim();
      const country = div.querySelector('#isl-country')?.value.trim();
      if (!city || !country) return;
      d.city = city; d.country = country;
      saveIslamicData(d); setState({});
    };
  }
  const btnChange = div.querySelector('#btn-isl-change');
  if (btnChange) { btnChange.onclick = () => { d.city = ''; d.country = ''; saveIslamicData(d); setState({}); }; }

  // Load times
  if (d.city && d.country) {
    loadPrayerTimes(d.city, d.country).then(times => {
      const wrap = document.getElementById('isl-times');
      if (!wrap) return;
      if (times) {
        const next = nextPrayer(times);
        const order = [
          {k:'Fajr',e:'🌅'},{k:'Sunrise',e:'🌄'},{k:'Dhuhr',e:'☀️'},
          {k:'Asr',e:'🌤️'},{k:'Maghrib',e:'🌇'},{k:'Isha',e:'🌙'}
        ];
        wrap.innerHTML = `<div class="isl-times">` +
          order.map(o => `
            <div class="isl-time-card ${o.k===next?'next':''}">
              <div class="isl-tc-em">${o.e}</div>
              <div class="isl-tc-name">${o.k}</div>
              <div class="isl-tc-val">${to12h(times[o.k])}</div>
              ${o.k===next?'<div class="isl-tc-next">Next</div>':''}
            </div>`).join('') + `</div>`;
        // Fill in per-prayer times
        PRAYERS.forEach(p => {
          const el2 = document.getElementById(`pt-${p.id}`);
          if (el2 && times[p.timeKey]) el2.textContent = to12h(times[p.timeKey]);
        });
      } else {
        wrap.innerHTML = `<div class="isl-times-err">⚠️ Could not load times — check the city name.</div>`;
      }
    });
  }

  // Rakaat tap
  div.querySelectorAll('.isl-rak').forEach(row => {
    row.onclick = () => {
      const pid = row.dataset.p, rid = row.dataset.r;
      const prayer = PRAYERS.find(p => p.id === pid);
      const rak    = prayer?.rakaats.find(r => r.id === rid);
      if (!rak) return;
      const was = isChecked(d, pid, rid);
      const pts = rakPts(rak.type) * rak.count;
      setChecked(d, pid, rid, !was);
      d.totalPoints = Math.max(0, (d.totalPoints || 0) + (was ? -pts : pts));
      d = evalBadges(d);
      saveIslamicData(d); setState({});
    };
  });
}

// ── Dhikr sub-screen ──────────────────────────────────────────

function islDhikrHTML(d) {
  return `<div class="isl-dhikr-list">` +
    ATHKAR.map(a => {
      const cnt  = getCount(d, a.id);
      const done = cnt >= a.target;
      const pct  = Math.min(100, Math.round(cnt / a.target * 100));
      return `
        <div class="isl-dhikr ${done?'done':''}" style="--dc:${a.color}">
          <div class="isl-dh-arabic">${a.arabic}</div>
          <div class="isl-dh-translit">${esc(a.translit)}</div>
          <div class="isl-dh-meaning">${esc(a.meaning)}</div>
          <div class="isl-dh-bar"><div class="isl-dh-fill" style="width:${pct}%"></div></div>
          <div class="isl-dh-row">
            <span class="isl-dh-cnt">${cnt} / ${a.target} ${done?'✅':''}</span>
            <span class="isl-dh-actions">
              <button class="isl-dh-reset" data-id="${a.id}" title="Reset">↺</button>
              <button class="isl-dh-btn ${done?'done':''}" data-id="${a.id}">${done?'✅':a.emoji} Tap</button>
            </span>
          </div>
        </div>`;
    }).join('') + `</div>`;
}

function bindDhikrEvents(div, d) {
  div.querySelectorAll('.isl-dh-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const a  = ATHKAR.find(x => x.id === id);
      if (!a) return;
      d.athkarCounts[id] = getCount(d, id) + 1;
      if (getCount(d, id) === a.target) d.totalPoints = (d.totalPoints || 0) + 50;
      d = evalBadges(d);
      saveIslamicData(d); setState({});
    };
  });
  div.querySelectorAll('.isl-dh-reset').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      d.athkarCounts[btn.dataset.id] = 0;
      saveIslamicData(d); setState({});
    };
  });
}

// ── Rewards sub-screen ────────────────────────────────────────

function islRewardsHTML(d) {
  const earned = new Set(d.badges || []);
  const pct = Math.round((earned.size / ISLAMIC_BADGES.length) * 100);
  return `
    <div class="isl-rew-top">
      <div class="isl-big-pts">⭐ ${d.totalPoints || 0}</div>
      <div class="isl-pts-label">Total Points</div>
      <div class="isl-streak">🔥 ${d.streak || 0}-day streak</div>
      <div class="isl-rew-prog">
        <div class="isl-rew-bar"><div class="isl-rew-fill" style="width:${pct}%"></div></div>
        <div class="isl-rew-count">${earned.size} / ${ISLAMIC_BADGES.length} Badges</div>
      </div>
    </div>
    <div class="isl-badges">
      ${ISLAMIC_BADGES.map(b => {
        const has = earned.has(b.id);
        return `
          <div class="isl-badge ${has?'earned':'locked'}" style="--bc:${b.color}">
            <div class="isl-badge-em">${has ? b.emoji : '🔒'}</div>
            <div class="isl-badge-name">${esc(b.name)}</div>
            <div class="isl-badge-desc">${esc(b.desc)}</div>
          </div>`;
      }).join('')}
    </div>`;
}
