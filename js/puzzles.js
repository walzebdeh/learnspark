// ============================================================
// PUZZLES — definitions for all logic puzzles
// ============================================================

const PUZZLES = [
  // ── id 0 ── River Crossing (Classic) ──────────────────────
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

  // ── id 1 ── Tower of Hanoi (3 disks) ──────────────────────
  {
    id: 1,
    type: 'hanoi',
    name: 'Tower of Hanoi',
    emoji: '🗼',
    difficulty: '⭐⭐ Medium',
    story: 'Move all 3 disks from peg A to peg C. You can only move one disk at a time, and a larger disk can never sit on top of a smaller one.',
    disks: 3,
    minMoves: 7,
  },

  // ── id 2 ── Maze: Forest Path (easy 5×5) ──────────────────
  {
    id: 2,
    type: 'maze',
    name: 'Forest Path',
    emoji: '🌲',
    difficulty: '⭐ Easy',
    story: 'Find your way through the forest to reach the treasure! Tap the arrow buttons to move up, down, left, or right.',
    grid: [
      [0,0,1,1,1],
      [1,0,0,0,1],
      [1,1,1,0,1],
      [1,0,0,0,0],
      [1,1,1,1,0],
    ],
    start: [0,0], end: [4,4],
    minMoves: 8,
  },

  // ── id 3 ── Lights Out (3×3 easy) ─────────────────────────
  {
    id: 3,
    type: 'lightsOut',
    name: 'Lights Out',
    emoji: '💡',
    difficulty: '⭐⭐ Medium',
    story: 'Turn all the lights off! Tapping a light toggles it AND its neighbors (up, down, left, right). Think carefully!',
    size: 3,
    start: [[0,1,0],[1,1,1],[0,1,0]],
    minMoves: 1,
  },

  // ── id 4 ── Sliding Puzzle (beginner) ─────────────────────
  {
    id: 4,
    type: 'sliding',
    name: 'Slide & Sort',
    emoji: '🔢',
    difficulty: '⭐⭐ Medium',
    story: 'Slide the tiles to put them in order 1–8, with the blank space at the bottom-right. Tap a tile next to the blank to slide it.',
    start: [4,1,3,2,8,5,0,7,6],
    minMoves: 8,
  },

  // ── id 5 ── Maze: Castle Escape (medium 7×7) ──────────────
  {
    id: 5,
    type: 'maze',
    name: 'Castle Escape',
    emoji: '🏰',
    difficulty: '⭐⭐ Medium',
    story: 'Navigate through the castle corridors and find the exit! The path is longer than it looks.',
    grid: [
      [0,0,1,0,0,0,0],
      [0,1,0,0,1,1,0],
      [0,0,0,1,0,0,0],
      [1,1,0,0,0,1,0],
      [0,0,0,0,1,0,0],
      [0,1,0,1,0,0,0],
      [0,0,0,1,0,0,0],
    ],
    start: [0,0], end: [6,6],
    minMoves: 14,
  },

  // ── id 6 ── Tower of Hanoi (4 disks) ──────────────────────
  {
    id: 6,
    type: 'hanoi',
    name: 'Hanoi — 4 Disks',
    emoji: '🗼',
    difficulty: '⭐⭐⭐ Hard',
    story: 'Move all 4 disks from peg A to peg C. One disk at a time — never place a larger disk on a smaller one.',
    disks: 4,
    minMoves: 15,
  },

  // ── id 7 ── Sliding Puzzle (medium) ───────────────────────
  {
    id: 7,
    type: 'sliding',
    name: 'Slide & Sort II',
    emoji: '🧩',
    difficulty: '⭐⭐⭐ Hard',
    story: 'A harder sliding puzzle! Arrange tiles 1–8 in order with blank at bottom-right.',
    start: [2,4,3,0,1,8,7,6,5],
    minMoves: 15,
  },

  // ── id 8 ── Lights Out (4×4 all-on) ───────────────────────
  {
    id: 8,
    type: 'lightsOut',
    name: 'Lights Out 4×4',
    emoji: '🔦',
    difficulty: '⭐⭐⭐ Hard',
    story: 'All 16 lights are on in a 4×4 grid — turn them all off! Much harder than it looks.',
    size: 4,
    start: [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],
    minMoves: 4,
  },

  // ── id 9 ── Maze: Dragon's Lair (hard 9×9) ────────────────
  {
    id: 9,
    type: 'maze',
    name: "Dragon's Lair",
    emoji: '🐉',
    difficulty: '⭐⭐⭐ Hard',
    story: "Navigate through the dragon's lair and steal the treasure! This 9×9 maze will test your pathfinding skills.",
    grid: [
      [0,0,0,1,0,0,0,0,1],
      [1,1,0,1,0,1,1,0,1],
      [1,0,0,0,0,1,0,0,0],
      [1,0,1,1,0,0,0,1,0],
      [1,0,1,0,0,1,0,0,0],
      [0,0,1,0,1,0,0,1,0],
      [0,1,0,0,1,0,1,0,0],
      [0,1,0,1,0,0,0,0,0],
      [1,0,0,0,1,0,0,0,0],
    ],
    start: [0,0], end: [8,8],
    minMoves: 16,
  },

  // ── id 10 ── Sliding Puzzle (expert) ──────────────────────
  {
    id: 10,
    type: 'sliding',
    name: 'Master Slide',
    emoji: '🏆',
    difficulty: '⭐⭐⭐⭐ Expert',
    story: 'The ultimate sliding challenge! This scramble takes many moves to solve — can you figure it out?',
    start: [4,0,8,2,3,6,7,5,1],
    minMoves: 25,
  },

  // ── id 11 ── Tower of Hanoi (5 disks) ─────────────────────
  {
    id: 11,
    type: 'hanoi',
    name: 'Hanoi — 5 Disks',
    emoji: '🗼',
    difficulty: '⭐⭐⭐⭐ Expert',
    story: 'The ultimate Tower of Hanoi! Move all 5 disks from peg A to peg C. Minimum 31 moves needed.',
    disks: 5,
    minMoves: 31,
  },
];
