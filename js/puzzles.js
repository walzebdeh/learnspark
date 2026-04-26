// ============================================================
// PUZZLES — definitions for all logic puzzles
// ============================================================

const PUZZLES = [
  {
    id: 0,
    type: 'riverCrossing',
    name: 'River Crossing',
    emoji: '🌊',
    difficulty: '⭐⭐ Classic',
    story: 'A shepherd must bring a wolf, a goat, and some grass across the river. The boat holds 2. Left alone: wolf eats goat, goat eats grass.',
    rower: 'shepherd',
    chars: {
      shepherd: { emoji: '🧑‍🌾', name: 'Shepherd', bg: 'linear-gradient(155deg,#fff3e0,#ffcc80)', boatBg: 'rgba(255,204,128,.9)' },
      wolf:     { emoji: '🐺',   name: 'Wolf',     bg: 'linear-gradient(155deg,#e8eaf6,#c5cae9)', boatBg: 'rgba(197,202,233,.9)' },
      goat:     { emoji: '🐐',   name: 'Goat',     bg: 'linear-gradient(155deg,#fff8e1,#ffe082)', boatBg: 'rgba(255,224,130,.9)' },
      grass:    { emoji: '🌿',   name: 'Grass',    bg: 'linear-gradient(155deg,#e8f5e9,#a5d6a7)', boatBg: 'rgba(165,214,167,.9)' },
    },
    start: ['wolf', 'goat', 'grass'],
    conflicts: [
      { pair: ['wolf', 'goat'],  msg: 'The wolf ate the goat! 🐺🐐' },
      { pair: ['goat', 'grass'], msg: 'The goat ate the grass! 🐐🌿' },
    ],
    minMoves: 7,
  },
  {
    id: 1,
    type: 'riverCrossing',
    name: 'Fox & Hen',
    emoji: '🦊',
    difficulty: '⭐ Easy',
    story: 'A farmer needs to bring a fox and a hen across the river. If the fox is left alone with the hen, it will eat her!',
    rower: 'farmer',
    chars: {
      farmer: { emoji: '👨‍🌾', name: 'Farmer', bg: 'linear-gradient(155deg,#e8f5e9,#a5d6a7)', boatBg: 'rgba(165,214,167,.9)' },
      fox:    { emoji: '🦊',   name: 'Fox',    bg: 'linear-gradient(155deg,#fff3e0,#ffcc80)', boatBg: 'rgba(255,204,128,.9)' },
      hen:    { emoji: '🐓',   name: 'Hen',    bg: 'linear-gradient(155deg,#fff8e1,#ffe082)', boatBg: 'rgba(255,224,130,.9)' },
    },
    start: ['fox', 'hen'],
    conflicts: [
      { pair: ['fox', 'hen'], msg: 'The fox ate the hen! 🦊🐓' },
    ],
    minMoves: 5,
  },
  {
    id: 2,
    type: 'hanoi',
    name: 'Tower of Hanoi',
    emoji: '🗼',
    difficulty: '⭐⭐ Medium',
    story: 'Move all 3 disks from peg A to peg C. You can only move one disk at a time, and a larger disk can never sit on top of a smaller one.',
    minMoves: 7,
  },
];
