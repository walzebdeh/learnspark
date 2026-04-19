// ============================================================
// FIREBASE SYNC — cloud read/write for player progress
// ============================================================

function syncProgressToCloud(playerName, progressData) {
  if (!playerName) return;
  db.collection('progress').doc(playerName)
    .set(progressData)
    .catch(e => console.warn('[sync] write failed:', e));
}

// Returns a Promise that resolves to the cloud progress object or null
function loadProgressFromCloud(playerName) {
  if (!playerName) return Promise.resolve(null);
  return db.collection('progress').doc(playerName).get()
    .then(doc => doc.exists ? doc.data() : null)
    .catch(() => null);
}

// Records IP, timestamp, and device info when a player logs in
function recordPlayerLogin(playerName) {
  if (!playerName) return;
  fetch('https://api.ipify.org?format=json')
    .then(r => r.json())
    .then(data => {
      db.collection('progress').doc(playerName).set({
        lastIp:     data.ip,
        lastSeen:   new Date().toISOString(),
        lastDevice: navigator.userAgent
      }, { merge: true });
    })
    .catch(() => {});
}

// Returns a Promise resolving to an array of { name, progress } objects
function loadAllPlayersFromCloud() {
  return db.collection('progress').get()
    .then(snapshot => {
      const results = [];
      snapshot.forEach(doc => results.push({ name: doc.id, progress: doc.data() }));
      return results;
    })
    .catch(() => []);
}
