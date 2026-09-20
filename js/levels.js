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

// Questions shown on the previous sheet — set by app.js before each generate() call
let _excludeQs = new Set();

// Fill a sheet of n problems from a pool; prefers questions not in _excludeQs
function fillSheet(pool, n = 20) {
  if (!pool.length) return [];
  const fresh = pool.filter(p => !_excludeQs.has(p.question));
  if (fresh.length === 0) {
    // Full cycle — shuffle the whole pool
    const out = [];
    while (out.length < n) out.push(...shuffleArr(pool));
    return out.slice(0, n);
  }
  // Use fresh problems first; if fewer than n, append stale to reach n
  const base = shuffleArr(fresh);
  if (base.length >= n) return base.slice(0, n);
  const stale = pool.filter(p => _excludeQs.has(p.question));
  const extra = [];
  while (base.length + extra.length < n) extra.push(...shuffleArr(stale.length ? stale : pool));
  return [...base, ...extra].slice(0, n);
}

// For large solution spaces: generate randomly until n unique questions collected
function uniqueRandom(generatorFn, n = 20) {
  // Start with excluded questions already "seen" so they won't be picked first
  const seen = new Set(_excludeQs);
  const out  = [];
  let   tries = 0;
  while (out.length < n && tries < n * 200) {
    tries++;
    const p = generatorFn();
    if (p && !seen.has(p.question)) { seen.add(p.question); out.push(p); }
  }
  // Fallback: if pool is too constrained, retry without exclusions
  if (out.length < n) {
    const seen2 = new Set();
    let tries2 = 0;
    while (out.length < n && tries2 < n * 200) {
      tries2++;
      const p = generatorFn();
      if (p && !seen2.has(p.question)) { seen2.add(p.question); out.push(p); }
    }
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
  // ============================================================
  // GRADE 2 — EUREKA MATH (Great Minds)
  // San Diego Unified School District
  // ============================================================

  // ── Module 1: Sums and Differences to 100 ───────────────────

  // 0 ─ Fluency Sprint: Add & Subtract within 20
  {
    id: 0, name: 'Add & Subtract within 20', emoji: '⚡', color: '#FF6B6B',
    eureka: 'Module 1 — Fluency Sprint',
    generate(tier = 0) {
      const pool = [];
      // addition facts
      for (let a = 1; a <= 10; a++)
        for (let b = 1; b <= 10; b++)
          if (a + b <= 20) pool.push(arith(`${a} + ${b}`, a + b));
      // subtraction facts
      for (let a = 2; a <= 20; a++)
        for (let b = 1; b < a; b++)
          pool.push(arith(`${a} − ${b}`, a - b));
      return fillSheet(pool);
    }
  },

  // 1 ─ Number Bonds — Missing Part (bonds to 10)
  {
    id: 1, name: 'Number Bonds to 10', emoji: '🔗', color: '#FF8E53',
    eureka: 'Module 1 — Number Bonds',
    generate(tier = 0) {
      const pool = [];
      // bonds to 10: a + ? = 10
      for (let a = 1; a <= 9; a++) pool.push(eqn(`${a} + __ = 10`, 10 - a));
      // bonds to 10: ? + b = 10
      for (let b = 1; b <= 9; b++) pool.push(eqn(`__ + ${b} = 10`, 10 - b));
      if (tier >= 1) {
        // bonds to other numbers up to 20
        for (let total = 11; total <= 20; total++)
          for (let a = 1; a < total; a++)
            pool.push(eqn(`${a} + __ = ${total}`, total - a));
      }
      return fillSheet(pool);
    }
  },

  // 2 ─ Make Ten — Add Across 10
  {
    id: 2, name: 'Make Ten Strategy', emoji: '🔟', color: '#FECA57',
    eureka: 'Module 1 — Make Ten',
    generate(tier = 0) {
      // sums 11–20 where bridging through 10 is the key strategy
      const pool = [];
      for (let a = 6; a <= 9; a++)
        for (let b = 2; b <= 9; b++)
          if (a + b >= 11 && a + b <= 20)
            pool.push(arith(`${a} + ${b}`, a + b));
      if (tier >= 1) {
        // missing addend across 10: 9 + __ = 15
        for (let a = 6; a <= 9; a++)
          for (let s = 11; s <= 18; s++)
            if (s - a >= 2) pool.push(eqn(`${a} + __ = ${s}`, s - a));
      }
      return fillSheet(pool);
    }
  },

  // 3 ─ Two-Digit + One-Digit (within 100)
  {
    id: 3, name: '2-Digit + 1-Digit', emoji: '➕', color: '#54A0FF',
    eureka: 'Module 1 — Add within 100',
    generate(tier = 0) {
      const maxA = [49, 79, 99][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a = randInt(10, maxA), b = randInt(1, 9);
        return arith(`${a} + ${b}`, a + b);
      });
    }
  },

  // 4 ─ Two-Digit + Two-Digit within 100
  {
    id: 4, name: '2-Digit + 2-Digit within 100', emoji: '💯', color: '#1DD1A1',
    eureka: 'Module 1 — Add within 100',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(10, tier >= 1 ? 89 : 59);
        const b = randInt(10, 99 - a);
        return arith(`${a} + ${b}`, a + b);
      });
    }
  },

  // 5 ─ Two-Digit Subtraction within 100
  {
    id: 5, name: '2-Digit Subtraction within 100', emoji: '➖', color: '#5F27CD',
    eureka: 'Module 1 — Subtract within 100',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(tier >= 1 ? 30 : 20, 99);
        const b = randInt(10, a - 1);
        return arith(`${a} − ${b}`, a - b);
      });
    }
  },

  // ── Module 3: Place Value, Counting & Comparison to 1,000 ───

  // 6 ─ Skip Count by 5s
  {
    id: 6, name: 'Skip Count by 5s', emoji: '🖐️', color: '#FF9FF3',
    eureka: 'Module 3 — Skip Counting',
    generate(tier = 0) {
      const maxStart = [95, 195, 495][Math.min(tier, 2)];
      const pool = [];
      for (let n = 5; n <= maxStart; n += 5)
        pool.push(eqn(`${n}, __, ${n + 10} — skip by 5`, n + 5));
      return fillSheet(pool);
    }
  },

  // 7 ─ Skip Count by 10s and 100s
  {
    id: 7, name: 'Skip Count by 10s & 100s', emoji: '💨', color: '#00D2D3',
    eureka: 'Module 3 — Skip Counting',
    generate(tier = 0) {
      const pool = [];
      // by 10s up to 200
      for (let n = 10; n <= 190; n += 10)
        pool.push(eqn(`${n}, __, ${n + 20} — skip by 10`, n + 10));
      if (tier >= 1) {
        // by 100s up to 900
        for (let n = 100; n <= 800; n += 100)
          pool.push(eqn(`${n}, __, ${n + 200} — skip by 100`, n + 100));
      }
      return fillSheet(pool);
    }
  },

  // 8 ─ Expanded Form
  {
    id: 8, name: 'Expanded Form', emoji: '🏗️', color: '#F368E0',
    eureka: 'Module 3 — Place Value',
    generate(tier = 0) {
      const pool = [];
      if (tier === 0) {
        // two-digit expanded form: 40 + 7 = ?
        for (let tens = 1; tens <= 9; tens++)
          for (let ones = 0; ones <= 9; ones++)
            if (ones > 0) pool.push(arith(`${tens * 10} + ${ones}`, tens * 10 + ones));
      } else {
        // three-digit expanded form: 300 + 40 + 6 = ?
        for (let h = 1; h <= 9; h++)
          for (let t = 0; t <= 9; t++)
            for (let o = 1; o <= 9; o++)
              pool.push(arith(`${h*100} + ${t*10} + ${o}`, h*100 + t*10 + o));
      }
      return fillSheet(pool);
    }
  },

  // 9 ─ Place Value — Name the Digit
  {
    id: 9, name: 'Place Value — Find the Digit', emoji: '🔍', color: '#EE5A24',
    eureka: 'Module 3 — Place Value',
    generate(tier = 0) {
      const pool = [];
      const places = tier >= 1
        ? ['ones', 'tens', 'hundreds']
        : ['ones', 'tens'];
      for (let n = 10; n <= (tier >= 1 ? 999 : 99); n++) {
        for (const place of places) {
          let digit;
          if (place === 'ones')     digit = n % 10;
          if (place === 'tens')     digit = Math.floor(n / 10) % 10;
          if (place === 'hundreds') digit = Math.floor(n / 100);
          if (digit !== undefined)
            pool.push(eqn(`${place}s digit of ${n}`, digit));
        }
      }
      return fillSheet(pool);
    }
  },

  // ── Modules 4–5: Add & Subtract within 200 and 1,000 ────────

  // 10 ─ Add within 200
  {
    id: 10, name: 'Add within 200', emoji: '📈', color: '#6C5CE7',
    eureka: 'Module 4 — Add within 200',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(tier >= 1 ? 51 : 11, 189);
        const b = randInt(10, 200 - a);
        return arith(`${a} + ${b}`, a + b);
      });
    }
  },

  // 11 ─ Subtract within 200
  {
    id: 11, name: 'Subtract within 200', emoji: '📉', color: '#0984E3',
    eureka: 'Module 4 — Subtract within 200',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(tier >= 1 ? 101 : 21, 200);
        const b = randInt(10, a - 1);
        return arith(`${a} − ${b}`, a - b);
      });
    }
  },

  // 12 ─ Add within 1,000
  {
    id: 12, name: 'Add within 1,000', emoji: '🔢', color: '#00B894',
    eureka: 'Module 5 — Add within 1,000',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(100, tier >= 1 ? 899 : 699);
        const b = randInt(100, 999 - a);
        return arith(`${a} + ${b}`, a + b);
      });
    }
  },

  // 13 ─ Subtract within 1,000
  {
    id: 13, name: 'Subtract within 1,000', emoji: '🔻', color: '#FDCB6E',
    eureka: 'Module 5 — Subtract within 1,000',
    generate(tier = 0) {
      return uniqueRandom(() => {
        const a = randInt(200, 999);
        const b = randInt(100, a - 1);
        return arith(`${a} − ${b}`, a - b);
      });
    }
  },

  // ── Module 6: Foundations of Multiplication & Division ───────

  // 14 ─ Equal Groups — Repeated Addition
  {
    id: 14, name: 'Equal Groups', emoji: '🟰', color: '#E17055',
    eureka: 'Module 6 — Foundations of Multiplication',
    generate(tier = 0) {
      const maxG = [5, 8, 10][Math.min(tier, 2)];
      const maxN = [5, 8, 10][Math.min(tier, 2)];
      const pool = [];
      for (let groups = 2; groups <= maxG; groups++)
        for (let n = 2; n <= maxN; n++)
          pool.push(arith(`${groups} groups of ${n}`, groups * n));
      return fillSheet(pool);
    }
  },

  // 15 ─ Arrays (rows × columns)
  {
    id: 15, name: 'Arrays', emoji: '⬛', color: '#C0392B',
    eureka: 'Module 6 — Arrays & Repeated Addition',
    generate(tier = 0) {
      const maxR = [4, 6, 10][Math.min(tier, 2)];
      const maxC = [4, 6, 10][Math.min(tier, 2)];
      const pool = [];
      for (let r = 2; r <= maxR; r++)
        for (let c = 2; c <= maxC; c++)
          pool.push(arith(`${r} rows × ${c} columns`, r * c));
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
    id: 48, name: 'Area of Rectangle', emoji: '▭', color: '#fdcb6e', grade: 3,
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
    id: 49, name: 'Area of Triangle', emoji: '🔺', color: '#e84393', grade: 6,
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
    id: 50, name: 'Perimeter', emoji: '📐', color: '#0984e3', grade: 3,
    generate(tier = 0) {
      const max = [10, 15, 25][Math.min(tier, 2)];
      const pool = [];
      for (let l = 2; l <= max; l++)
        for (let w = 2; w <= max; w++)
          if (l !== w) pool.push(eqn(`perim:${l}:${w}`, 2 * (l + w)));
      return fillSheet(pool);
    }
  },
  // 51 ─ Square Roots (Perfect Squares)
  {
    id: 51, name: 'Square Roots', emoji: '√', color: '#a29bfe', grade: 8,
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
    id: 56, name: 'Absolute Value', emoji: '||', color: '#74b9ff', grade: 6,
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
        return eqn(`eval:${m}x + ${b}:${x}`, m * x + b);
      });
    }
  },
  // 58 ─ Volume of Rectangular Prism
  {
    id: 58, name: 'Volume', emoji: '📦', color: '#55efc4', grade: 5,
    generate(tier = 0) {
      const max = [6, 8, 12][Math.min(tier, 2)];
      const pool = [];
      for (let l = 2; l <= max; l++)
        for (let w = 2; w <= max; w++)
          for (let h = 2; h <= max; h++)
            pool.push(eqn(`vol:${l}:${w}:${h}`, l * w * h));
      return fillSheet(pool);
    }
  },
  // 59 ─ Scientific Notation
  {
    id: 59, name: 'Scientific Notation', emoji: '🔭', color: '#e84393',
    generate(tier = 0) {
      const pool = [];
      for (let c = 1; c <= 9; c++) {
        pool.push(eqn(`calc:${c} × 10²`, c * 100));
        pool.push(eqn(`calc:${c} × 10³`, c * 1000));
        if (tier >= 1) pool.push(eqn(`calc:${c} × 10⁴`, c * 10000));
      }
      return fillSheet(pool);
    }
  },

  // ── SKILLS (grade 9, unlocked early) ─────────────────────────

  // 60 ─ Telling Time: O'clock & Half Hour
  {
    id: 60, name: 'Telling Time', emoji: '🕐', color: '#6C5CE7', grade: 1,
    generate() {
      return uniqueRandom(() => {
        const h = randInt(1, 12);
        const m = [0, 30][randInt(0, 1)];
        const ms = m.toString().padStart(2, '0');
        return { type: 'time', question: `clock:${h}:${ms}`, answer: `${h}:${ms}` };
      });
    }
  },

  // 61 ─ Telling Time: Quarter Hours
  {
    id: 61, name: 'Time: Quarter Hours', emoji: '🕒', color: '#A29BFE', grade: 2,
    generate() {
      return uniqueRandom(() => {
        const h = randInt(1, 12);
        const m = [0, 15, 30, 45][randInt(0, 3)];
        const ms = m.toString().padStart(2, '0');
        return { type: 'time', question: `clock:${h}:${ms}`, answer: `${h}:${ms}` };
      });
    }
  },

  // 62 ─ Counting Coins: Pennies & Nickels
  {
    id: 62, name: 'Counting Coins', emoji: '🪙', color: '#FDCB6E', grade: 2,
    generate() {
      return uniqueRandom(() => {
        const n = randInt(0, 4);
        const p = randInt(1, 9);
        const total = n * 5 + p;
        return { type: 'money', question: `coins:0:0:${n}:${p}`, answer: total };
      });
    }
  },

  // 63 ─ Mixed Coins
  {
    id: 63, name: 'Mixed Coins', emoji: '💰', color: '#E17055', grade: 2,
    generate() {
      return uniqueRandom(() => {
        const q = randInt(0, 3);
        const d = randInt(0, 4);
        const n = randInt(0, 4);
        const p = randInt(0, 9);
        const total = q * 25 + d * 10 + n * 5 + p;
        if (total === 0) return null;
        return { type: 'money', question: `coins:${q}:${d}:${n}:${p}`, answer: total };
      });
    }
  },

  // 64 ─ Word Problems
  {
    id: 64, name: 'Word Problems', emoji: '📖', color: '#00B894', grade: 2,
    generate() {
      const mk = (q, a) => ({ type: 'word', question: q, answer: a });
      const templates = [
        () => { const a = randInt(3, 14), b = randInt(2, 10); return mk(`🍎 Sara had ${a} apples. She picked ${b} more. How many apples does she have now?`, a + b); },
        () => { const a = randInt(6, 20), b = randInt(2, 5); return mk(`🐦 ${a} birds sat on a branch. ${b} flew away. How many birds are left?`, a - b); },
        () => { const a = randInt(2, 6), b = randInt(2, 5); return mk(`🍪 Jake baked ${a} trays of cookies. Each tray holds ${b} cookies. How many cookies total?`, a * b); },
        () => { const a = randInt(2, 5); const b = a * randInt(2, 6); return mk(`🍕 ${b} slices of pizza are shared equally among ${a} friends. How many slices each?`, b / a); },
        () => { const a = randInt(4, 14), b = randInt(2, 10); return mk(`⚽ The home team scored ${a} goals. The visitors scored ${b}. How many goals were scored in total?`, a + b); },
        () => { const a = randInt(10, 25), b = randInt(2, 8); return mk(`📚 A shelf has ${a} books. ${b} are checked out. How many books remain?`, a - b); },
        () => { const a = randInt(2, 7), b = randInt(2, 6); return mk(`🌼 Emma planted ${a} rows with ${b} flowers each. How many flowers did she plant?`, a * b); },
        () => { const a = randInt(2, 5); const b = a * randInt(2, 7); return mk(`🍬 ${b} candies are packed into bags of ${a}. How many bags are there?`, b / a); },
        () => { const a = randInt(6, 18), b = randInt(2, 5), c = randInt(1, 4); return mk(`🎒 Tom has ${a} marbles. He gives ${b} to Sam and wins ${c} from a game. How many marbles does Tom have now?`, a - b + c); },
        () => { const a = randInt(3, 12), b = randInt(2, 8); return mk(`🐟 A tank has ${a} goldfish and ${b} angelfish. How many fish are there in all?`, a + b); },
        () => { const pp = randInt(1, 4), n = randInt(3, 8); return mk(`🎈 Each of ${n} children gets ${pp} balloon${pp > 1 ? 's' : ''}. How many balloons are needed?`, pp * n); },
        () => { const a = randInt(5, 15), b = randInt(2, 6); return mk(`🚌 A bus has ${a} passengers. At the stop, ${b} get on. How many passengers are on the bus now?`, a + b); },
        () => { const a = randInt(8, 20), b = randInt(3, 7); return mk(`🌟 ${a} children signed up for the talent show, but ${b} dropped out. How many are performing?`, a - b); },
        () => { const p = randInt(2, 5); const t = p * randInt(3, 6); return mk(`🥚 Eggs come in cartons of ${p}. There are ${t} eggs. How many cartons are that?`, t / p); },
        () => { const a = randInt(3, 9), b = randInt(3, 9); return mk(`🦋 ${a} butterflies land on red flowers and ${b} land on yellow flowers. How many butterflies are there altogether?`, a + b); },
      ];
      return uniqueRandom(() => {
        const fn = templates[randInt(0, templates.length - 1)];
        try { return fn(); } catch(e) { return null; }
      });
    }
  },

  // ── CC GAP FILLS — grades 1–5 ────────────────────────────────

  // 65 ─ Place Value (Tens & Ones)
  {
    id: 65, name: 'Place Value', emoji: '🔟', color: '#FF6B6B', grade: 1,
    generate(tier = 0) {
      const maxN = [49, 79, 99][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const n = randInt(11, maxN);
        const tens = Math.floor(n / 10);
        const ones = n % 10;
        if (randInt(0, 1) === 0)
          return eqn(`How many tens in ${n}?`, tens);
        else
          return eqn(`How many ones in ${n}?`, ones);
      });
    }
  },

  // 66 ─ Skip Counting
  {
    id: 66, name: 'Skip Counting', emoji: '🦘', color: '#FF8E53', grade: 2,
    generate(tier = 0) {
      const stepChoices = [
        [2, 5, 10],
        [2, 3, 5, 10, 100],
        [2, 3, 4, 5, 6, 10, 100],
      ][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const step  = stepChoices[randInt(0, stepChoices.length - 1)];
        const start = randInt(1, 8) * step;
        const shown = randInt(3, 4);
        const seq   = Array.from({ length: shown }, (_, i) => start + i * step);
        return eqn(`${seq.join(', ')}, ___`, start + shown * step);
      });
    }
  },

  // 67 ─ Even & Odd
  {
    id: 67, name: 'Even & Odd', emoji: '2️⃣', color: '#5F27CD', grade: 2,
    generate(tier = 0) {
      const maxN = [20, 50, 100][Math.min(tier, 2)];
      const pool = [];
      for (let n = 2; n <= maxN - 2; n += 2) {
        pool.push(eqn(`Next even after ${n}`, n + 2));
        pool.push(eqn(`Next odd after ${n - 1}`, n + 1));
        if (tier >= 1) {
          pool.push(eqn(`Next even after ${n + 1}`, n + 2));
          pool.push(eqn(`Next odd after ${n}`, n + 1));
        }
      }
      return fillSheet(pool);
    }
  },

  // 68 ─ Equivalent Fractions
  {
    id: 68, name: 'Equivalent Fractions', emoji: '⚖️', color: '#0984e3', grade: 3,
    generate(tier = 0) {
      const pool = [];
      const maxMult = [4, 6, 8][Math.min(tier, 2)];
      const fracs = [[1,2],[1,3],[1,4]];
      if (tier >= 1) fracs.push([1,5],[2,3],[3,4]);
      for (const [num, den] of fracs) {
        for (let mult = 2; mult <= maxMult; mult++) {
          pool.push(eqn(`Find x:  ${num}/${den} = x/${den * mult}`, num * mult));
          pool.push(eqn(`Find x:  ${num * mult}/${den * mult} = ${num}/x`, den));
        }
      }
      return fillSheet(pool);
    }
  },

  // 69 ─ Fractions: Add & Subtract (Like Denominators)
  {
    id: 69, name: 'Fractions: Add & Subtract', emoji: '➕', color: '#00B894', grade: 4,
    generate(tier = 0) {
      // Only use denominators whose reciprocals are terminating decimals
      const denoms = [
        [2, 4],
        [2, 4, 5, 10],
        [2, 4, 5, 8, 10],
      ][Math.min(tier, 2)];
      const pool = [];
      for (const d of denoms) {
        for (let a = 1; a < d; a++) {
          for (let b = 1; b < d; b++) {
            const sumAns = parseFloat(((a + b) / d).toFixed(3));
            pool.push(arith(`${a}/${d} + ${b}/${d}`, sumAns));
            if (a > b) {
              const diffAns = parseFloat(((a - b) / d).toFixed(3));
              if (diffAns > 0) pool.push(arith(`${a}/${d} − ${b}/${d}`, diffAns));
            }
          }
        }
      }
      return fillSheet(pool);
    }
  },

  // 70 ─ Fractions × Whole Number
  {
    id: 70, name: 'Fractions × Whole Number', emoji: '✖️', color: '#FDCB6E', grade: 4,
    generate(tier = 0) {
      const pool = [];
      const fracs = [[1,2],[1,4],[3,4]];
      if (tier >= 1) fracs.push([1,5],[2,5],[3,5],[4,5]);
      if (tier >= 2) fracs.push([1,8],[3,8],[5,8]);
      const maxW = [12, 20, 30][Math.min(tier, 2)];
      for (const [num, den] of fracs) {
        for (let w = den; w <= maxW; w += den) {
          const ans = (num * w) / den;
          if (Number.isInteger(ans)) pool.push(arith(`${num}/${den} × ${w}`, ans));
        }
      }
      return fillSheet(pool);
    }
  },

  // 71 ─ Fractions: Unlike Denominators
  {
    id: 71, name: 'Fractions: Unlike Denominators', emoji: '🧮', color: '#6C5CE7', grade: 5,
    generate(tier = 0) {
      const denoms = tier === 0 ? [2, 4, 5, 10] : [2, 4, 5, 8, 10, 20];
      const pool = [];
      for (const d1 of denoms) {
        for (const d2 of denoms) {
          if (d1 >= d2) continue;
          for (let n1 = 1; n1 < d1; n1++) {
            for (let n2 = 1; n2 < d2; n2++) {
              const sum = parseFloat((n1 / d1 + n2 / d2).toFixed(3));
              pool.push(arith(`${n1}/${d1} + ${n2}/${d2}`, sum));
              const bigger = n1 / d1 >= n2 / d2 ? [n1, d1, n2, d2] : [n2, d2, n1, d1];
              const diff = parseFloat((bigger[0] / bigger[1] - bigger[2] / bigger[3]).toFixed(3));
              if (diff > 0) pool.push(arith(`${bigger[0]}/${bigger[1]} − ${bigger[2]}/${bigger[3]}`, diff));
            }
          }
        }
      }
      return fillSheet(pool);
    }
  },

  // 72 ─ Decimal Multiplication
  {
    id: 72, name: 'Decimal Multiplication', emoji: '🔢', color: '#e84393', grade: 5,
    generate(tier = 0) {
      const maxW = [9, 14, 19][Math.min(tier, 2)];
      const maxB = [5, 7, 9][Math.min(tier, 2)];
      return uniqueRandom(() => {
        const a  = randInt(1, maxW);
        const ad = randInt(1, 9);
        const b  = randInt(2, maxB);
        const result = parseFloat(((a + ad / 10) * b).toFixed(1));
        return arith(`${a}.${ad} × ${b}`, result);
      });
    }
  },
];

// Placement test checkpoints (level IDs sampled during placement)
const PLACEMENT_CHECKPOINTS = [2, 5, 60, 65, 8, 62, 64, 11, 68, 14, 18, 22, 25, 71, 30, 38, 44, 52];

// First level ID of each grade (used for tab unlock logic)
const GRADE_STARTS = { 1: 0, 2: 6, 3: 12, 4: 20, 5: 28, 6: 36, 7: 44, 8: 52 };
const GRADE_NAMES  = { 1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: '5th', 6: '6th', 7: '7th', 8: '8th' };
