// ============================================================
// EUREKA MATH — Grade 2 (Great Minds)
// San Diego Unified School District
// ============================================================

const EUREKA_G2 = [

  // ── Module 1: Sums and Differences to 100 ──────────────────
  {
    id: 0, module: 1,
    name: 'Module 1',
    title: 'Sums & Differences to 100',
    emoji: '🔟',
    color: '#e84040',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Making Ten',
        problems: [
          { q: '9 + ___ = 10', type: 'input', answer: 1 },
          { q: '7 + ___ = 10', type: 'input', answer: 3 },
          { q: '6 + ___ = 10', type: 'input', answer: 4 },
          { q: 'Is 8 + 2 = 10 ?', type: 'tf', answer: true },
          { q: 'Is 7 + 4 = 10 ?', type: 'tf', answer: false },
          { q: 'Sam has 6 pencils. How many more does he need to have 10?', type: 'mc', choices: ['2', '3', '4', '5'], answer: '4' },
          { q: '___ + 3 = 10', type: 'input', answer: 7 },
          { q: '10 − 5 = ___', type: 'input', answer: 5 },
          { q: '10 − 8 = ___', type: 'input', answer: 2 },
          { q: 'Which two numbers make 10?', type: 'mc', choices: ['3 and 6', '4 and 7', '5 and 5', '6 and 5'], answer: '5 and 5' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Tens to Add and Subtract',
        problems: [
          { q: '20 + 30 = ___', type: 'input', answer: 50 },
          { q: '40 + 50 = ___', type: 'input', answer: 90 },
          { q: '70 − 30 = ___', type: 'input', answer: 40 },
          { q: '90 − 60 = ___', type: 'input', answer: 30 },
          { q: 'Is 50 + 40 = 100 ?', type: 'tf', answer: false },
          { q: 'Is 30 + 60 = 90 ?', type: 'tf', answer: true },
          { q: 'Anna has 60 crayons and gives away 20. How many are left?', type: 'mc', choices: ['30', '40', '50', '80'], answer: '40' },
          { q: '30 + ___ = 80', type: 'input', answer: 50 },
          { q: '___ − 20 = 50', type: 'input', answer: 70 },
          { q: 'Which number is the same as 7 tens?', type: 'mc', choices: ['17', '700', '7', '70'], answer: '70' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Adding Two-Digit Numbers',
        problems: [
          { q: '23 + 45 = ___', type: 'input', answer: 68 },
          { q: '36 + 42 = ___', type: 'input', answer: 78 },
          { q: '57 + 28 = ___', type: 'input', answer: 85 },
          { q: 'Is 44 + 33 = 77 ?', type: 'tf', answer: true },
          { q: 'Is 28 + 35 = 62 ?', type: 'tf', answer: false },
          { q: 'Jake scored 34 points in game 1 and 47 in game 2. How many points in all?', type: 'mc', choices: ['71', '81', '80', '91'], answer: '81' },
          { q: '45 + ___ = 90', type: 'input', answer: 45 },
          { q: '63 + 27 = ___', type: 'input', answer: 90 },
          { q: 'There are 38 boys and 25 girls. How many children in all?', type: 'mc', choices: ['53', '61', '63', '73'], answer: '63' },
          { q: '___ + 36 = 72', type: 'input', answer: 36 },
        ]
      }
    ]
  },

  // ── Module 2: Addition and Subtraction of Length Units ───────
  {
    id: 1, module: 2,
    name: 'Module 2',
    title: 'Addition and Subtraction of Length',
    emoji: '📏',
    color: '#e06c00',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Measuring to the Nearest Centimeter',
        problems: [
          { q: 'A pencil is 12 cm long. A crayon is 8 cm long. How many centimeters longer is the pencil?', type: 'input', answer: 4 },
          { q: 'A worm is 7 cm long. A caterpillar is 9 cm. Which is longer?', type: 'mc', choices: ['The worm', 'The caterpillar', 'They are equal', 'Cannot tell'], answer: 'The caterpillar' },
          { q: 'A ribbon is 15 cm. Another ribbon is 9 cm. How long are they together?', type: 'input', answer: 24 },
          { q: 'Is 1 meter the same as 100 centimeters?', type: 'tf', answer: true },
          { q: 'Is 50 cm longer than 1 meter?', type: 'tf', answer: false },
          { q: 'A book is 22 cm tall. A box is 30 cm tall. How much taller is the box?', type: 'input', answer: 8 },
          { q: 'A string is 45 cm. Maya cuts 18 cm off. How long is it now?', type: 'mc', choices: ['23 cm', '25 cm', '27 cm', '63 cm'], answer: '27 cm' },
          { q: "Tom's desk is 60 cm wide. His book is 25 cm wide. How much wider is the desk?", type: 'input', answer: 35 },
          { q: 'Two roads are 37 km and 48 km. What is the total?', type: 'mc', choices: ['75 km', '85 km', '80 km', '95 km'], answer: '85 km' },
          { q: 'A rope is 100 cm. You use 63 cm. How much is left?', type: 'input', answer: 37 },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Compare and Order Lengths',
        problems: [
          { q: 'A bat is 80 cm. A broom is 100 cm. Which is longer?', type: 'mc', choices: ['The bat', 'The broom', 'They are equal', 'Neither'], answer: 'The broom' },
          { q: 'Is 65 cm longer than 56 cm?', type: 'tf', answer: true },
          { q: 'Which is the shortest: 42, 24, 39?', type: 'mc', choices: ['42', '24', '39', 'They are equal'], answer: '24' },
          { q: 'A fence is 75 m. A road is 57 m. How much longer is the fence?', type: 'input', answer: 18 },
          { q: 'Is 1 meter shorter than 99 cm?', type: 'tf', answer: false },
          { q: "Ana's hair is 48 cm. Bella's is 52 cm. How much longer is Bella's?", type: 'input', answer: 4 },
          { q: 'Which is the longest: 73 cm, 37 cm, 63 cm?', type: 'mc', choices: ['73 cm', '37 cm', '63 cm', 'All equal'], answer: '73 cm' },
          { q: 'A ladder is 90 cm. A stick is 68 cm. What is the difference in length?', type: 'input', answer: 22 },
          { q: 'Is 34 cm shorter than 43 cm?', type: 'tf', answer: true },
          { q: 'Three objects: 15 cm, 51 cm, 35 cm. Which is longest?', type: 'mc', choices: ['15 cm', '51 cm', '35 cm', 'Cannot tell'], answer: '51 cm' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems with Length',
        problems: [
          { q: 'A snake is 36 cm. It grows 24 more cm. How long is it now?', type: 'input', answer: 60 },
          { q: 'A pipe is 85 cm long. A saw cuts 29 cm off. How long is the pipe now?', type: 'mc', choices: ['54 cm', '56 cm', '64 cm', '66 cm'], answer: '56 cm' },
          { q: 'Kim runs 200 m. She has 350 m left. How far is the whole race?', type: 'input', answer: 550 },
          { q: 'Is 72 − 35 = 37 ?', type: 'tf', answer: true },
          { q: 'Is 45 + 56 = 100 ?', type: 'tf', answer: false },
          { q: 'A rope is cut into two pieces: 47 cm and 38 cm. How long was the whole rope?', type: 'mc', choices: ['75 cm', '85 cm', '95 cm', '80 cm'], answer: '85 cm' },
          { q: 'A path is 100 m. You walk 63 m. How far is left?', type: 'input', answer: 37 },
          { q: 'A worm is 9 cm long. It grows 6 more cm. How long now?', type: 'mc', choices: ['13 cm', '14 cm', '15 cm', '16 cm'], answer: '15 cm' },
          { q: 'The table is 68 cm. The desk is 45 cm. What is the total length?', type: 'input', answer: 113 },
          { q: 'Is 100 − 37 = 63 ?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 3: Place Value, Counting, and Comparison to 1,000 ─
  {
    id: 2, module: 3,
    name: 'Module 3',
    title: 'Place Value to 1,000',
    emoji: '🏗️',
    color: '#c09000',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Hundreds, Tens, and Ones',
        problems: [
          { q: 'What digit is in the tens place in 340?', type: 'mc', choices: ['3', '4', '0', '34'], answer: '4' },
          { q: 'What is the value of the digit 5 in 537?', type: 'mc', choices: ['5', '50', '500', '5,000'], answer: '500' },
          { q: '4 hundreds + 2 tens + 7 ones = ___', type: 'input', answer: 427 },
          { q: 'Is 3 hundreds = 300 ?', type: 'tf', answer: true },
          { q: 'Is 6 tens = 600 ?', type: 'tf', answer: false },
          { q: 'What digit is in the tens place in 285?', type: 'mc', choices: ['2', '8', '5', '0'], answer: '8' },
          { q: '200 + 60 + 3 = ___', type: 'input', answer: 263 },
          { q: 'What digit is in the ones place in 419?', type: 'input', answer: 9 },
          { q: '500 + 40 + 9 = ___', type: 'mc', choices: ['549', '594', '459', '945'], answer: '549' },
          { q: 'What is the value of the digit 7 in 172?', type: 'mc', choices: ['7', '70', '700', '1'], answer: '70' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Reading and Writing to 1,000',
        problems: [
          { q: 'Write 600 + 50 + 2 as one number.', type: 'input', answer: 652 },
          { q: 'Is "four hundred thirty-seven" the same as 437?', type: 'tf', answer: true },
          { q: 'How many hundreds are in 800?', type: 'input', answer: 8 },
          { q: 'Which number comes after 399?', type: 'mc', choices: ['389', '400', '398', '300'], answer: '400' },
          { q: 'Which number comes just before 700?', type: 'mc', choices: ['701', '710', '699', '600'], answer: '699' },
          { q: 'Is 345 read as "three hundred forty-five"?', type: 'tf', answer: true },
          { q: '700 + 30 + 8 = ___', type: 'input', answer: 738 },
          { q: 'What number has 9 hundreds, 0 tens, and 5 ones?', type: 'mc', choices: ['905', '950', '509', '590'], answer: '905' },
          { q: '900 + 5 = ___', type: 'input', answer: 905 },
          { q: 'Is 1,000 the same as 10 hundreds?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Comparing Three-Digit Numbers',
        problems: [
          { q: 'Which is greater: 542 or 524?', type: 'mc', choices: ['542', '524', 'They are equal', 'Cannot tell'], answer: '542' },
          { q: 'Is 389 < 398 ?', type: 'tf', answer: true },
          { q: 'Is 700 > 699 ?', type: 'tf', answer: true },
          { q: 'Which is the smallest: 412, 421, 142?', type: 'mc', choices: ['412', '421', '142', 'All equal'], answer: '142' },
          { q: 'Is 555 = 555 ?', type: 'tf', answer: true },
          { q: '468 compared to 486: which symbol fits? ___ < ___ or ___ > ___', type: 'mc', choices: ['468 < 486', '468 > 486', '468 = 486', 'Cannot tell'], answer: '468 < 486' },
          { q: 'Which is larger: 900 or 1,000?', type: 'mc', choices: ['900', '1,000', 'Equal', 'Cannot tell'], answer: '1,000' },
          { q: 'Is 250 > 205 ?', type: 'tf', answer: true },
          { q: 'Least to greatest: 631, 316, 163. Which comes first?', type: 'mc', choices: ['631', '316', '163', 'All equal'], answer: '163' },
          { q: 'Is 999 the largest three-digit number?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 4: Addition and Subtraction Within 200 ───────────
  {
    id: 3, module: 4,
    name: 'Module 4',
    title: 'Addition and Subtraction within 200',
    emoji: '📊',
    color: '#1a7ac7',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Add Within 200',
        problems: [
          { q: '97 + 36 = ___', type: 'input', answer: 133 },
          { q: '125 + 48 = ___', type: 'input', answer: 173 },
          { q: '84 + 79 = ___', type: 'mc', choices: ['153', '163', '143', '173'], answer: '163' },
          { q: 'Is 76 + 48 = 124 ?', type: 'tf', answer: true },
          { q: 'Is 93 + 87 = 170 ?', type: 'tf', answer: false },
          { q: '110 + 65 = ___', type: 'input', answer: 175 },
          { q: 'There are 88 red beads and 96 blue beads. How many in all?', type: 'mc', choices: ['174', '184', '194', '164'], answer: '184' },
          { q: '153 + 39 = ___', type: 'input', answer: 192 },
          { q: '67 + ___ = 132', type: 'input', answer: 65 },
          { q: 'Mia read 74 pages on Monday and 87 on Tuesday. How many total?', type: 'mc', choices: ['151', '161', '141', '171'], answer: '161' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtract Within 200',
        problems: [
          { q: '143 − 57 = ___', type: 'input', answer: 86 },
          { q: '172 − 89 = ___', type: 'input', answer: 83 },
          { q: '156 − 68 = ___', type: 'mc', choices: ['78', '88', '98', '68'], answer: '88' },
          { q: 'Is 130 − 46 = 84 ?', type: 'tf', answer: true },
          { q: 'Is 185 − 97 = 78 ?', type: 'tf', answer: false },
          { q: 'A store has 162 apples. They sell 75. How many are left?', type: 'mc', choices: ['77', '87', '97', '107'], answer: '87' },
          { q: '200 − 64 = ___', type: 'input', answer: 136 },
          { q: '148 − ___ = 79', type: 'input', answer: 69 },
          { q: 'Is 100 − 55 = 45 ?', type: 'tf', answer: true },
          { q: '175 − 88 = ___', type: 'mc', choices: ['77', '87', '97', '67'], answer: '87' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 200',
        problems: [
          { q: 'Leo has 95 stamps. He gets 68 more. How many stamps now?', type: 'input', answer: 163 },
          { q: 'A bag has 150 marbles. 73 fall out. How many remain?', type: 'mc', choices: ['67', '77', '87', '97'], answer: '77' },
          { q: 'School A has 147 students. School B has 89. How many more in School A?', type: 'input', answer: 58 },
          { q: 'Is 80 + 75 = 155 ?', type: 'tf', answer: true },
          { q: 'Is 162 − 84 = 78 ?', type: 'tf', answer: true },
          { q: 'There are 128 red and 54 blue chairs. How many chairs in all?', type: 'mc', choices: ['172', '182', '192', '162'], answer: '182' },
          { q: '200 − 138 = ___', type: 'input', answer: 62 },
          { q: 'A class has collected 96 cans. They need 150. How many more?', type: 'mc', choices: ['44', '54', '64', '74'], answer: '54' },
          { q: '74 + 98 = ___', type: 'input', answer: 172 },
          { q: 'Is 145 − 70 = 75 ?', type: 'tf', answer: true },
        ]
      }
    ]
  },

  // ── Module 5: Addition and Subtraction Within 1,000 ─────────
  {
    id: 4, module: 5,
    name: 'Module 5',
    title: 'Addition and Subtraction within 1,000',
    emoji: '🔢',
    color: '#5b34c4',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Add Three-Digit Numbers',
        problems: [
          { q: '247 + 385 = ___', type: 'input', answer: 632 },
          { q: '463 + 279 = ___', type: 'input', answer: 742 },
          { q: '318 + 456 = ___', type: 'mc', choices: ['764', '774', '784', '754'], answer: '774' },
          { q: 'Is 500 + 273 = 773 ?', type: 'tf', answer: true },
          { q: 'Is 387 + 425 = 800 ?', type: 'tf', answer: false },
          { q: '624 + 257 = ___', type: 'input', answer: 881 },
          { q: 'A farm has 348 chickens and 275 ducks. How many birds in all?', type: 'mc', choices: ['613', '623', '633', '643'], answer: '623' },
          { q: '193 + 549 = ___', type: 'input', answer: 742 },
          { q: '475 + ___ = 900', type: 'input', answer: 425 },
          { q: '336 + 448 = ___', type: 'mc', choices: ['774', '784', '764', '794'], answer: '784' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Subtract Three-Digit Numbers',
        problems: [
          { q: '735 − 284 = ___', type: 'input', answer: 451 },
          { q: '612 − 347 = ___', type: 'input', answer: 265 },
          { q: '843 − 568 = ___', type: 'mc', choices: ['265', '275', '285', '255'], answer: '275' },
          { q: 'Is 900 − 356 = 544 ?', type: 'tf', answer: true },
          { q: 'Is 700 − 282 = 418 ?', type: 'tf', answer: true },
          { q: '1,000 − 437 = ___', type: 'input', answer: 563 },
          { q: 'A library has 827 books. 359 are checked out. How many remain?', type: 'mc', choices: ['458', '468', '478', '488'], answer: '468' },
          { q: '954 − ___ = 382', type: 'input', answer: 572 },
          { q: 'Is 583 − 297 = 286 ?', type: 'tf', answer: true },
          { q: '762 − 485 = ___', type: 'mc', choices: ['267', '277', '287', '257'], answer: '277' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems within 1,000',
        problems: [
          { q: 'A train carries 487 people on day 1 and 356 on day 2. Total passengers?', type: 'mc', choices: ['823', '833', '843', '853'], answer: '843' },
          { q: 'A factory makes 650 toys. It ships 278. How many are left?', type: 'input', answer: 372 },
          { q: 'Is 525 + 356 = 881 ?', type: 'tf', answer: true },
          { q: 'A school has 943 books. They donate 485. How many left?', type: 'mc', choices: ['448', '458', '468', '478'], answer: '458' },
          { q: '764 − 398 = ___', type: 'input', answer: 366 },
          { q: 'Is 300 + 400 + 200 = 900 ?', type: 'tf', answer: true },
          { q: 'There are 612 red and 279 blue tiles. How many in all?', type: 'input', answer: 891 },
          { q: 'Is 1,000 − 500 = 499 ?', type: 'tf', answer: false },
          { q: 'Mia saves $347 in March and $486 in April. How much in all?', type: 'mc', choices: ['823', '833', '843', '813'], answer: '833' },
          { q: '500 − 237 = ___', type: 'input', answer: 263 },
        ]
      }
    ]
  },

  // ── Module 6: Foundations of Multiplication ─────────────────
  {
    id: 5, module: 6,
    name: 'Module 6',
    title: 'Foundations of Multiplication',
    emoji: '✖️',
    color: '#b5298a',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Equal Groups',
        problems: [
          { q: '3 groups of 4 = ___', type: 'input', answer: 12 },
          { q: '5 groups of 2 = ___', type: 'input', answer: 10 },
          { q: '4 groups of 3 = ___', type: 'mc', choices: ['7', '10', '12', '14'], answer: '12' },
          { q: 'Is 5 groups of 3 = 15 ?', type: 'tf', answer: true },
          { q: 'Is 4 groups of 4 = 12 ?', type: 'tf', answer: false },
          { q: '2 groups of 6 = ___', type: 'input', answer: 12 },
          { q: 'There are 6 bags with 5 apples each. How many apples in all?', type: 'mc', choices: ['25', '30', '35', '11'], answer: '30' },
          { q: '3 groups of 7 = ___', type: 'input', answer: 21 },
          { q: 'Is 2 groups of 9 = 16 ?', type: 'tf', answer: false },
          { q: '4 groups of 5 = ___', type: 'mc', choices: ['15', '20', '25', '9'], answer: '20' },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Arrays',
        problems: [
          { q: 'An array has 3 rows and 4 columns. How many in all?', type: 'input', answer: 12 },
          { q: 'An array has 5 rows and 2 columns. How many in all?', type: 'mc', choices: ['7', '10', '12', '15'], answer: '10' },
          { q: 'Is a 4×6 array the same total as a 6×4 array?', type: 'tf', answer: true },
          { q: 'An array has 2 rows and 8 columns. How many?', type: 'input', answer: 16 },
          { q: 'Is 3 rows × 3 columns = 9 ?', type: 'tf', answer: true },
          { q: '5 rows × 5 columns = ___', type: 'mc', choices: ['10', '20', '25', '30'], answer: '25' },
          { q: 'A garden has 4 rows of 6 flowers. How many flowers?', type: 'input', answer: 24 },
          { q: '2 rows × 7 columns = ___', type: 'input', answer: 14 },
          { q: 'Is 3 × 8 = 8 × 3 ?', type: 'tf', answer: true },
          { q: 'An array shows 3 rows of 9 stars. How many stars in all?', type: 'mc', choices: ['27', '28', '29', '30'], answer: '27' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Repeated Addition',
        problems: [
          { q: '5 + 5 + 5 = ___', type: 'input', answer: 15 },
          { q: '4 + 4 + 4 + 4 = ___', type: 'mc', choices: ['12', '14', '16', '20'], answer: '16' },
          { q: '3 + 3 + 3 + 3 + 3 = ___', type: 'input', answer: 15 },
          { q: 'Is 6 + 6 + 6 = 18 ?', type: 'tf', answer: true },
          { q: 'Is 7 + 7 + 7 = 24 ?', type: 'tf', answer: false },
          { q: '8 + 8 = ___', type: 'input', answer: 16 },
          { q: 'Which shows 4 groups of 3?', type: 'mc', choices: ['4+4+4', '3+3+3+3', '4+3+4+3', '3+4'], answer: '3+3+3+3' },
          { q: '2 + 2 + 2 + 2 + 2 + 2 = ___', type: 'input', answer: 12 },
          { q: 'Is 9 + 9 + 9 = 27 ?', type: 'tf', answer: true },
          { q: '10 + 10 + 10 = ___', type: 'mc', choices: ['20', '25', '30', '100'], answer: '30' },
        ]
      }
    ]
  },

  // ── Module 7: Problem Solving with Length, Money, and Data ───
  {
    id: 6, module: 7,
    name: 'Module 7',
    title: 'Money, Data, and Word Problems',
    emoji: '💰',
    color: '#0e8f6b',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Coins and Their Values',
        problems: [
          { q: 'How many cents is a quarter worth?', type: 'input', answer: 25 },
          { q: 'How many cents is a dime worth?', type: 'input', answer: 10 },
          { q: 'How many cents is a nickel worth?', type: 'mc', choices: ['1¢', '5¢', '10¢', '25¢'], answer: '5¢' },
          { q: 'Is a penny worth 1 cent?', type: 'tf', answer: true },
          { q: 'Is a dime worth more than a quarter?', type: 'tf', answer: false },
          { q: 'How many dimes make a dollar?', type: 'mc', choices: ['5', '10', '20', '25'], answer: '10' },
          { q: 'How many nickels make a quarter?', type: 'input', answer: 5 },
          { q: 'How many pennies equal a dime?', type: 'mc', choices: ['5', '10', '20', '25'], answer: '10' },
          { q: 'Is a quarter the same as 25 pennies?', type: 'tf', answer: true },
          { q: 'How many cents are in a dollar?', type: 'input', answer: 100 },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Counting Coins',
        problems: [
          { q: '2 quarters = ___ cents', type: 'input', answer: 50 },
          { q: '3 dimes + 2 nickels = ___ cents', type: 'input', answer: 40 },
          { q: '1 quarter + 3 dimes = ___ cents', type: 'mc', choices: ['45¢', '55¢', '65¢', '75¢'], answer: '55¢' },
          { q: 'Is 5 dimes = 50 cents?', type: 'tf', answer: true },
          { q: 'Is 3 quarters = 85 cents?', type: 'tf', answer: false },
          { q: '4 nickels = ___ cents', type: 'input', answer: 20 },
          { q: '2 dimes + 3 pennies = ___ cents', type: 'mc', choices: ['21¢', '23¢', '25¢', '32¢'], answer: '23¢' },
          { q: '1 dollar − 35 cents = ___ cents left', type: 'input', answer: 65 },
          { q: '3 quarters = ___ cents', type: 'mc', choices: ['50¢', '65¢', '75¢', '85¢'], answer: '75¢' },
          { q: 'Is 1 quarter + 5 dimes = 75 cents?', type: 'tf', answer: true },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Word Problems with Money',
        problems: [
          { q: 'A pencil costs 45¢. A pen costs 68¢. How much do both cost? (in cents)', type: 'input', answer: 113 },
          { q: 'Tom has 100¢ and spends 57¢. How much is left?', type: 'input', answer: 43 },
          { q: 'Is 25¢ + 35¢ = 60¢ ?', type: 'tf', answer: true },
          { q: 'A toy costs 87¢. You pay $1.00. How much change? (in cents)', type: 'mc', choices: ['3¢', '13¢', '17¢', '23¢'], answer: '13¢' },
          { q: 'Is 50¢ + 75¢ = 125¢ ?', type: 'tf', answer: true },
          { q: 'Mia has 3 quarters and 4 dimes. How many cents?', type: 'mc', choices: ['95¢', '105¢', '115¢', '125¢'], answer: '115¢' },
          { q: 'A book costs 135¢. You have 200¢. Change in cents?', type: 'input', answer: 65 },
          { q: 'Jake buys 2 items for 45¢ each. Total cost in cents?', type: 'input', answer: 90 },
          { q: 'Is $0.75 the same as 75 cents?', type: 'tf', answer: true },
          { q: 'You have 2 dimes, 3 nickels, and 4 pennies. Total cents?', type: 'mc', choices: ['37¢', '39¢', '41¢', '43¢'], answer: '39¢' },
        ]
      }
    ]
  },

  // ── Module 8: Time, Shapes, and Fractions ───────────────────
  {
    id: 7, module: 8,
    name: 'Module 8',
    title: 'Time, Shapes, and Fractions',
    emoji: '⏰',
    color: '#c03030',
    lessons: [
      {
        id: 0, name: 'Lesson 1', title: 'Telling Time',
        problems: [
          { q: 'How many minutes are in 1 hour?', type: 'input', answer: 60 },
          { q: 'How many hours are in 1 day?', type: 'input', answer: 24 },
          { q: 'Is "half past 3" the same as 3:30?', type: 'tf', answer: true },
          { q: 'How many minutes are in half an hour?', type: 'mc', choices: ['15', '30', '45', '60'], answer: '30' },
          { q: 'A movie starts at 2:00 and lasts 1 hour 30 minutes. When does it end?', type: 'mc', choices: ['3:00', '3:30', '4:00', '2:30'], answer: '3:30' },
          { q: 'School starts at 8:00 AM. Lunch is 4 hours later. What time is lunch?', type: 'mc', choices: ['11:00', '12:00', '1:00', '2:00'], answer: '12:00' },
          { q: 'How many minutes are in a quarter hour?', type: 'input', answer: 15 },
          { q: 'Is 1:15 the same as "quarter past 1"?', type: 'tf', answer: true },
          { q: 'Practice starts at 3:30 PM and goes 45 minutes. What time does it end?', type: 'mc', choices: ['4:00', '4:15', '4:30', '5:15'], answer: '4:15' },
          { q: 'How many minutes are between 2:00 and 2:45?', type: 'input', answer: 45 },
        ]
      },
      {
        id: 1, name: 'Lesson 2', title: 'Halves and Thirds',
        problems: [
          { q: 'A pizza is cut into 2 equal pieces. What fraction is each piece?', type: 'mc', choices: ['1/4', '1/3', '1/2', '1/6'], answer: '1/2' },
          { q: 'Is 1/2 of 10 = 5 ?', type: 'tf', answer: true },
          { q: '1/2 of 20 = ___', type: 'input', answer: 10 },
          { q: 'A rope is cut into 3 equal parts. What is each part called?', type: 'mc', choices: ['Half', 'Third', 'Quarter', 'Fifth'], answer: 'Third' },
          { q: 'Is 1/3 of 12 = 4 ?', type: 'tf', answer: true },
          { q: '1/3 of 9 = ___', type: 'input', answer: 3 },
          { q: '1/2 of 16 = ___', type: 'mc', choices: ['4', '6', '8', '10'], answer: '8' },
          { q: 'Is 1/2 greater than 1/3 ?', type: 'tf', answer: true },
          { q: '1/3 of 15 = ___', type: 'input', answer: 5 },
          { q: 'A bar of chocolate has 6 squares. Maya eats 1/3. How many squares does she eat?', type: 'mc', choices: ['1', '2', '3', '4'], answer: '2' },
        ]
      },
      {
        id: 2, name: 'Lesson 3', title: 'Fourths and Equal Parts',
        problems: [
          { q: 'A square is cut into 4 equal pieces. What is each piece called?', type: 'mc', choices: ['Half', 'Third', 'Quarter', 'Eighth'], answer: 'Quarter' },
          { q: '1/4 of 12 = ___', type: 'input', answer: 3 },
          { q: 'Is 1/4 of 20 = 5 ?', type: 'tf', answer: true },
          { q: '3/4 of 12 = ___', type: 'input', answer: 9 },
          { q: 'Is 1/4 less than 1/2 ?', type: 'tf', answer: true },
          { q: '1/4 of 8 = ___', type: 'mc', choices: ['1', '2', '3', '4'], answer: '2' },
          { q: 'A pie is cut into 4 equal slices. You eat 2. What fraction did you eat?', type: 'mc', choices: ['1/4', '1/2', '3/4', '1/3'], answer: '1/2' },
          { q: '3/4 of 8 = ___', type: 'input', answer: 6 },
          { q: 'Is 2/4 the same as 1/2 ?', type: 'tf', answer: true },
          { q: 'A cake is cut into 4 equal parts. 3 are eaten. What fraction is left?', type: 'mc', choices: ['1/4', '2/4', '3/4', '1/2'], answer: '1/4' },
        ]
      }
    ]
  }

];
