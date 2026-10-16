// ============================================================
// EUREKA MATH — Grade 2 & 3 (Great Minds / SDUSD)
// ============================================================

// ── GRADE 2 ──────────────────────────────────────────────────
const EUREKA_G2 = [

  // ── Module 1: Sums & Differences to 100 (Weeks 1–4) ────────
  {
    id: 0, grade: 2, module: 1,
    weekStart: 1, weekEnd: 4,
    name: 'Module 1', title: 'Sums & Differences to 100',
    emoji: '🔟', color: '#e84040',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Making Ten',
        scene: '🔵🔵🔵🔵🔵🔵🔵🔵🔵⬜',
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
        problems: [
          { q: '23 + 45 = ___', type: 'input', answer: 68 },
          { q: '36 + 42 = ___', type: 'input', answer: 78 },
          { q: '57 + 28 = ___', type: 'input', answer: 85 },
          { q: 'Is 44 + 33 = 77?', type: 'tf', answer: true },
          { q: 'Is 28 + 35 = 62?', type: 'tf', answer: false },
          { q: 'Jake scored 34 points in game 1 and 47 in game 2. Total points?', type: 'mc', choices: ['71','81','80','91'], answer: '81', scene: '🏀🏀' },
          { q: '45 + ___ = 90', type: 'input', answer: 45 },
          { q: '63 + 27 = ___', type: 'input', answer: 90 },
          { q: 'There are 38 boys and 25 girls. How many children?', type: 'mc', choices: ['53','61','63','73'], answer: '63', scene: '👦👦👦 + 👧👧👧 = ❓' },
          { q: '___ + 36 = 72', type: 'input', answer: 36 },
        ]
      }
    ]
  },

  // ── Module 2: Length (Weeks 5–8) ────────────────────────────
  {
    id: 1, grade: 2, module: 2,
    weekStart: 5, weekEnd: 8,
    name: 'Module 2', title: 'Addition & Subtraction of Length',
    emoji: '📏', color: '#e06c00',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Measuring in Centimeters',
        scene: '📏🐛',
        problems: [
          { q: 'A pencil is 12 cm. A crayon is 8 cm. How many cm longer is the pencil?', type: 'input', answer: 4, unit: 'cm', scene: '✏️📏' },
          { q: 'A worm is 7 cm. A caterpillar is 9 cm. Which is longer?', type: 'mc', choices: ['The worm','The caterpillar','They are equal','Cannot tell'], answer: 'The caterpillar', scene: '🐛🐛' },
          { q: 'A ribbon is 15 cm. Another is 9 cm. How long together?', type: 'input', answer: 24, unit: 'cm', scene: '🎀🎀' },
          { q: 'Is 1 meter = 100 centimeters?', type: 'tf', answer: true },
          { q: 'Is 50 cm longer than 1 meter?', type: 'tf', answer: false },
          { q: 'A book is 22 cm tall. A box is 30 cm tall. How much taller is the box?', type: 'input', answer: 8, unit: 'cm', scene: '📚📦' },
          { q: 'A string is 45 cm. Maya cuts 18 cm off. How long is it now?', type: 'mc', choices: ['23 cm','25 cm','27 cm','63 cm'], answer: '27 cm', scene: '〰️✂️' },
          { q: 'Tom\'s desk is 60 cm wide. His book is 25 cm. How much wider is the desk?', type: 'input', answer: 35, unit: 'cm' },
          { q: 'Two ropes: 37 cm and 48 cm. Total length?', type: 'mc', choices: ['75 cm','85 cm','80 cm','95 cm'], answer: '85 cm', scene: '〰️〰️' },
          { q: 'A rope is 100 cm. You use 63 cm. How much is left?', type: 'input', answer: 37, unit: 'cm' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Comparing Lengths',
        scene: '📏📏',
        problems: [
          { q: 'A bat is 80 cm. A broom is 100 cm. Which is longer?', type: 'mc', choices: ['The bat','The broom','They are equal','Neither'], answer: 'The broom' },
          { q: 'Is 65 cm longer than 56 cm?', type: 'tf', answer: true },
          { q: 'Which is the shortest: 42, 24, or 39?', type: 'mc', choices: ['42','24','39','They are equal'], answer: '24' },
          { q: 'A fence is 75 m. A road is 57 m. How much longer is the fence?', type: 'input', answer: 18, unit: 'm' },
          { q: 'Is 1 meter shorter than 99 cm?', type: 'tf', answer: false },
          { q: 'Ana\'s hair is 48 cm. Bella\'s is 52 cm. How much longer is Bella\'s?', type: 'input', answer: 4, unit: 'cm', scene: '👧👧' },
          { q: 'Which is the longest: 73 cm, 37 cm, or 63 cm?', type: 'mc', choices: ['73 cm','37 cm','63 cm','All equal'], answer: '73 cm' },
          { q: 'A ladder is 90 cm. A stick is 68 cm. Difference in length?', type: 'input', answer: 22, unit: 'cm', scene: '🪜🌿' },
          { q: 'Is 34 cm shorter than 43 cm?', type: 'tf', answer: true },
          { q: 'Three objects: 15 cm, 51 cm, 35 cm. Which is longest?', type: 'mc', choices: ['15 cm','51 cm','35 cm','Cannot tell'], answer: '51 cm' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems with Length',
        scene: '🐍📏',
        problems: [
          { q: 'A snake is 36 cm. It grows 24 cm more. How long is it now?', type: 'input', answer: 60, unit: 'cm', scene: '🐍📏' },
          { q: 'A pipe is 85 cm. A saw cuts 29 cm off. How long is the pipe now?', type: 'mc', choices: ['54 cm','56 cm','64 cm','66 cm'], answer: '56 cm' },
          { q: 'Kim runs 200 m. She has 350 m left. How far is the whole race?', type: 'input', answer: 550, unit: 'm', scene: '🏃🏁' },
          { q: 'Is 72 − 35 = 37?', type: 'tf', answer: true },
          { q: 'Is 45 + 56 = 100?', type: 'tf', answer: false },
          { q: 'A rope is cut into two pieces: 47 cm and 38 cm. How long was the whole rope?', type: 'mc', choices: ['75 cm','85 cm','95 cm','80 cm'], answer: '85 cm', scene: '〰️✂️〰️' },
          { q: 'A path is 100 m. You walk 63 m. How far is left?', type: 'input', answer: 37, unit: 'm' },
          { q: 'A worm is 9 cm. It grows 6 cm. How long now?', type: 'mc', choices: ['13 cm','14 cm','15 cm','16 cm'], answer: '15 cm', scene: '🐛📏' },
          { q: 'A table is 68 cm. A desk is 45 cm. What is the total length?', type: 'input', answer: 113, unit: 'cm' },
          { q: 'Is 100 − 37 = 63?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 3: Place Value to 1,000 (Weeks 9–13) ─────────────
  {
    id: 2, grade: 2, module: 3,
    weekStart: 9, weekEnd: 13,
    name: 'Module 3', title: 'Place Value to 1,000',
    emoji: '🏗️', color: '#c09000',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Hundreds, Tens, and Ones',
        scene: '💯🔟1️⃣',
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

  // ── Module 4: Add & Subtract Within 200 (Weeks 14–18) ───────
  {
    id: 3, grade: 2, module: 4,
    weekStart: 14, weekEnd: 18,
    name: 'Module 4', title: 'Addition & Subtraction within 200',
    emoji: '📊', color: '#1a7ac7',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Adding Within 200',
        scene: '88 ➕ 96 = ❓',
        problems: [
          { q: '97 + 36 = ___', type: 'input', answer: 133 },
          { q: '125 + 48 = ___', type: 'input', answer: 173 },
          { q: '84 + 79 = ___', type: 'mc', choices: ['153','163','143','173'], answer: '163' },
          { q: 'Is 76 + 48 = 124?', type: 'tf', answer: true },
          { q: 'Is 93 + 87 = 170?', type: 'tf', answer: false },
          { q: '110 + 65 = ___', type: 'input', answer: 175 },
          { q: 'There are 88 red beads and 96 blue beads. How many in all?', type: 'mc', choices: ['174','184','194','164'], answer: '184', scene: '🔵🔴' },
          { q: '153 + 39 = ___', type: 'input', answer: 192 },
          { q: '67 + ___ = 132', type: 'input', answer: 65 },
          { q: 'Mia read 74 pages Monday and 87 Tuesday. How many total?', type: 'mc', choices: ['151','161','141','171'], answer: '161', scene: '📖📖' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtracting Within 200',
        scene: '143 ➖ 57 = ❓',
        problems: [
          { q: '143 − 57 = ___', type: 'input', answer: 86 },
          { q: '172 − 89 = ___', type: 'input', answer: 83 },
          { q: '156 − 68 = ___', type: 'mc', choices: ['78','88','98','68'], answer: '88' },
          { q: 'Is 130 − 46 = 84?', type: 'tf', answer: true },
          { q: 'Is 185 − 97 = 78?', type: 'tf', answer: false },
          { q: 'A store has 162 apples. They sell 75. How many left?', type: 'mc', choices: ['77','87','97','107'], answer: '87', scene: '🍎🍎🍎' },
          { q: '200 − 64 = ___', type: 'input', answer: 136 },
          { q: '148 − ___ = 79', type: 'input', answer: 69 },
          { q: 'Is 100 − 55 = 45?', type: 'tf', answer: true },
          { q: '175 − 88 = ___', type: 'mc', choices: ['77','87','97','67'], answer: '87' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 200',
        scene: '📚📚',
        problems: [
          { q: 'Leo has 95 stamps. He gets 68 more. How many now?', type: 'input', answer: 163, unit: 'stamps', scene: '📬📬📬' },
          { q: 'A bag has 150 marbles. 73 fall out. How many remain?', type: 'mc', choices: ['67','77','87','97'], answer: '77', scene: '⚪🔵⚪' },
          { q: 'School A has 147 students. School B has 89. How many more in A?', type: 'input', answer: 58, unit: 'students', scene: '🏫🏫' },
          { q: 'Is 80 + 75 = 155?', type: 'tf', answer: true },
          { q: 'Is 162 − 84 = 78?', type: 'tf', answer: true },
          { q: 'There are 128 red and 54 blue chairs. How many chairs?', type: 'mc', choices: ['172','182','192','162'], answer: '182', scene: '🪑🪑🪑' },
          { q: '200 − 138 = ___', type: 'input', answer: 62 },
          { q: 'A class collected 96 cans. They need 150. How many more?', type: 'mc', choices: ['44','54','64','74'], answer: '54', scene: '🥫🥫🥫' },
          { q: '74 + 98 = ___', type: 'input', answer: 172 },
          { q: 'Is 145 − 70 = 75?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 5: Add & Subtract Within 1,000 (Weeks 19–23) ─────
  {
    id: 4, grade: 2, module: 5,
    weekStart: 19, weekEnd: 23,
    name: 'Module 5', title: 'Addition & Subtraction within 1,000',
    emoji: '🔢', color: '#5b34c4',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Adding Three-Digit Numbers',
        scene: '247 ➕ 385 = ❓',
        problems: [
          { q: '247 + 385 = ___', type: 'input', answer: 632 },
          { q: '463 + 279 = ___', type: 'input', answer: 742 },
          { q: '318 + 456 = ___', type: 'mc', choices: ['764','774','784','754'], answer: '774' },
          { q: 'Is 500 + 273 = 773?', type: 'tf', answer: true },
          { q: 'Is 387 + 425 = 800?', type: 'tf', answer: false },
          { q: '624 + 257 = ___', type: 'input', answer: 881 },
          { q: 'A farm has 348 chickens and 275 ducks. How many birds?', type: 'mc', choices: ['613','623','633','643'], answer: '623', scene: '🐔🦆' },
          { q: '193 + 549 = ___', type: 'input', answer: 742 },
          { q: '475 + ___ = 900', type: 'input', answer: 425 },
          { q: '336 + 448 = ___', type: 'mc', choices: ['774','784','764','794'], answer: '784' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtracting Three-Digit Numbers',
        scene: '735 ➖ 284 = ❓',
        problems: [
          { q: '735 − 284 = ___', type: 'input', answer: 451 },
          { q: '612 − 347 = ___', type: 'input', answer: 265 },
          { q: '843 − 568 = ___', type: 'mc', choices: ['265','275','285','255'], answer: '275' },
          { q: 'Is 900 − 356 = 544?', type: 'tf', answer: true },
          { q: 'Is 700 − 282 = 418?', type: 'tf', answer: true },
          { q: '1,000 − 437 = ___', type: 'input', answer: 563 },
          { q: 'A library has 827 books. 359 are checked out. How many remain?', type: 'mc', choices: ['458','468','478','488'], answer: '468', scene: '📚📚📚' },
          { q: '954 − ___ = 382', type: 'input', answer: 572 },
          { q: 'Is 583 − 297 = 286?', type: 'tf', answer: true },
          { q: '762 − 485 = ___', type: 'mc', choices: ['267','277','287','257'], answer: '277' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 1,000',
        scene: '🚂📦',
        problems: [
          { q: 'A train carries 487 on day 1 and 356 on day 2. Total passengers?', type: 'mc', choices: ['823','833','843','853'], answer: '843', scene: '🚂🚃🚃' },
          { q: 'A factory makes 650 toys. It ships 278. How many left?', type: 'input', answer: 372, unit: 'toys', scene: '🧸🎮🎲' },
          { q: 'Is 525 + 356 = 881?', type: 'tf', answer: true },
          { q: 'A school has 943 books. They donate 485. How many left?', type: 'mc', choices: ['448','458','468','478'], answer: '458', scene: '📚📚📚' },
          { q: '764 − 398 = ___', type: 'input', answer: 366 },
          { q: 'Is 300 + 400 + 200 = 900?', type: 'tf', answer: true },
          { q: 'There are 612 red and 279 blue tiles. How many in all?', type: 'input', answer: 891, unit: 'tiles' },
          { q: 'Is 1,000 − 500 = 499?', type: 'tf', answer: false },
          { q: 'Mia saves $347 in March and $486 in April. How much total?', type: 'mc', choices: ['823','833','843','813'], answer: '833', scene: '🪙🪙💵' },
          { q: '500 − 237 = ___', type: 'input', answer: 263 },
        ]
      }
    ]
  },

  // ── Module 6: Foundations of Multiplication (Weeks 24–27) ───
  {
    id: 5, grade: 2, module: 6,
    weekStart: 24, weekEnd: 27,
    name: 'Module 6', title: 'Foundations of Multiplication',
    emoji: '✖️', color: '#b5298a',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Equal Groups',
        scene: '⭕⭕⭕ ⭕⭕⭕ ⭕⭕⭕',
        problems: [
          { q: '3 groups of 4 = ___', type: 'input', answer: 12 },
          { q: '5 groups of 2 = ___', type: 'input', answer: 10 },
          { q: '4 groups of 3 = ___', type: 'mc', choices: ['7','10','12','14'], answer: '12' },
          { q: 'Is 5 groups of 3 = 15?', type: 'tf', answer: true },
          { q: 'Is 4 groups of 4 = 12?', type: 'tf', answer: false },
          { q: '2 groups of 6 = ___', type: 'input', answer: 12 },
          { q: 'There are 6 bags with 5 apples each. Total apples?', type: 'mc', choices: ['25','30','35','11'], answer: '30', scene: '🎒🍎🎒🍎🎒🍎' },
          { q: '3 groups of 7 = ___', type: 'input', answer: 21 },
          { q: 'Is 2 groups of 9 = 16?', type: 'tf', answer: false },
          { q: '4 groups of 5 = ___', type: 'mc', choices: ['15','20','25','9'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Arrays',
        scene: '🔵🔵🔵🔵\n🔵🔵🔵🔵\n🔵🔵🔵🔵',
        problems: [
          { q: 'An array has 3 rows and 4 columns. How many in all?', type: 'input', answer: 12 },
          { q: 'An array has 5 rows and 2 columns. How many?', type: 'mc', choices: ['7','10','12','15'], answer: '10' },
          { q: 'Is a 4×6 array the same total as a 6×4 array?', type: 'tf', answer: true },
          { q: 'An array has 2 rows and 8 columns. How many?', type: 'input', answer: 16 },
          { q: 'Is 3 rows × 3 columns = 9?', type: 'tf', answer: true },
          { q: '5 rows × 5 columns = ___', type: 'mc', choices: ['10','20','25','30'], answer: '25' },
          { q: 'A garden has 4 rows of 6 flowers. How many flowers?', type: 'input', answer: 24, unit: 'flowers', scene: '🌸🌸🌸🌸\n🌸🌸🌸🌸' },
          { q: '2 rows × 7 columns = ___', type: 'input', answer: 14 },
          { q: 'Is 3 × 8 = 8 × 3?', type: 'tf', answer: true },
          { q: 'An array shows 3 rows of 9 stars. How many stars?', type: 'mc', choices: ['27','28','29','30'], answer: '27', scene: '⭐⭐⭐⭐⭐' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Repeated Addition',
        scene: '5 ➕ 5 ➕ 5 ➕ 5',
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

  // ── Module 7: Money & Data (Weeks 28–32) ────────────────────
  {
    id: 6, grade: 2, module: 7,
    weekStart: 28, weekEnd: 32,
    name: 'Module 7', title: 'Money, Data, and Word Problems',
    emoji: '💰', color: '#0e8f6b',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Coins and Their Values',
        scene: '🪙🪙🪙💵',
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
        problems: [
          { q: 'A pencil costs 45¢. A pen costs 68¢. How much for both?', type: 'input', answer: 113, unit: '¢', scene: '✏️🖊️🪙' },
          { q: 'Tom has 100¢ and spends 57¢. How much is left?', type: 'input', answer: 43, unit: '¢', scene: '💵🛍️' },
          { q: 'Is 25¢ + 35¢ = 60¢?', type: 'tf', answer: true },
          { q: 'A toy costs 87¢. You pay $1.00. Change?', type: 'mc', choices: ['3¢','13¢','17¢','23¢'], answer: '13¢', scene: '🧸🪙' },
          { q: 'Is 50¢ + 75¢ = 125¢?', type: 'tf', answer: true },
          { q: 'Mia has 3 quarters and 4 dimes. How many cents?', type: 'mc', choices: ['95¢','105¢','115¢','125¢'], answer: '115¢', scene: '🪙🪙🪙' },
          { q: 'A book costs 135¢. You have 200¢. Change?', type: 'input', answer: 65, unit: '¢', scene: '📚🪙' },
          { q: 'Jake buys 2 items for 45¢ each. Total cost?', type: 'input', answer: 90, unit: '¢', scene: '🛍️🛍️' },
          { q: 'Is $0.75 the same as 75 cents?', type: 'tf', answer: true },
          { q: 'You have 2 dimes, 3 nickels, and 4 pennies. Total cents?', type: 'mc', choices: ['37¢','39¢','41¢','43¢'], answer: '39¢', scene: '🪙🪙🪙🪙' },
        ]
      }
    ]
  },

  // ── Module 8: Time, Shapes & Fractions (Weeks 33–36) ────────
  {
    id: 7, grade: 2, module: 8,
    weekStart: 33, weekEnd: 36,
    name: 'Module 8', title: 'Time, Shapes, and Fractions',
    emoji: '⏰', color: '#c03030',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Telling Time',
        scene: '🕐⏰',
        problems: [
          { q: 'How many minutes in 1 hour?', type: 'input', answer: 60, unit: 'minutes' },
          { q: 'How many hours in 1 day?', type: 'input', answer: 24, unit: 'hours' },
          { q: 'Is "half past 3" the same as 3:30?', type: 'tf', answer: true },
          { q: 'How many minutes in half an hour?', type: 'mc', choices: ['15','30','45','60'], answer: '30' },
          { q: 'A movie starts at 2:00 and lasts 1 hour 30 minutes. When does it end?', type: 'mc', choices: ['3:00','3:30','4:00','2:30'], answer: '3:30', scene: '🎬🕐' },
          { q: 'School starts at 8:00. Lunch is 4 hours later. Time?', type: 'mc', choices: ['11:00','12:00','1:00','2:00'], answer: '12:00', scene: '🏫🍽️' },
          { q: 'How many minutes in a quarter hour?', type: 'input', answer: 15, unit: 'minutes' },
          { q: 'Is 1:15 the same as "quarter past 1"?', type: 'tf', answer: true },
          { q: 'Practice starts at 3:30 and lasts 45 minutes. When does it end?', type: 'mc', choices: ['4:00','4:15','4:30','5:15'], answer: '4:15' },
          { q: 'How many minutes between 2:00 and 2:45?', type: 'input', answer: 45, unit: 'minutes' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Halves and Thirds',
        scene: '🔵⬜',
        problems: [
          { q: 'A pizza cut into 2 equal pieces. What fraction is each piece?', type: 'mc', choices: ['1/4','1/3','1/2','1/6'], answer: '1/2', scene: '🍕' },
          { q: 'Is 1/2 of 10 = 5?', type: 'tf', answer: true },
          { q: '1/2 of 20 = ___', type: 'input', answer: 10 },
          { q: 'A rope is cut into 3 equal parts. What is each part called?', type: 'mc', choices: ['Half','Third','Quarter','Fifth'], answer: 'Third' },
          { q: 'Is 1/3 of 12 = 4?', type: 'tf', answer: true },
          { q: '1/3 of 9 = ___', type: 'input', answer: 3 },
          { q: '1/2 of 16 = ___', type: 'mc', choices: ['4','6','8','10'], answer: '8' },
          { q: 'Is 1/2 greater than 1/3?', type: 'tf', answer: true },
          { q: '1/3 of 15 = ___', type: 'input', answer: 5 },
          { q: 'A bar has 6 squares. Maya eats 1/3. How many squares?', type: 'mc', choices: ['1','2','3','4'], answer: '2', scene: '🍫' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Fourths and Equal Parts',
        scene: '🟡🟡⬜⬜',
        problems: [
          { q: 'A square cut into 4 equal pieces. What is each piece called?', type: 'mc', choices: ['Half','Third','Quarter','Eighth'], answer: 'Quarter' },
          { q: '1/4 of 12 = ___', type: 'input', answer: 3 },
          { q: 'Is 1/4 of 20 = 5?', type: 'tf', answer: true },
          { q: '3/4 of 12 = ___', type: 'input', answer: 9 },
          { q: 'Is 1/4 less than 1/2?', type: 'tf', answer: true },
          { q: '1/4 of 8 = ___', type: 'mc', choices: ['1','2','3','4'], answer: '2' },
          { q: 'A pie is cut into 4 slices. You eat 2. What fraction?', type: 'mc', choices: ['1/4','1/2','3/4','1/3'], answer: '1/2', scene: '🍕🍕' },
          { q: '3/4 of 8 = ___', type: 'input', answer: 6 },
          { q: 'Is 2/4 the same as 1/2?', type: 'tf', answer: true },
          { q: 'A cake cut into 4 parts. 3 are eaten. What fraction is left?', type: 'mc', choices: ['1/4','2/4','3/4','1/2'], answer: '1/4', scene: '🎂' },
        ]
      }
    ]
  }

];

// ── GRADE 3 ──────────────────────────────────────────────────
const EUREKA_G3 = [

  // ── Module 1: Multiplication & Division 2–5 & 10 (Weeks 1–5)
  {
    id: 0, grade: 3, module: 1,
    weekStart: 1, weekEnd: 5,
    name: 'Module 1', title: 'Multiplication & Division (×2–5 & ×10)',
    emoji: '✖️', color: '#e84040',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Equal Groups and Multiplication',
        scene: '⭕⭕⭕⭕ ⭕⭕⭕⭕ ⭕⭕⭕⭕',
        problems: [
          { q: '3 × 4 = ___', type: 'input', answer: 12 },
          { q: '5 × 2 = ___', type: 'input', answer: 10 },
          { q: '4 × 3 = ___', type: 'mc', choices: ['7','10','12','14'], answer: '12' },
          { q: 'Is 5 × 3 = 15?', type: 'tf', answer: true },
          { q: 'Is 4 × 4 = 12?', type: 'tf', answer: false },
          { q: '2 × 6 = ___', type: 'input', answer: 12 },
          { q: 'There are 5 bags with 4 apples each. Total apples?', type: 'mc', choices: ['9','16','20','25'], answer: '20', scene: '🍎🎒🍎🎒🍎🎒' },
          { q: '3 × 7 = ___', type: 'input', answer: 21 },
          { q: 'Is 2 × 9 = 18?', type: 'tf', answer: true },
          { q: '4 × 5 = ___', type: 'mc', choices: ['15','20','25','9'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Division as Equal Sharing',
        scene: '12 ➗ 3 = 4',
        problems: [
          { q: '12 ÷ 3 = ___', type: 'input', answer: 4 },
          { q: '20 ÷ 4 = ___', type: 'input', answer: 5 },
          { q: '15 ÷ 5 = ___', type: 'mc', choices: ['2','3','4','5'], answer: '3' },
          { q: 'Is 18 ÷ 2 = 9?', type: 'tf', answer: true },
          { q: 'Is 16 ÷ 4 = 5?', type: 'tf', answer: false },
          { q: 'Share 24 apples among 4 friends. Each gets ___?', type: 'mc', choices: ['4','5','6','8'], answer: '6', scene: '🍎🍎🍎🍎👧👦' },
          { q: '30 ÷ 5 = ___', type: 'input', answer: 6 },
          { q: '10 ÷ 2 = ___', type: 'input', answer: 5 },
          { q: 'Is 25 ÷ 5 = 4?', type: 'tf', answer: false },
          { q: '40 ÷ 10 = ___', type: 'mc', choices: ['2','4','5','10'], answer: '4' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems ×2–5',
        scene: '📦📦📦',
        problems: [
          { q: 'A flower has 5 petals. How many petals on 4 flowers?', type: 'mc', choices: ['15','18','20','25'], answer: '20', scene: '🌸🌸🌸🌸' },
          { q: 'Each box has 3 pencils. There are 5 boxes. Total pencils?', type: 'input', answer: 15, unit: 'pencils', scene: '📦✏️📦✏️📦✏️' },
          { q: 'Is 3 × 4 = 12?', type: 'tf', answer: true },
          { q: '5 × ___ = 25', type: 'input', answer: 5 },
          { q: 'A table has 4 legs. How many legs on 5 tables?', type: 'mc', choices: ['15','16','20','25'], answer: '20', scene: '🪑🪑🪑🪑🪑' },
          { q: 'Each carton holds 10 eggs. Total eggs in 3 cartons?', type: 'input', answer: 30, unit: 'eggs', scene: '🥚🥚🥚' },
          { q: 'Is 4 × 3 = 3 × 4?', type: 'tf', answer: true },
          { q: 'Which shows 4 groups of 5?', type: 'mc', choices: ['4+4+4+4+4','5+5+5+5','4+5+4+5','5×4=25'], answer: '5+5+5+5' },
          { q: '___ × 2 = 10', type: 'input', answer: 5 },
          { q: '3 rows with 4 chairs each. How many chairs?', type: 'mc', choices: ['7','10','12','14'], answer: '12', scene: '🪑🪑🪑🪑' },
        ]
      }
    ]
  },

  // ── Module 2: Place Value & Measurement (Weeks 6–9) ─────────
  {
    id: 1, grade: 3, module: 2,
    weekStart: 6, weekEnd: 9,
    name: 'Module 2', title: 'Place Value & Units of Measure',
    emoji: '⚖️', color: '#e06c00',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Rounding to Nearest Ten and Hundred',
        scene: '47 → 50',
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
        problems: [
          { q: 'How many minutes in half an hour?', type: 'mc', choices: ['15','20','30','60'], answer: '30' },
          { q: 'School starts at 8:00. Lunch is 4 hours later. Time?', type: 'mc', choices: ['10:00','11:00','12:00','1:00'], answer: '12:00', scene: '🏫🍽️' },
          { q: 'Is 1:15 the same as "quarter past 1"?', type: 'tf', answer: true },
          { q: 'A movie starts at 3:00 and lasts 1 hr 30 min. When does it end?', type: 'mc', choices: ['3:30','4:00','4:30','5:00'], answer: '4:30', scene: '🎬🕐' },
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
        problems: [
          { q: 'A bag of flour weighs 2 kg. How many grams is that?', type: 'mc', choices: ['20 g','200 g','2000 g','20000 g'], answer: '2000 g' },
          { q: 'Is 1 liter = 1,000 milliliters?', type: 'tf', answer: true },
          { q: 'A bottle holds 500 mL. Two bottles hold ___ mL.', type: 'input', answer: 1000, unit: 'mL', scene: '🫙🫙' },
          { q: 'A watermelon is 3 kg. A melon is 1 kg. How much heavier is the watermelon?', type: 'mc', choices: ['1 kg','2 kg','3 kg','4 kg'], answer: '2 kg', scene: '🍉🍈' },
          { q: 'Is 800 mL less than 1 liter?', type: 'tf', answer: true },
          { q: 'A pitcher holds 3 L. You pour 1,500 mL. How many mL left?', type: 'input', answer: 1500, unit: 'mL', scene: '🫗💧' },
          { q: 'A backpack weighs 4 kg 500 g. In grams it weighs ___?', type: 'mc', choices: ['4500 g','4050 g','450 g','45000 g'], answer: '4500 g' },
          { q: 'You drink 250 mL of juice 4 times. Total mL?', type: 'input', answer: 1000, unit: 'mL', scene: '🥤🥤🥤🥤' },
          { q: 'Is 1.5 liters = 1,500 milliliters?', type: 'tf', answer: true },
          { q: 'Which is heavier: 2,000 g or 3 kg?', type: 'mc', choices: ['2,000 g','3 kg','Same','Cannot tell'], answer: '3 kg' },
        ]
      }
    ]
  },

  // ── Module 3: Multiplication & Division 6–9 (Weeks 10–14) ───
  {
    id: 2, grade: 3, module: 3,
    weekStart: 10, weekEnd: 14,
    name: 'Module 3', title: 'Multiplication & Division (×6–9)',
    emoji: '🔢', color: '#c09000',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Multiply by 6 and 7',
        scene: '6 ✖️ 7 = ❓',
        problems: [
          { q: '6 × 4 = ___', type: 'input', answer: 24 },
          { q: '7 × 3 = ___', type: 'input', answer: 21 },
          { q: '6 × 7 = ___', type: 'mc', choices: ['36','42','48','54'], answer: '42' },
          { q: 'Is 6 × 6 = 35?', type: 'tf', answer: false },
          { q: 'Is 7 × 4 = 28?', type: 'tf', answer: true },
          { q: '7 × 6 = ___', type: 'input', answer: 42 },
          { q: 'A week has 7 days. How many days in 5 weeks?', type: 'mc', choices: ['25','30','35','40'], answer: '35', scene: '📅📅📅📅📅' },
          { q: '6 × ___ = 54', type: 'input', answer: 9 },
          { q: '7 × 7 = ___', type: 'mc', choices: ['42','47','49','52'], answer: '49' },
          { q: 'Is 6 × 8 = 48?', type: 'tf', answer: true },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Multiply by 8 and 9',
        scene: '8 ✖️ 9 = ❓',
        problems: [
          { q: '8 × 3 = ___', type: 'input', answer: 24 },
          { q: '9 × 4 = ___', type: 'input', answer: 36 },
          { q: '8 × 7 = ___', type: 'mc', choices: ['54','56','58','64'], answer: '56' },
          { q: 'Is 9 × 9 = 81?', type: 'tf', answer: true },
          { q: 'Is 8 × 8 = 62?', type: 'tf', answer: false },
          { q: '9 × 6 = ___', type: 'input', answer: 54 },
          { q: '8 rows with 9 chairs each. How many chairs?', type: 'mc', choices: ['64','70','72','81'], answer: '72', scene: '🪑🪑🪑🪑🪑🪑🪑🪑' },
          { q: '8 × ___ = 40', type: 'input', answer: 5 },
          { q: '9 × 8 = ___', type: 'mc', choices: ['63','70','72','81'], answer: '72' },
          { q: 'Is 8 × 9 = 9 × 8?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems ×6–9',
        scene: '🕷️🕷️🕷️',
        problems: [
          { q: 'Each package has 6 crayons. There are 7 packages. Total crayons?', type: 'mc', choices: ['36','42','48','52'], answer: '42', scene: '🖍️📦🖍️📦' },
          { q: 'A spider has 8 legs. How many legs do 6 spiders have?', type: 'input', answer: 48, unit: 'legs', scene: '🕷️🕷️🕷️🕷️🕷️🕷️' },
          { q: 'Is 9 × 7 = 63?', type: 'tf', answer: true },
          { q: '8 × 9 = ___', type: 'input', answer: 72 },
          { q: 'A caterpillar has 6 pairs of legs. Total legs?', type: 'mc', choices: ['6','10','12','16'], answer: '12', scene: '🐛' },
          { q: 'A student reads 9 books a month. Books in 6 months?', type: 'mc', choices: ['45','54','63','72'], answer: '54', scene: '📚📚📚' },
          { q: '7 × ___ = 56', type: 'input', answer: 8 },
          { q: '9 teams with 9 players each. Total players?', type: 'mc', choices: ['72','79','81','90'], answer: '81', scene: '⚽⚽⚽' },
          { q: 'Is 6 × 9 = 55?', type: 'tf', answer: false },
          { q: 'A recipe needs 8 cups for 1 cake. Cups for 7 cakes?', type: 'mc', choices: ['48','54','56','64'], answer: '56', scene: '🎂🎂🎂' },
        ]
      }
    ]
  },

  // ── Module 4: Area (Weeks 15–19) ────────────────────────────
  {
    id: 3, grade: 3, module: 4,
    weekStart: 15, weekEnd: 19,
    name: 'Module 4', title: 'Multiplication and Area',
    emoji: '🔷', color: '#1a7ac7',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Concept of Area',
        scene: '⬜⬜⬜\n⬜⬜⬜',
        problems: [
          { q: 'A rectangle has 3 rows and 4 columns of tiles. Area = ___ square units.', type: 'input', answer: 12, scene: '⬜⬜⬜⬜\n⬜⬜⬜⬜\n⬜⬜⬜⬜' },
          { q: 'A square has 5 tiles on each side. Area = ___ square units.', type: 'mc', choices: ['10','20','25','30'], answer: '25' },
          { q: 'Is area measured in square units?', type: 'tf', answer: true },
          { q: 'A shape covers 8 square tiles. Area = ___ square units.', type: 'mc', choices: ['4','6','8','16'], answer: '8' },
          { q: 'Which has larger area: 3×5 or 4×4?', type: 'mc', choices: ['3×5 = 15','4×4 = 16','Same','Cannot tell'], answer: '4×4 = 16' },
          { q: 'A floor is 6 m long and 4 m wide. Area = ___?', type: 'mc', choices: ['10','24','28','48'], answer: '24', scene: '🏠' },
          { q: 'Is the area of a 5×5 square = 25?', type: 'tf', answer: true },
          { q: 'A garden is 8 m × 3 m. Area = ___ m².', type: 'input', answer: 24, unit: 'm²', scene: '🌱🌱🌱' },
          { q: 'A rectangle is 2 wide and 9 long. Area = ___?', type: 'mc', choices: ['11','16','18','22'], answer: '18' },
          { q: 'Which area is bigger: 4×6 or 5×5?', type: 'mc', choices: ['4×6 = 24','5×5 = 25','Same','Cannot tell'], answer: '5×5 = 25' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Area = Length × Width',
        scene: 'A = l ✖️ w',
        problems: [
          { q: 'A rectangle is 7 cm × 3 cm. Area = ___?', type: 'input', answer: 21, unit: 'cm²' },
          { q: '8 × 4 = ___', type: 'mc', choices: ['28','30','32','36'], answer: '32' },
          { q: 'A square has side = 6 cm. Area = ___?', type: 'mc', choices: ['12','24','36','48'], answer: '36' },
          { q: 'Is 9 × 3 = 27?', type: 'tf', answer: true },
          { q: 'A room is 5 m × 5 m. Area = ___ m².', type: 'input', answer: 25, unit: 'm²', scene: '🏠' },
          { q: 'A table is 4 m long and 2 m wide. Area = ___?', type: 'mc', choices: ['6','8','12','16'], answer: '8' },
          { q: 'A rug is 3 m × 7 m. Area = ___ m².', type: 'input', answer: 21, unit: 'm²', scene: '🟫' },
          { q: 'Is the area of a 6×4 rectangle = 24?', type: 'tf', answer: true },
          { q: 'A window is 9 dm wide and 4 dm tall. Area = ___?', type: 'mc', choices: ['32','36','38','45'], answer: '36' },
          { q: '___ × 8 = 56', type: 'mc', choices: ['6','7','8','9'], answer: '7' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Area and Perimeter',
        scene: '🔷📐',
        problems: [
          { q: 'A square has side 5 cm. Perimeter = ___?', type: 'mc', choices: ['10','15','20','25'], answer: '20' },
          { q: 'A rectangle is 6 cm × 4 cm. Perimeter = ___ cm.', type: 'input', answer: 20, unit: 'cm' },
          { q: 'A square has area 36 cm². What is each side?', type: 'mc', choices: ['4','6','8','9'], answer: '6' },
          { q: 'Is the perimeter of a 3×7 rectangle = 20?', type: 'tf', answer: true },
          { q: 'A garden 8 m × 5 m needs a fence. How much fencing?', type: 'mc', choices: ['13','26','40','80'], answer: '26', scene: '🌱🌱🌱' },
          { q: 'A square with side 9 cm. Perimeter = ___ cm.', type: 'input', answer: 36, unit: 'cm' },
          { q: 'Is the area AND perimeter of a 4×4 square both equal to 16?', type: 'tf', answer: true },
          { q: 'A room is 10 m × 6 m. Area = ___ m².', type: 'mc', choices: ['32','60','65','100'], answer: '60' },
          { q: 'A rectangle has perimeter 18 cm and width 3 cm. Length = ___?', type: 'mc', choices: ['6','8','12','15'], answer: '6' },
          { q: 'Is the area of a 2×9 rectangle equal to a 3×6 rectangle?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 5: Fractions on Number Line (Weeks 20–26) ────────
  {
    id: 4, grade: 3, module: 5,
    weekStart: 20, weekEnd: 26,
    name: 'Module 5', title: 'Fractions as Numbers',
    emoji: '🔵', color: '#5b34c4',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Unit Fractions',
        scene: '🔵⬜⬜⬜',
        problems: [
          { q: 'Which fraction shows 1 part out of 3 equal parts?', type: 'mc', choices: ['1/2','1/3','1/4','2/3'], answer: '1/3' },
          { q: '1/4 of 12 = ___', type: 'input', answer: 3 },
          { q: 'Is 1/2 of 10 = 5?', type: 'tf', answer: true },
          { q: '1/3 of 9 = ___', type: 'mc', choices: ['2','3','4','6'], answer: '3' },
          { q: 'A ribbon is 12 cm. What is 1/4 of the ribbon?', type: 'mc', choices: ['2 cm','3 cm','4 cm','6 cm'], answer: '3 cm', scene: '🎀📏' },
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
        problems: [
          { q: 'Is 1/2 = 2/4?', type: 'tf', answer: true },
          { q: '2/4 is the same as ___?', type: 'mc', choices: ['1/2','1/3','1/4','2/3'], answer: '1/2' },
          { q: 'Is 2/3 > 1/3?', type: 'tf', answer: true },
          { q: 'Which fraction equals 1/2?', type: 'mc', choices: ['2/3','3/4','4/8','3/8'], answer: '4/8' },
          { q: 'Is 3/6 = 1/2?', type: 'tf', answer: true },
          { q: 'A pizza has 8 slices. You eat 4. What fraction?', type: 'mc', choices: ['1/3','1/2','2/3','3/4'], answer: '1/2', scene: '🍕' },
          { q: '3/4 of 12 = ___', type: 'mc', choices: ['6','8','9','10'], answer: '9' },
          { q: 'Is 2/4 = 3/6?', type: 'tf', answer: true },
          { q: 'On a number line, 2/4 lands on ___?', type: 'mc', choices: ['1/4 mark','1/2 mark','3/4 mark','At 1'], answer: '1/2 mark' },
          { q: 'Which is less: 1/4 or 1/3?', type: 'mc', choices: ['1/4','1/3','Same','Cannot tell'], answer: '1/4' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Comparing Fractions',
        scene: '3/4 ⚖️ 1/4',
        problems: [
          { q: 'Is 3/4 > 1/4?', type: 'tf', answer: true },
          { q: 'Which is greater: 2/3 or 1/3?', type: 'mc', choices: ['2/3','1/3','Same','Cannot tell'], answer: '2/3' },
          { q: 'Is 1/2 > 1/4?', type: 'tf', answer: true },
          { q: 'Least to greatest: 1/4, 3/4, 1/2.', type: 'mc', choices: ['1/4, 1/2, 3/4','1/2, 1/4, 3/4','3/4, 1/2, 1/4','1/4, 3/4, 1/2'], answer: '1/4, 1/2, 3/4' },
          { q: 'Which is less: 2/6 or 2/3?', type: 'mc', choices: ['2/6','2/3','Same','Cannot tell'], answer: '2/6' },
          { q: 'Is 3/8 < 3/4?', type: 'tf', answer: true },
          { q: '3/4 of 8 = ___', type: 'mc', choices: ['4','5','6','7'], answer: '6' },
          { q: 'A bar has 6 squares. You eat 2. Fraction eaten?', type: 'mc', choices: ['1/6','1/3','1/2','2/3'], answer: '1/3', scene: '🍫' },
          { q: 'Is 4/4 = 1 whole?', type: 'tf', answer: true },
          { q: 'Which is closest to 1: 1/4, 3/4, or 1/2?', type: 'mc', choices: ['1/4','1/2','3/4','All same'], answer: '3/4' },
        ]
      }
    ]
  },

  // ── Module 6: Collecting and Displaying Data (Weeks 27–29) ──
  {
    id: 5, grade: 3, module: 6,
    weekStart: 27, weekEnd: 29,
    name: 'Module 6', title: 'Collecting and Displaying Data',
    emoji: '📊', color: '#b5298a',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Reading Bar and Picture Graphs',
        scene: '📊',
        problems: [
          { q: 'A bar shows 8 votes for dogs and 5 for cats. How many more votes for dogs?', type: 'mc', choices: ['2','3','5','8'], answer: '3', scene: '🐕🐱' },
          { q: 'In a graph: red = 7, blue = 4, green = 6. Which is most popular?', type: 'mc', choices: ['Red','Blue','Green','All same'], answer: 'Red' },
          { q: '8 + 5 + 6 = ___', type: 'input', answer: 19 },
          { q: 'Is the bar for 9 votes taller than the bar for 7 votes?', type: 'tf', answer: true },
          { q: 'A picture graph: 🐶×4, 🐱×3, 🐟×2. Total pets?', type: 'mc', choices: ['7','8','9','12'], answer: '9', scene: '🐶🐱🐟' },
          { q: 'Apples: 12, Bananas: 8, Grapes: 10. Most popular minus least popular?', type: 'mc', choices: ['2','4','6','8'], answer: '4', scene: '🍎🍌🍇' },
          { q: 'Is 15 students more than 12 on a bar graph?', type: 'tf', answer: true },
          { q: 'A graph shows 25 red and 15 blue. How many more red?', type: 'mc', choices: ['5','10','15','25'], answer: '10' },
          { q: '25 + 15 = ___', type: 'input', answer: 40 },
          { q: 'A key shows each symbol = 5. There are 4 symbols. Total = ___?', type: 'mc', choices: ['4','5','15','20'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Scaled Picture Graphs',
        scene: '🌟🌟🌟',
        problems: [
          { q: 'Each 🌟 = 10 students. There are 3 stars. How many students?', type: 'mc', choices: ['3','13','30','33'], answer: '30' },
          { q: 'Each symbol = 5. You count 6 symbols. Total = ___?', type: 'mc', choices: ['11','25','30','35'], answer: '30' },
          { q: 'Key: ☀ = 4. There are 7 suns. How many total?', type: 'input', answer: 28 },
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
        problems: [
          { q: 'Heights: 120 cm × 3, 125 cm × 5, 130 cm × 2. Total students?', type: 'mc', choices: ['7','8','10','12'], answer: '10' },
          { q: 'Most common height? (120:3, 125:5, 130:2)', type: 'mc', choices: ['120 cm','125 cm','130 cm','Cannot tell'], answer: '125 cm' },
          { q: 'Difference between tallest and shortest (120 to 130)?', type: 'mc', choices: ['5','10','15','20'], answer: '10' },
          { q: 'Is 5 students the most common in the plot above?', type: 'tf', answer: true },
          { q: 'Book lengths: 8 cm × 4, 9 cm × 3, 10 cm × 2. Most common length?', type: 'mc', choices: ['8 cm','9 cm','10 cm','7 cm'], answer: '8 cm', scene: '📚📏' },
          { q: 'Total measurements in the book plot: 4 + 3 + 2 = ___', type: 'input', answer: 9 },
          { q: 'In a line plot, each X = 1 item. Is this a scaled graph?', type: 'tf', answer: false },
          { q: 'Plant heights: 5 cm × 3, 6 cm × 4, 7 cm × 2, 8 cm × 1. How many plants taller than 6 cm?', type: 'mc', choices: ['1','2','3','6'], answer: '3', scene: '🌱🌱🌱' },
          { q: 'Shoe sizes: size 1 × 2, size 2 × 5, size 3 × 3. Most common size?', type: 'mc', choices: ['Size 1','Size 2','Size 3','Same'], answer: 'Size 2' },
          { q: 'Is a line plot best for showing many different categories?', type: 'tf', answer: false },
        ]
      }
    ]
  },

  // ── Module 7: Geometry and Measurement (Weeks 30–36) ────────
  {
    id: 6, grade: 3, module: 7,
    weekStart: 30, weekEnd: 36,
    name: 'Module 7', title: 'Geometry and Measurement Word Problems',
    emoji: '🔷', color: '#0e8f6b',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Attributes of Quadrilaterals',
        scene: '🔷🔶🔺',
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
        problems: [
          { q: 'A square has side 4 cm. Perimeter = ___?', type: 'mc', choices: ['8','12','16','20'], answer: '16' },
          { q: 'A rectangle is 5 cm × 3 cm. Perimeter = ___ cm.', type: 'input', answer: 16, unit: 'cm' },
          { q: 'Is perimeter the distance around a shape?', type: 'tf', answer: true },
          { q: 'A triangle has sides 3, 4, and 5 cm. Perimeter = ___ cm.', type: 'input', answer: 12, unit: 'cm' },
          { q: 'A square has perimeter 20 cm. Each side = ___ cm.', type: 'mc', choices: ['4','5','10','20'], answer: '5' },
          { q: 'A rectangle has perimeter 18 cm and length 6 cm. Width = ___?', type: 'mc', choices: ['2','3','4','6'], answer: '3' },
          { q: 'A regular hexagon has side 3 cm. Perimeter = ___?', type: 'mc', choices: ['12','15','18','24'], answer: '18' },
          { q: 'Is 20 cm the perimeter of a rectangle with sides 5 cm and 5 cm?', type: 'tf', answer: true },
          { q: 'A room is 8 m × 6 m. Perimeter = ___ m.', type: 'input', answer: 28, unit: 'm', scene: '🏠📏' },
          { q: 'A shape has perimeter 24 cm with 4 equal sides. Side = ___?', type: 'mc', choices: ['4','6','8','12'], answer: '6' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Area and Perimeter Word Problems',
        scene: '📝📐',
        problems: [
          { q: 'A playground is 15 m × 8 m. Area = ___ m²?', type: 'mc', choices: ['46','100','120','160'], answer: '120', scene: '🛝' },
          { q: 'A fence goes around a garden 12 m × 9 m. Length of fence = ___ m?', type: 'input', answer: 42, unit: 'm', scene: '🌻🌻🌻' },
          { q: 'A tile floor is 6 m × 7 m. Tiles needed?', type: 'mc', choices: ['13','36','42','48'], answer: '42' },
          { q: 'Is a 5×8 field the same area as a 4×10 field?', type: 'tf', answer: true },
          { q: 'A square garden has perimeter 28 m. Area = ___ m²?', type: 'mc', choices: ['28','36','49','56'], answer: '49' },
          { q: 'Two rooms: 3×5 and 4×4. Which has more area?', type: 'mc', choices: ['3×5 = 15','4×4 = 16','Same','Cannot tell'], answer: '4×4 = 16' },
          { q: 'A park is 20 m × 15 m. Length of path around it = ___ m?', type: 'mc', choices: ['35','70','280','300'], answer: '70' },
          { q: 'A rectangle is 9 m × 4 m. Area + Perimeter = ___?', type: 'mc', choices: ['35','36','62','72'], answer: '62' },
          { q: 'Is the perimeter of a 4×4 square equal to its area?', type: 'tf', answer: true },
          { q: 'A field is 25 m × 12 m. Area = ___ m²?', type: 'mc', choices: ['74','300','325','350'], answer: '300', scene: '🌾🌾🌾' },
        ]
      }
    ]
  }

];

// ── Combined export ───────────────────────────────────────────
const EUREKA = { 2: EUREKA_G2, 3: EUREKA_G3 };
