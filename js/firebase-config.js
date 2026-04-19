// ============================================================
// FIREBASE CONFIG — initialize Firebase app, db, and auth
// ============================================================

const firebaseConfig = {
  apiKey:            'AIzaSyCGnRLp5EQlr6lw8byApIKKzPlWHjqf4Ok',
  authDomain:        'learnspark-34e94.firebaseapp.com',
  projectId:         'learnspark-34e94',
  storageBucket:     'learnspark-34e94.firebasestorage.app',
  messagingSenderId: '15494813160',
  appId:             '1:15494813160:web:ac9ef577b74dc79500005d'
};

firebase.initializeApp(firebaseConfig);
const db   = firebase.firestore();
const auth = firebase.auth();
