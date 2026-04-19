// ============================================================
// LEVELS — math level definitions and problem generators
// ============================================================

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle a copy of an array (Fisher-Yates)
function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Fill a sheet of n problems from a pool; cycles with fresh shuffles when pool < n
function fillSheet(pool, n = 20) {
  if (!pool.length) return [];
  const out = [];
  while (out.length < n) out.push(...shuffleArr(pool));
  return out.slice(0, n);
}

// For large solution spaces: generate randomly until n unique questions collected
function uniqueRandom(generatorFn, n = 20) {
  const seen = new Set();
  const out  = [];
  let   tries = 0;
  while (out.length < n && tries < n * 200) {
    tries++;
    const p = generatorFn();
    if (p && !seen.has(p.question)) { seen.add(p.question); out.push(p); }
  }
  return out;
}

// ── Helpers ───────────────────────────────────────────────────
function arith(q, a)    { return { type: 'arithmetic', question: q, answer: a }; }
function eqn(q, a)      { return { type: 'equation',   question: q, answer: a }; }
function count(n)       { return { type: 'count', display: n, question: 'How many stars?', answer: n }; }

// ============================================================
// BASIC MATH — levels 0-15
// ============================================================
const LEVELS = [
  // 0 ─ Counting to 10
  {
    id: 0, name: 'Counting to 10', emoji: '⭐', color: '#FF6B6B',
    generate(tier = 0) {
      const max = tier >= 2 ? 15 : 10;
      return fillSheet(Array.from({ length: max }, (_, i) => count(i + 1)));
    }
  },
  // 1 ─ Counting to 20
  {
    id: 1, name: 'Counting to 20', emoji: '🌟', color: '#FF8E53',
    generate() {
      return fillSheet(Array.from({ length: 10 }, (_, i) => count(i + 11)));
    }
  },
  // 2 ─ Addition to 10
  {
    id: 2, name: 'Addition to 10', emoji: '➕', color: '#FECA57',
    generate() {
      const pool = [];
      for (let a = 1; a <= 9; a++)
        for (let b = 1; b <= 10 - a; b++)
          pool.push(arith(`${a} + ${b}`, a + b));
      return fillSheet(pool);
    }
  },
  // 3 ─ Addition to 18
  {
    id: 3, name: 'Addition to 18', emoji: '➕', color: '#54A0FF',
    generate(tier = 0) {
      const minSum = [4, 10, 14][Math.min(tier, 2)];
      const pool = [];
      for (let a = 2; a <= 9; a++)
        for (let b = 2; b <= 9; b++)
          if (a + b >= minSum)
            pool.push(arith(`${a} + ${b}`, a + b));
      return fillSheet(pool);
    }
  },
  // 4 ─ Subtraction (no negatives)
  {
    id: 4, name: 'Subtraction (no negatives)', emoji: '➖', color: '#5F27CD',
    generate(tier = 0) {
      const maxB = [5, 7, 9][Math.min(tier, 2)];
      const pool = [];
      for (let b = 1; b <= maxB; b++)
        for (let a = b + 1; a <= 10; a++)
          pool.push(arith(`${a} − ${b}`, a - b));
      return fillSheet(pool);
    }
  },
  // 5 ─ Mixed + and −
  {
    id: 5, name: 'Mixed + and −', emoji: '🔀', color: '#00D2D3',
    generate(tier = 0) {
      const minVal = [2, 6, 10][Math.min(tier, 2)];
      const pool = [];
      for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
          if (a + b >= minVal) pool.push(arith(`${a} + ${b}`, a + b));
          if (a > b)           pool.push(arith(`${a} − ${b}`, a - b));
        }
      }
      return fillSheet(pool);
    }
  },
  // 6 ─ Adding to Double Digits
  {
    id: 6, name: 'Adding to Double Digits', emoji: '🔢', color: '#FF9FF3',
    generate(tier = 0) {
      const maxA = [30, 60, 99][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(10, maxA), b = randInt(1, 9);
        return arith(`${a} + ${b}`, a + b);
      });
    }
  },
  // 7 ─ 2-Digit Addition (No Carry)
  {
    id: 7, name: '2-Digit Addition (No Carry)', emoji: '💯', color: '#1DD1A1',
    generate(tier = 0) {
      const maxD = [3, 4, 4][Math.min(tier, 2)];
      const pool = [];
      for (let a1 = 1; a1 <= maxD; a1++)
        for (let b1 = 1; b1 <= maxD; b1++)
          for (let a0 = 0; a0 <= maxD; a0++)
            for (let b0 = 0; b0 <= maxD; b0++)
              if (a0 + b0 < 10)
                pool.push(arith(`${a1*10+a0} + ${b1*10+b0}`, (a1*10+a0) + (b1*10+b0)));
      return fillSheet(pool);
    }
  },
  // 8 ─ 2-Digit Addition (With Carry)
  {
    id: 8, name: '2-Digit Addition (With Carry)', emoji: '🔝', color: '#F368E0',
    generate(tier = 0) {
      const minN = [15, 25, 35][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(minN, 89), b = randInt(minN, 89);
        if ((a % 10) + (b % 10) >= 10 && a + b <= 99)
          return arith(`${a} + ${b}`, a + b);
      });
    }
  },
  // 9 ─ 2-Digit Subtraction (No Borrow)
  {
    id: 9, name: '2-Digit Subtraction (No Borrow)', emoji: '⬇️', color: '#EE5A24',
    generate(tier = 0) {
      const maxD = [3, 4, 9][Math.min(tier, 2)];
      const pool = [];
      for (let a1 = 2; a1 <= 9; a1++)
        for (let b1 = 1; b1 < a1; b1++)
          for (let a0 = 1; a0 <= maxD; a0++)
            for (let b0 = 0; b0 <= a0; b0++)
              pool.push(arith(`${a1*10+a0} − ${b1*10+b0}`, (a1*10+a0) - (b1*10+b0)));
      return fillSheet(pool);
    }
  },
  // 10 ─ 2-Digit Subtraction (With Borrow)
  {
    id: 10, name: '2-Digit Subtraction (With Borrow)', emoji: '📉', color: '#C0392B',
    generate(tier = 0) {
      const minA = [21, 31, 51][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(minA, 99), b = randInt(12, a - 1);
        if ((a % 10) < (b % 10))
          return arith(`${a} − ${b}`, a - b);
      });
    }
  },
  // 11 ─ Multiply by 2, 5, 10
  {
    id: 11, name: 'Multiply by 2, 5, and 10', emoji: '✖️', color: '#6C5CE7',
    generate(tier = 0) {
      const tables = [[2], [2, 5], [2, 5, 10]][Math.min(tier, 2)];
      const pool = [];
      for (const t of tables)
        for (let n = 1; n <= 10; n++)
          pool.push(arith(`${t} × ${n}`, t * n));
      return fillSheet(pool);
    }
  },
  // 12 ─ All Multiplication Tables
  {
    id: 12, name: 'All Multiplication Tables', emoji: '🗂️', color: '#0984E3',
    generate(tier = 0) {
      const maxT = [5, 8, 10][Math.min(tier, 2)];
      const pool = [];
      for (let a = 2; a <= maxT; a++)
        for (let b = 2; b <= maxT; b++)
          pool.push(arith(`${a} × ${b}`, a * b));
      return fillSheet(pool);
    }
  },
  // 13 ─ Division (Basic)
  {
    id: 13, name: 'Division (Basic)', emoji: '➗', color: '#00B894',
    generate(tier = 0) {
      const maxD = [5, 7, 10][Math.min(tier, 2)];
      const pool = [];
      for (let b = 2; b <= maxD; b++)
        for (let q = 1; q <= 10; q++)
          pool.push(arith(`${b * q} ÷ ${b}`, q));
      return fillSheet(pool);
    }
  },
  // 14 ─ Mixed × and ÷
  {
    id: 14, name: 'Mixed × and ÷', emoji: '🔁', color: '#FDCB6E',
    generate(tier = 0) {
      const maxT = [5, 8, 10][Math.min(tier, 2)];
      const pool = [];
      for (let a = 2; a <= maxT; a++) {
        for (let b = 2; b <= maxT; b++) {
          pool.push(arith(`${a} × ${b}`, a * b));
          pool.push(arith(`${a * b} ÷ ${b}`, a));
        }
      }
      return fillSheet(pool);
    }
  },
  // 15 ─ Fractions: Halves & Quarters
  {
    id: 15, name: 'Fractions: Halves & Quarters', emoji: '🍕', color: '#E17055',
    generate(tier = 0) {
      const pool = [];
      // halves
      for (let n = 2; n <= 20; n += 2)
        pool.push(arith(`½ of ${n}`, n / 2));
      if (tier >= 1) {
        // quarters
        for (let n = 4; n <= 20; n += 4) {
          pool.push(arith(`¼ of ${n}`, n / 4));
          pool.push(arith(`¾ of ${n}`, (n * 3) / 4));
        }
      }
      return fillSheet(pool);
    }
  },

  // ============================================================
  // 3RD GRADE MATH — levels 16-27
  // ============================================================

  // 16 ─ 3-Digit Addition (No Carry)
  {
    id: 16, name: '3-Digit Addition (No Carry)', emoji: '🏗️', color: '#e84393',
    generate(tier = 0) {
      const maxD = [2, 3, 4][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a2 = randInt(1, maxD), b2 = randInt(1, maxD);
        const a1 = randInt(0, maxD), b1 = randInt(0, maxD);
        const a0 = randInt(0, maxD), b0 = randInt(0, maxD);
        if (a0+b0 < 10 && a1+b1 < 10 && a2+b2 < 10) {
          const a = a2*100+a1*10+a0, b = b2*100+b1*10+b0;
          return arith(`${a} + ${b}`, a + b);
        }
      });
    }
  },
  // 17 ─ 3-Digit Addition (With Carry)
  {
    id: 17, name: '3-Digit Addition (With Carry)', emoji: '📦', color: '#e17055',
    generate(tier = 0) {
      const minN = [100, 150, 200][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(minN, 499), b = randInt(minN, 499);
        if ((a % 10) + (b % 10) >= 10 && a + b <= 999)
          return arith(`${a} + ${b}`, a + b);
      });
    }
  },
  // 18 ─ 3-Digit Subtraction (No Borrow)
  {
    id: 18, name: '3-Digit Subtraction (No Borrow)', emoji: '📭', color: '#fdcb6e',
    generate() {
      return uniqueRandom(() => {
        const a2 = randInt(2, 9), b2 = randInt(1, a2 - 1);
        const a1 = randInt(1, 9), b1 = randInt(0, a1);
        const a0 = randInt(1, 9), b0 = randInt(0, a0);
        const a = a2*100+a1*10+a0, b = b2*100+b1*10+b0;
        return arith(`${a} − ${b}`, a - b);
      });
    }
  },
  // 19 ─ 3-Digit Subtraction (With Borrow)
  {
    id: 19, name: '3-Digit Subtraction (With Borrow)', emoji: '🧮', color: '#d63031',
    generate(tier = 0) {
      const minA = [200, 350, 500][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(minA, 999), b = randInt(100, a - 50);
        if ((a % 100) < (b % 100))   // borrow from hundreds
          return arith(`${a} − ${b}`, a - b);
      });
    }
  },
  // 20 ─ 2-Digit × 1-Digit
  {
    id: 20, name: '2-Digit × 1-Digit', emoji: '📐', color: '#6c5ce7',
    generate(tier = 0) {
      const maxA = [29, 49, 99][Math.min(tier, 2)];
      const maxB = [4,  6,  9 ][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(12, maxA), b = randInt(2, maxB);
        return arith(`${a} × ${b}`, a * b);
      });
    }
  },
  // 21 ─ ×11 and ×12 Tables
  {
    id: 21, name: '×11 and ×12 Tables', emoji: '🔱', color: '#a29bfe',
    generate(tier = 0) {
      const maxN = [10, 12, 12][Math.min(tier, 2)];
      const tables = tier >= 1 ? [11, 12] : [11];
      const pool = [];
      for (const t of tables)
        for (let n = 1; n <= maxN; n++)
          pool.push(arith(`${t} × ${n}`, t * n));
      return fillSheet(pool);
    }
  },
  // 22 ─ Missing Addend
  {
    id: 22, name: 'Missing Addend', emoji: '❓', color: '#0984e3',
    generate(tier = 0) {
      const maxSum = [15, 20, 30][Math.min(tier, 2)];
      const pool = [];
      for (let a = 1; a <= maxSum - 1; a++) {
        for (let b = 1; b <= maxSum - a; b++) {
          const s = a + b;
          if (s <= maxSum) {
            pool.push(eqn(`? + ${b} = ${s}`, a));
            pool.push(eqn(`${a} + ? = ${s}`, b));
          }
        }
      }
      return fillSheet(pool);
    }
  },
  // 23 ─ Missing Factor
  {
    id: 23, name: 'Missing Factor', emoji: '🎯', color: '#74b9ff',
    generate(tier = 0) {
      const maxT = [5, 7, 10][Math.min(tier, 2)];
      const pool = [];
      for (let a = 2; a <= maxT; a++)
        for (let b = 2; b <= maxT; b++)
          pool.push(eqn(`? × ${b} = ${a * b}`, a));
      return fillSheet(pool);
    }
  },
  // 24 ─ Round to Nearest 10
  {
    id: 24, name: 'Round to Nearest 10', emoji: '🔟', color: '#55efc4',
    generate(tier = 0) {
      const maxN = [59, 79, 99][Math.min(tier, 2)];
      const pool = [];
      for (let n = 11; n <= maxN; n++) {
        if (n % 10 === 0) continue;  // already rounded
        pool.push(eqn(`Round ${n} → 10s`, Math.round(n / 10) * 10));
      }
      return fillSheet(pool);
    }
  },
  // 25 ─ Round to Nearest 100
  {
    id: 25, name: 'Round to Nearest 100', emoji: '💯', color: '#00cec9',
    generate(tier = 0) {
      const maxN = [499, 699, 999][Math.min(tier, 2)];
      const pool = [];
      for (let n = 101; n <= maxN; n += 7) {  // step 7 for variety
        if (n % 100 === 0) continue;
        pool.push(eqn(`Round ${n} → 100s`, Math.round(n / 100) * 100));
      }
      return fillSheet(pool);
    }
  },
  // 26 ─ Fractions: Halves, Thirds & Quarters
  {
    id: 26, name: 'Fractions: ½, ⅓, ¼', emoji: '🍰', color: '#fd79a8',
    generate(tier = 0) {
      const pool = [];
      for (let n = 2; n <= 20; n += 2)  pool.push(arith(`½ of ${n}`, n / 2));
      if (tier >= 1) {
        for (let n = 4; n <= 20; n += 4) {
          pool.push(arith(`¼ of ${n}`, n / 4));
          pool.push(arith(`¾ of ${n}`, (n * 3) / 4));
        }
        for (let n = 3; n <= 18; n += 3) {
          pool.push(arith(`⅓ of ${n}`, n / 3));
          pool.push(arith(`⅔ of ${n}`, (n * 2) / 3));
        }
      }
      return fillSheet(pool);
    }
  },
  // 27 ─ Three-Number Addition
  {
    id: 27, name: 'Three-Number Addition', emoji: '🧩', color: '#e84393',
    generate(tier = 0) {
      const maxN = [5, 7, 9][Math.min(tier, 2)];
      const pool = [];
      for (let a = 1; a <= maxN; a++)
        for (let b = 1; b <= maxN; b++)
          for (let c = 1; c <= maxN; c++)
            pool.push(arith(`${a} + ${b} + ${c}`, a + b + c));
      return fillSheet(pool);
    }
  },
];

// Placement test checkpoints (level IDs sampled during placement)
const PLACEMENT_CHECKPOINTS = [2, 5, 8, 11, 14, 18, 22, 25];

// First level ID of each grade (used for tab unlock logic)
const GRADE_STARTS = { 1: 0, 2: 6, 3: 12, 4: 20 };
const GRADE_NAMES  = { 1: '1st', 2: '2nd', 3: '3rd', 4: '4th' };
