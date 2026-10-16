// ============================================================
// NOETIC LEARNING MATH CONTEST — Grade 2 Practice
// 5 topic banks (15 problems each) + mock contest mode
// ============================================================

const NOETIC_G2 = [

  // ── Topic 0: Number Patterns ─────────────────────────────────
  {
    id: 0,
    name: 'Number Patterns',
    emoji: '🔢',
    color: '#e84040',
    tip: 'Find the rule! Numbers going up or down by the same amount each time? Or multiplying?',
    problems: [
      { q: 'What comes next?\n5, 10, 15, 20, ___', type: 'input', answer: 25 },
      { q: 'What comes next?\n100, 90, 80, 70, ___', type: 'input', answer: 60 },
      { q: 'What is the missing number?\n3, ___, 9, 12, 15', type: 'input', answer: 6 },
      { q: 'What is the missing number?\n24, 21, ___, 15, 12', type: 'input', answer: 18 },
      { q: 'Which number does NOT belong?\n10, 20, 25, 30, 40', type: 'input', answer: 25 },
      { q: 'What is the 6th number in this pattern?\n7, 14, 21, 28, 35, ___', type: 'input', answer: 42 },
      { q: 'What comes next?\n3, 7, 11, 15, ___', type: 'input', answer: 19 },
      { q: 'What comes next?\n1, 2, 4, 8, ___', type: 'input', answer: 16 },
      { q: 'What is the missing number?\n50, ___, 42, 38, 34', type: 'input', answer: 46 },
      { q: 'The rule is ×3. Fill in the blank.\n2→6, 4→12, 7→___', type: 'input', answer: 21 },
      { q: 'How many even numbers are between 11 and 21?\n(Do not count 11 or 21)', type: 'input', answer: 5 },
      { q: 'What is the 8th even number starting from 2?\n2, 4, 6, 8, 10, 12, 14, ___', type: 'input', answer: 16 },
      { q: 'What is the missing number?\n___, 15, 12, 9, 6', type: 'input', answer: 18 },
      { q: 'What comes next?\n4, 9, 14, 19, ___', type: 'input', answer: 24 },
      { q: 'What comes next?\n1, 4, 9, 16, 25, ___\n(Hint: 1×1=1, 2×2=4, 3×3=9…)', type: 'input', answer: 36 },
    ]
  },

  // ── Topic 1: Multi-Step Word Problems ────────────────────────
  {
    id: 1,
    name: 'Word Problems',
    emoji: '📖',
    color: '#e06c00',
    tip: 'Read TWICE. Underline the question. Write down what you know before you calculate.',
    problems: [
      { q: 'A book has 45 pages. Sam reads 12 pages on Monday and 15 pages on Tuesday.\nHow many pages does Sam still need to read?', type: 'input', answer: 18 },
      { q: 'Jake has 15 stickers. He gives 6 to Ana and 4 to Ben.\nHow many stickers does Jake have left?', type: 'input', answer: 5 },
      { q: 'There are 3 bags with 6 apples each. Tom eats 4 apples.\nHow many apples remain?', type: 'input', answer: 14 },
      { q: 'A store has 50 red apples and 30 green apples. They sell 35 apples.\nHow many apples are left?', type: 'input', answer: 45 },
      { q: 'Emma has 67 points. She needs 100 points to win a prize.\nShe then scores 28 more points.\nHow many MORE points does she still need to win?', type: 'input', answer: 5 },
      { q: 'A box holds 8 cookies. There are 5 boxes.\nIf 12 cookies are eaten, how many cookies are left?', type: 'input', answer: 28 },
      { q: 'Ana has 14 marbles. Ben has TWICE as many as Ana.\nHow many marbles do they have TOGETHER?', type: 'input', answer: 42 },
      { q: 'There are 20 cookies shared equally among 4 friends.\nThen each friend eats 2 cookies.\nHow many cookies does each friend have now?', type: 'input', answer: 3 },
      { q: 'A number is 12 more than 35.\nWhat is 10 LESS than that number?', type: 'input', answer: 37 },
      { q: 'Kim reads 8 pages a day.\nHow many pages does she read in 5 days?', type: 'input', answer: 40 },
      { q: 'There are 3 classrooms each with 24 students.\n15 students are absent today.\nHow many students are present in all?', type: 'input', answer: 57 },
      { q: 'In a class, each of 8 students has 3 pencils.\nThe teacher adds 6 more pencils to the group.\nHow many pencils are there in all?', type: 'input', answer: 30 },
      { q: 'A farmer collects 9 eggs on Monday, 7 on Tuesday, and 11 on Wednesday.\nHe sells a dozen eggs (12). How many eggs does he have left?', type: 'input', answer: 15 },
      { q: 'Tom saves $2 every week.\nAfter 8 weeks, he spends $7 on a book.\nHow much money does Tom have left?', type: 'input', answer: 9, unit: '$' },
      { q: 'Class A has 28 students. Class B has 35 students.\n7 students move from Class B to Class A.\nNow how many MORE students are in Class A than in Class B?', type: 'input', answer: 7 },
    ]
  },

  // ── Topic 2: Geometry & Shapes ───────────────────────────────
  {
    id: 2,
    name: 'Geometry',
    emoji: '🔷',
    color: '#1a7ac7',
    tip: 'Count carefully! For perimeter, add ALL sides. For area, multiply length × width.',
    problems: [
      { q: 'How many sides does a hexagon have?', type: 'input', answer: 6 },
      { q: 'A square has a perimeter of 24 cm.\nWhat is the length of ONE side?', type: 'input', answer: 6, unit: 'cm' },
      { q: 'A triangle has sides of 5 cm, 7 cm, and 8 cm.\nWhat is its perimeter?', type: 'input', answer: 20, unit: 'cm' },
      { q: 'How many faces does a cube have?', type: 'input', answer: 6 },
      { q: 'How many lines of symmetry does a square have?', type: 'input', answer: 4 },
      { q: 'A rectangle is 6 cm long and 4 cm wide.\nWhat is its perimeter?', type: 'input', answer: 20, unit: 'cm' },
      { q: 'How many corners (vertices) does an octagon have?', type: 'input', answer: 8 },
      { q: 'A square has an area of 16 square cm.\nWhat is the length of one side?', type: 'input', answer: 4, unit: 'cm' },
      { q: 'How many edges does a cube have?', type: 'input', answer: 12 },
      { q: 'A rectangle has length 9 cm and width 3 cm.\nWhat is its area?', type: 'input', answer: 27, unit: 'cm²' },
      { q: 'A shape has 3 sides, all the same length.\nEach side is 7 cm long.\nWhat is the perimeter?', type: 'input', answer: 21, unit: 'cm' },
      { q: 'How many right angles does a rectangle have?', type: 'input', answer: 4 },
      { q: 'A rectangle is 5 m long and 3 m wide.\nWhat is its area?', type: 'input', answer: 15, unit: 'm²' },
      { q: 'A rectangle has perimeter 18 cm and length 6 cm.\nWhat is its width?', type: 'input', answer: 3, unit: 'cm' },
      { q: 'How many triangles are there in a shape that looks like a large triangle divided into 4 equal smaller triangles?\n(Count ALL triangles, big and small)', type: 'input', answer: 5 },
    ]
  },

  // ── Topic 3: Money & Time ─────────────────────────────────────
  {
    id: 3,
    name: 'Money & Time',
    emoji: '⏰',
    color: '#0e8f6b',
    tip: 'For calendar problems, count carefully day by day. For money, add the biggest coins first!',
    problems: [
      { q: 'You have 2 quarters, 3 dimes, and 4 pennies.\nHow many cents do you have in all?', type: 'input', answer: 84, unit: '¢' },
      { q: 'A pencil costs 45¢. You pay with $1.00 (100¢).\nWhat is your change?', type: 'input', answer: 55, unit: '¢' },
      { q: 'How many minutes are in 2 hours and 30 minutes?', type: 'input', answer: 150, unit: 'minutes' },
      { q: 'A movie starts at 2:15 PM and ends at 4:00 PM.\nHow long is the movie in minutes?', type: 'input', answer: 105, unit: 'minutes' },
      { q: 'How many days are in 3 weeks?', type: 'input', answer: 21, unit: 'days' },
      { q: 'It is 9:30 AM. Your game starts in 2 hours and 15 minutes.\nWhat time does your game start?', type: 'input', answer: '11:45' },
      { q: 'You buy 3 items for 25¢ each.\nHow many cents do you spend in all?', type: 'input', answer: 75, unit: '¢' },
      { q: 'A clock shows 3:45 PM.\nWhat time will it be in 30 minutes?', type: 'input', answer: '4:15' },
      { q: 'You have $1.25. You spend 85¢.\nHow many cents do you have left?', type: 'input', answer: 40, unit: '¢' },
      { q: 'January 1 is a Monday.\nWhat day of the week is January 15?', type: 'input', answer: 'Monday' },
      { q: 'A library book was due March 10.\nYou return it March 17.\nHow many days late is the book?', type: 'input', answer: 7, unit: 'days' },
      { q: 'How many weeks are in one year?', type: 'input', answer: 52, unit: 'weeks' },
      { q: 'Apples cost 30¢ each.\nHow much do 5 apples cost?', type: 'input', answer: 150, unit: '¢' },
      { q: 'School starts at 8:00 AM and ends at 2:30 PM.\nHow many hours and minutes is the school day?\n(Write the number of total minutes)', type: 'input', answer: 390, unit: 'minutes' },
      { q: 'If today is Tuesday the 5th, what is the date of next Monday?', type: 'input', answer: 11 },
    ]
  },

  // ── Topic 4: Logic & Reasoning ───────────────────────────────
  {
    id: 4,
    name: 'Logic & Reasoning',
    emoji: '🧠',
    color: '#5b34c4',
    tip: 'Read carefully. Try all possible answers. Use guess-and-check if needed!',
    problems: [
      { q: 'I am a 2-digit even number.\nMy digits add up to 9.\nI am the SMALLEST number that fits.\nWhat number am I?', type: 'input', answer: 18 },
      { q: 'A number is doubled and then 3 is subtracted.\nThe result is 11.\nWhat is the original number?', type: 'input', answer: 7 },
      { q: 'The sum of two consecutive numbers is 37.\nWhat is the SMALLER number?\n(Consecutive means one right after the other)', type: 'input', answer: 18 },
      { q: 'A farmer has chickens and cows.\nThere are 10 animals total and 28 legs.\nHow many CHICKENS are there?\n(Chickens have 2 legs, cows have 4)', type: 'input', answer: 6 },
      { q: 'A number times itself equals 49.\nWhat is the number?', type: 'input', answer: 7 },
      { q: 'Three friends share 45 stickers equally.\nThen each friend gives 5 stickers to their teacher.\nHow many stickers does each friend have left?', type: 'input', answer: 10 },
      { q: 'Ana is taller than Bob. Bob is taller than Carl.\nWho is the TALLEST of the three?', type: 'input', answer: 'Ana' },
      { q: 'A number is 3 more than TWICE another number.\nThe smaller number is 7.\nWhat is the LARGER number?', type: 'input', answer: 17 },
      { q: 'If you count by 3s starting at 2:\n2, 5, 8, 11, 14...\nWhat is the 17th number in this sequence?', type: 'input', answer: 50 },
      { q: 'In how many different ways can 3 books be placed on a shelf?\n(Each arrangement is different)', type: 'input', answer: 6 },
      { q: 'What is the LARGEST 3-digit number you can make\nusing the digits 2, 7, and 5?\n(Use each digit exactly once)', type: 'input', answer: 752 },
      { q: 'In a class, 15 students have a dog, 12 have a cat,\nand 5 have BOTH a dog and a cat.\nHow many students have a pet?', type: 'input', answer: 22 },
      { q: 'A bag has 3 red and 3 blue marbles.\nWhat is the MINIMUM number you must draw (without looking)\nto be SURE you have at least one of EACH color?', type: 'input', answer: 4 },
      { q: 'I am thinking of a number.\nWhen I multiply it by 4, I get 36.\nWhat is my number?', type: 'input', answer: 9 },
      { q: 'Tom, Ana, and Ben each have a different pet: a dog, a cat, or a fish.\nTom does NOT have a cat.\nAna does NOT have a dog or a cat.\nWhat pet does BEN have?', type: 'input', answer: 'cat' },
    ]
  }

];

// Helper: build a mock contest by sampling 4 from each topic (20 total)
function buildNoeticMock(seed) {
  const rng = (n, s) => (s * 1664525 + 1013904223) % (2 ** 32) % n;
  let s = seed || Date.now();
  const picks = [];
  NOETIC_G2.forEach(topic => {
    const shuffled = [...topic.problems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      s = (s * 1664525 + 1013904223) >>> 0;
      const j = s % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffled.slice(0, 4).forEach(p => picks.push({ ...p, _topic: topic.name }));
  });
  // shuffle the 20 together
  for (let i = picks.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [picks[i], picks[j]] = [picks[j], picks[i]];
  }
  return picks;
}
