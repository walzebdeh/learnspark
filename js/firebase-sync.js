// ============================================================
// FIREBASE SYNC — cloud read/write for player progress
// ============================================================

function _dbReady() {
  return typeof db !== 'undefined' && db !== null;
}

function syncProgressToCloud(playerName, progressData) {
  if (!playerName || !_dbReady()) return;
  try {
    db.collection('progress').doc(playerName)
      .set(progressData, { merge: true })
      .catch(e => console.warn('[sync] write failed:', e));
  } catch(e) {
    console.warn('[sync] error:', e);
  }
}

// Returns a Promise that resolves to the cloud progress object or null
function loadProgressFromCloud(playerName) {
  if (!playerName || !_dbReady()) return Promise.resolve(null);
  try {
    return db.collection('progress').doc(playerName).get()
      .then(doc => doc.exists ? doc.data() : null)
      .catch(() => null);
  } catch(e) { return Promise.resolve(null); }
}

// Records IP, timestamp, and device info when a player logs in
function recordPlayerLogin(playerName) {
  if (!playerName || !_dbReady()) return;
  fetch('https://api.ipify.org?format=json')
    .then(r => r.json())
    .then(data => {
      try {
        db.collection('progress').doc(playerName).set({
          lastIp:     data.ip,
          lastSeen:   new Date().toISOString(),
          lastDevice: navigator.userAgent
        }, { merge: true });
      } catch(e) {}
    })
    .catch(() => {});
}

// Returns a Promise resolving to an array of { name, progress } objects
function loadAllPlayersFromCloud() {
  if (!_dbReady()) return Promise.resolve([]);
  try {
    return db.collection('progress').get()
      .then(snapshot => {
        const results = [];
        snapshot.forEach(doc => results.push({ name: doc.id, progress: doc.data() }));
        return results;
      })
      .catch(() => []);
  } catch(e) { return Promise.resolve([]); }
}
