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
            pool.push(eqn(`Find x:  x + ${b} = ${s}`, a));
            pool.push(eqn(`Find x:  ${a} + x = ${s}`, b));
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
          pool.push(eqn(`Find x:  x × ${b} = ${a * b}`, a));
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

  // ============================================================
  // 5TH GRADE MATH — levels 28–35
  // ============================================================

  // 28 ─ 2-Digit × 2-Digit
  {
    id: 28, name: '2-Digit × 2-Digit', emoji: '✖️', color: '#6c5ce7',
    generate(tier = 0) {
      const max = [30, 50, 99][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(11, max), b = randInt(11, max);
        return arith(`${a} × ${b}`, a * b);
      });
    }
  },
  // 29 ─ 3-Digit × 1-Digit
  {
    id: 29, name: '3-Digit × 1-Digit', emoji: '📐', color: '#a29bfe',
    generate(tier = 0) {
      const maxA = [399, 699, 999][Math.min(tier, 2)];
      const maxB = [5, 7, 9][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(100, maxA), b = randInt(2, maxB);
        return arith(`${a} × ${b}`, a * b);
      });
    }
  },
  // 30 ─ Division: 3-Digit ÷ 1-Digit (Exact)
  {
    id: 30, name: '3-Digit Division', emoji: '📏', color: '#00B894',
    generate(tier = 0) {
      const maxQ = [30, 60, 99][Math.min(tier, 2)];
      const maxD = [6, 8, 9][Math.min(tier, 2)];
      const pool = [];
      for (let d = 2; d <= maxD; d++)
        for (let q = 11; q <= maxQ; q++)
          if (d * q >= 100) pool.push(arith(`${d * q} ÷ ${d}`, q));
      return fillSheet(pool);
    }
  },
  // 31 ─ Order of Operations
  {
    id: 31, name: 'Order of Operations', emoji: '🎛️', color: '#FDCB6E',
    generate(tier = 0) {
      const pool = [];
      for (let a = 1; a <= 9; a++)
        for (let b = 1; b <= 9; b++)
          for (let c = 1; c <= 9; c++) {
            pool.push(eqn(`${a} + ${b} × ${c}`, a + b * c));
            if (a * b > c) pool.push(eqn(`${a} × ${b} − ${c}`, a * b - c));
          }
      return fillSheet(pool);
    }
  },
  // 32 ─ Decimal Addition (Tenths)
  {
    id: 32, name: 'Decimal Addition', emoji: '🔵', color: '#0984e3',
    generate(tier = 0) {
      const maxW = [5, 9, 14][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(1, maxW), ad = randInt(1, 9);
        const b = randInt(1, maxW), bd = randInt(1, 9);
        return arith(`${a}.${ad} + ${b}.${bd}`,
          parseFloat(((a + ad / 10) + (b + bd / 10)).toFixed(1)));
      });
    }
  },
  // 33 ─ Decimal Subtraction (Tenths)
  {
    id: 33, name: 'Decimal Subtraction', emoji: '🟠', color: '#e17055',
    generate(tier = 0) {
      const maxW = [9, 14, 19][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(3, maxW), ad = randInt(1, 9);
        const b = randInt(1, a - 1), bd = randInt(1, 9);
        const diff = parseFloat(((a + ad / 10) - (b + bd / 10)).toFixed(1));
        if (diff > 0) return arith(`${a}.${ad} − ${b}.${bd}`, diff);
      });
    }
  },
  // 34 ─ Percentages: 10%, 25%, 50%
  {
    id: 34, name: 'Percentages (10%, 25%, 50%)', emoji: '📊', color: '#00cec9',
    generate(tier = 0) {
      const pool = [];
      const pcts = tier === 0 ? [10, 50] : tier === 1 ? [10, 25, 50] : [10, 20, 25, 50, 75];
      for (const pct of pcts)
        for (let n = 10; n <= 200; n += 10) {
          const ans = (pct / 100) * n;
          if (Number.isInteger(ans)) pool.push(eqn(`${pct}% of ${n}`, ans));
        }
      return fillSheet(pool);
    }
  },
  // 35 ─ Fraction of a Number
  {
    id: 35, name: 'Fraction of a Number', emoji: '🍕', color: '#E17055',
    generate(tier = 0) {
      const pool = [];
      const fracs = [
        [1,2,'½'], [1,3,'⅓'], [2,3,'⅔'], [1,4,'¼'], [3,4,'¾'],
        [1,5,'⅕'], [2,5,'⅖'], [3,5,'⅗'], [4,5,'⅘']
      ];
      for (const [num, den, sym] of fracs)
        for (let base = den; base <= den * 20; base += den) {
          const ans = (num * base) / den;
          if (Number.isInteger(ans)) pool.push(eqn(`${sym} of ${base}`, ans));
        }
      return fillSheet(pool);
    }
  },

  // ============================================================
  // 6TH GRADE MATH — levels 36–43
  // ============================================================

  // 36 ─ 2-Digit × 2-Digit (Advanced)
  {
    id: 36, name: '2-Digit × 2-Digit (Advanced)', emoji: '🔣', color: '#6c5ce7',
    generate(tier = 0) {
      const min = [30, 40, 50][Math.min(tier, 2)];
      const max = [79, 89, 99][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(min, max), b = randInt(min, max);
        return arith(`${a} × ${b}`, a * b);
      });
    }
  },
  // 37 ─ Division: 4-Digit ÷ 2-Digit (Exact)
  {
    id: 37, name: '4-Digit Division', emoji: '🧮', color: '#00B894',
    generate(tier = 0) {
      const maxD = [15, 20, 25][Math.min(tier, 2)];
      const maxQ = [50, 75, 99][Math.min(tier, 2)];
      const pool = [];
      for (let d = 11; d <= maxD; d++)
        for (let q = 11; q <= maxQ; q++)
          pool.push(arith(`${d * q} ÷ ${d}`, q));
      return fillSheet(pool);
    }
  },
  // 38 ─ Integer Addition (Negatives)
  {
    id: 38, name: 'Integer Addition', emoji: '➕', color: '#0984e3',
    generate(tier = 0) {
      const max = [10, 15, 25][Math.min(tier, 2)];
      const fmt = n => n < 0 ? `(−${-n})` : `${n}`;
      return uniqueRandom(() => {
        const a = randInt(-max, max), b = randInt(-max, max);
        if (a !== 0 && b !== 0 && (a < 0 || b < 0))
          return arith(`${fmt(a)} + ${fmt(b)}`, a + b);
      });
    }
  },
  // 39 ─ Integer Subtraction (Negatives)
  {
    id: 39, name: 'Integer Subtraction', emoji: '➖', color: '#d63031',
    generate(tier = 0) {
      const max = [10, 15, 20][Math.min(tier, 2)];
      const fmt = n => n < 0 ? `(−${-n})` : `${n}`;
      return uniqueRandom(() => {
        const a = randInt(-max, max), b = randInt(-max, max);
        if (a !== 0 && b !== 0)
          return arith(`${fmt(a)} − ${fmt(b)}`, a - b);
      });
    }
  },
  // 40 ─ Integer Multiplication (Negatives)
  {
    id: 40, name: 'Integer Multiplication', emoji: '🔁', color: '#e84393',
    generate(tier = 0) {
      const max = [6, 9, 12][Math.min(tier, 2)];
      const fmt = n => n < 0 ? `(−${-n})` : `${n}`;
      return uniqueRandom(() => {
        const a = randInt(-max, max), b = randInt(-max, max);
        if (a !== 0 && b !== 0 && (a < 0 || b < 0))
          return arith(`${fmt(a)} × ${fmt(b)}`, a * b);
      });
    }
  },
  // 41 ─ One-Step Equations: + and −
  {
    id: 41, name: 'One-Step Equations (+ / −)', emoji: '🔍', color: '#74b9ff',
    generate(tier = 0) {
      const max = [15, 25, 50][Math.min(tier, 2)];
      const pool = [];
      for (let x = 1; x <= max; x++)
        for (let b = 1; b <= max; b++) {
          pool.push(eqn(`Find x:  x + ${b} = ${x + b}`, x));
          if (x > b) pool.push(eqn(`Find x:  x − ${b} = ${x - b}`, x));
        }
      return fillSheet(pool);
    }
  },
  // 42 ─ One-Step Equations: × and ÷
  {
    id: 42, name: 'One-Step Equations (× / ÷)', emoji: '🎯', color: '#a29bfe',
    generate(tier = 0) {
      const maxM = [5, 8, 12][Math.min(tier, 2)];
      const maxX = [10, 15, 20][Math.min(tier, 2)];
      const pool = [];
      for (let m = 2; m <= maxM; m++)
        for (let x = 2; x <= maxX; x++) {
          pool.push(eqn(`Find x:  ${m}x = ${m * x}`, x));
          pool.push(eqn(`Find x:  x ÷ ${m} = ${x}`, m * x));
        }
      return fillSheet(pool);
    }
  },
  // 43 ─ Percentages (Any %)
  {
    id: 43, name: 'Percentages (Any %)', emoji: '💹', color: '#55efc4',
    generate(tier = 0) {
      const pool = [];
      const pcts = tier === 0
        ? [5, 10, 20, 25, 50]
        : tier === 1
          ? [5, 10, 15, 20, 25, 30, 50, 75]
          : [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80];
      for (const pct of pcts)
        for (let n = 10; n <= 300; n += 10) {
          const ans = (pct / 100) * n;
          if (Number.isInteger(ans)) pool.push(eqn(`${pct}% of ${n}`, ans));
        }
      return fillSheet(pool);
    }
  },

  // ============================================================
  // 7TH GRADE MATH — levels 44–51
  // ============================================================

  // 44 ─ Two-Step Equations
  {
    id: 44, name: 'Two-Step Equations', emoji: '🧮', color: '#6c5ce7',
    generate(tier = 0) {
      const maxM = [4, 6, 9][Math.min(tier, 2)];
      const maxX = [8, 12, 15][Math.min(tier, 2)];
      const maxB = [8, 12, 20][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const m = randInt(2, maxM), x = randInt(1, maxX), b = randInt(1, maxB);
        return eqn(`Find x:  ${m}x + ${b} = ${m * x + b}`, x);
      });
    }
  },
  // 45 ─ Proportions
  {
    id: 45, name: 'Proportions', emoji: '⚖️', color: '#00cec9',
    generate(tier = 0) {
      const maxN = [6, 9, 12][Math.min(tier, 2)];
      const pool = [];
      for (let a = 1; a <= maxN; a++)
        for (let b = 2; b <= maxN; b++)
          for (let mult = 2; mult <= 8; mult++) {
            const c = a * mult, d = b * mult;
            pool.push(eqn(`Find x:  ${a}/${b} = x/${d}`, c));
            pool.push(eqn(`Find x:  ${a}/${b} = ${c}/x`, d));
          }
      return fillSheet(pool);
    }
  },
  // 46 ─ Percent Increase
  {
    id: 46, name: 'Percent Increase', emoji: '📈', color: '#00B894',
    generate(tier = 0) {
      const pool = [];
      const pcts = [5, 10, 20, 25, 50, 75, 100];
      for (const pct of pcts)
        for (let n = 10; n <= 200; n += 10) {
          const ans = n + (pct / 100) * n;
          if (Number.isInteger(ans)) pool.push(eqn(`${n} increased by ${pct}%`, ans));
        }
      return fillSheet(pool);
    }
  },
  // 47 ─ Percent Decrease
  {
    id: 47, name: 'Percent Decrease', emoji: '📉', color: '#d63031',
    generate(tier = 0) {
      const pool = [];
      const pcts = [5, 10, 20, 25, 50, 75];
      for (const pct of pcts)
        for (let n = 20; n <= 200; n += 10) {
          const ans = n - (pct / 100) * n;
          if (Number.isInteger(ans)) pool.push(eqn(`${n} decreased by ${pct}%`, ans));
        }
      return fillSheet(pool);
    }
  },
  // 48 ─ Area of Rectangle
  {
    id: 48, name: 'Area of Rectangle', emoji: '▭', color: '#fdcb6e',
    generate(tier = 0) {
      const max = [10, 15, 20][Math.min(tier, 2)];
      const pool = [];
      for (let l = 2; l <= max; l++)
        for (let w = 2; w <= max; w++)
          pool.push(eqn(`rect:${l}:${w}`, l * w));
      return fillSheet(pool);
    }
  },
  // 49 ─ Area of Triangle
  {
    id: 49, name: 'Area of Triangle', emoji: '🔺', color: '#e84393',
    generate(tier = 0) {
      const max = [10, 14, 20][Math.min(tier, 2)];
      const pool = [];
      for (let b = 2; b <= max; b += 2)
        for (let h = 2; h <= max; h++)
          pool.push(eqn(`tri:${b}:${h}`, (b * h) / 2));
      return fillSheet(pool);
    }
  },
  // 50 ─ Perimeter of Rectangle
  {
    id: 50, name: 'Perimeter', emoji: '📐', color: '#0984e3',
    generate(tier = 0) {
      const max = [10, 15, 25][Math.min(tier, 2)];
      const pool = [];
      for (let l = 2; l <= max; l++)
        for (let w = 2; w <= max; w++)
          if (l !== w) pool.push(eqn(`Perimeter: ${l} × ${w}`, 2 * (l + w)));
      return fillSheet(pool);
    }
  },
  // 51 ─ Square Roots (Perfect Squares)
  {
    id: 51, name: 'Square Roots', emoji: '√', color: '#a29bfe',
    generate(tier = 0) {
      const maxN = [9, 15, 20][Math.min(tier, 2)];
      const pool = [];
      for (let n = 1; n <= maxN; n++)
        pool.push(eqn(`√${n * n}`, n));
      return fillSheet(pool);
    }
  },

  // ============================================================
  // 8TH GRADE MATH — levels 52–59
  // ============================================================

  // 52 ─ Exponents
  {
    id: 52, name: 'Exponents', emoji: '⬆️', color: '#e17055',
    generate(tier = 0) {
      const maxB = [6, 8, 10][Math.min(tier, 2)];
      const maxE = [3, 4, 5][Math.min(tier, 2)];
      const pool = [];
      for (let b = 2; b <= maxB; b++)
        for (let e = 2; e <= maxE; e++)
          pool.push(eqn(`${b}^${e}`, Math.pow(b, e)));
      return fillSheet(pool);
    }
  },
  // 53 ─ Square Roots (Advanced)
  {
    id: 53, name: 'Square Roots (Advanced)', emoji: '🔲', color: '#6c5ce7',
    generate(tier = 0) {
      const maxN = [15, 20, 25][Math.min(tier, 2)];
      const pool = [];
      for (let n = 10; n <= maxN; n++)
        pool.push(eqn(`√${n * n}`, n));
      return fillSheet(pool);
    }
  },
  // 54 ─ Cube Numbers & Roots
  {
    id: 54, name: 'Cubes & Cube Roots', emoji: '📦', color: '#00cec9',
    generate(tier = 0) {
      const maxN = [5, 7, 9][Math.min(tier, 2)];
      const pool = [];
      for (let n = 2; n <= maxN; n++) {
        pool.push(eqn(`${n}³`, n * n * n));
        pool.push(eqn(`∛${n * n * n}`, n));
      }
      return fillSheet(pool);
    }
  },
  // 55 ─ Pythagorean Theorem
  {
    id: 55, name: 'Pythagorean Theorem', emoji: '📐', color: '#FDCB6E',
    generate(tier = 0) {
      const triples = [
        [3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15],
        [10,24,26],[12,16,20],[15,20,25],[20,21,29]
      ];
      if (tier >= 1) {
        for (const [a,b,c] of [[3,4,5],[5,12,13],[8,15,17]])
          triples.push([a*2,b*2,c*2], [a*3,b*3,c*3]);
      }
      const pool = [];
      for (const [a,b,c] of triples) {
        pool.push(eqn(`Find x:  ${a}² + ${b}² = x²`, c));
        pool.push(eqn(`Find x:  ${a}² + x² = ${c}²`, b));
        pool.push(eqn(`Find x:  x² + ${b}² = ${c}²`, a));
      }
      return fillSheet(pool);
    }
  },
  // 56 ─ Absolute Value
  {
    id: 56, name: 'Absolute Value', emoji: '||', color: '#74b9ff',
    generate(tier = 0) {
      const max = [15, 25, 50][Math.min(tier, 2)];
      const pool = [];
      for (let n = 1; n <= max; n++) {
        pool.push(eqn(`|${n}|`, n));
        pool.push(eqn(`|−${n}|`, n));
      }
      return fillSheet(pool);
    }
  },
  // 57 ─ Evaluate Expressions
  {
    id: 57, name: 'Evaluate Expressions', emoji: '🎲', color: '#fd79a8',
    generate(tier = 0) {
      const maxM = [4, 6, 9][Math.min(tier, 2)];
      const maxX = [8, 12, 20][Math.min(tier, 2)];
      const maxB = [10, 15, 20][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const m = randInt(2, maxM), x = randInt(1, maxX), b = randInt(1, maxB);
        return eqn(`${m}x + ${b}, if x = ${x}`, m * x + b);
      });
    }
  },
  // 58 ─ Volume of Rectangular Prism
  {
    id: 58, name: 'Volume', emoji: '📦', color: '#55efc4',
    generate(tier = 0) {
      const max = [6, 8, 12][Math.min(tier, 2)];
      const pool = [];
      for (let l = 2; l <= max; l++)
        for (let w = 2; w <= max; w++)
          for (let h = 2; h <= max; h++)
            pool.push(eqn(`Vol: ${l}×${w}×${h}`, l * w * h));
      return fillSheet(pool);
    }
  },
  // 59 ─ Scientific Notation
  {
    id: 59, name: 'Scientific Notation', emoji: '🔭', color: '#e84393',
    generate(tier = 0) {
      const pool = [];
      for (let c = 1; c <= 9; c++) {
        pool.push(eqn(`${c} × 10²`, c * 100));
        pool.push(eqn(`${c} × 10³`, c * 1000));
        if (tier >= 1) pool.push(eqn(`${c} × 10⁴`, c * 10000));
      }
      return fillSheet(pool);
    }
  },
];

// Placement test checkpoints (level IDs sampled during placement)
const PLACEMENT_CHECKPOINTS = [2, 5, 8, 11, 14, 18, 22, 25, 30, 38, 44, 52];

// First level ID of each grade (used for tab unlock logic)
const GRADE_STARTS = { 1: 0, 2: 6, 3: 12, 4: 20, 5: 28, 6: 36, 7: 44, 8: 52 };
const GRADE_NAMES  = { 1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: '5th', 6: '6th', 7: '7th', 8: '8th' };
