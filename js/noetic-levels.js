// ============================================================
// NOETIC LEARNING MATH CONTEST — Grade 2 Practice
// Style matches official Noetic G2: narrative, visual, non-routine
// ============================================================

const NOETIC_G2 = [

  // ── Topic 0: Number & Symbol Puzzles ─────────────────────────
  {
    id: 0,
    name: 'Symbol Puzzles',
    emoji: '🔣',
    color: '#e84040',
    tip: 'Find what each symbol equals. Use the equations that have only ONE unknown first!',
    problems: [
      {
        q: 'Each fruit equals a number.\n\n🍎 + 🍎 + 🍐 = 22\n🍐 + 🍐 = 28\n\nWhat does 🍎 equal?',
        type: 'input', answer: 4
      },
      {
        q: 'Each shape equals a number.\n\n⬛ + ⬛ + ⬜ = 20\n⬛ + ⬜ + ⬜ = 22\n\nWhat does ⬛ equal?',
        type: 'input', answer: 6
      },
      {
        q: 'Each fruit equals a number.\n\n🍓 + 🍇 = 15\n🍓 + 🍓 + 🍇 = 23\n\nWhat does 🍇 equal?',
        type: 'input', answer: 7
      },
      {
        q: 'Each symbol equals a number.\n\n⭐ + ⭐ + ⭐ = 18\n⭐ + 🌙 = 14\n\nWhat does 🌙 equal?',
        type: 'input', answer: 8
      },
      {
        q: 'Each animal equals a number.\n\n🐱 + 🐱 + 🐶 = 19\n🐶 + 🐶 + 🐱 = 17\n\nWhat does 🐱 equal?',
        type: 'input', answer: 7
      },
      {
        q: 'Each fruit equals a number.\n\n🍊 + 🍋 + 🍋 = 26\n🍊 + 🍊 + 🍋 = 28\n\nWhat does 🍊 equal?',
        type: 'input', answer: 10
      },
      {
        q: 'Each shape equals a number.\n\n🔴 + 🔴 = 14\n🔵 + 🔵 + 🔵 = 18\n\nWhat is 🔴 + 🔵?',
        type: 'input', answer: 13
      },
      {
        q: 'Each letter equals a number.\n\nA + A + B = 25\nA + B + B = 23\n\nWhat does A equal?',
        type: 'input', answer: 9
      },
      {
        q: 'Each fruit equals a number.\n\n🍌 + 🍌 + 🍌 = 21\n🍌 + 🍒 = 15\n\nWhat does 🍒 equal?',
        type: 'input', answer: 8
      },
      {
        q: 'Each animal equals a number.\n\n🐘 + 🐭 = 17\n🐘 + 🐘 + 🐭 = 29\n\nWhat does 🐭 equal?',
        type: 'input', answer: 5
      },
      {
        q: 'Each shape equals a number.\n\n△ + △ + □ = 19\n△ + □ + □ = 17\n\nWhat does △ + □ equal?',
        type: 'input', answer: 12
      },
      {
        q: 'Each fruit equals a number.\n\n🍑 + 🍑 = 22\n🍑 + 🫐 + 🫐 = 21\n\nWhat does 🫐 equal?',
        type: 'input', answer: 10
      },
      {
        q: 'Each shape equals a number.\n\n🟡 + 🟡 + 🟡 + 🟢 = 25\n🟡 + 🟢 = 11\n\nWhat does 🟡 equal?',
        type: 'input', answer: 7
      },
      {
        q: 'Each number is replaced by a symbol.\n\n❤️ + ❤️ + 💛 = 30\n❤️ + 💛 + 💛 = 28\n\nWhat does 💛 equal?',
        type: 'input', answer: 13
      },
      {
        q: 'Each fruit equals a number.\n\n🍍 + 🥝 = 20\n🍍 + 🍍 + 🥝 = 32\n\nWhat does 🥝 equal?',
        type: 'input', answer: 8
      },
    ]
  },

  // ── Topic 1: Logic & Clues ────────────────────────────────────
  {
    id: 1,
    name: 'Logic Clues',
    emoji: '🕵️',
    color: '#5b34c4',
    tip: 'Use each clue to ELIMINATE wrong answers. Cross off what can\'t be true!',
    problems: [
      {
        q: 'Coach Kim ordered jerseys for Ana, Beth, and Cara.\nThe jersey numbers are  5 · 11 · 18\n\nAna\'s number is ODD.\nThe LARGEST number does not belong to Beth.\n\nWhat is Cara\'s jersey number?',
        type: 'input', answer: 18
      },
      {
        q: 'Mrs. Park has 5 children: Mark, Joe, Ken, Dan, and Peter.\nMark is older than Dan but younger than Ken.\nJoe is Mark\'s youngest older brother.\nPeter is Dan\'s youngest older brother.\n\nHow many younger siblings does Joe have?',
        type: 'input', answer: 3
      },
      {
        q: 'Three friends scored different points in a game:\n8 · 13 · 20\n\nSam scored an EVEN number.\nThe HIGHEST score does not belong to Lily.\n\nWhat score did Jake get?',
        type: 'input', answer: 20
      },
      {
        q: 'Ali, Bev, and Cole each have a hat in a different color:\nred, blue, or green.\n\nAli\'s hat is NOT red.\nAli\'s hat is NOT green.\nBev\'s hat is NOT blue or green.\n\nWhat color is Cole\'s hat?',
        type: 'input', answer: 'green'
      },
      {
        q: 'Kevin is 2 years YOUNGER than Anna.\nLisa is 1 year YOUNGER than Kevin.\nLisa is 6 years old.\n\nHow old is Anna?',
        type: 'input', answer: 9, unit: 'years old'
      },
      {
        q: 'Tom, Jake, and Sam ran a race.\nTom finished BEFORE Jake.\nSam finished AFTER Jake.\n\nWhat PLACE did Sam finish?',
        type: 'input', answer: 3, unit: 'rd place'
      },
      {
        q: 'Four students: Amy, Ben, Carl, Dee.\n\nAmy scored higher than Ben.\nCarl scored higher than Amy.\nDee scored lower than Ben.\n\nWho scored the HIGHEST?',
        type: 'input', answer: 'Carl'
      },
      {
        q: 'Coach Lee has jerseys  7 · 14 · 25  for Mia, Noah, and Pia.\n\nMia\'s number is a multiple of 7.\nNoah\'s number is the smallest.\n\nWhat is Pia\'s jersey number?',
        type: 'input', answer: 25
      },
      {
        q: 'Three animals weigh different amounts:\n12 lbs · 18 lbs · 30 lbs\n\nThe cat weighs LESS than the dog.\nThe rabbit does NOT weigh 30 lbs.\nThe dog does NOT weigh 12 lbs.\n\nHow much does the cat weigh?',
        type: 'input', answer: 12, unit: 'lbs'
      },
      {
        q: 'Lisa is 3 years OLDER than her brother.\nIn 2 years, Lisa will be 10 years old.\n\nHow old is her brother RIGHT NOW?',
        type: 'input', answer: 5, unit: 'years old'
      },
      {
        q: 'Five children each like a different color:\nred, blue, green, yellow, purple.\n\nAnn likes red. Bob doesn\'t like blue or green.\nCara likes yellow. Dan doesn\'t like purple.\n\nWhat color does Ed like?',
        type: 'input', answer: 'purple'
      },
      {
        q: 'Boxes weigh  4 lbs · 9 lbs · 15 lbs\nfor boxes A, B, and C.\n\nBox A weighs less than Box C.\nBox B is the heaviest.\nBox A\'s weight is ODD.\n\nHow much does Box C weigh?',
        type: 'input', answer: 15, unit: 'lbs'
      },
      {
        q: 'Maria is 6 years old.\nHer dad is 5 times Maria\'s age.\n\nIn how many years will dad be\n4 times Maria\'s age?',
        type: 'input', answer: 2, unit: 'years'
      },
      {
        q: 'In a relay race, 4 runners finished in order.\nKim finished right after Pat.\nJen finished right before Pat.\nAlex finished last.\n\nWhat place did Kim finish?',
        type: 'input', answer: 3, unit: 'rd place'
      },
      {
        q: 'Cards are numbered 1 through 10.\nI pick a card that is:\n• greater than 6\n• even\n• NOT 10\n\nWhat number is on my card?',
        type: 'input', answer: 8
      },
    ]
  },

  // ── Topic 2: Line & Position Problems ────────────────────────
  {
    id: 2,
    name: 'Lines & Positions',
    emoji: '🧍',
    color: '#0e8f6b',
    tip: 'Draw the line! Count who is in FRONT and who is BEHIND each person carefully.',
    problems: [
      {
        q: 'Rachael and Sam are in a library checkout line.\n5 people are AHEAD of Rachael.\n8 people are BEHIND her.\nSam is standing right IN FRONT of Rachael.\n\nHow many MORE people are behind Sam\nthan in front of him?',
        type: 'input', answer: 3
      },
      {
        q: 'There are 15 students in a lunch line.\nMaria is 6th from the front.\nBen is right BEHIND Maria.\n\nHow many more students are behind Ben\nthan in front of him?',
        type: 'input', answer: 2
      },
      {
        q: 'There are 20 people in a grocery store line.\nKate is 8th from the FRONT.\n\nHow many people are behind Kate?',
        type: 'input', answer: 12, unit: 'people'
      },
      {
        q: 'Tom is in a ticket line.\nHe is 5th from the front.\nHe is 7th from the back.\n\nHow many people are in the line in total?',
        type: 'input', answer: 11, unit: 'people'
      },
      {
        q: 'In a line of 18 children,\nAlex is in the MIDDLE (9th from each end).\nZoe is 4 spots ahead of Alex.\n\nWhat position is Zoe from the front?',
        type: 'input', answer: 5, unit: 'th from front'
      },
      {
        q: 'There are 25 students in a line.\nElla is 10th from the front.\nMax is 3 spots BEHIND Ella.\n\nWhat position is Max from the BACK?',
        type: 'input', answer: 13, unit: 'th from back'
      },
      {
        q: 'A line has an odd number of people.\nThe person in the MIDDLE is 7th from both front and back.\n\nHow many people are in the line?',
        type: 'input', answer: 13, unit: 'people'
      },
      {
        q: 'Sam and Tim are both in a line of 16 people.\nSam is 4th from the front.\nTim is 5th from the back.\n\nHow many people are between Sam and Tim?',
        type: 'input', answer: 7, unit: 'people'
      },
      {
        q: 'Rosa is in a movie ticket line.\nShe has 9 people in front of her\nand 6 people behind her.\nLeo cuts in right IN FRONT of Rosa.\n\nNow how many people are behind Leo?',
        type: 'input', answer: 7, unit: 'people'
      },
      {
        q: 'In a line, every 3rd person is wearing a hat.\nThe 1st hat-wearer is 3rd in line.\nThere are 30 people in the line.\n\nHow many people are wearing hats?',
        type: 'input', answer: 10, unit: 'people'
      },
      {
        q: 'Ben is 6th from the front of a line.\nHe is twice as far from the front as from the back.\n\nHow many people are in the line?',
        type: 'input', answer: 9, unit: 'people'
      },
      {
        q: 'A line has 22 people.\nAnna is 9th from the front.\nMark joins the line right BEHIND Anna.\n\nWhat position is Mark from the BACK?',
        type: 'input', answer: 13, unit: 'th from back'
      },
      {
        q: 'There are 30 students in two lines.\nLine A has 6 more students than Line B.\n\nHow many students are in Line B?',
        type: 'input', answer: 12, unit: 'students'
      },
      {
        q: 'Kim is in a line of 14 people.\nShe is 4th from the front.\nJen is exactly halfway between Kim and the back.\n\nWhat position is Jen from the front?',
        type: 'input', answer: 9, unit: 'th from front'
      },
      {
        q: 'Dan and 4 friends are waiting for the bus.\nDan is 3rd in line.\n\nHow many people are behind Dan?',
        type: 'input', answer: 2, unit: 'people'
      },
    ]
  },

  // ── Topic 3: Money & Time / Word Problems ────────────────────
  {
    id: 3,
    name: 'Money & Word Problems',
    emoji: '💰',
    color: '#e06c00',
    tip: 'Read TWICE. Find what costs what, then calculate step by step.',
    problems: [
      {
        q: 'At a farmers market, a banana costs $1\nand an apple costs TWICE as much.\nDominic bought:\n\n  🍎 🍎 🍎   🍌\n\nHe paid with a $20 bill.\nHow much change did he receive?',
        type: 'input', answer: 13, unit: '$'
      },
      {
        q: 'A mango costs $2 and a kiwi costs $4.\nRosa bought 2 mangoes and 3 kiwis.\nShe paid with a $20 bill.\n\nHow much change did she receive?',
        type: 'input', answer: 6, unit: '$'
      },
      {
        q: 'Today is October 15th.\nAlan\'s birthday is November 2nd.\n\nHow many days until Alan\'s birthday?\n(October has 31 days)',
        type: 'input', answer: 18, unit: 'days'
      },
      {
        q: 'A pencil costs 35¢ and an eraser costs 20¢.\nKim wants to buy 2 pencils and 1 eraser.\nShe has 80¢.\n\nHow many more CENTS does Kim need?',
        type: 'input', answer: 10, unit: '¢'
      },
      {
        q: 'Jack has 3 times as many cards as Tom.\nTogether they have 48 cards.\n\nHow many cards does JACK have?',
        type: 'input', answer: 36, unit: 'cards'
      },
      {
        q: 'A movie starts at 1:45 PM\nand lasts 1 hour 55 minutes.\n\nWhat time does the movie END?',
        type: 'input', answer: '3:40'
      },
      {
        q: 'A baker makes 24 cookies every hour.\nShe starts baking at 9:00 AM.\n\nHow many cookies has she made by 11:30 AM?',
        type: 'input', answer: 60, unit: 'cookies'
      },
      {
        q: 'Sam had some stickers.\nHe gave HALF of them to a friend.\nThen he gave 3 more away.\nNow he has 5 stickers left.\n\nHow many stickers did Sam START with?',
        type: 'input', answer: 16, unit: 'stickers'
      },
      {
        q: 'January 1 is a Wednesday.\nWhat day of the week is February 1?\n(January has 31 days)',
        type: 'input', answer: 'Saturday'
      },
      {
        q: 'Anna saves 4 apples on Monday.\nEach day after that, she saves 2 MORE than the day before.\n(Mon: 4, Tue: 6, Wed: 8 …)\n\nHow many apples total does she save\nfrom Monday to Friday?',
        type: 'input', answer: 40, unit: 'apples'
      },
      {
        q: 'A train leaves at 8:20 AM\nand arrives at 10:05 AM.\n\nHow long is the journey in MINUTES?',
        type: 'input', answer: 105, unit: 'minutes'
      },
      {
        q: 'A box of 12 chocolates costs $1.80.\n\nHow many CENTS does ONE chocolate cost?',
        type: 'input', answer: 15, unit: '¢'
      },
      {
        q: 'Lisa saves $1.50 per week.\nAfter 8 weeks, she buys a book for $7.00.\n\nHow many dollars does she have LEFT?',
        type: 'input', answer: 5, unit: '$'
      },
      {
        q: 'A jar has red and blue marbles — 18 total.\nThere are 4 MORE red than blue.\n\nHow many BLUE marbles are there?',
        type: 'input', answer: 7, unit: 'blue marbles'
      },
      {
        q: 'July 1 is a Monday.\nHow many SATURDAYS are in July?\n(July has 31 days)',
        type: 'input', answer: 4, unit: 'Saturdays'
      },
    ]
  },

  // ── Topic 4: Geometry & Patterns ─────────────────────────────
  {
    id: 4,
    name: 'Geometry & Patterns',
    emoji: '📐',
    color: '#1a7ac7',
    tip: 'Draw the shape! Write the formula. Perimeter = add ALL sides. Area = length × width.',
    problems: [
      {
        q: 'What comes next?\n1, 3, 6, 10, 15, ___\n(Each step adds one more than before)',
        type: 'input', answer: 21
      },
      {
        q: 'A rectangle has a perimeter of 20 cm\nand a length of 6 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 24, unit: 'cm²'
      },
      {
        q: 'What comes next?\n2, 3, 5, 8, 13, ___\n(Each number = sum of the two before it)',
        type: 'input', answer: 21
      },
      {
        q: 'A rectangular garden is 8 m long and 5 m wide.\nA 1-meter-wide path goes around the INSIDE.\n\nWhat is the area of JUST the path?',
        type: 'input', answer: 22, unit: 'm²'
      },
      {
        q: 'What is the sum of 1 + 2 + 3 + … + 10?',
        type: 'input', answer: 55
      },
      {
        q: 'A square has a perimeter of 36 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 81, unit: 'cm²'
      },
      {
        q: 'What comes next?\n2, 5, 10, 17, 26, ___\n(Differences: +3, +5, +7, +9, +11 …)',
        type: 'input', answer: 37
      },
      {
        q: 'How many squares of ALL SIZES\nare in a 3×3 grid of unit squares?\n(Count 1×1, 2×2, AND 3×3 squares)',
        type: 'input', answer: 14
      },
      {
        q: 'What is the 20th number in this pattern?\n3, 7, 11, 15, 19 …\n(Rule: add 4 each time)',
        type: 'input', answer: 79
      },
      {
        q: 'A rectangle has its LENGTH twice its WIDTH.\nIts perimeter is 24 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 32, unit: 'cm²'
      },
      {
        q: 'What comes next?\n100, 91, 83, 76, 70, ___\n(Differences: −9, −8, −7, −6, −5 …)',
        type: 'input', answer: 65
      },
      {
        q: 'Three squares, each with side 4 cm,\nare placed in a row touching each other.\n\nWhat is the perimeter of the WHOLE shape?',
        type: 'input', answer: 32, unit: 'cm'
      },
      {
        q: 'What is the sum of the FIRST 5 ODD numbers?\n1 + 3 + 5 + 7 + 9 = ?',
        type: 'input', answer: 25
      },
      {
        q: 'How many triangles of ALL SIZES\nare in a large triangle that is divided into\n4 equal smaller triangles?',
        type: 'input', answer: 5
      },
      {
        q: '5 cats eat 5 mice in 5 minutes.\n\nHow many minutes does it take\n1 cat to eat 1 mouse?',
        type: 'input', answer: 5, unit: 'minutes'
      },
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
