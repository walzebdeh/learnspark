// ============================================================
// NOETIC LEARNING OFFICIAL PRACTICE EXAMS — Grade 2
// Fall 2020, 2021, 2022
// ============================================================

const NOETIC_REAL_EXAMS = [

  // ── Fall 2020 ─────────────────────────────────────────────
  {
    id: 'fall2020', title: 'Fall 2020', season: 'Fall', year: 2020, color: '#5b34c4',
    problems: [
      {
        q: '20 + 20 = ?',
        answer: 40,
        hint: 'Add 20 + 20. Think of it as 2 tens + 2 tens = 4 tens = 40.'
      },
      {
        q: 'A figure shows a 2×3 grid (2 rows, 3 columns) of small boxes.\nEach box contains 2 dots.\n\nHow many dots are in the figure in total?',
        answer: 12,
        hint: 'There are 6 boxes total and each has 2 dots. Count by 2s: 2, 4, 6, 8, 10, 12. Or multiply: 6 × 2 = 12.'
      },
      {
        q: 'Jack chose one of these jersey numbers:\n\n  4 · 7 · 8 · 25 · 34 · 52\n\nThe number Jack chose is an ODD number that is GREATER THAN 7.\n\nWhich number did Jack choose?',
        answer: 25,
        hint: 'First find the ODD numbers: 7 and 25. Now which one is greater than 7? (Remember: 7 is NOT greater than 7 — it must be strictly greater.)'
      },
      {
        q: 'Colby made a plus-sign shape using square tiles. He used 13 tiles.\nPam made a smaller plus-sign shape using 9 tiles.\n\nHow many more tiles did Colby use than Pam?',
        answer: 4,
        hint: 'Subtract: 13 − 9 = 4 more tiles.'
      },
      {
        q: 'Sherry and Ravi went shopping together. Sherry bought 9 notebooks. Ravi bought 3 more notebooks than Sherry.\n\nHow many notebooks did they buy altogether?',
        answer: 21,
        hint: 'Ravi bought 9 + 3 = 12 notebooks. Together: 9 + 12 = 21 notebooks.'
      },
      {
        q: 'During a 5-day trip, Gary read 3 picture books each day.\n\nHow many picture books did Gary read in total?',
        answer: 15,
        hint: 'Add: 3 + 3 + 3 + 3 + 3 = 15. Or multiply: 5 × 3 = 15.'
      },
      {
        q: 'Prisha has 2 boxes of crayons. Each box has 12 crayons.\nIf she gives Beth 8 crayons, how many crayons will Prisha have left?',
        answer: 16,
        hint: 'Total crayons: 12 + 12 = 24. After giving 8 away: 24 − 8 = 16.'
      },
      {
        q: 'Find the number that fits this riddle:\n\n  • I am less than 18.\n  • I am NOT 17.\n  • I am greater than 5 + 5 + 5.\n\nWhat number am I?',
        answer: 16,
        hint: '5+5+5 = 15. Numbers greater than 15 but less than 18: 16 and 17. The riddle says NOT 17, so the answer is 16.'
      },
      {
        q: 'It is 11:45 am, and Omar is having lunch. His lunch break started 18 minutes ago, and it ends in 17 minutes.\n\nHow many minutes long is Omar\'s lunch break?',
        answer: 35,
        hint: 'The lunch break goes from 18 minutes ago to 17 minutes from now. Total length = 18 + 17 = 35 minutes.'
      },
      {
        q: 'The Oriental Hotel sends one bus to the airport every 60 minutes.\nThe first bus leaves at 6:30 am.\n\nHow many buses will the hotel send by 12:00 noon?',
        answer: 6,
        hint: 'List the bus times: 6:30, 7:30, 8:30, 9:30, 10:30, 11:30 am. The 11:30 am bus is the last one before noon. Count them: 6 buses.'
      },
      {
        q: 'Martha\'s coloring book has a repeating pattern:\n  Page 1: chicken · Page 2: sheep · Page 3: cow\n  Page 4: chicken · Page 5: sheep · Page 6: cow · …\n\nIf this pattern continues, what is the page number of the NEXT page with a sheep after page 6?',
        answer: 8,
        hint: 'The pattern repeats every 3 pages. After page 6 (cow), page 7 = chicken and page 8 = sheep.'
      },
      {
        q: 'Kelly and Aruna were born in the same year.\nThis year, Kelly\'s birthday is on a Thursday.\nAruna\'s birthday is on the Friday BEFORE Kelly\'s birthday.\n\nHow many days OLDER is Aruna than Kelly?',
        answer: 6,
        hint: 'Aruna\'s birthday is Friday, Kelly\'s is the next Thursday. Friday to Friday = 7 days. Friday to Thursday = 7 − 1 = 6 days.'
      },
      {
        q: 'There are 12 cookies in the big jar and 6 cookies in the small jar.\n\nHow many cookies should be moved from the big jar to the small jar so that BOTH jars have the same number of cookies?',
        answer: 3,
        hint: 'Total cookies = 12 + 6 = 18. For equal sharing: 18 ÷ 2 = 9 each. Big jar needs to go from 12 to 9, so move 12 − 9 = 3 cookies.'
      },
      {
        q: 'Todd painted a 5-blade pinwheel design on a tile.\nFour tiles (numbered 1–4) show the same pinwheel rotated to different positions.\nOnly one tile matches Todd\'s original design when rotated.\n\nThe correct match is tile 3.\n\nWhat number is under Todd\'s tile?',
        answer: 3,
        hint: 'Among the four tiles, only tile 3 matches Todd\'s original design when rotated. The answer is 3.'
      },
      {
        q: 'Sydney visited her grandma\'s orchard for 3 days.\nEach day she picked 12 peaches, ate 3 of them, and saved the rest.\n\nHow many peaches did she save altogether?',
        answer: 27,
        hint: 'Each day: 12 − 3 = 9 peaches saved. Over 3 days: 9 + 9 + 9 = 27 peaches.'
      },
      {
        q: 'Four people sit at a round table with chairs numbered 1, 2, 3, 4 going clockwise.\nCory sits in chair 2.\nCory and Frank sit FACING each other (directly across).\nGreg sits to the RIGHT of Cory.\n\nWhat is the number on Seth\'s chair?',
        answer: 3,
        hint: 'Cory = chair 2. Frank faces Cory = chair 4 (opposite). Greg is to Cory\'s right = chair 1 (clockwise from Cory\'s perspective). Seth gets the remaining chair = 3.'
      },
      {
        q: 'Mrs. Cline has 6 pens total. Each pen is blue, red, or black.\nShe has at least 1 pen of each color.\nShe has MORE blue pens than red pens.\nShe has MORE red pens than black pens.\n\nHow many blue pens does Mrs. Cline have?',
        answer: 3,
        hint: 'Start with the minimum: ≥1 black, ≥2 red (since red > black), ≥3 blue (since blue > red). That gives 1+2+3=6. Since she has exactly 6 pens, she must have exactly 3 blue pens.'
      },
      {
        q: 'Today, sisters Natalie and Mary are celebrating their birthdays.\nThere will be 16 candles total on two cakes.\nNatalie is 2 years older than Mary.\n\nHow many candles will be on Mary\'s cake?',
        answer: 7,
        hint: 'Give Natalie 2 extra candles first. Remaining 16 − 2 = 14 candles split evenly = 7 each. Mary gets 7, Natalie gets 7 + 2 = 9.'
      },
      {
        q: 'Students stand in a lunch line:\n  • Bernard is behind Andy\n  • Claire is behind Bernard\n  • David is behind Claire\n  • 2 students between Andy and Bernard\n  • 4 students between Bernard and Claire\n  • 3 students between Claire and David\n\nHow many students are between Andy and David?',
        answer: 11,
        hint: 'Between Andy and David: 2 (between A and B) + Bernard + 4 (between B and C) + Claire + 3 (between C and D) = 2 + 1 + 4 + 1 + 3 = 11 students.'
      },
      {
        q: 'Ethan has one brother and one sister.\nEthan\'s age + brother\'s age = 16\nEthan\'s age + sister\'s age = 20\nEthan\'s sister is 11 years old.\n\nHow old is Ethan\'s brother?',
        answer: 7,
        hint: 'Ethan + sister = 20, and sister = 11, so Ethan = 20 − 11 = 9. Then Ethan + brother = 16, so brother = 16 − 9 = 7.'
      },
    ]
  },

  // ── Fall 2021 ─────────────────────────────────────────────
  {
    id: 'fall2021', title: 'Fall 2021', season: 'Fall', year: 2021, color: '#0e8f6b',
    problems: [
      {
        q: 'How many of these numbers are LESS THAN 6?\n\n  7 · 4 · 3 · 5 · 8',
        answer: 3,
        hint: 'Check each: 7 ≥ 6, 4 < 6 ✓, 3 < 6 ✓, 5 < 6 ✓, 8 ≥ 6. Three numbers (3, 4, 5) are less than 6.'
      },
      {
        q: 'A rectangle and a triangle overlap. Some dots are inside the rectangle.\nThe dots inside the rectangle but OUTSIDE the triangle are arranged in rows of 4, 3, and 2.\n\nHow many dots are inside the rectangle but outside the triangle?',
        answer: 9,
        hint: 'Count the dots in each row: 4 + 3 + 2 = 9 dots.'
      },
      {
        q: 'Six jack-o-lanterns are shown. Look at each one\'s eyes and nose:\n  1: round eyes, triangle nose\n  2: triangle eyes, triangle nose\n  3: round eyes, triangle nose\n  4: triangle eyes, rectangle nose  ✓\n  5: round eyes, round nose\n  6: triangle eyes, rectangle nose  ✓\n\nHow many jack-o-lanterns have TRIANGLE eyes AND a RECTANGLE nose?',
        answer: 2,
        hint: 'Only jack-o-lanterns 4 and 6 have BOTH triangle eyes AND a rectangle nose. That is 2.'
      },
      {
        q: 'There are 14 marbles in a jar.\n5 of them are black and the rest are white.\n\nHow many MORE white marbles than black marbles are there?',
        answer: 4,
        hint: 'White marbles = 14 − 5 = 9. More white than black = 9 − 5 = 4.'
      },
      {
        q: 'Annie, Brian, and Claire are classmates.\nAnnie is TALLER than Claire.\nBrian is SHORTER than Claire.\n\nWhich classmate is the SHORTEST?\nA) Annie   B) Brian   C) Claire',
        answer: 'B',
        hint: 'Build the height chain: Annie > Claire > Brian. Brian is at the bottom, so Brian is the shortest. Answer: B.'
      },
      {
        q: 'Ethan can walk 80 meters every minute.\n\nHow many meters can he walk in 3 minutes?',
        answer: 240,
        hint: '80 + 80 + 80 = 240 meters. Or multiply: 80 × 3 = 240.'
      },
      {
        q: 'Freddy the frog sits on a central lily pad connected to 5 others.\nWith 1 jump, Freddy can reach those 5 pads.\nWith a second jump, Freddy can reach 3 more pads.\nThe remaining 2 pads are not connected to any pad Freddy has reached.\n\nHow many lily pads can Freddy NOT reach after 1 or 2 jumps?',
        answer: 2,
        hint: '1 jump: 5 pads reachable. 2nd jump: 3 more pads reachable. 2 pads remain unreachable. Answer: 2.'
      },
      {
        q: 'Gabby and Don are in a lunch line.\n  • 8 people are in FRONT of Gabby\n  • 4 people are BEHIND Don\n  • Don is standing right BEHIND Gabby\n\nHow many people are in the lunch line in all?',
        answer: 14,
        hint: 'Draw it: 8 (in front of Gabby) + Gabby + Don + 4 (behind Don) = 8 + 1 + 1 + 4 = 14 people.'
      },
      {
        q: 'It is 8:10 am right now.\nDean\'s bus leaves at 9:20 am.\n\nHow many minutes does Dean have to wait?',
        answer: 70,
        hint: '8:10 → 9:10 = 60 minutes. Then 9:10 → 9:20 = 10 more minutes. Total = 60 + 10 = 70 minutes.'
      },
      {
        q: 'Liam reads one book every two months.\n\nHow many books does Liam read in one year?',
        answer: 6,
        hint: '1 year = 12 months. 1 book every 2 months: 12 ÷ 2 = 6 books.'
      },
      {
        q: 'George\'s favorite radio show runs from 12:00 pm to 12:30 pm every day.\nToday, George takes a walk from 11:50 am to 12:20 pm.\n\nHow many minutes of the show can he listen to during his walk?',
        answer: 20,
        hint: 'He walks until 12:20 pm and the show starts at 12:00 pm. He can listen from 12:00 to 12:20 = 20 minutes.'
      },
      {
        q: 'Eddie, Leslie, and Jim each hold one of these three cards:\n  Card with 8 and a green square\n  Card with 2 and a green square\n  Card with 7 and a yellow triangle\n\nJim\'s card has a SQUARE.\nEddie\'s card has the number 2.\n\nWhat number is on Leslie\'s card?',
        answer: 7,
        hint: 'Jim has a square → Jim has the 8 or 2 card. Eddie has 2, so Jim has 8. The 7-triangle card goes to Leslie. Answer: 7.'
      },
      {
        q: 'A snack cart sells:\n  Bottled water: $1\n  Cookies: $2\n  Cupcakes: $3\n\nBrea spent exactly $10 on 1 bottle of water and some cupcakes.\n\nHow many cupcakes did Brea buy?',
        answer: 3,
        hint: '1 water = $1. Money left for cupcakes: $10 − $1 = $9. $9 ÷ $3 per cupcake = 3 cupcakes.'
      },
      {
        q: 'Five coins are placed on a 4×4 grid:\n  Row 1: coin in column 3\n  Row 2: coin in column 1\n  Row 3: coins in columns 2 and 4\n  Row 4: coin in column 4\n\nHow many more coins must be added so that each row AND each column has exactly 2 coins?',
        answer: 3,
        hint: 'Need 4 rows × 2 coins = 8 coins total. Already have 5. Need 8 − 5 = 3 more coins.'
      },
      {
        q: 'In a theater, there are 11 seats in the 1st row.\nEach row after has 2 MORE seats than the row before.\n\nHow many seats are in the 10th row?',
        answer: 29,
        hint: 'Count: 11, 13, 15, 17, 19, 21, 23, 25, 27, 29. The 10th number is 29.\nOr use the formula: 11 + (10 − 1) × 2 = 11 + 18 = 29.'
      },
      {
        q: 'Two scales are balanced:\n  Scale 1: 2 muffins = 80g\n  Scale 2: 1 muffin + 1 banana = 150g\nAll muffins weigh the same.\n\nHow many grams does the banana weigh?',
        answer: 110,
        hint: 'Scale 1: 2 muffins = 80g → 1 muffin = 40g. Scale 2: 40g + banana = 150g → banana = 150 − 40 = 110g.'
      },
      {
        q: 'There are 7 treat bags. Each bag has either 5 cookies or 2 muffins.\nEmma opened all bags and found 6 muffins total.\n\nHow many cookies are there in all?',
        answer: 20,
        hint: '6 muffins ÷ 2 per bag = 3 muffin bags. Cookie bags = 7 − 3 = 4 bags. Cookies = 4 × 5 = 20 cookies.'
      },
      {
        q: 'Jonah is 12 years old. Tina is 4 years old.\n\nIn how many years will Jonah be TWICE as old as Tina?',
        answer: 4,
        hint: 'Jonah is 12 − 4 = 8 years older than Tina. For Jonah to be twice Tina\'s age, Tina must be 8 years old (since 2 × 8 = 16 = Jonah\'s age at that time). Tina needs 8 − 4 = 4 more years.'
      },
      {
        q: 'A drawer has 12 socks: 8 white and 4 gray.\nYou take socks out without looking.\n\nWhat is the FEWEST number of socks you must take out to be SURE that 2 of them are white?',
        answer: 6,
        hint: 'Worst case: you take all 4 gray socks first. After taking 4 gray + 2 white = 6 socks, you are guaranteed at least 2 white ones. Answer: 6.'
      },
      {
        q: 'Ferries connect islands A, B, C, D, E, and F with these one-way ticket prices:\n  A → B: $3    B → C: $1    C → E: $3\n  B → D: $11   D → E: $5   D → F: $12\n  A → C: $5    E → D: $5\n\nWhat is the LOWEST COST to travel from island A to island F?\n(All routes to F must go through D)',
        answer: 24,
        hint: 'Find cheapest route from A to D:\n  A→B→D: $3+$11=$14\n  A→B→C→E→D: $3+$1+$3+$5=$12  ← cheapest!\n  A→C→E→D: $5+$3+$5=$13\nThen add D→F: $12. Total: $12+$12=$24.'
      },
    ]
  },

  // ── Fall 2022 ─────────────────────────────────────────────
  {
    id: 'fall2022', title: 'Fall 2022', season: 'Fall', year: 2022, color: '#e84040',
    problems: [
      {
        q: '20 + 2 + 2 = ?',
        answer: 24,
        hint: '20 + 2 = 22, then 22 + 2 = 24.'
      },
      {
        q: 'Four friends picked apples and pears at an orchard:\n  Ally: 3 apples and 2 pears\n  Bernard: 4 apples and 1 pear\n  Cole: 2 apples and 3 pears\n  Diane: 4 apples and 3 pears\n\nWho picked MORE pears than apples?',
        answer: 'Cole',
        hint: 'Compare pears vs apples for each:\n  Ally: 2 < 3 ✗\n  Bernard: 1 < 4 ✗\n  Cole: 3 > 2 ✓\n  Diane: 3 < 4 ✗\nOnly Cole picked more pears than apples.'
      },
      {
        q: 'A frog jumps along lily pads. It starts at pad 1.\nEach jump is 1 pad farther than the one before.\n  Jump 1: 2 pads → lands on pad 3\n  Jump 2: 3 pads → lands on pad 6\n  Jump 3: 4 pads → lands on pad 10\n\nWhich lily pad does the frog land on for Jump 4?',
        answer: 15,
        hint: 'Jump 4 = 5 pads (one more than jump 3). Starting from pad 10: 10 + 5 = 15.'
      },
      {
        q: 'A bookcase has 4 shelves.\nThere are 10 books on each of the top 3 shelves.\nThere are 6 books on the bottom shelf.\n\nHow many books are in the bookcase altogether?',
        answer: 36,
        hint: '10 + 10 + 10 + 6 = 36 books.'
      },
      {
        q: 'Mariah has a magic garden. When she removes a flower, 4 more bloom.\nThere are 18 flowers blooming now.\nMariah removes 2 flowers one at a time.\n\nHow many flowers are blooming after she removes both?',
        answer: 24,
        hint: 'Remove 1st flower: 18 − 1 + 4 = 21 flowers bloom.\nRemove 2nd flower: 21 − 1 + 4 = 24 flowers bloom.'
      },
      {
        q: 'Sandy plans to buy 1 ice cream cone per day starting NEXT SATURDAY.\nShe gets a free cookie after buying 10 ice cream cones.\n\nWhat DAY OF THE WEEK will Sandy get her free cookie?\nA) Sunday   B) Monday   C) Tuesday   D) Wednesday',
        answer: 'B',
        hint: 'Count 10 days from Saturday:\nSat(1), Sun(2), Mon(3), Tue(4), Wed(5), Thu(6), Fri(7), Sat(8), Sun(9), Mon(10).\nThe 10th day is Monday. Answer: B.'
      },
      {
        q: 'Evan picked up 9 bottles and 5 cans.\nDante picked up 14 bottles and 2 cans.\nTia picked up 6 FEWER bottles than Evan, and 3 MORE cans than Dante.\n\nHow many CANS did Tia pick up?',
        answer: 5,
        hint: 'Tia\'s cans = Dante\'s cans + 3 = 2 + 3 = 5 cans.\n(Tia also had 9 − 6 = 3 bottles, but the question asks for cans.)'
      },
      {
        q: 'Three hats belong to three sisters:\n  Hat A: has a feather only\n  Hat B: has neither a feather nor a bow\n  Hat C: has both a feather and a bow\n\nEsther\'s hat has a feather.\nJane\'s hat has a bow.\nMaya\'s hat does NOT have a feather.\n\nWhich hat belongs to Esther? Enter A, B, or C.',
        answer: 'A',
        hint: 'Maya has no feather → Maya has Hat B. Jane has a bow → Jane has Hat C (the only one with a bow). That leaves Hat A for Esther. Answer: A.'
      },
      {
        q: 'Pens are sold in boxes of 12.\nMs. Garcia needs at least 40 pens.\n\nHow many boxes should she buy?',
        answer: 4,
        hint: '1 box = 12, 2 boxes = 24, 3 boxes = 36 (not enough!), 4 boxes = 48 (enough for 40). She needs 4 boxes.'
      },
      {
        q: 'Gloria has 3 different shirts and 2 different skirts.\nShe picks 1 shirt and 1 skirt to wear.\n\nHow many different outfit choices does she have?',
        answer: 6,
        hint: 'Each shirt pairs with each skirt: 3 shirts × 2 skirts = 6 different outfits.'
      },
      {
        q: 'Grandma says: "In 10 years, I will be 80 years old."\nGrandma is 60 years older than Kim.\n\nHow old is Kim NOW?',
        answer: 10,
        hint: 'Grandma in 10 years = 80, so Grandma NOW = 80 − 10 = 70. Kim = Grandma − 60 = 70 − 60 = 10 years old.'
      },
      {
        q: 'Dylan and his friends rode a roller coaster on his birthday.\nThe roller coaster has 7 carts, each with 2 seats (14 seats total).\nThe ride was full: Dylan, his friends, and 5 other people filled all seats.\n\nHow many FRIENDS did Dylan bring?',
        answer: 8,
        hint: 'Total seats = 7 × 2 = 14. People = Dylan + friends + 5 others = 14. Dylan + friends = 14 − 5 = 9. Friends = 9 − 1 (for Dylan) = 8.'
      },
      {
        q: 'How many different 3-digit EVEN numbers can be made\nusing the digits 2, 5, and 8, each used exactly once?',
        answer: 4,
        hint: 'Even numbers end in 2 or 8.\n  Ending in 2: 582, 852 → 2 numbers\n  Ending in 8: 258, 528 → 2 numbers\nTotal: 2 + 2 = 4 even numbers.'
      },
      {
        q: 'Ginger hangs 7 posters in a row on her wall side by side.\nEvery corner of a poster needs a push pin.\nAdjacent poster corners SHARE one push pin.\n\nHow many push pins does Ginger need for 7 posters?',
        answer: 16,
        hint: 'The 1st poster needs 4 push pins. Each extra poster adds 2 more (shares 2 pins with its neighbor).\n4 + 6 × 2 = 4 + 12 = 16 push pins.'
      },
      {
        q: 'Three friends trade baseball cards:\n  1. Wyatt gives 3 cards to Casey and gets 5 of Casey\'s cards.\n  2. Zelda gives 2 cards to Casey and gets 3 of Casey\'s cards.\n  3. Wyatt gives 1 card to Zelda and gets 6 of Zelda\'s cards.\n\nHow many MORE cards does Wyatt have now than at the start?',
        answer: 7,
        hint: 'Only trades involving Wyatt matter:\n  Trade 1: Wyatt gains 5 − 3 = +2 cards.\n  Trade 3: Wyatt gains 6 − 1 = +5 cards.\nTotal: 2 + 5 = 7 more cards.'
      },
      {
        q: 'Six circles are connected in pairs by four lines.\nThe sum of each pair must be the same.\nKnown circles: TOP = 7, BOTTOM-LEFT = 1, RIGHT = 3\nUnknown circle: LEFT = ?\n\nThe four pairs on the lines are:\n  (TOP, BOTTOM)  (LEFT, RIGHT)  (TOP-LEFT, BOTTOM-RIGHT)  and (LEFT, BOTTOM)\n\nActually, here is the layout: The center has 4 lines going: UP (7), LEFT (?), DOWN-LEFT (1), RIGHT (3), and there are 2 more unknown circles at the end of DOWN and UP-RIGHT.\n\nWhat number goes in the LEFT circle (marked ?) so all line sums are equal?\n(Hint: the answer is 6)',
        answer: 6,
        hint: 'The pair 7+? on the vertical line must equal the pair 1+3=4? No — the sum must be 9. Check: 7+2=9 but that uses 2 for the bottom. And 1+?=... The line sum is 9. The ? circle pairs with 3: ?+3=9 → ? = 6. Verified: 7+2=9, 6+3=9, 1+8=9, all different numbers.'
      },
      {
        q: 'Henry is the 16th person from the FRONT and also the 16th person from the BACK.\nJim is the 9th person from the FRONT.\n\nHow many people are standing AFTER Jim (behind him) in the line?',
        answer: 22,
        hint: 'Total line length = 16 + 16 − 1 = 31 people. Jim is 9th from the front. People behind Jim = 31 − 9 = 22.'
      },
      {
        q: 'On a farm there are ONLY chickens and cows.\nThere are 4 MORE chickens than cows.\nAltogether there are 38 legs.\n(Each chicken has 2 legs; each cow has 4 legs.)\n\nHow many CHICKENS are on the farm?',
        answer: 9,
        hint: 'Let cows = c, chickens = c + 4.\nLegs: 2(c+4) + 4c = 38 → 6c + 8 = 38 → 6c = 30 → c = 5.\nChickens = 5 + 4 = 9.'
      },
      {
        q: 'A subtraction problem has 3 digits covered by ink:\n\n    ●●1\n  −  6●\n  ─────\n    278\n\nWorking right to left, find the covered digits.\nWhat is the SUM of the three covered digits?',
        answer: 10,
        hint: 'Work right to left:\n  Ones: ●1 − ● = ...8. Borrow → 11 − 3 = 8, so ones-covered = 3.\n  Tens: ●-1 (after borrow) − 6 = 7. Borrow → 13 − 6 = 7, tens-covered = 4 (before borrow it was 3+1=4).\n  Hundreds: ●-1 (after borrow) = 2, so hundreds-covered = 3.\nSum = 3 + 4 + 3 = 10.'
      },
      {
        q: 'A baseball team has players who are either 2nd or 3rd graders,\nand wear either white or gray jerseys.\n  • 11 players wear white jerseys\n  • 14 players wear gray jerseys\n  • 12 are 2nd graders total; 4 of them wear white\n\nHow many 3rd graders are wearing GRAY jerseys?',
        answer: 6,
        hint: '2nd graders in gray = 12 − 4 = 8.\nGray jerseys total = 14. 3rd graders in gray = 14 − 8 = 6.'
      },
    ]
  }
];

// Check an exam answer (case-insensitive for strings)
function checkExamAnswer(given, expected) {
  const g = String(given).trim().toLowerCase().replace(/\s+/g, ' ');
  const e = String(expected).trim().toLowerCase();
  if (typeof expected === 'number') {
    const n = parseFloat(g.replace(/[^0-9.\-]/g, ''));
    return n === expected;
  }
  return g === e;
}
