// ============================================================
// NOETIC LEARNING MATH CONTEST — Grade 2 Practice
// Problems modeled on official Noetic G2 difficulty & style
// ============================================================

const NOETIC_G2 = [

  // ── Topic 0: Number Patterns ─────────────────────────────────
  {
    id: 0,
    name: 'Number Patterns',
    emoji: '🔢',
    color: '#e84040',
    tip: 'Find HOW the sequence changes each step. Look at the differences between terms!',
    problems: [
      { q: 'What comes next?\n1, 3, 6, 10, 15, ___\n(Hint: +2, +3, +4, +5, +6…)', type: 'input', answer: 21 },
      { q: 'What comes next?\n2, 3, 5, 8, 13, ___\n(Each number = the sum of the two before it)', type: 'input', answer: 21 },
      { q: 'What is the sum of all the numbers\nfrom 1 to 10?\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ?', type: 'input', answer: 55 },
      { q: 'What comes next?\n3, 6, 12, 24, ___', type: 'input', answer: 48 },
      { q: 'What comes next?\n1, 4, 9, 16, 25, ___\n(1×1, 2×2, 3×3, 4×4, 5×5…)', type: 'input', answer: 36 },
      { q: 'What is the sum of the first 5 ODD numbers?\n1 + 3 + 5 + 7 + 9 = ?', type: 'input', answer: 25 },
      { q: 'What comes next?\n1, 2, 4, 7, 11, 16, ___\n(The amount added increases by 1 each time)', type: 'input', answer: 22 },
      { q: 'What is the missing number?\n2, 6, 18, ___, 162', type: 'input', answer: 54 },
      { q: 'What is the sum of ALL even numbers from 2 to 20?\n2 + 4 + 6 + … + 20 = ?', type: 'input', answer: 110 },
      { q: 'What is the 20th number in this pattern?\n3, 7, 11, 15, 19, …', type: 'input', answer: 79 },
      { q: 'What comes next?\n2, 5, 10, 17, 26, ___\n(Differences: +3, +5, +7, +9, +11…)', type: 'input', answer: 37 },
      { q: 'What is the sum of the first 6 ODD numbers?\n1 + 3 + 5 + 7 + 9 + 11 = ?', type: 'input', answer: 36 },
      { q: 'What is the 7th triangular number?\n(1, 3, 6, 10, 15, 21, ___)', type: 'input', answer: 28 },
      { q: 'How many numbers from 1 to 50 are\nmultiples of BOTH 2 and 5?', type: 'input', answer: 5 },
      { q: 'What comes next?\n100, 91, 83, 76, 70, ___\n(Differences: −9, −8, −7, −6, −5…)', type: 'input', answer: 65 },
    ]
  },

  // ── Topic 1: Multi-Step Word Problems ────────────────────────
  {
    id: 1,
    name: 'Word Problems',
    emoji: '📖',
    color: '#e06c00',
    tip: 'Read TWICE. Write down what you know. Work step by step — don\'t skip steps!',
    problems: [
      { q: 'Kevin is 2 years younger than Anna.\nLisa is 1 year younger than Kevin.\nLisa is 6 years old.\nHow old is Anna?', type: 'input', answer: 9, unit: 'years old' },
      { q: 'Lisa is 3 years older than her brother.\nIn 2 years, Lisa will be 10 years old.\nHow old is her brother RIGHT NOW?', type: 'input', answer: 5, unit: 'years old' },
      { q: 'Jack has 3 times as many cards as Tom.\nTogether they have 48 cards.\nHow many cards does JACK have?', type: 'input', answer: 36, unit: 'cards' },
      { q: 'Anna saves 4 apples on Monday.\nEach day after that she saves 2 MORE than the day before.\nHow many apples total does she save\nfrom Monday to Friday (5 days)?', type: 'input', answer: 40, unit: 'apples' },
      { q: 'Sam had some stickers.\nHe gave half of them to a friend.\nThen he gave 3 more away.\nNow he has 5 stickers left.\nHow many did Sam start with?', type: 'input', answer: 16, unit: 'stickers' },
      { q: 'A jar has red and blue marbles.\nThere are 18 marbles in all.\nThere are 4 MORE red than blue.\nHow many BLUE marbles are there?', type: 'input', answer: 7, unit: 'blue marbles' },
      { q: 'A classroom has 6 rows of desks.\nThe first row has 4 desks.\nEach row has 1 MORE desk than the row before.\nHow many desks are there in ALL?', type: 'input', answer: 39, unit: 'desks' },
      { q: 'Maria buys 3 pencils at 15¢ each\nand 2 erasers at 25¢ each.\nShe pays with $1.00.\nHow many CENTS does she get as change?', type: 'input', answer: 5, unit: '¢' },
      { q: '5 buses each have 3 rows of seats.\nEach row has 4 seats.\nEvery seat is filled.\nHow many students are there in all?', type: 'input', answer: 60, unit: 'students' },
      { q: 'Tom reads 8 pages on Monday,\n12 pages on Tuesday, and 6 pages on Wednesday.\nHe is reading a 50-page book.\nHow many pages does he have LEFT to read?', type: 'input', answer: 24, unit: 'pages' },
      { q: 'A store has 3 shelves of books:\n12 on top, 15 in middle, 9 on bottom.\nA customer buys 8 books.\nHow many books remain?', type: 'input', answer: 28, unit: 'books' },
      { q: 'A frog jumps 3 meters forward,\nthen 1 meter back, then 3 forward,\nthen 1 back — repeating this pattern.\nAfter 8 total jumps, how far is the frog\nfrom where it started?', type: 'input', answer: 8, unit: 'meters' },
      { q: 'Lily plants flowers following a pattern:\n2 on Day 1, 5 on Day 2, 8 on Day 3…\n(each day 3 more than the day before)\nHow many flowers does she plant on Day 6?', type: 'input', answer: 17, unit: 'flowers' },
      { q: 'There are 6 people at a party.\nEach person shakes hands with every other person\nexactly once.\nHow many handshakes are there in all?', type: 'input', answer: 15, unit: 'handshakes' },
      { q: 'A baker puts 6 cookies on each tray.\nShe has enough batter for 7 trays.\nShe gives away 2 dozen cookies (24).\nHow many cookies does she have left?', type: 'input', answer: 18, unit: 'cookies' },
    ]
  },

  // ── Topic 2: Geometry & Shapes ───────────────────────────────
  {
    id: 2,
    name: 'Geometry',
    emoji: '🔷',
    color: '#1a7ac7',
    tip: 'For rectangles: Perimeter = 2×(length+width). Area = length×width. Draw it out!',
    problems: [
      { q: 'A rectangle has a perimeter of 20 cm\nand a length of 6 cm.\nWhat is its AREA?', type: 'input', answer: 24, unit: 'cm²' },
      { q: 'A square has a perimeter of 36 cm.\nWhat is its AREA?', type: 'input', answer: 81, unit: 'cm²' },
      { q: 'The area of a rectangle is 24 cm²\nand one side is 4 cm.\nWhat is its PERIMETER?', type: 'input', answer: 20, unit: 'cm' },
      { q: 'A rectangle has its length TWICE its width.\nIts perimeter is 24 cm.\nWhat is its AREA?', type: 'input', answer: 32, unit: 'cm²' },
      { q: 'A large square is cut into 4 equal smaller squares.\nEach small square has a side of 3 cm.\nWhat is the perimeter of the ORIGINAL large square?', type: 'input', answer: 24, unit: 'cm' },
      { q: 'How many squares of ALL SIZES\nare in a 3×3 grid of unit squares?\n(Count 1×1, 2×2, AND 3×3 squares)', type: 'input', answer: 14 },
      { q: 'Two squares, each with side 5 cm, slightly overlap.\nThe overlapping part is a 2 cm × 2 cm square.\nWhat is the TOTAL area covered by BOTH squares?', type: 'input', answer: 46, unit: 'cm²' },
      { q: 'A rectangular garden is 8 m long and 5 m wide.\nA 1-meter-wide path goes around the INSIDE edge.\nWhat is the area of JUST the path?', type: 'input', answer: 22, unit: 'm²' },
      { q: 'A square has an area of 49 cm².\nWhat is its perimeter?', type: 'input', answer: 28, unit: 'cm' },
      { q: 'Three squares, each with side 4 cm,\nare placed in a row touching each other.\nWhat is the perimeter of the whole shape?', type: 'input', answer: 32, unit: 'cm' },
      { q: 'A rectangle is 7 cm long and 3 cm wide.\nYou add 2 cm to the length and 3 cm to the width.\nBy how much does the AREA increase?', type: 'input', answer: 33, unit: 'cm²' },
      { q: 'How many triangles of ALL SIZES\nare in a large triangle divided into\n4 equal smaller triangles?', type: 'input', answer: 5 },
      { q: 'A rectangle has width 3 cm.\nIts diagonal is 5 cm long.\nWhat is the LENGTH of the rectangle?\n(Hint: 3-4-5 right triangle)', type: 'input', answer: 4, unit: 'cm' },
      { q: 'A square garden has a perimeter of 40 m.\nWhat is its area?', type: 'input', answer: 100, unit: 'm²' },
      { q: 'Two rectangles: one is 6×4 cm, one is 5×3 cm.\nWhat is the DIFFERENCE in their areas?', type: 'input', answer: 9, unit: 'cm²' },
    ]
  },

  // ── Topic 3: Money & Time ─────────────────────────────────────
  {
    id: 3,
    name: 'Money & Time',
    emoji: '📅',
    color: '#0e8f6b',
    tip: 'For calendars, count carefully day by day. For elapsed time, count up from the start time.',
    problems: [
      { q: 'Today is October 15th.\nAlan\'s birthday is November 2nd.\nHow many days until Alan\'s birthday?', type: 'input', answer: 18, unit: 'days' },
      { q: 'January 1 is a Wednesday.\nWhat DAY of the week is February 1?\n(January has 31 days)', type: 'input', answer: 'Saturday' },
      { q: 'Kim has $2.00.\nShe buys 3 pencils at 35¢ each\nand a notebook for 65¢.\nHow many CENTS does she have left?', type: 'input', answer: 30, unit: '¢' },
      { q: 'A movie starts at 1:45 PM\nand lasts 1 hour 55 minutes.\nWhat time does the movie END?', type: 'input', answer: '3:40' },
      { q: 'Sam has 2 quarters, 4 dimes, and 8 pennies.\nHe buys a pencil for 67¢.\nHow many CENTS does he have left?', type: 'input', answer: 31, unit: '¢' },
      { q: 'A baker makes 24 cookies every hour.\nShe starts baking at 9:00 AM.\nHow many cookies has she made by 11:30 AM?', type: 'input', answer: 60, unit: 'cookies' },
      { q: 'July 1 is a Monday.\nHow many SATURDAYS are in July?\n(July has 31 days)', type: 'input', answer: 4, unit: 'Saturdays' },
      { q: 'Lisa saves $1.50 per week.\nAfter 8 weeks, she buys a book for $7.00.\nHow many DOLLARS does she have left?', type: 'input', answer: 5, unit: '$' },
      { q: 'A train leaves at 8:20 AM\nand arrives at 10:05 AM.\nHow long is the journey in MINUTES?', type: 'input', answer: 105, unit: 'minutes' },
      { q: 'Emma bought 4 apples at 30¢ each\nand received 5¢ change.\nHow many CENTS did she give the cashier?', type: 'input', answer: 125, unit: '¢' },
      { q: 'It is 3:15 PM. School ends 45 minutes later.\nThe school bus takes 20 minutes to get home.\nWhat time does the student arrive home?', type: 'input', answer: '4:20' },
      { q: 'A box of 12 chocolates costs $1.80.\nHow many CENTS does ONE chocolate cost?', type: 'input', answer: 15, unit: '¢' },
      { q: 'February has 28 days this year.\nIf February 1 is a Saturday,\nwhat day of the week is March 5?', type: 'input', answer: 'Wednesday' },
      { q: 'A store is open Monday through Saturday,\n9 AM to 6 PM each day.\nHow many total hours is it open per WEEK?', type: 'input', answer: 54, unit: 'hours' },
      { q: 'Tom earns $3.00 for every hour he helps.\nHe works for 2 hours on Monday\nand 3 hours on Wednesday.\nHow much does Tom earn in all?', type: 'input', answer: 15, unit: '$' },
    ]
  },

  // ── Topic 4: Logic & Reasoning ───────────────────────────────
  {
    id: 4,
    name: 'Logic & Reasoning',
    emoji: '🧠',
    color: '#5b34c4',
    tip: 'Use clues to ELIMINATE wrong answers. Draw a table or diagram to keep track!',
    problems: [
      { q: 'Amy, Beth, and Carol each own\none pink item: a dress, a hat, or shoes.\nAmy\'s item is NOT a hat.\nBeth\'s item is NOT a dress or a hat.\nWhat is Carol\'s pink item?', type: 'input', answer: 'hat' },
      { q: '3 oranges weigh the same as 2 apples.\nEach apple weighs 45 grams.\nHow much does 1 orange weigh?', type: 'input', answer: 30, unit: 'grams' },
      { q: 'On a balance scale:\n1 apple = 3 plums\n1 plum = 2 grapes\nHow many GRAPES equal 1 apple?', type: 'input', answer: 6, unit: 'grapes' },
      { q: 'Tom says: "If you double my number\nand add 5, you get 19."\nWhat is Tom\'s number?', type: 'input', answer: 7 },
      { q: '5 cats eat 5 mice in 5 minutes.\nHow many minutes does it take\n1 cat to eat 1 mouse?', type: 'input', answer: 5, unit: 'minutes' },
      { q: 'A fence has posts every 3 meters.\nThe fence is 24 meters long.\nHow many posts are there in all?\n(Include both end posts)', type: 'input', answer: 9, unit: 'posts' },
      { q: 'How many different 2-digit numbers\ncan you make using digits 1, 2, and 3,\nusing each digit ONLY ONCE per number?', type: 'input', answer: 6 },
      { q: 'In a class vote:\nCandidate A got 3× the votes of B.\nCandidate C got 2 more votes than B.\nThere were 22 votes total.\nHow many votes did A receive?', type: 'input', answer: 12, unit: 'votes' },
      { q: '5 people each shake hands with\nevery other person exactly once.\nHow many handshakes are there in total?', type: 'input', answer: 10, unit: 'handshakes' },
      { q: 'Maria is 6 years old.\nHer dad is 5 times Maria\'s age.\nIn how many years will dad be\n4 times Maria\'s age?', type: 'input', answer: 2, unit: 'years' },
      { q: 'A bag has 3 red and 5 blue marbles.\nWithout looking, what is the MINIMUM number\nyou must draw to be SURE\nyou have 2 RED marbles?', type: 'input', answer: 7, unit: 'marbles' },
      { q: 'I am a 2-digit number.\nI am a multiple of 7.\nMy two digits add up to 10.\nI am less than 50.\nWhat number am I?', type: 'input', answer: 28 },
      { q: 'Ann, Bob, and Carl ran a race.\nAnn finished BEFORE Bob.\nCarl finished AFTER Bob.\nWhat PLACE did Ann finish?', type: 'input', answer: 1, unit: 'st place' },
      { q: 'A ball weighs the same as 3 cubes.\nA cube weighs 12 grams.\nA pyramid weighs the same as 2 balls.\nHow many grams does the pyramid weigh?', type: 'input', answer: 72, unit: 'grams' },
      { q: 'How many different paths go from\nbottom-left to top-right of a 2×2 grid,\nmoving ONLY right or up one step at a time?', type: 'input', answer: 6, unit: 'paths' },
    ]
  }

];

// Build a mock contest: 4 random problems from each topic = 20 total
function buildNoeticMock(seed) {
  let s = (seed || Date.now()) >>> 0;
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
  for (let i = picks.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [picks[i], picks[j]] = [picks[j], picks[i]];
  }
  return picks;
}
