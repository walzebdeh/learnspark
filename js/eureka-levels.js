// ============================================================
// EUREKA MATH — Grade 2 & 3 (Great Minds / SDUSD)
// ============================================================

const EUREKA_G2 = [

  // ── Module 1 (Weeks 1–4) ────────────────────────────────────
  {
    id: 0, grade: 2, module: 1,
    weekStart: 1, weekEnd: 4,
    name: 'Module 1', title: 'Sums & Differences to 100',
    emoji: '🔟', color: '#e84040',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Making Ten',
        scene: '🔵🔵🔵🔵🔵🔵🔵🔵🔵⬜',
        explain: {
          concept: 'A ten-frame has 10 boxes. Fill in the dots, then count the empty boxes to find what is missing to make 10!',
          example: '6 + ? = 10\n→ Put 6 blue dots in the frame.\n→ Count empty boxes: 1, 2, 3, 4\n→ Answer: 6 + 4 = 10 ✓',
          tip: 'Shortcut: 10 − 6 = 4, so 6 + 4 = 10!'
        },
        problems: [
          { q: '9 + ___ = 10', type: 'input', answer: 1 },
          { q: '7 + ___ = 10', type: 'input', answer: 3 },
          { q: '6 + ___ = 10', type: 'input', answer: 4 },
          { q: 'Is 8 + 2 = 10?', type: 'tf', answer: true },
          { q: 'Is 7 + 4 = 10?', type: 'tf', answer: false },
          { q: 'Sara has 6 stickers. She needs 10. How many more?', type: 'mc', choices: ['2','3','4','5'], answer: '4', scene: '🌟🌟🌟🌟🌟🌟 + ❓❓❓❓ = 🔟' },
          { q: '___ + 3 = 10', type: 'input', answer: 7 },
          { q: '10 − 5 = ___', type: 'input', answer: 5 },
          { q: '10 − 8 = ___', type: 'input', answer: 2 },
          { q: 'Which two numbers make 10?', type: 'mc', choices: ['3 and 6','4 and 7','5 and 5','6 and 5'], answer: '5 and 5' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Adding and Subtracting Tens',
        scene: '📦📦📦 = 30',
        explain: {
          concept: 'When you add or subtract tens, just look at the tens digit! The zeros tag along for the ride.',
          example: '30 + 40 = ?\n→ 3 tens + 4 tens = 7 tens\n→ 7 tens = 70\n→ Answer: 70 ✓',
          tip: 'Cover the zeros! 3 + 4 = 7, so 30 + 40 = 70.'
        },
        problems: [
          { q: '20 + 30 = ___', type: 'input', answer: 50 },
          { q: '40 + 50 = ___', type: 'input', answer: 90 },
          { q: '70 − 30 = ___', type: 'input', answer: 40 },
          { q: '90 − 60 = ___', type: 'input', answer: 30 },
          { q: 'Is 50 + 40 = 100?', type: 'tf', answer: false },
          { q: 'Is 30 + 60 = 90?', type: 'tf', answer: true },
          { q: 'Anna has 60 crayons and gives 20 away. How many left?', type: 'mc', choices: ['30','40','50','80'], answer: '40', scene: '🖍️🖍️🖍️🖍️🖍️🖍️' },
          { q: '30 + ___ = 80', type: 'input', answer: 50 },
          { q: '___ − 20 = 50', type: 'input', answer: 70 },
          { q: 'Which number equals 7 tens?', type: 'mc', choices: ['17','700','7','70'], answer: '70' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Adding Two-Digit Numbers',
        scene: '38 ➕ 25 = ❓',
        explain: {
          concept: 'Break each number into tens and ones. Add tens to tens, then add ones to ones!',
          example: '23 + 45 = ?\n→ Tens: 20 + 40 = 60\n→ Ones: 3 + 5 = 8\n→ 60 + 8 = 68 ✓',
          tip: 'Always add tens first, then ones. Combine at the end!'
        },
        problems: [
          { q: '23 + 45 = ___', type: 'input', answer: 68 },
          { q: '36 + 42 = ___', type: 'input', answer: 78 },
          { q: '57 + 28 = ___', type: 'input', answer: 85 },
          { q: 'Is 44 + 33 = 77?', type: 'tf', answer: true },
          { q: 'Is 28 + 35 = 62?', type: 'tf', answer: false },
          { q: 'Jake scored 34 points in game 1 and 47 in game 2. Total?', type: 'mc', choices: ['71','81','80','91'], answer: '81', scene: '🏀🏀' },
          { q: '45 + ___ = 90', type: 'input', answer: 45 },
          { q: '63 + 27 = ___', type: 'input', answer: 90 },
          { q: 'There are 38 boys and 25 girls. How many children?', type: 'mc', choices: ['53','61','63','73'], answer: '63', scene: '👦👦👦 + 👧👧👧 = ❓' },
          { q: '___ + 36 = 72', type: 'input', answer: 36 },
        ]
      }
    ]
  },

  // ── Module 2 (Weeks 5–8) ────────────────────────────────────
  {
    id: 1, grade: 2, module: 2,
    weekStart: 5, weekEnd: 8,
    name: 'Module 2', title: 'Addition & Subtraction of Length',
    emoji: '📏', color: '#e06c00',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Measuring in Centimeters',
        scene: '📏🐛',
        explain: {
          concept: 'We measure length using a ruler. Line up the 0 end with the start of the object. The number at the other end is the length in centimeters (cm).',
          example: 'Pencil = 12 cm, Crayon = 8 cm\n→ How much longer is the pencil?\n→ 12 − 8 = 4 cm longer ✓',
          tip: '100 cm = 1 meter. Always start measuring from 0!'
        },
        problems: [
          { q: 'A pencil is 12 cm. A crayon is 8 cm. How many cm longer is the pencil?', type: 'input', answer: 4, unit: 'cm', scene: '✏️📏' },
          { q: 'A worm is 7 cm. A caterpillar is 9 cm. Which is longer?', type: 'mc', choices: ['The worm','The caterpillar','They are equal','Cannot tell'], answer: 'The caterpillar' },
          { q: 'A ribbon is 15 cm. Another is 9 cm. How long together?', type: 'input', answer: 24, unit: 'cm', scene: '🎀🎀' },
          { q: 'Is 1 meter = 100 centimeters?', type: 'tf', answer: true },
          { q: 'Is 50 cm longer than 1 meter?', type: 'tf', answer: false },
          { q: 'A book is 22 cm tall. A box is 30 cm tall. How much taller is the box?', type: 'input', answer: 8, unit: 'cm' },
          { q: 'A string is 45 cm. Maya cuts 18 cm off. How long is it now?', type: 'mc', choices: ['23 cm','25 cm','27 cm','63 cm'], answer: '27 cm', scene: '〰️✂️' },
          { q: "Tom's desk is 60 cm wide. His book is 25 cm. How much wider is the desk?", type: 'input', answer: 35, unit: 'cm' },
          { q: 'Two ropes: 37 cm and 48 cm. Total length?', type: 'mc', choices: ['75 cm','85 cm','80 cm','95 cm'], answer: '85 cm' },
          { q: 'A rope is 100 cm. You use 63 cm. How much is left?', type: 'input', answer: 37, unit: 'cm' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Comparing Lengths',
        scene: '📏📏',
        explain: {
          concept: 'To compare lengths, subtract the shorter from the longer. The answer tells you the difference.',
          example: '65 cm vs 56 cm\n→ 65 > 56 because 6 tens > 5 tens\n→ Difference: 65 − 56 = 9 cm',
          tip: 'Line up the numbers and compare from left to right — biggest place value first!'
        },
        problems: [
          { q: 'A bat is 80 cm. A broom is 100 cm. Which is longer?', type: 'mc', choices: ['The bat','The broom','They are equal','Neither'], answer: 'The broom' },
          { q: 'Is 65 cm longer than 56 cm?', type: 'tf', answer: true },
          { q: 'Which is the shortest: 42, 24, or 39?', type: 'mc', choices: ['42','24','39','They are equal'], answer: '24' },
          { q: 'A fence is 75 m. A road is 57 m. How much longer is the fence?', type: 'input', answer: 18, unit: 'm' },
          { q: 'Is 1 meter shorter than 99 cm?', type: 'tf', answer: false },
          { q: "Ana's hair is 48 cm. Bella's is 52 cm. How much longer is Bella's?", type: 'input', answer: 4, unit: 'cm' },
          { q: 'Which is the longest: 73 cm, 37 cm, or 63 cm?', type: 'mc', choices: ['73 cm','37 cm','63 cm','All equal'], answer: '73 cm' },
          { q: 'A ladder is 90 cm. A stick is 68 cm. Difference in length?', type: 'input', answer: 22, unit: 'cm' },
          { q: 'Is 34 cm shorter than 43 cm?', type: 'tf', answer: true },
          { q: 'Three objects: 15 cm, 51 cm, 35 cm. Which is longest?', type: 'mc', choices: ['15 cm','51 cm','35 cm','Cannot tell'], answer: '51 cm' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems with Length',
        scene: '🐍📏',
        explain: {
          concept: 'Draw a tape diagram to solve length word problems! A tape diagram shows parts and the whole.',
          example: 'A snake is 36 cm and grows 24 cm.\n→ Tape: [36 cm | 24 cm] = whole\n→ 36 + 24 = 60 cm ✓',
          tip: '"How long together?" → ADD. "How much longer/shorter?" → SUBTRACT.'
        },
        problems: [
          { q: 'A snake is 36 cm. It grows 24 cm more. How long is it now?', type: 'input', answer: 60, unit: 'cm' },
          { q: 'A pipe is 85 cm. A saw cuts 29 cm off. How long now?', type: 'mc', choices: ['54 cm','56 cm','64 cm','66 cm'], answer: '56 cm' },
          { q: 'Kim runs 200 m. She has 350 m left. How far is the whole race?', type: 'input', answer: 550, unit: 'm' },
          { q: 'Is 72 − 35 = 37?', type: 'tf', answer: true },
          { q: 'Is 45 + 56 = 100?', type: 'tf', answer: false },
          { q: 'A rope is cut into two pieces: 47 cm and 38 cm. How long was the whole rope?', type: 'mc', choices: ['75 cm','85 cm','95 cm','80 cm'], answer: '85 cm' },
          { q: 'A path is 100 m. You walk 63 m. How far is left?', type: 'input', answer: 37, unit: 'm' },
          { q: 'A worm is 9 cm. It grows 6 cm. How long now?', type: 'mc', choices: ['13 cm','14 cm','15 cm','16 cm'], answer: '15 cm' },
          { q: 'A table is 68 cm. A desk is 45 cm. What is the total length?', type: 'input', answer: 113, unit: 'cm' },
          { q: 'Is 100 − 37 = 63?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 3 (Weeks 9–13) ───────────────────────────────────
  {
    id: 2, grade: 2, module: 3,
    weekStart: 9, weekEnd: 13,
    name: 'Module 3', title: 'Place Value to 1,000',
    emoji: '🏗️', color: '#c09000',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Hundreds, Tens, and Ones',
        scene: '💯🔟1️⃣',
        explain: {
          concept: 'Every number has a hundreds place, a tens place, and a ones place. The position of a digit tells you its value!',
          example: '427\n→ 4 is in the hundreds place → value = 400\n→ 2 is in the tens place → value = 20\n→ 7 is in the ones place → value = 7\n→ 400 + 20 + 7 = 427 ✓',
          tip: 'H-T-O: Hundreds | Tens | Ones. Use a place value chart to keep track!'
        },
        problems: [
          { q: 'What digit is in the tens place in 340?', type: 'mc', choices: ['3','4','0','34'], answer: '4' },
          { q: 'What is the value of the digit 5 in 537?', type: 'mc', choices: ['5','50','500','5,000'], answer: '500' },
          { q: '4 hundreds + 2 tens + 7 ones = ___', type: 'input', answer: 427 },
          { q: 'Is 3 hundreds = 300?', type: 'tf', answer: true },
          { q: 'Is 6 tens = 600?', type: 'tf', answer: false },
          { q: 'What digit is in the tens place in 285?', type: 'mc', choices: ['2','8','5','0'], answer: '8' },
          { q: '200 + 60 + 3 = ___', type: 'input', answer: 263 },
          { q: 'What digit is in the ones place in 419?', type: 'input', answer: 9 },
          { q: '500 + 40 + 9 = ___', type: 'mc', choices: ['549','594','459','945'], answer: '549' },
          { q: 'What is the value of the digit 7 in 172?', type: 'mc', choices: ['7','70','700','1'], answer: '70' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Reading and Writing to 1,000',
        scene: '🔢🔢🔢',
        explain: {
          concept: 'We can write numbers in expanded form, standard form, or word form. All three mean the same number!',
          example: '652\n→ Expanded: 600 + 50 + 2\n→ Standard: 652\n→ Word form: "six hundred fifty-two"',
          tip: 'When writing word form, do NOT say "and" between hundreds and tens!'
        },
        problems: [
          { q: '600 + 50 + 2 = ___', type: 'input', answer: 652 },
          { q: 'Is "four hundred thirty-seven" the same as 437?', type: 'tf', answer: true },
          { q: 'How many hundreds are in 800?', type: 'input', answer: 8 },
          { q: 'Which number comes after 399?', type: 'mc', choices: ['389','400','398','300'], answer: '400' },
          { q: 'Which number comes just before 700?', type: 'mc', choices: ['701','710','699','600'], answer: '699' },
          { q: 'Is 345 read as "three hundred forty-five"?', type: 'tf', answer: true },
          { q: '700 + 30 + 8 = ___', type: 'input', answer: 738 },
          { q: 'What number has 9 hundreds, 0 tens, and 5 ones?', type: 'mc', choices: ['905','950','509','590'], answer: '905' },
          { q: '900 + 5 = ___', type: 'input', answer: 905 },
          { q: 'Is 1,000 the same as 10 hundreds?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Comparing Three-Digit Numbers',
        scene: '428 ⚖️ 482',
        explain: {
          concept: 'To compare two 3-digit numbers, start at the hundreds place. If equal, move to tens. If still equal, check ones.',
          example: '428 vs 482\n→ Hundreds: 4 = 4 (same, move on)\n→ Tens: 2 < 8\n→ So 428 < 482 ✓',
          tip: 'The alligator mouth 🐊 always eats the BIGGER number. 5 > 3 means the mouth opens toward 5!'
        },
        problems: [
          { q: 'Which is greater: 542 or 524?', type: 'mc', choices: ['542','524','They are equal','Cannot tell'], answer: '542' },
          { q: 'Is 389 < 398?', type: 'tf', answer: true },
          { q: 'Is 700 > 699?', type: 'tf', answer: true },
          { q: 'Which is smallest: 412, 421, or 142?', type: 'mc', choices: ['412','421','142','All equal'], answer: '142' },
          { q: 'Is 555 = 555?', type: 'tf', answer: true },
          { q: 'Which symbol fits? 468 ___ 486', type: 'mc', choices: ['468 < 486','468 > 486','468 = 486','Cannot tell'], answer: '468 < 486' },
          { q: 'Which is larger: 900 or 1,000?', type: 'mc', choices: ['900','1,000','Equal','Cannot tell'], answer: '1,000' },
          { q: 'Is 250 > 205?', type: 'tf', answer: true },
          { q: 'Least to greatest: 631, 316, 163. Which comes first?', type: 'mc', choices: ['631','316','163','All equal'], answer: '163' },
          { q: 'Is 999 the largest three-digit number?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 4 (Weeks 14–18) ──────────────────────────────────
  {
    id: 3, grade: 2, module: 4,
    weekStart: 14, weekEnd: 18,
    name: 'Module 4', title: 'Addition & Subtraction within 200',
    emoji: '📊', color: '#1a7ac7',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Adding Within 200',
        scene: '88 ➕ 96 = ❓',
        explain: {
          concept: 'To add numbers that cross 100, make a friendly number first! Get to a round number, then add the rest.',
          example: '97 + 36 = ?\n→ 97 + 3 = 100 (friendly!)\n→ 36 − 3 = 33 left to add\n→ 100 + 33 = 133 ✓',
          tip: 'Always look for a way to make 100 first. It makes adding so much easier!'
        },
        problems: [
          { q: '97 + 36 = ___', type: 'input', answer: 133 },
          { q: '125 + 48 = ___', type: 'input', answer: 173 },
          { q: '84 + 79 = ___', type: 'mc', choices: ['153','163','143','173'], answer: '163' },
          { q: 'Is 76 + 48 = 124?', type: 'tf', answer: true },
          { q: 'Is 93 + 87 = 170?', type: 'tf', answer: false },
          { q: '110 + 65 = ___', type: 'input', answer: 175 },
          { q: 'There are 88 red beads and 96 blue beads. How many in all?', type: 'mc', choices: ['174','184','194','164'], answer: '184' },
          { q: '153 + 39 = ___', type: 'input', answer: 192 },
          { q: '67 + ___ = 132', type: 'input', answer: 65 },
          { q: 'Mia read 74 pages Monday and 87 Tuesday. Total?', type: 'mc', choices: ['151','161','141','171'], answer: '161' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtracting Within 200',
        scene: '143 ➖ 57 = ❓',
        explain: {
          concept: 'To subtract across 100, use a number bond to break apart the number you are subtracting.',
          example: '143 − 57 = ?\n→ Break 57 into 43 + 14\n→ 143 − 43 = 100\n→ 100 − 14 = 86 ✓',
          tip: 'Subtract in two steps: first get to 100, then subtract the rest!'
        },
        problems: [
          { q: '143 − 57 = ___', type: 'input', answer: 86 },
          { q: '172 − 89 = ___', type: 'input', answer: 83 },
          { q: '156 − 68 = ___', type: 'mc', choices: ['78','88','98','68'], answer: '88' },
          { q: 'Is 130 − 46 = 84?', type: 'tf', answer: true },
          { q: 'Is 185 − 97 = 78?', type: 'tf', answer: false },
          { q: 'A store has 162 apples. They sell 75. How many left?', type: 'mc', choices: ['77','87','97','107'], answer: '87' },
          { q: '200 − 64 = ___', type: 'input', answer: 136 },
          { q: '148 − ___ = 79', type: 'input', answer: 69 },
          { q: 'Is 100 − 55 = 45?', type: 'tf', answer: true },
          { q: '175 − 88 = ___', type: 'mc', choices: ['77','87','97','67'], answer: '87' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 200',
        scene: '📚📚',
        explain: {
          concept: 'Read the problem carefully! Look for clue words. "In all / total / altogether" → add. "How many more / left / remain" → subtract.',
          example: 'Leo has 95 stamps. Gets 68 more.\n→ "gets more" = add\n→ 95 + 68 = 163 stamps ✓',
          tip: 'Draw a tape diagram! It helps you see if you should add or subtract.'
        },
        problems: [
          { q: 'Leo has 95 stamps. He gets 68 more. How many now?', type: 'input', answer: 163, unit: 'stamps' },
          { q: 'A bag has 150 marbles. 73 fall out. How many remain?', type: 'mc', choices: ['67','77','87','97'], answer: '77' },
          { q: 'School A has 147 students. School B has 89. How many more in A?', type: 'input', answer: 58, unit: 'students' },
          { q: 'Is 80 + 75 = 155?', type: 'tf', answer: true },
          { q: 'Is 162 − 84 = 78?', type: 'tf', answer: true },
          { q: 'There are 128 red and 54 blue chairs. How many chairs?', type: 'mc', choices: ['172','182','192','162'], answer: '182' },
          { q: '200 − 138 = ___', type: 'input', answer: 62 },
          { q: 'A class collected 96 cans. They need 150. How many more?', type: 'mc', choices: ['44','54','64','74'], answer: '54' },
          { q: '74 + 98 = ___', type: 'input', answer: 172 },
          { q: 'Is 145 − 70 = 75?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 5 (Weeks 19–23) ──────────────────────────────────
  {
    id: 4, grade: 2, module: 5,
    weekStart: 19, weekEnd: 23,
    name: 'Module 5', title: 'Addition & Subtraction within 1,000',
    emoji: '🔢', color: '#5b34c4',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Adding Three-Digit Numbers',
        scene: '247 ➕ 385 = ❓',
        explain: {
          concept: 'Add ones, then tens, then hundreds. If any column has 10 or more, regroup (carry) to the next place!',
          example: '247 + 385 = ?\n→ Ones: 7 + 5 = 12 → write 2, carry 1\n→ Tens: 4 + 8 + 1 = 13 → write 3, carry 1\n→ Hundreds: 2 + 3 + 1 = 6\n→ Answer: 632 ✓',
          tip: 'Regroup means "10 ones = 1 ten" or "10 tens = 1 hundred". Always check if you need to regroup!'
        },
        problems: [
          { q: '247 + 385 = ___', type: 'input', answer: 632 },
          { q: '463 + 279 = ___', type: 'input', answer: 742 },
          { q: '318 + 456 = ___', type: 'mc', choices: ['764','774','784','754'], answer: '774' },
          { q: 'Is 500 + 273 = 773?', type: 'tf', answer: true },
          { q: 'Is 387 + 425 = 800?', type: 'tf', answer: false },
          { q: '624 + 257 = ___', type: 'input', answer: 881 },
          { q: 'A farm has 348 chickens and 275 ducks. How many birds?', type: 'mc', choices: ['613','623','633','643'], answer: '623' },
          { q: '193 + 549 = ___', type: 'input', answer: 742 },
          { q: '475 + ___ = 900', type: 'input', answer: 425 },
          { q: '336 + 448 = ___', type: 'mc', choices: ['774','784','764','794'], answer: '784' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtracting Three-Digit Numbers',
        scene: '735 ➖ 284 = ❓',
        explain: {
          concept: 'Subtract ones, then tens, then hundreds. If a column does not have enough, ungroup (borrow) from the next place!',
          example: '735 − 284 = ?\n→ Ones: 5 − 4 = 1\n→ Tens: 3 − 8? Need to borrow! 13 − 8 = 5 (hundreds: 7→6)\n→ Hundreds: 6 − 2 = 4\n→ Answer: 451 ✓',
          tip: 'Ungroup = borrow. Cross out the digit, subtract 1, and add 10 to the next column!'
        },
        problems: [
          { q: '735 − 284 = ___', type: 'input', answer: 451 },
          { q: '612 − 347 = ___', type: 'input', answer: 265 },
          { q: '843 − 568 = ___', type: 'mc', choices: ['265','275','285','255'], answer: '275' },
          { q: 'Is 900 − 356 = 544?', type: 'tf', answer: true },
          { q: 'Is 700 − 282 = 418?', type: 'tf', answer: true },
          { q: '1,000 − 437 = ___', type: 'input', answer: 563 },
          { q: 'A library has 827 books. 359 are checked out. How many remain?', type: 'mc', choices: ['458','468','478','488'], answer: '468' },
          { q: '954 − ___ = 382', type: 'input', answer: 572 },
          { q: 'Is 583 − 297 = 286?', type: 'tf', answer: true },
          { q: '762 − 485 = ___', type: 'mc', choices: ['267','277','287','257'], answer: '277' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 1,000',
        scene: '🚂📦',
        explain: {
          concept: 'Use a tape diagram to organize large number word problems. Label the parts and the whole.',
          example: 'Train carries 487 day 1, 356 day 2. Total?\n→ Tape: [487 | 356] = whole\n→ 487 + 356 = 843 passengers ✓',
          tip: '"Total / altogether" → add. "How many left / remain" → subtract. Draw before you calculate!'
        },
        problems: [
          { q: 'A train carries 487 on day 1 and 356 on day 2. Total passengers?', type: 'mc', choices: ['823','833','843','853'], answer: '843' },
          { q: 'A factory makes 650 toys. It ships 278. How many left?', type: 'input', answer: 372, unit: 'toys' },
          { q: 'Is 525 + 356 = 881?', type: 'tf', answer: true },
          { q: 'A school has 943 books. They donate 485. How many left?', type: 'mc', choices: ['448','458','468','478'], answer: '458' },
          { q: '764 − 398 = ___', type: 'input', answer: 366 },
          { q: 'Is 300 + 400 + 200 = 900?', type: 'tf', answer: true },
          { q: 'There are 612 red and 279 blue tiles. How many in all?', type: 'input', answer: 891, unit: 'tiles' },
          { q: 'Is 1,000 − 500 = 499?', type: 'tf', answer: false },
          { q: 'Mia saves $347 in March and $486 in April. Total?', type: 'mc', choices: ['823','833','843','813'], answer: '833' },
          { q: '500 − 237 = ___', type: 'input', answer: 263 },
        ]
      }
    ]
  },

  // ── Module 6 (Weeks 24–27) ──────────────────────────────────
  {
    id: 5, grade: 2, module: 6,
    weekStart: 24, weekEnd: 27,
    name: 'Module 6', title: 'Foundations of Multiplication',
    emoji: '✖️', color: '#b5298a',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Equal Groups',
        scene: '⭕⭕⭕ ⭕⭕⭕ ⭕⭕⭕',
        explain: {
          concept: 'Equal groups means each group has the SAME number of items. Draw circles (groups) with dots inside (items)!',
          example: '3 groups of 4:\n→ Draw: ⭕⭕⭕⭕  ⭕⭕⭕⭕  ⭕⭕⭕⭕\n→ Count all dots: 4 + 4 + 4 = 12\n→ We write this as 3 × 4 = 12 ✓',
          tip: 'First number = how many groups. Second number = how many in each group.'
        },
        problems: [
          { q: '3 groups of 4 = ___', type: 'input', answer: 12 },
          { q: '5 groups of 2 = ___', type: 'input', answer: 10 },
          { q: '4 groups of 3 = ___', type: 'mc', choices: ['7','10','12','14'], answer: '12' },
          { q: 'Is 5 groups of 3 = 15?', type: 'tf', answer: true },
          { q: 'Is 4 groups of 4 = 12?', type: 'tf', answer: false },
          { q: '2 groups of 6 = ___', type: 'input', answer: 12 },
          { q: 'There are 6 bags with 5 apples each. Total apples?', type: 'mc', choices: ['25','30','35','11'], answer: '30' },
          { q: '3 groups of 7 = ___', type: 'input', answer: 21 },
          { q: 'Is 2 groups of 9 = 16?', type: 'tf', answer: false },
          { q: '4 groups of 5 = ___', type: 'mc', choices: ['15','20','25','9'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Arrays',
        scene: '🔵🔵🔵🔵\n🔵🔵🔵🔵',
        explain: {
          concept: 'An array is a neat arrangement of objects in rows and columns. Rows go across ↔, columns go up and down ↕.',
          example: '3 rows × 4 columns:\n→ 🔵🔵🔵🔵\n   🔵🔵🔵🔵\n   🔵🔵🔵🔵\n→ 3 × 4 = 12 ✓',
          tip: '3 × 4 = 4 × 3 = 12. You can flip an array and get the same total!'
        },
        problems: [
          { q: 'An array has 3 rows and 4 columns. How many in all?', type: 'input', answer: 12 },
          { q: 'An array has 5 rows and 2 columns. How many?', type: 'mc', choices: ['7','10','12','15'], answer: '10' },
          { q: 'Is a 4×6 array the same total as a 6×4 array?', type: 'tf', answer: true },
          { q: 'An array has 2 rows and 8 columns. How many?', type: 'input', answer: 16 },
          { q: 'Is 3 rows × 3 columns = 9?', type: 'tf', answer: true },
          { q: '5 rows × 5 columns = ___', type: 'mc', choices: ['10','20','25','30'], answer: '25' },
          { q: 'A garden has 4 rows of 6 flowers. How many flowers?', type: 'input', answer: 24, unit: 'flowers' },
          { q: '2 rows × 7 columns = ___', type: 'input', answer: 14 },
          { q: 'Is 3 × 8 = 8 × 3?', type: 'tf', answer: true },
          { q: 'An array shows 3 rows of 9 stars. How many stars?', type: 'mc', choices: ['27','28','29','30'], answer: '27' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Repeated Addition',
        scene: '5 ➕ 5 ➕ 5 ➕ 5',
        explain: {
          concept: 'Repeated addition is adding the same number over and over. This is the same as multiplication!',
          example: '4 groups of 5:\n→ 5 + 5 + 5 + 5 = 20\n→ Same as 4 × 5 = 20 ✓',
          tip: 'Count the number of addends — that is your first factor. The number you repeat is the second factor!'
        },
        problems: [
          { q: '5 + 5 + 5 = ___', type: 'input', answer: 15 },
          { q: '4 + 4 + 4 + 4 = ___', type: 'mc', choices: ['12','14','16','20'], answer: '16' },
          { q: '3 + 3 + 3 + 3 + 3 = ___', type: 'input', answer: 15 },
          { q: 'Is 6 + 6 + 6 = 18?', type: 'tf', answer: true },
          { q: 'Is 7 + 7 + 7 = 24?', type: 'tf', answer: false },
          { q: '8 + 8 = ___', type: 'input', answer: 16 },
          { q: 'Which shows 4 groups of 3?', type: 'mc', choices: ['4+4+4','3+3+3+3','4+3+4+3','3+4'], answer: '3+3+3+3' },
          { q: '2 + 2 + 2 + 2 + 2 + 2 = ___', type: 'input', answer: 12 },
          { q: 'Is 9 + 9 + 9 = 27?', type: 'tf', answer: true },
          { q: '10 + 10 + 10 = ___', type: 'mc', choices: ['20','25','30','100'], answer: '30' },
        ]
      }
    ]
  },

  // ── Module 7 (Weeks 28–32) ──────────────────────────────────
  {
    id: 6, grade: 2, module: 7,
    weekStart: 28, weekEnd: 32,
    name: 'Module 7', title: 'Money, Data, and Word Problems',
    emoji: '💰', color: '#0e8f6b',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Coins and Their Values',
        scene: '🪙🪙🪙💵',
        explain: {
          concept: 'There are 4 main coins. Each has a special value in cents (¢). Learn them by heart!',
          example: 'Quarter 🟡 = 25¢\nDime 🔘 = 10¢\nNickel 🟤 = 5¢\nPenny 🔶 = 1¢\n→ 100¢ = $1.00 (one dollar)',
          tip: 'Memory trick: Q-D-N-P going down in value. Quarter → Dime → Nickel → Penny!'
        },
        problems: [
          { q: 'How many cents is a quarter worth?', type: 'input', answer: 25, unit: '¢' },
          { q: 'How many cents is a dime worth?', type: 'input', answer: 10, unit: '¢' },
          { q: 'How many cents is a nickel worth?', type: 'mc', choices: ['1¢','5¢','10¢','25¢'], answer: '5¢' },
          { q: 'Is a penny worth 1 cent?', type: 'tf', answer: true },
          { q: 'Is a dime worth more than a quarter?', type: 'tf', answer: false },
          { q: 'How many dimes make a dollar?', type: 'mc', choices: ['5','10','20','25'], answer: '10' },
          { q: 'How many nickels make a quarter?', type: 'input', answer: 5, unit: 'nickels' },
          { q: 'How many pennies equal a dime?', type: 'mc', choices: ['5','10','20','25'], answer: '10' },
          { q: 'Is a quarter = 25 pennies?', type: 'tf', answer: true },
          { q: 'How many cents in a dollar?', type: 'input', answer: 100, unit: '¢' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Counting Coins',
        scene: '🪙🪙🪙💵',
        explain: {
          concept: 'Count coins from the biggest value to the smallest. Say the running total out loud as you go!',
          example: '2 quarters + 1 dime + 2 nickels:\n→ 25 → 50 (quarters)\n→ 60 (dime)\n→ 65 → 70 (nickels)\n→ Total = 70¢ ✓',
          tip: 'Always start with the biggest coin! Quarter → Dime → Nickel → Penny.'
        },
        problems: [
          { q: '2 quarters = ___ cents', type: 'input', answer: 50, unit: '¢' },
          { q: '3 dimes + 2 nickels = ___ cents', type: 'input', answer: 40, unit: '¢' },
          { q: '1 quarter + 3 dimes = ___ cents', type: 'mc', choices: ['45¢','55¢','65¢','75¢'], answer: '55¢' },
          { q: 'Is 5 dimes = 50 cents?', type: 'tf', answer: true },
          { q: 'Is 3 quarters = 85 cents?', type: 'tf', answer: false },
          { q: '4 nickels = ___ cents', type: 'input', answer: 20, unit: '¢' },
          { q: '2 dimes + 3 pennies = ___ cents', type: 'mc', choices: ['21¢','23¢','25¢','32¢'], answer: '23¢' },
          { q: '1 dollar − 35 cents = ___ cents left', type: 'input', answer: 65, unit: '¢' },
          { q: '3 quarters = ___ cents', type: 'mc', choices: ['50¢','65¢','75¢','85¢'], answer: '75¢' },
          { q: 'Is 1 quarter + 5 dimes = 75 cents?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems with Money',
        scene: '🛍️💰',
        explain: {
          concept: 'Money word problems are just like other word problems — add to find the total cost, subtract to find change.',
          example: 'Toy costs 87¢. You pay $1.00 (100¢).\n→ Change = 100 − 87 = 13¢ ✓\n\nChange = what you get BACK.',
          tip: '"How much for both?" → add. "How much change?" → subtract from what you paid!'
        },
        problems: [
          { q: 'A pencil costs 45¢. A pen costs 68¢. How much for both?', type: 'input', answer: 113, unit: '¢' },
          { q: 'Tom has 100¢ and spends 57¢. How much is left?', type: 'input', answer: 43, unit: '¢' },
          { q: 'Is 25¢ + 35¢ = 60¢?', type: 'tf', answer: true },
          { q: 'A toy costs 87¢. You pay $1.00. Change?', type: 'mc', choices: ['3¢','13¢','17¢','23¢'], answer: '13¢' },
          { q: 'Is 50¢ + 75¢ = 125¢?', type: 'tf', answer: true },
          { q: 'Mia has 3 quarters and 4 dimes. How many cents?', type: 'mc', choices: ['95¢','105¢','115¢','125¢'], answer: '115¢' },
          { q: 'A book costs 135¢. You have 200¢. Change?', type: 'input', answer: 65, unit: '¢' },
          { q: 'Jake buys 2 items for 45¢ each. Total cost?', type: 'input', answer: 90, unit: '¢' },
          { q: 'Is $0.75 the same as 75 cents?', type: 'tf', answer: true },
          { q: 'You have 2 dimes, 3 nickels, and 4 pennies. Total cents?', type: 'mc', choices: ['37¢','39¢','41¢','43¢'], answer: '39¢' },
        ]
      }
    ]
  },

  // ── Module 8 (Weeks 33–36) ──────────────────────────────────
  {
    id: 7, grade: 2, module: 8,
    weekStart: 33, weekEnd: 36,
    name: 'Module 8', title: 'Time, Shapes, and Fractions',
    emoji: '⏰', color: '#c03030',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Telling Time',
        scene: '🕐⏰',
        explain: {
          concept: 'A clock has two hands. The SHORT hand points to the hour. The LONG hand points to the minutes. There are 60 minutes in 1 hour.',
          example: 'What time is 3:00 + 1 hour 30 minutes?\n→ 3:00 + 1 hour = 4:00\n→ 4:00 + 30 min = 4:30\n→ Answer: 4:30 ✓',
          tip: 'Short hand = hours (moves slowly). Long hand = minutes (moves fast). "Half past" = :30. "Quarter past" = :15.'
        },
        problems: [
          { q: 'How many minutes in 1 hour?', type: 'input', answer: 60, unit: 'minutes' },
          { q: 'How many hours in 1 day?', type: 'input', answer: 24, unit: 'hours' },
          { q: 'Is "half past 3" the same as 3:30?', type: 'tf', answer: true },
          { q: 'How many minutes in half an hour?', type: 'mc', choices: ['15','30','45','60'], answer: '30' },
          { q: 'A movie starts at 2:00 and lasts 1 hour 30 minutes. When does it end?', type: 'mc', choices: ['3:00','3:30','4:00','2:30'], answer: '3:30' },
          { q: 'School starts at 8:00. Lunch is 4 hours later. Time?', type: 'mc', choices: ['11:00','12:00','1:00','2:00'], answer: '12:00' },
          { q: 'How many minutes in a quarter hour?', type: 'input', answer: 15, unit: 'minutes' },
          { q: 'Is 1:15 the same as "quarter past 1"?', type: 'tf', answer: true },
          { q: 'Practice starts at 3:30 and lasts 45 minutes. When does it end?', type: 'mc', choices: ['4:00','4:15','4:30','5:15'], answer: '4:15' },
          { q: 'How many minutes between 2:00 and 2:45?', type: 'input', answer: 45, unit: 'minutes' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Halves and Thirds',
        scene: '🔵⬜',
        explain: {
          concept: 'A fraction shows equal parts of a whole. 1/2 means 1 part out of 2 equal parts. 1/3 means 1 part out of 3 equal parts.',
          example: 'A pizza cut into 2 equal slices:\n→ Each slice = 1/2\n→ 1/2 of 10 = 10 ÷ 2 = 5 ✓',
          tip: 'Bottom number (denominator) = total equal parts. Top number (numerator) = parts you have.'
        },
        problems: [
          { q: 'A pizza cut into 2 equal pieces. What fraction is each piece?', type: 'mc', choices: ['1/4','1/3','1/2','1/6'], answer: '1/2' },
          { q: 'Is 1/2 of 10 = 5?', type: 'tf', answer: true },
          { q: '1/2 of 20 = ___', type: 'input', answer: 10 },
          { q: 'A rope is cut into 3 equal parts. What is each part called?', type: 'mc', choices: ['Half','Third','Quarter','Fifth'], answer: 'Third' },
          { q: 'Is 1/3 of 12 = 4?', type: 'tf', answer: true },
          { q: '1/3 of 9 = ___', type: 'input', answer: 3 },
          { q: '1/2 of 16 = ___', type: 'mc', choices: ['4','6','8','10'], answer: '8' },
          { q: 'Is 1/2 greater than 1/3?', type: 'tf', answer: true },
          { q: '1/3 of 15 = ___', type: 'input', answer: 5 },
          { q: 'A bar has 6 squares. Maya eats 1/3. How many squares?', type: 'mc', choices: ['1','2','3','4'], answer: '2' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Fourths and Equal Parts',
        scene: '🟡🟡⬜⬜',
        explain: {
          concept: 'When a shape is cut into 4 equal parts, each part is called a fourth (or quarter). 4 fourths = 1 whole.',
          example: 'A square cut into 4 equal pieces:\n→ Each piece = 1/4\n→ 1/4 of 12 = 12 ÷ 4 = 3 ✓',
          tip: '1/4 < 1/3 < 1/2. More equal parts → each part is SMALLER!'
        },
        problems: [
          { q: 'A square cut into 4 equal pieces. What is each piece called?', type: 'mc', choices: ['Half','Third','Quarter','Eighth'], answer: 'Quarter' },
          { q: '1/4 of 12 = ___', type: 'input', answer: 3 },
          { q: 'Is 1/4 of 20 = 5?', type: 'tf', answer: true },
          { q: '3/4 of 12 = ___', type: 'input', answer: 9 },
          { q: 'Is 1/4 less than 1/2?', type: 'tf', answer: true },
          { q: '1/4 of 8 = ___', type: 'mc', choices: ['1','2','3','4'], answer: '2' },
          { q: 'A pie is cut into 4 slices. You eat 2. What fraction?', type: 'mc', choices: ['1/4','1/2','3/4','1/3'], answer: '1/2' },
          { q: '3/4 of 8 = ___', type: 'input', answer: 6 },
          { q: 'Is 2/4 the same as 1/2?', type: 'tf', answer: true },
          { q: 'A cake cut into 4 parts. 3 are eaten. What fraction is left?', type: 'mc', choices: ['1/4','2/4','3/4','1/2'], answer: '1/4' },
        ]
      }
    ]
  }
];

// ── GRADE 3 ──────────────────────────────────────────────────
const EUREKA_G3 = [
  {
    id: 0, grade: 3, module: 1, weekStart: 1, weekEnd: 5,
    name: 'Module 1', title: 'Multiplication & Division (×2–5 & ×10)',
    emoji: '✖️', color: '#e84040',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Equal Groups and Multiplication',
        scene: '⭕⭕⭕⭕ ⭕⭕⭕⭕ ⭕⭕⭕⭕',
        explain: {
          concept: 'Multiplication is a faster way to add equal groups. Instead of 4 + 4 + 4, we write 3 × 4 = 12.',
          example: '3 × 4 = ?\n→ Draw 3 groups with 4 dots each\n→ ⭕⭕⭕⭕  ⭕⭕⭕⭕  ⭕⭕⭕⭕\n→ Count: 4 + 4 + 4 = 12 ✓',
          tip: 'First number = number of groups. Second = size of each group. 3×4 = 4×3 (same answer!)'
        },
        problems: [
          { q: '3 × 4 = ___', type: 'input', answer: 12 },
          { q: '5 × 2 = ___', type: 'input', answer: 10 },
          { q: '4 × 3 = ___', type: 'mc', choices: ['7','10','12','14'], answer: '12' },
          { q: 'Is 5 × 3 = 15?', type: 'tf', answer: true },
          { q: 'Is 4 × 4 = 12?', type: 'tf', answer: false },
          { q: '2 × 6 = ___', type: 'input', answer: 12 },
          { q: 'There are 5 bags with 4 apples each. Total apples?', type: 'mc', choices: ['9','16','20','25'], answer: '20' },
          { q: '3 × 7 = ___', type: 'input', answer: 21 },
          { q: 'Is 2 × 9 = 18?', type: 'tf', answer: true },
          { q: '4 × 5 = ___', type: 'mc', choices: ['15','20','25','9'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Division as Equal Sharing',
        scene: '12 ➗ 3 = 4',
        explain: {
          concept: 'Division means splitting a total into equal groups. 12 ÷ 3 = 4 means split 12 into 3 equal groups → 4 in each group.',
          example: '20 ÷ 4 = ?\n→ Split 20 into 4 equal groups\n→ 5 in each group\n→ 20 ÷ 4 = 5 ✓',
          tip: 'Division and multiplication are related! If 4 × 5 = 20, then 20 ÷ 4 = 5 and 20 ÷ 5 = 4.'
        },
        problems: [
          { q: '12 ÷ 3 = ___', type: 'input', answer: 4 },
          { q: '20 ÷ 4 = ___', type: 'input', answer: 5 },
          { q: '15 ÷ 5 = ___', type: 'mc', choices: ['2','3','4','5'], answer: '3' },
          { q: 'Is 18 ÷ 2 = 9?', type: 'tf', answer: true },
          { q: 'Is 16 ÷ 4 = 5?', type: 'tf', answer: false },
          { q: 'Share 24 apples among 4 friends. Each gets ___?', type: 'mc', choices: ['4','5','6','8'], answer: '6' },
          { q: '30 ÷ 5 = ___', type: 'input', answer: 6 },
          { q: '10 ÷ 2 = ___', type: 'input', answer: 5 },
          { q: 'Is 25 ÷ 5 = 4?', type: 'tf', answer: false },
          { q: '40 ÷ 10 = ___', type: 'mc', choices: ['2','4','5','10'], answer: '4' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems ×2–5',
        scene: '📦📦📦',
        explain: {
          concept: 'Key words help you know when to multiply! "Each", "per", "every", "groups of" → multiply. "Shared equally", "split into" → divide.',
          example: 'A flower has 5 petals. 4 flowers.\n→ "Each flower has 5" → multiply!\n→ 4 × 5 = 20 petals ✓',
          tip: 'Draw a picture or array first. It helps you see the groups clearly!'
        },
        problems: [
          { q: 'A flower has 5 petals. How many petals on 4 flowers?', type: 'mc', choices: ['15','18','20','25'], answer: '20' },
          { q: 'Each box has 3 pencils. There are 5 boxes. Total pencils?', type: 'input', answer: 15, unit: 'pencils' },
          { q: 'Is 3 × 4 = 12?', type: 'tf', answer: true },
          { q: '5 × ___ = 25', type: 'input', answer: 5 },
          { q: 'A table has 4 legs. How many legs on 5 tables?', type: 'mc', choices: ['15','16','20','25'], answer: '20' },
          { q: 'Each carton holds 10 eggs. Total eggs in 3 cartons?', type: 'input', answer: 30, unit: 'eggs' },
          { q: 'Is 4 × 3 = 3 × 4?', type: 'tf', answer: true },
          { q: 'Which shows 4 groups of 5?', type: 'mc', choices: ['4+4+4+4+4','5+5+5+5','4+5+4+5','5×4=25'], answer: '5+5+5+5' },
          { q: '___ × 2 = 10', type: 'input', answer: 5 },
          { q: '3 rows with 4 chairs each. How many chairs?', type: 'mc', choices: ['7','10','12','14'], answer: '12' },
        ]
      }
    ]
  },
  {
    id: 1, grade: 3, module: 2, weekStart: 6, weekEnd: 9,
    name: 'Module 2', title: 'Place Value & Units of Measure',
    emoji: '⚖️', color: '#e06c00',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Rounding to Nearest Ten and Hundred',
        scene: '47 → 50',
        explain: {
          concept: 'Rounding means finding the nearest ten or hundred. Look at the digit to the RIGHT of the place you are rounding to!',
          example: 'Round 47 to nearest ten:\n→ Look at ones digit: 7\n→ 7 ≥ 5 → round UP → 47 rounds to 50 ✓\n\nRound 23 to nearest ten:\n→ Ones digit: 3 < 5 → round DOWN → 23 rounds to 20',
          tip: '0,1,2,3,4 → round DOWN. 5,6,7,8,9 → round UP. "5 or more, go to the door (up)!"'
        },
        problems: [
          { q: 'Round 47 to the nearest ten.', type: 'mc', choices: ['40','45','50','47'], answer: '50' },
          { q: 'Round 23 to the nearest ten.', type: 'mc', choices: ['20','25','23','30'], answer: '20' },
          { q: 'Round 380 to the nearest hundred.', type: 'mc', choices: ['300','350','400','380'], answer: '400' },
          { q: 'Round 251 to the nearest ten.', type: 'mc', choices: ['250','255','260','300'], answer: '250' },
          { q: 'Is 76 rounded to the nearest ten = 80?', type: 'tf', answer: true },
          { q: 'Is 34 rounded to the nearest ten = 40?', type: 'tf', answer: false },
          { q: 'Round 645 to the nearest hundred.', type: 'mc', choices: ['500','600','700','650'], answer: '600' },
          { q: 'Round 83 to the nearest ten.', type: 'input', answer: 80 },
          { q: 'Round 199 to the nearest hundred.', type: 'mc', choices: ['100','200','199','150'], answer: '200' },
          { q: 'Is 550 rounded to the nearest hundred = 600?', type: 'tf', answer: true },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Time and Intervals',
        scene: '🕑⏰',
        explain: {
          concept: 'Elapsed time is how long something takes. Use a number line and jump by hours first, then minutes!',
          example: 'Start: 3:00 → End: 4:30\n→ Jump +1 hour: 3:00 → 4:00\n→ Jump +30 min: 4:00 → 4:30\n→ Elapsed: 1 hour 30 minutes ✓',
          tip: 'Draw a timeline! Jump in friendly amounts: full hours first, then leftover minutes.'
        },
        problems: [
          { q: 'How many minutes in half an hour?', type: 'mc', choices: ['15','20','30','60'], answer: '30' },
          { q: 'School starts at 8:00. Lunch is 4 hours later. Time?', type: 'mc', choices: ['10:00','11:00','12:00','1:00'], answer: '12:00' },
          { q: 'Is 1:15 the same as "quarter past 1"?', type: 'tf', answer: true },
          { q: 'A movie starts at 3:00 and lasts 1 hr 30 min. When does it end?', type: 'mc', choices: ['3:30','4:00','4:30','5:00'], answer: '4:30' },
          { q: 'How many minutes between 2:10 and 2:40?', type: 'mc', choices: ['20','25','30','35'], answer: '30' },
          { q: 'Practice ends at 4:45 and lasted 45 minutes. When did it start?', type: 'mc', choices: ['3:45','4:00','4:15','4:30'], answer: '4:00' },
          { q: 'How many hours from 7 AM to noon?', type: 'input', answer: 5, unit: 'hours' },
          { q: 'Is 2:30 PM the same as 14:30?', type: 'tf', answer: true },
          { q: 'A game lasts 2 hr 15 min. Starts at 1:00. When does it end?', type: 'mc', choices: ['2:15','3:00','3:15','3:30'], answer: '3:15' },
          { q: 'How many minutes in 2 hours?', type: 'input', answer: 120, unit: 'minutes' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Mass and Liquid Volume',
        scene: '⚖️💧',
        explain: {
          concept: 'Mass is how heavy something is. Capacity is how much liquid fits. 1 kilogram (kg) = 1,000 grams (g). 1 liter (L) = 1,000 milliliters (mL).',
          example: 'A bag weighs 2 kg.\n→ In grams: 2 × 1,000 = 2,000 g\n\nTwo 500 mL bottles:\n→ 500 + 500 = 1,000 mL = 1 L ✓',
          tip: 'Kilo means 1,000! 1 kg = 1,000 g. 1 L = 1,000 mL. Same rule!'
        },
        problems: [
          { q: 'A bag of flour weighs 2 kg. How many grams is that?', type: 'mc', choices: ['20 g','200 g','2000 g','20000 g'], answer: '2000 g' },
          { q: 'Is 1 liter = 1,000 milliliters?', type: 'tf', answer: true },
          { q: 'A bottle holds 500 mL. Two bottles hold ___ mL.', type: 'input', answer: 1000, unit: 'mL' },
          { q: 'A watermelon is 3 kg. A melon is 1 kg. How much heavier is the watermelon?', type: 'mc', choices: ['1 kg','2 kg','3 kg','4 kg'], answer: '2 kg' },
          { q: 'Is 800 mL less than 1 liter?', type: 'tf', answer: true },
          { q: 'A pitcher holds 3 L. You pour 1,500 mL. How many mL left?', type: 'input', answer: 1500, unit: 'mL' },
          { q: 'A backpack weighs 4 kg 500 g. In grams it weighs ___?', type: 'mc', choices: ['4500 g','4050 g','450 g','45000 g'], answer: '4500 g' },
          { q: 'You drink 250 mL of juice 4 times. Total mL?', type: 'input', answer: 1000, unit: 'mL' },
          { q: 'Is 1.5 liters = 1,500 milliliters?', type: 'tf', answer: true },
          { q: 'Which is heavier: 2,000 g or 3 kg?', type: 'mc', choices: ['2,000 g','3 kg','Same','Cannot tell'], answer: '3 kg' },
        ]
      }
    ]
  },
  {
    id: 2, grade: 3, module: 3, weekStart: 10, weekEnd: 14,
    name: 'Module 3', title: 'Multiplication & Division (×6–9)',
    emoji: '🔢', color: '#c09000',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Multiply by 6 and 7',
        scene: '6 ✖️ 7 = ❓',
        explain: {
          concept: 'Skip count by 6 or 7 to multiply! Or use a trick: for ×6, multiply by 5 first then add one more group.',
          example: '6 × 7 = ?\n→ Skip count by 6: 6, 12, 18, 24, 30, 36, 42\n→ Or: 5 × 7 = 35, then 35 + 7 = 42 ✓',
          tip: '6 × 7 = 42. "Six times seven is forty-two — a lucky number just for you!" 🎲'
        },
        problems: [
          { q: '6 × 4 = ___', type: 'input', answer: 24 },
          { q: '7 × 3 = ___', type: 'input', answer: 21 },
          { q: '6 × 7 = ___', type: 'mc', choices: ['36','42','48','54'], answer: '42' },
          { q: 'Is 6 × 6 = 35?', type: 'tf', answer: false },
          { q: 'Is 7 × 4 = 28?', type: 'tf', answer: true },
          { q: '7 × 6 = ___', type: 'input', answer: 42 },
          { q: 'A week has 7 days. How many days in 5 weeks?', type: 'mc', choices: ['25','30','35','40'], answer: '35' },
          { q: '6 × ___ = 54', type: 'input', answer: 9 },
          { q: '7 × 7 = ___', type: 'mc', choices: ['42','47','49','52'], answer: '49' },
          { q: 'Is 6 × 8 = 48?', type: 'tf', answer: true },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Multiply by 8 and 9',
        scene: '8 ✖️ 9 = ❓',
        explain: {
          concept: 'For ×9, use the "9s trick": multiply by 10 then subtract one group. For ×8, double the ×4 answer!',
          example: '9 × 7 = ?\n→ 10 × 7 = 70\n→ 70 − 7 = 63 ✓\n\n8 × 6 = ?\n→ 4 × 6 = 24, then double: 24 + 24 = 48 ✓',
          tip: 'Nines trick: 9 × n = (10 × n) − n. Works every time!'
        },
        problems: [
          { q: '8 × 3 = ___', type: 'input', answer: 24 },
          { q: '9 × 4 = ___', type: 'input', answer: 36 },
          { q: '8 × 7 = ___', type: 'mc', choices: ['54','56','58','64'], answer: '56' },
          { q: 'Is 9 × 9 = 81?', type: 'tf', answer: true },
          { q: 'Is 8 × 8 = 62?', type: 'tf', answer: false },
          { q: '9 × 6 = ___', type: 'input', answer: 54 },
          { q: '8 rows with 9 chairs each. How many chairs?', type: 'mc', choices: ['64','70','72','81'], answer: '72' },
          { q: '8 × ___ = 40', type: 'input', answer: 5 },
          { q: '9 × 8 = ___', type: 'mc', choices: ['63','70','72','81'], answer: '72' },
          { q: 'Is 8 × 9 = 9 × 8?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems ×6–9',
        scene: '🕷️🕷️🕷️',
        explain: {
          concept: 'Read carefully and identify what is being multiplied. Draw a picture or array to help visualize!',
          example: 'A spider has 8 legs. 6 spiders.\n→ 6 × 8 = 48 legs ✓',
          tip: 'Look for "each", "per", "every" — they always signal multiplication!'
        },
        problems: [
          { q: 'Each package has 6 crayons. There are 7 packages. Total crayons?', type: 'mc', choices: ['36','42','48','52'], answer: '42' },
          { q: 'A spider has 8 legs. How many legs do 6 spiders have?', type: 'input', answer: 48, unit: 'legs' },
          { q: 'Is 9 × 7 = 63?', type: 'tf', answer: true },
          { q: '8 × 9 = ___', type: 'input', answer: 72 },
          { q: 'A student reads 9 books a month. Books in 6 months?', type: 'mc', choices: ['45','54','63','72'], answer: '54' },
          { q: '7 × ___ = 56', type: 'input', answer: 8 },
          { q: '9 teams with 9 players each. Total players?', type: 'mc', choices: ['72','79','81','90'], answer: '81' },
          { q: 'Is 6 × 9 = 55?', type: 'tf', answer: false },
          { q: 'A recipe needs 8 cups for 1 cake. Cups for 7 cakes?', type: 'mc', choices: ['48','54','56','64'], answer: '56' },
          { q: 'A caterpillar has 6 pairs of legs. Total legs?', type: 'mc', choices: ['6','10','12','16'], answer: '12' },
        ]
      }
    ]
  },
  {
    id: 3, grade: 3, module: 4, weekStart: 15, weekEnd: 19,
    name: 'Module 4', title: 'Multiplication and Area',
    emoji: '🔷', color: '#1a7ac7',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Concept of Area',
        scene: '⬜⬜⬜\n⬜⬜⬜',
        explain: {
          concept: 'Area is the amount of flat space inside a shape. We measure area in square units. Count the unit squares that fit inside!',
          example: 'Rectangle: 3 rows of 4 squares:\n→ ⬜⬜⬜⬜\n   ⬜⬜⬜⬜\n   ⬜⬜⬜⬜\n→ Count: 12 square units ✓',
          tip: 'Area is measured in SQUARE units (cm², m²). Always write the ² symbol after the unit!'
        },
        problems: [
          { q: 'A rectangle has 3 rows and 4 columns of tiles. Area = ___ square units.', type: 'input', answer: 12 },
          { q: 'A square has 5 tiles on each side. Area = ___ square units.', type: 'mc', choices: ['10','20','25','30'], answer: '25' },
          { q: 'Is area measured in square units?', type: 'tf', answer: true },
          { q: 'A shape covers 8 square tiles. Area = ___ square units.', type: 'mc', choices: ['4','6','8','16'], answer: '8' },
          { q: 'Which has larger area: 3×5 or 4×4?', type: 'mc', choices: ['3×5 = 15','4×4 = 16','Same','Cannot tell'], answer: '4×4 = 16' },
          { q: 'A floor is 6 m long and 4 m wide. Area = ___?', type: 'mc', choices: ['10','24','28','48'], answer: '24' },
          { q: 'Is the area of a 5×5 square = 25?', type: 'tf', answer: true },
          { q: 'A garden is 8 m × 3 m. Area = ___ m².', type: 'input', answer: 24, unit: 'm²' },
          { q: 'A rectangle is 2 wide and 9 long. Area = ___?', type: 'mc', choices: ['11','16','18','22'], answer: '18' },
          { q: 'Which area is bigger: 4×6 or 5×5?', type: 'mc', choices: ['4×6 = 24','5×5 = 25','Same','Cannot tell'], answer: '5×5 = 25' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Area = Length × Width',
        scene: 'A = l ✖️ w',
        explain: {
          concept: 'You do not need to count every square! Use the formula: Area = length × width.',
          example: 'Rectangle 7 cm long, 3 cm wide:\n→ A = l × w\n→ A = 7 × 3\n→ A = 21 cm² ✓',
          tip: 'A square has equal sides, so Area = side × side. A 6 cm square: A = 6 × 6 = 36 cm².'
        },
        problems: [
          { q: 'A rectangle is 7 cm × 3 cm. Area = ___?', type: 'input', answer: 21, unit: 'cm²' },
          { q: '8 × 4 = ___', type: 'mc', choices: ['28','30','32','36'], answer: '32' },
          { q: 'A square has side = 6 cm. Area = ___?', type: 'mc', choices: ['12','24','36','48'], answer: '36' },
          { q: 'Is 9 × 3 = 27?', type: 'tf', answer: true },
          { q: 'A room is 5 m × 5 m. Area = ___ m².', type: 'input', answer: 25, unit: 'm²' },
          { q: 'A table is 4 m long and 2 m wide. Area = ___?', type: 'mc', choices: ['6','8','12','16'], answer: '8' },
          { q: 'A rug is 3 m × 7 m. Area = ___ m².', type: 'input', answer: 21, unit: 'm²' },
          { q: 'Is the area of a 6×4 rectangle = 24?', type: 'tf', answer: true },
          { q: 'A window is 9 dm wide and 4 dm tall. Area = ___?', type: 'mc', choices: ['32','36','38','45'], answer: '36' },
          { q: '___ × 8 = 56', type: 'mc', choices: ['6','7','8','9'], answer: '7' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Area and Perimeter',
        scene: '🔷📐',
        explain: {
          concept: 'Perimeter is the distance AROUND a shape (add all sides). Area is the space INSIDE (length × width). They are different!',
          example: 'Rectangle 6 cm × 4 cm:\n→ Perimeter: 6+4+6+4 = 20 cm\n→ Or: P = 2×(6+4) = 20 cm\n→ Area: 6 × 4 = 24 cm² ✓',
          tip: 'Perimeter = around (like a fence). Area = inside (like carpet). Different units!'
        },
        problems: [
          { q: 'A square has side 5 cm. Perimeter = ___?', type: 'mc', choices: ['10','15','20','25'], answer: '20' },
          { q: 'A rectangle is 6 cm × 4 cm. Perimeter = ___ cm.', type: 'input', answer: 20, unit: 'cm' },
          { q: 'A square has area 36 cm². What is each side?', type: 'mc', choices: ['4','6','8','9'], answer: '6' },
          { q: 'Is the perimeter of a 3×7 rectangle = 20?', type: 'tf', answer: true },
          { q: 'A garden 8 m × 5 m needs a fence. How much fencing?', type: 'mc', choices: ['13','26','40','80'], answer: '26' },
          { q: 'A square with side 9 cm. Perimeter = ___ cm.', type: 'input', answer: 36, unit: 'cm' },
          { q: 'Is the area AND perimeter of a 4×4 square both equal to 16?', type: 'tf', answer: true },
          { q: 'A room is 10 m × 6 m. Area = ___ m².', type: 'mc', choices: ['32','60','65','100'], answer: '60' },
          { q: 'A rectangle has perimeter 18 cm and width 3 cm. Length = ___?', type: 'mc', choices: ['6','8','12','15'], answer: '6' },
          { q: 'Is the area of a 2×9 rectangle equal to a 3×6 rectangle?', type: 'tf', answer: true },
        ]
      }
    ]
  },
  {
    id: 4, grade: 3, module: 5, weekStart: 20, weekEnd: 26,
    name: 'Module 5', title: 'Fractions as Numbers',
    emoji: '🔵', color: '#5b34c4',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Unit Fractions',
        scene: '🔵⬜⬜⬜',
        explain: {
          concept: 'A unit fraction has 1 as the top number (numerator). The bottom number (denominator) tells you how many equal parts the whole is split into.',
          example: '1/4 of 12:\n→ Split 12 into 4 equal groups\n→ 12 ÷ 4 = 3\n→ 1/4 of 12 = 3 ✓',
          tip: 'Bigger denominator → smaller piece! 1/8 is smaller than 1/4 because the pie is cut into more pieces.'
        },
        problems: [
          { q: 'Which fraction shows 1 part out of 3 equal parts?', type: 'mc', choices: ['1/2','1/3','1/4','2/3'], answer: '1/3' },
          { q: '1/4 of 12 = ___', type: 'input', answer: 3 },
          { q: 'Is 1/2 of 10 = 5?', type: 'tf', answer: true },
          { q: '1/3 of 9 = ___', type: 'mc', choices: ['2','3','4','6'], answer: '3' },
          { q: 'A ribbon is 12 cm. What is 1/4 of the ribbon?', type: 'mc', choices: ['2 cm','3 cm','4 cm','6 cm'], answer: '3 cm' },
          { q: 'Is 1/3 > 1/4?', type: 'tf', answer: true },
          { q: '1/2 of 20 = ___', type: 'input', answer: 10 },
          { q: 'On a number line, where is 1/2?', type: 'mc', choices: ['Between 0 and 1','Before 0','After 1','At 1'], answer: 'Between 0 and 1' },
          { q: 'Is 1/4 of 8 = 2?', type: 'tf', answer: true },
          { q: '1/3 of 15 = ___', type: 'mc', choices: ['3','4','5','6'], answer: '5' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Equivalent Fractions',
        scene: '1/2 = 2/4',
        explain: {
          concept: 'Equivalent fractions look different but are the same size. Fold a piece of paper to see — 1/2 and 2/4 cover the same area!',
          example: '1/2 = 2/4 = 4/8\n→ All the same value!\n→ Multiply top and bottom by the same number:\n   1/2 × (2/2) = 2/4 ✓',
          tip: 'To find equivalent fractions, multiply or divide both top and bottom by the SAME number.'
        },
        problems: [
          { q: 'Is 1/2 = 2/4?', type: 'tf', answer: true },
          { q: '2/4 is the same as ___?', type: 'mc', choices: ['1/2','1/3','1/4','2/3'], answer: '1/2' },
          { q: 'Is 2/3 > 1/3?', type: 'tf', answer: true },
          { q: 'Which fraction equals 1/2?', type: 'mc', choices: ['2/3','3/4','4/8','3/8'], answer: '4/8' },
          { q: 'Is 3/6 = 1/2?', type: 'tf', answer: true },
          { q: 'A pizza has 8 slices. You eat 4. What fraction?', type: 'mc', choices: ['1/3','1/2','2/3','3/4'], answer: '1/2' },
          { q: '3/4 of 12 = ___', type: 'mc', choices: ['6','8','9','10'], answer: '9' },
          { q: 'Is 2/4 = 3/6?', type: 'tf', answer: true },
          { q: 'On a number line, 2/4 lands on ___?', type: 'mc', choices: ['1/4 mark','1/2 mark','3/4 mark','At 1'], answer: '1/2 mark' },
          { q: 'Which is less: 1/4 or 1/3?', type: 'mc', choices: ['1/4','1/3','Same','Cannot tell'], answer: '1/4' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Comparing Fractions',
        scene: '3/4 ⚖️ 1/4',
        explain: {
          concept: 'When fractions have the SAME denominator, bigger numerator = bigger fraction. When they have different denominators, use a number line or find a common one.',
          example: '3/4 vs 1/4:\n→ Same denominator (4), so 3 > 1 → 3/4 > 1/4 ✓\n\n1/2 vs 1/3:\n→ 1/2 = 3/6, 1/3 = 2/6 → 3/6 > 2/6 → 1/2 > 1/3 ✓',
          tip: 'Same denominator → compare numerators. Different denominators → find a common one!'
        },
        problems: [
          { q: 'Is 3/4 > 1/4?', type: 'tf', answer: true },
          { q: 'Which is greater: 2/3 or 1/3?', type: 'mc', choices: ['2/3','1/3','Same','Cannot tell'], answer: '2/3' },
          { q: 'Is 1/2 > 1/4?', type: 'tf', answer: true },
          { q: 'Least to greatest: 1/4, 3/4, 1/2.', type: 'mc', choices: ['1/4, 1/2, 3/4','1/2, 1/4, 3/4','3/4, 1/2, 1/4','1/4, 3/4, 1/2'], answer: '1/4, 1/2, 3/4' },
          { q: 'Which is less: 2/6 or 2/3?', type: 'mc', choices: ['2/6','2/3','Same','Cannot tell'], answer: '2/6' },
          { q: 'Is 3/8 < 3/4?', type: 'tf', answer: true },
          { q: '3/4 of 8 = ___', type: 'mc', choices: ['4','5','6','7'], answer: '6' },
          { q: 'A bar has 6 squares. You eat 2. Fraction eaten?', type: 'mc', choices: ['1/6','1/3','1/2','2/3'], answer: '1/3' },
          { q: 'Is 4/4 = 1 whole?', type: 'tf', answer: true },
          { q: 'Which is closest to 1: 1/4, 3/4, or 1/2?', type: 'mc', choices: ['1/4','1/2','3/4','All same'], answer: '3/4' },
        ]
      }
    ]
  },
  {
    id: 5, grade: 3, module: 6, weekStart: 27, weekEnd: 29,
    name: 'Module 6', title: 'Collecting and Displaying Data',
    emoji: '📊', color: '#b5298a',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Reading Bar and Picture Graphs',
        scene: '📊',
        explain: {
          concept: 'Bar graphs use bars to show amounts. Picture graphs use symbols. Always read the title and labels first!',
          example: 'Bar graph: Dogs=8, Cats=5\n→ To compare: 8 − 5 = 3\n→ Dogs got 3 more votes than cats ✓',
          tip: 'Check the scale! If the axis goes by 2s, each line = 2. If by 5s, each line = 5.'
        },
        problems: [
          { q: 'A bar shows 8 votes for dogs and 5 for cats. How many more votes for dogs?', type: 'mc', choices: ['2','3','5','8'], answer: '3' },
          { q: 'In a graph: red = 7, blue = 4, green = 6. Which is most popular?', type: 'mc', choices: ['Red','Blue','Green','All same'], answer: 'Red' },
          { q: '8 + 5 + 6 = ___', type: 'input', answer: 19 },
          { q: 'Is the bar for 9 votes taller than the bar for 7 votes?', type: 'tf', answer: true },
          { q: 'Picture graph: dogs×4, cats×3, fish×2. Total pets?', type: 'mc', choices: ['7','8','9','12'], answer: '9' },
          { q: 'Apples: 12, Bananas: 8, Grapes: 10. Most − least = ___?', type: 'mc', choices: ['2','4','6','8'], answer: '4' },
          { q: 'Is 15 students more than 12 on a bar graph?', type: 'tf', answer: true },
          { q: 'A graph shows 25 red and 15 blue. How many more red?', type: 'mc', choices: ['5','10','15','25'], answer: '10' },
          { q: '25 + 15 = ___', type: 'input', answer: 40 },
          { q: 'A key shows each symbol = 5. There are 4 symbols. Total = ___?', type: 'mc', choices: ['4','5','15','20'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Scaled Picture Graphs',
        scene: '🌟🌟🌟',
        explain: {
          concept: 'In a scaled graph, each symbol represents MORE than 1. Multiply the number of symbols by the key value!',
          example: 'Key: each star = 10 students\n→ You count 3 stars\n→ 3 × 10 = 30 students ✓',
          tip: 'Always multiply: (number of symbols) × (key value) = total. Do not just count symbols!'
        },
        problems: [
          { q: 'Each star = 10 students. There are 3 stars. How many students?', type: 'mc', choices: ['3','13','30','33'], answer: '30' },
          { q: 'Each symbol = 5. You count 6 symbols. Total = ___?', type: 'mc', choices: ['11','25','30','35'], answer: '30' },
          { q: 'Key: sun = 4. There are 7 suns. How many total?', type: 'input', answer: 28 },
          { q: '5 rows, each row = 6. How many students?', type: 'mc', choices: ['11','25','30','36'], answer: '30' },
          { q: 'Class A: 4 symbols. Class B: 6 symbols. Key = 5. Which has more students?', type: 'mc', choices: ['Class A','Class B','Same','Cannot tell'], answer: 'Class B' },
          { q: 'Is a scale of 10 better for showing large numbers?', type: 'tf', answer: true },
          { q: 'Votes for pizza: 8 symbols, key = 3. Total votes = ___?', type: 'input', answer: 24 },
          { q: '7 symbols, key = 4. Total = ___', type: 'input', answer: 28 },
          { q: 'Grade 1 = 3 sym, Grade 2 = 5 sym, Grade 3 = 4 sym. Key = 10. Which grade has most?', type: 'mc', choices: ['Grade 1','Grade 2','Grade 3','All same'], answer: 'Grade 2' },
          { q: 'Is 4 symbols (key=5) = 20 total?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Line Plots',
        scene: '📉',
        explain: {
          concept: 'A line plot shows data on a number line. Each X mark represents one data point. Stack Xs above the value they represent.',
          example: 'Heights: 120cm×3, 125cm×5, 130cm×2\n→ Most Xs at 125\n→ Most common height = 125 cm ✓',
          tip: 'Most common value = most X marks stacked. To find total count, add all the Xs!'
        },
        problems: [
          { q: 'Heights: 120 cm × 3, 125 cm × 5, 130 cm × 2. Total students?', type: 'mc', choices: ['7','8','10','12'], answer: '10' },
          { q: 'Most common height? (120:3, 125:5, 130:2)', type: 'mc', choices: ['120 cm','125 cm','130 cm','Cannot tell'], answer: '125 cm' },
          { q: 'Difference between tallest and shortest (120 to 130)?', type: 'mc', choices: ['5','10','15','20'], answer: '10' },
          { q: 'Is 5 students the most common in the plot above?', type: 'tf', answer: true },
          { q: 'Book lengths: 8 cm × 4, 9 cm × 3, 10 cm × 2. Most common?', type: 'mc', choices: ['8 cm','9 cm','10 cm','7 cm'], answer: '8 cm' },
          { q: 'Total measurements in the book plot: 4 + 3 + 2 = ___', type: 'input', answer: 9 },
          { q: 'In a line plot, each X = 1 item. Is this a scaled graph?', type: 'tf', answer: false },
          { q: 'Plant heights: 5 cm × 3, 6 cm × 4, 7 cm × 2, 8 cm × 1. How many plants taller than 6 cm?', type: 'mc', choices: ['1','2','3','6'], answer: '3' },
          { q: 'Shoe sizes: size 1 × 2, size 2 × 5, size 3 × 3. Most common size?', type: 'mc', choices: ['Size 1','Size 2','Size 3','Same'], answer: 'Size 2' },
          { q: 'Is a line plot best for showing many different categories?', type: 'tf', answer: false },
        ]
      }
    ]
  },
  {
    id: 6, grade: 3, module: 7, weekStart: 30, weekEnd: 36,
    name: 'Module 7', title: 'Geometry and Measurement Word Problems',
    emoji: '🔷', color: '#0e8f6b',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Attributes of Quadrilaterals',
        scene: '🔷🔶🔺',
        explain: {
          concept: 'A quadrilateral has exactly 4 sides. Different quadrilaterals have special properties — parallel sides, equal sides, right angles!',
          example: 'Square: 4 equal sides + 4 right angles\nRectangle: 4 right angles (sides can differ)\nRhombus: 4 equal sides (no right angles needed)\nTrapezoid: exactly 1 pair of parallel sides',
          tip: 'Every square is a rectangle AND a rhombus. But not every rectangle is a square!'
        },
        problems: [
          { q: 'How many sides does a quadrilateral have?', type: 'mc', choices: ['3','4','5','6'], answer: '4' },
          { q: 'Is a square a rectangle?', type: 'tf', answer: true },
          { q: 'Does a rhombus have 4 equal sides?', type: 'tf', answer: true },
          { q: 'Which shape has exactly 1 pair of parallel sides?', type: 'mc', choices: ['Square','Rectangle','Trapezoid','Rhombus'], answer: 'Trapezoid' },
          { q: 'A rectangle has ___ right angles.', type: 'mc', choices: ['1','2','3','4'], answer: '4' },
          { q: 'Is a square also a rhombus?', type: 'tf', answer: true },
          { q: 'Which is NOT a quadrilateral?', type: 'mc', choices: ['Square','Triangle','Rectangle','Rhombus'], answer: 'Triangle' },
          { q: 'Do parallel lines ever meet?', type: 'tf', answer: false },
          { q: 'A parallelogram has how many pairs of parallel sides?', type: 'mc', choices: ['0','1','2','4'], answer: '2' },
          { q: 'Is every rectangle a parallelogram?', type: 'tf', answer: true },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Perimeter',
        scene: '📏🔷',
        explain: {
          concept: 'Perimeter is the total distance around a shape. Add up all the side lengths!',
          example: 'Rectangle 5 cm × 3 cm:\n→ Sides: 5 + 3 + 5 + 3\n→ Or: 2 × (5 + 3) = 2 × 8 = 16 cm ✓',
          tip: 'Rectangle: P = 2×(l+w). Square: P = 4×s. Triangle: add all 3 sides!'
        },
        problems: [
          { q: 'A square has side 4 cm. Perimeter = ___?', type: 'mc', choices: ['8','12','16','20'], answer: '16' },
          { q: 'A rectangle is 5 cm × 3 cm. Perimeter = ___ cm.', type: 'input', answer: 16, unit: 'cm' },
          { q: 'Is perimeter the distance around a shape?', type: 'tf', answer: true },
          { q: 'A triangle has sides 3, 4, and 5 cm. Perimeter = ___ cm.', type: 'input', answer: 12, unit: 'cm' },
          { q: 'A square has perimeter 20 cm. Each side = ___ cm.', type: 'mc', choices: ['4','5','10','20'], answer: '5' },
          { q: 'A rectangle has perimeter 18 cm and length 6 cm. Width = ___?', type: 'mc', choices: ['2','3','4','6'], answer: '3' },
          { q: 'A regular hexagon has side 3 cm. Perimeter = ___?', type: 'mc', choices: ['12','15','18','24'], answer: '18' },
          { q: 'Is 20 cm the perimeter of a rectangle with sides 5 cm and 5 cm?', type: 'tf', answer: true },
          { q: 'A room is 8 m × 6 m. Perimeter = ___ m.', type: 'input', answer: 28, unit: 'm' },
          { q: 'A shape has perimeter 24 cm with 4 equal sides. Side = ___?', type: 'mc', choices: ['4','6','8','12'], answer: '6' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Area and Perimeter Word Problems',
        scene: '📝📐',
        explain: {
          concept: 'Real-world problems use both area and perimeter. Ask yourself: am I measuring AROUND something (perimeter) or INSIDE something (area)?',
          example: 'Garden 12 m × 9 m:\n→ Fence needed (around) = P = 2×(12+9) = 42 m\n→ Soil to plant (inside) = A = 12×9 = 108 m²',
          tip: 'Fencing, framing, border → PERIMETER. Carpet, tiles, painting a floor → AREA.'
        },
        problems: [
          { q: 'A playground is 15 m × 8 m. Area = ___ m²?', type: 'mc', choices: ['46','100','120','160'], answer: '120' },
          { q: 'A fence goes around a garden 12 m × 9 m. Length of fence = ___ m?', type: 'input', answer: 42, unit: 'm' },
          { q: 'A tile floor is 6 m × 7 m. Tiles needed?', type: 'mc', choices: ['13','36','42','48'], answer: '42' },
          { q: 'Is a 5×8 field the same area as a 4×10 field?', type: 'tf', answer: true },
          { q: 'A square garden has perimeter 28 m. Area = ___ m²?', type: 'mc', choices: ['28','36','49','56'], answer: '49' },
          { q: 'Two rooms: 3×5 and 4×4. Which has more area?', type: 'mc', choices: ['3×5 = 15','4×4 = 16','Same','Cannot tell'], answer: '4×4 = 16' },
          { q: 'A park is 20 m × 15 m. Length of path around it = ___ m?', type: 'mc', choices: ['35','70','280','300'], answer: '70' },
          { q: 'A rectangle is 9 m × 4 m. Area + Perimeter = ___?', type: 'mc', choices: ['35','36','62','72'], answer: '62' },
          { q: 'Is the perimeter of a 4×4 square equal to its area?', type: 'tf', answer: true },
          { q: 'A field is 25 m × 12 m. Area = ___ m²?', type: 'mc', choices: ['74','300','325','350'], answer: '300' },
        ]
      }
    ]
  }
];

const EUREKA = { 2: EUREKA_G2, 3: EUREKA_G3 };
