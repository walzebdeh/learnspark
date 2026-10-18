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
        type: 'input', answer: 4,
        hint: 'Start with the 2nd equation — it has only 🍐! Two 🍐s = 28, so 🍐 = 14. Now put 14 into the first equation: 🍎 + 🍎 + 14 = 22. What is 🍎?'
      },
      {
        q: 'Each shape equals a number.\n\n⬛ + ⬛ + ⬜ = 20\n⬛ + ⬜ + ⬜ = 22\n\nWhat does ⬛ equal?',
        type: 'input', answer: 6,
        hint: 'Going from equation 1 to equation 2, one ⬛ swaps for one ⬜ and the total rises by 2. So ⬜ is 2 MORE than ⬛. Write ⬜ = ⬛ + 2, then plug that into the first equation.'
      },
      {
        q: 'Each fruit equals a number.\n\n🍓 + 🍇 = 15\n🍓 + 🍓 + 🍇 = 23\n\nWhat does 🍇 equal?',
        type: 'input', answer: 7,
        hint: 'The second equation has one extra 🍓 compared to the first. The total rose by 8 (23 − 15). So 🍓 = 8. Now use 🍓 + 🍇 = 15 to find 🍇.'
      },
      {
        q: 'Each symbol equals a number.\n\n⭐ + ⭐ + ⭐ = 18\n⭐ + 🌙 = 14\n\nWhat does 🌙 equal?',
        type: 'input', answer: 8,
        hint: 'The first equation has only ⭐! Three ⭐ = 18, so ⭐ = 6. Now plug ⭐ = 6 into the second equation: 6 + 🌙 = 14.'
      },
      {
        q: 'Each animal equals a number.\n\n🐱 + 🐱 + 🐶 = 19\n🐶 + 🐶 + 🐱 = 17\n\nWhat does 🐱 equal?',
        type: 'input', answer: 7,
        hint: 'Going from equation 1 to equation 2, one 🐱 swaps for one 🐶 and the total drops by 2. So 🐶 is 2 LESS than 🐱. Write 🐶 = 🐱 − 2, then plug that into the first equation.'
      },
      {
        q: 'Each fruit equals a number.\n\n🍊 + 🍋 + 🍋 = 26\n🍊 + 🍊 + 🍋 = 28\n\nWhat does 🍊 equal?',
        type: 'input', answer: 10,
        hint: 'Going from equation 1 to equation 2, one 🍋 swaps for one 🍊 and the total rises by 2. So 🍊 is 2 MORE than 🍋. Write 🍊 = 🍋 + 2, then plug into the first equation.'
      },
      {
        q: 'Each shape equals a number.\n\n🔴 + 🔴 = 14\n🔵 + 🔵 + 🔵 = 18\n\nWhat is 🔴 + 🔵?',
        type: 'input', answer: 13,
        hint: 'Each equation has just ONE symbol — solve them separately! 🔴 + 🔴 = 14 gives 🔴 = 7. 🔵 + 🔵 + 🔵 = 18 gives 🔵 = 6. Now add 🔴 + 🔵.'
      },
      {
        q: 'Each letter equals a number.\n\nA + A + B = 25\nA + B + B = 23\n\nWhat does A equal?',
        type: 'input', answer: 9,
        hint: 'Going from equation 1 to equation 2, one A swaps for one B and the total drops by 2. So B is 2 LESS than A. Write B = A − 2, then plug into the first equation to find A.'
      },
      {
        q: 'Each fruit equals a number.\n\n🍌 + 🍌 + 🍌 = 21\n🍌 + 🍒 = 15\n\nWhat does 🍒 equal?',
        type: 'input', answer: 8,
        hint: 'The first equation has only 🍌! Three 🍌 = 21, so 🍌 = 7. Now plug 7 into the second equation: 7 + 🍒 = 15.'
      },
      {
        q: 'Each animal equals a number.\n\n🐘 + 🐭 = 17\n🐘 + 🐘 + 🐭 = 29\n\nWhat does 🐭 equal?',
        type: 'input', answer: 5,
        hint: 'The second equation has one extra 🐘 compared to the first. The totals are 29 and 17 — the difference is 12. So 🐘 = 12. Now use the first equation to find 🐭.'
      },
      {
        q: 'Each shape equals a number.\n\n△ + △ + □ = 19\n△ + □ + □ = 17\n\nWhat does △ + □ equal?',
        type: 'input', answer: 12,
        hint: 'You don\'t need to find each one separately! Add BOTH equations together: you get 3△ + 3□ = 36. Divide both sides by 3 to find △ + □ directly.'
      },
      {
        q: 'Each fruit equals a number.\n\n🍑 + 🍑 = 22\n🍑 + 🫐 + 🫐 = 21\n\nWhat does 🫐 equal?',
        type: 'input', answer: 5,
        hint: 'The first equation has only 🍑! Two 🍑 = 22, so 🍑 = 11. Now plug 11 into the second equation: 11 + 🫐 + 🫐 = 21. What do two 🫐 equal?'
      },
      {
        q: 'Each shape equals a number.\n\n🟡 + 🟡 + 🟡 + 🟢 = 25\n🟡 + 🟢 = 11\n\nWhat does 🟡 equal?',
        type: 'input', answer: 7,
        hint: 'From the second equation: 🟢 = 11 − 🟡. Plug that into the first equation: 🟡 + 🟡 + 🟡 + (11 − 🟡) = 25. Simplify the left side and solve.'
      },
      {
        q: 'Each number is replaced by a symbol.\n\n❤️ + ❤️ + 💛 = 27\n❤️ + 💛 + 💛 = 24\n\nWhat does 💛 equal?',
        type: 'input', answer: 7,
        hint: 'Going from equation 1 to equation 2, one ❤️ swaps for one 💛 and the total drops by 3. So 💛 is 3 LESS than ❤️. Write 💛 = ❤️ − 3, then plug into the first equation.'
      },
      {
        q: 'Each fruit equals a number.\n\n🍍 + 🥝 = 20\n🍍 + 🍍 + 🥝 = 32\n\nWhat does 🥝 equal?',
        type: 'input', answer: 8,
        hint: 'The second equation has one extra 🍍 compared to the first. The totals are 32 and 20 — the difference is 12. So 🍍 = 12. Now use the first equation to find 🥝.'
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
        type: 'input', answer: 18,
        hint: 'Ana\'s number is ODD — so Ana gets 5 or 11 (not 18). The LARGEST (18) can\'t go to Beth either. If Ana takes 5 or 11, and Beth can\'t have 18 — who is the only one left to get 18?'
      },
      {
        q: 'Mrs. Park has 5 children: Mark, Joe, Ken, Dan, and Peter.\nMark is older than Dan but younger than Ken.\nJoe is Mark\'s youngest older brother.\nPeter is Dan\'s youngest older brother.\n\nHow many younger siblings does Joe have?',
        type: 'input', answer: 3,
        hint: 'Build the age chain step by step. "Joe is Mark\'s youngest older brother" → Mark comes just before Joe. "Peter is Dan\'s youngest older brother" → Dan comes just before Peter. Fit everyone into one line: youngest → oldest. Then count who is younger than Joe.'
      },
      {
        q: 'Three friends scored different points in a game:\n8 · 13 · 20\n\nSam scored an EVEN number.\nThe HIGHEST score does not belong to Lily.\n\nWhat score did Jake get?',
        type: 'input', answer: 20,
        hint: 'Sam scored EVEN — try Sam = 8. That leaves 13 and 20 for Lily and Jake. The HIGHEST (20) can\'t go to Lily, so Lily = 13 and Jake = 20. (Check: does Sam = 20 also lead to a unique answer?)'
      },
      {
        q: 'Ali, Bev, and Cole each have a hat in a different color:\nred, blue, or green.\n\nAli\'s hat is NOT red.\nAli\'s hat is NOT green.\nBev\'s hat is NOT blue or green.\n\nWhat color is Cole\'s hat?',
        type: 'input', answer: 'green',
        hint: 'Cross off colors one by one. Ali ≠ red and Ali ≠ green — only one color is left for Ali. Once Ali\'s color is set, cross it off. Bev ≠ blue and ≠ green — what\'s the only color left for Bev? Cole gets whatever remains.'
      },
      {
        q: 'Kevin is 2 years YOUNGER than Anna.\nLisa is 1 year YOUNGER than Kevin.\nLisa is 6 years old.\n\nHow old is Anna?',
        type: 'input', answer: 9, unit: 'years old',
        hint: 'Work step by step from Lisa. Lisa = 6. Kevin is 1 year OLDER than Lisa (since Lisa is younger than Kevin). Anna is 2 years OLDER than Kevin. Add it up!'
      },
      {
        q: 'Tom, Jake, and Sam ran a race.\nTom finished BEFORE Jake.\nSam finished AFTER Jake.\n\nWhat PLACE did Sam finish?',
        type: 'input', answer: 3, unit: 'rd place',
        hint: 'Turn the clues into a finish-line order. Tom before Jake → Tom then Jake. Sam after Jake → Jake then Sam. Write out all three in order from 1st to last: Tom → Jake → Sam. What place is Sam?'
      },
      {
        q: 'Four students: Amy, Ben, Carl, Dee.\n\nAmy scored higher than Ben.\nCarl scored higher than Amy.\nDee scored lower than Ben.\n\nWho scored the HIGHEST?',
        type: 'input', answer: 'Carl',
        hint: 'Build a chain using the > and < clues. Carl > Amy > Ben > Dee. Who sits at the very top of that chain?'
      },
      {
        q: 'Coach Lee has jerseys  7 · 14 · 25  for Mia, Noah, and Pia.\n\nMia\'s number is a multiple of 7.\nNoah\'s number is the smallest.\n\nWhat is Pia\'s jersey number?',
        type: 'input', answer: 25,
        hint: 'Noah has the SMALLEST number — that\'s 7. Mia\'s number is a multiple of 7, but 7 is already taken by Noah. What other multiple of 7 is in the list? That leaves Pia with the last number.'
      },
      {
        q: 'Three animals weigh different amounts:\n12 lbs · 18 lbs · 30 lbs\n\nThe cat weighs LESS than the dog.\nThe cat weighs LESS than the rabbit.\nThe rabbit does NOT weigh 30 lbs.\nThe dog does NOT weigh 12 lbs.\n\nHow much does the cat weigh?',
        type: 'input', answer: 12, unit: 'lbs',
        hint: 'Start with the dog: Dog ≠ 12, so Dog = 18 or 30. Test Dog = 18: Cat < 18 → Cat = 12, Rabbit = 30. But Rabbit ≠ 30 — contradiction! So Dog = 30. Remaining: 12 and 18 for Cat and Rabbit. Cat < Rabbit tells you which is which.'
      },
      {
        q: 'Lisa is 3 years OLDER than her brother.\nIn 2 years, Lisa will be 10 years old.\n\nHow old is her brother RIGHT NOW?',
        type: 'input', answer: 5, unit: 'years old',
        hint: 'In 2 years Lisa = 10, so Lisa is ___ NOW (subtract 2). Her brother is 3 years YOUNGER than Lisa — subtract 3 more.'
      },
      {
        q: 'Five children each like a different color:\nred, blue, green, yellow, purple.\n\nAnn likes red. Bob doesn\'t like green or purple.\nCara likes blue. Dan doesn\'t like purple.\n\nWhat color does Ed like?',
        type: 'input', answer: 'purple',
        hint: 'Ann = red and Cara = blue are given. That leaves green, yellow, purple for Bob, Dan, Ed. Bob ≠ green and ≠ purple → Bob must take yellow. Dan ≠ purple → Dan must take green. What is left for Ed?'
      },
      {
        q: 'Boxes weigh  3 lbs · 9 lbs · 15 lbs\nfor boxes A, B, and C.\n\nBox B is the heaviest.\nBox A\'s weight is ODD.\nBox A weighs less than Box C.\n\nHow much does Box C weigh?',
        type: 'input', answer: 9, unit: 'lbs',
        hint: 'Box B is the HEAVIEST → Box B = 15. That leaves 3 and 9 for A and C. Box A is ODD — both 3 and 9 are odd, so use the next clue: Box A < Box C. Which choice makes A smaller than C?'
      },
      {
        q: 'Maria is 6 years old.\nHer dad is 5 times Maria\'s age.\n\nIn how many years will dad be\n4 times Maria\'s age?',
        type: 'input', answer: 2, unit: 'years',
        hint: 'Maria = 6 now, Dad = 30 now. In x years: Maria = 6+x and Dad = 30+x. Set Dad = 4 × Maria: 30+x = 4×(6+x). Solve for x.'
      },
      {
        q: 'In a relay race, 4 runners finished in order.\nKim finished right after Pat.\nJen finished right before Pat.\nAlex finished last.\n\nWhat place did Kim finish?',
        type: 'input', answer: 3, unit: 'rd place',
        hint: 'Build the order from the clues: "Jen right before Pat" → Jen then Pat. "Kim right after Pat" → Pat then Kim. "Alex last." Line all four up: Jen → Pat → Kim → Alex. What place is Kim?'
      },
      {
        q: 'Cards are numbered 1 through 10.\nI pick a card that is:\n• greater than 6\n• even\n• NOT 10\n\nWhat number is on my card?',
        type: 'input', answer: 8,
        hint: 'Filter step by step. Greater than 6 → possible cards: 7, 8, 9, 10. Now keep only the EVEN ones. Finally, remove 10. What\'s left?'
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
        q: 'There are 14 people in a library checkout line.\nRachael is 6th from the front.\nSam is standing right IN FRONT of Rachael.\n\nHow many people are behind Sam?',
        type: 'input', answer: 9, unit: 'people',
        hint: 'Sam is right in front of Rachael, so Sam is 5th from the front. In a line of 14, the people BEHIND Sam = 14 − Sam\'s position. What is 14 − 5?'
      },
      {
        q: 'There are 15 students in a lunch line.\nMaria is 6th from the front.\nBen is right BEHIND Maria.\n\nHow many more students are behind Ben\nthan in front of him?',
        type: 'input', answer: 2,
        hint: 'Ben is right behind Maria, so Ben is 7th. Students in front of Ben = 6. Students behind Ben = 15 − 7 = 8. How many MORE are behind Ben than in front?'
      },
      {
        q: 'There are 20 people in a grocery store line.\nKate is 8th from the FRONT.\n\nHow many people are behind Kate?',
        type: 'input', answer: 12, unit: 'people',
        hint: 'Kate is 8th from the front in a line of 20. People behind Kate = total − Kate\'s position = 20 − 8 = ?'
      },
      {
        q: 'Tom is in a ticket line.\nHe is 5th from the front.\nHe is 7th from the back.\n\nHow many people are in the line in total?',
        type: 'input', answer: 11, unit: 'people',
        hint: 'If Tom is 5th from the front, there are 4 people in front. If Tom is 7th from the back, there are 6 people behind. Total = people in front + Tom + people behind = 4 + 1 + 6.'
      },
      {
        q: 'In a line of 18 children,\nAlex is in the MIDDLE (9th from each end).\nZoe is 4 spots ahead of Alex.\n\nWhat position is Zoe from the front?',
        type: 'input', answer: 5, unit: 'th from front',
        hint: 'Alex is 9th from the front. Zoe is 4 spots AHEAD of Alex, meaning Zoe is closer to the front. Zoe\'s position = Alex\'s position − 4 = 9 − 4 = ?'
      },
      {
        q: 'There are 25 students in a line.\nElla is 10th from the front.\nMax is 3 spots BEHIND Ella.\n\nWhat position is Max from the BACK?',
        type: 'input', answer: 13, unit: 'th from back',
        hint: 'Max is 3 spots behind Ella, so Max is at position 10 + 3 = 13th from the front. In a line of 25, position from the BACK = 25 − Max\'s front position + 1. What is 25 − 13 + 1?'
      },
      {
        q: 'A line has an odd number of people.\nThe person in the MIDDLE is 7th from both front and back.\n\nHow many people are in the line?',
        type: 'input', answer: 13, unit: 'people',
        hint: 'If the middle person is 7th from the front, there are 6 in front and 6 behind. Total = 6 + 1 (middle) + 6 = ?'
      },
      {
        q: 'Sam and Tim are both in a line of 16 people.\nSam is 4th from the front.\nTim is 5th from the back.\n\nHow many people are between Sam and Tim?',
        type: 'input', answer: 7, unit: 'people',
        hint: 'Sam is 4th from the front. Tim is 5th from the back → Tim is at position 16 − 5 + 1 = 12th from the front. People BETWEEN them = Tim\'s position − Sam\'s position − 1 = 12 − 4 − 1 = ?'
      },
      {
        q: 'Rosa is in a movie ticket line.\nShe has 9 people in front of her\nand 6 people behind her.\nLeo cuts in right IN FRONT of Rosa.\n\nNow how many people are behind Leo?',
        type: 'input', answer: 7, unit: 'people',
        hint: 'After Leo cuts in, Leo is right in front of Rosa. Who is behind Leo? Rosa herself plus everyone who was behind Rosa. How many is that?'
      },
      {
        q: 'In a line, every 3rd person is wearing a hat.\nThe 1st hat-wearer is 3rd in line.\nThere are 30 people in the line.\n\nHow many people are wearing hats?',
        type: 'input', answer: 10, unit: 'people',
        hint: 'Hat-wearers are at positions 3, 6, 9, 12 … up to 30. These are all the multiples of 3 up to 30. How many multiples of 3 are there from 1 to 30? (Hint: 30 ÷ 3 = ?)'
      },
      {
        q: 'Ben is 6th from the front of a line.\nHe is twice as far from the front as from the back.\n\nHow many people are in the line?',
        type: 'input', answer: 8, unit: 'people',
        hint: 'Ben is 6th from the front (front-distance = 6). "Twice as far from the front as from the back" means front-distance = 2 × back-distance. So back-distance = 6 ÷ 2 = 3. Total = front-distance + back-distance − 1 = 6 + 3 − 1 = ?'
      },
      {
        q: 'A line has 22 people.\nAnna is 9th from the front.\nMark joins the line right BEHIND Anna.\n\nWhat position is Mark from the BACK?',
        type: 'input', answer: 14, unit: 'th from back',
        hint: 'After Mark joins, the line has 23 people. Mark is right behind Anna (9th), so Mark is 10th from the front. Position from the back = 23 − 10 + 1 = ?'
      },
      {
        q: 'There are 30 students in two lines.\nLine A has 6 more students than Line B.\n\nHow many students are in Line B?',
        type: 'input', answer: 12, unit: 'students',
        hint: 'Let Line B = x. Then Line A = x + 6. Together: x + (x + 6) = 30. Solve for x: 2x + 6 = 30 → 2x = 24 → x = ?'
      },
      {
        q: 'Kim is in a line of 14 people.\nShe is 4th from the front.\nJen is exactly halfway between Kim and the back.\n\nWhat position is Jen from the front?',
        type: 'input', answer: 9, unit: 'th from front',
        hint: 'Kim is 4th from the front, so there are 10 people from Kim to the back (positions 4 through 14). Halfway between Kim (position 4) and the back (position 14) = (4 + 14) ÷ 2 = ?'
      },
      {
        q: 'Dan and 4 friends are waiting for the bus.\nDan is 3rd in line.\n\nHow many people are behind Dan?',
        type: 'input', answer: 2, unit: 'people',
        hint: 'Dan + 4 friends = 5 people total. Dan is 3rd, so there are 2 people in front of him. How many people are behind him? Total − Dan\'s position = 5 − 3.'
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
        type: 'input', answer: 13, unit: '$',
        hint: 'Apple = 2 × banana = 2 × $1 = $2. Dominic bought 3 apples + 1 banana = (3 × $2) + $1 = $7. Change = $20 − $7 = ?'
      },
      {
        q: 'A mango costs $2 and a kiwi costs $4.\nRosa bought 2 mangoes and 3 kiwis.\nShe paid with a $20 bill.\n\nHow much change did she receive?',
        type: 'input', answer: 4, unit: '$',
        hint: '2 mangoes = 2 × $2 = $4. 3 kiwis = 3 × $4 = $12. Total spent = $4 + $12 = $16. Change = $20 − $16 = ?'
      },
      {
        q: 'Today is October 15th.\nAlan\'s birthday is November 2nd.\n\nHow many days until Alan\'s birthday?\n(October has 31 days)',
        type: 'input', answer: 18, unit: 'days',
        hint: 'Days left in October = 31 − 15 = 16. Then 2 more days into November. Total = 16 + 2 = ?'
      },
      {
        q: 'A pencil costs 35¢ and an eraser costs 20¢.\nKim wants to buy 2 pencils and 1 eraser.\nShe has 80¢.\n\nHow many more CENTS does Kim need?',
        type: 'input', answer: 10, unit: '¢',
        hint: '2 pencils = 2 × 35¢ = 70¢. 1 eraser = 20¢. Total needed = 70¢ + 20¢ = 90¢. Kim has 80¢. How many MORE cents does she need?'
      },
      {
        q: 'Jack has 3 times as many cards as Tom.\nTogether they have 48 cards.\n\nHow many cards does JACK have?',
        type: 'input', answer: 36, unit: 'cards',
        hint: 'Let Tom = x. Then Jack = 3x. Together: x + 3x = 48 → 4x = 48 → x = 12. Jack has 3 × 12 = ?'
      },
      {
        q: 'A movie starts at 1:45 PM\nand lasts 1 hour 55 minutes.\n\nWhat time does the movie END?',
        type: 'input', answer: '3:40',
        hint: 'Add the time in two steps. 1:45 PM + 1 hour = 2:45 PM. Then add 55 minutes: 2:45 + 55 min. 15 minutes gets you to 3:00, then 40 more minutes → 3:40 PM.'
      },
      {
        q: 'A baker makes 24 cookies every hour.\nShe starts baking at 9:00 AM.\n\nHow many cookies has she made by 11:30 AM?',
        type: 'input', answer: 60, unit: 'cookies',
        hint: 'From 9:00 AM to 11:30 AM = 2.5 hours. She makes 24 cookies per hour. Total = 24 × 2.5 = 24 × 2 + 24 × 0.5 = 48 + 12 = ?'
      },
      {
        q: 'Sam had some stickers.\nHe gave HALF of them to a friend.\nThen he gave 3 more away.\nNow he has 5 stickers left.\n\nHow many stickers did Sam START with?',
        type: 'input', answer: 16, unit: 'stickers',
        hint: 'Work BACKWARDS from the end. He has 5 left. Before giving 3 away: 5 + 3 = 8. These 8 are HALF of his start — so he started with 8 × 2 = ?'
      },
      {
        q: 'January 1 is a Wednesday.\nWhat day of the week is February 1?\n(January has 31 days)',
        type: 'input', answer: 'Saturday',
        hint: 'From January 1 to February 1 = 31 days. Days of the week repeat every 7 days. 31 ÷ 7 = 4 remainder 3. So February 1 is 3 days after Wednesday. Wednesday + 3 days = ?'
      },
      {
        q: 'Anna saves 4 apples on Monday.\nEach day after that, she saves 2 MORE than the day before.\n(Mon: 4, Tue: 6, Wed: 8 …)\n\nHow many apples total does she save\nfrom Monday to Friday?',
        type: 'input', answer: 40, unit: 'apples',
        hint: 'List all five days: Mon = 4, Tue = 6, Wed = 8, Thu = 10, Fri = 12. Now add them all up: 4 + 6 + 8 + 10 + 12 = ?'
      },
      {
        q: 'A train leaves at 8:20 AM\nand arrives at 10:05 AM.\n\nHow long is the journey in MINUTES?',
        type: 'input', answer: 105, unit: 'minutes',
        hint: 'Count in two steps. From 8:20 to 10:00 = 1 hour 40 minutes = 100 minutes. Then from 10:00 to 10:05 = 5 more minutes. Total = ?'
      },
      {
        q: 'A box of 12 chocolates costs $1.80.\n\nHow many CENTS does ONE chocolate cost?',
        type: 'input', answer: 15, unit: '¢',
        hint: '$1.80 = 180 cents. Divide equally among 12 chocolates: 180 ÷ 12 = ?'
      },
      {
        q: 'Lisa saves $1.50 per week.\nAfter 8 weeks, she buys a book for $7.00.\n\nHow many dollars does she have LEFT?',
        type: 'input', answer: 5, unit: '$',
        hint: 'Total saved = $1.50 × 8 = $12. After buying the book: $12 − $7 = ?'
      },
      {
        q: 'A jar has red and blue marbles — 18 total.\nThere are 4 MORE red than blue.\n\nHow many BLUE marbles are there?',
        type: 'input', answer: 7, unit: 'blue marbles',
        hint: 'Let blue = x. Then red = x + 4. Together: x + (x + 4) = 18 → 2x + 4 = 18 → 2x = 14 → x = ?'
      },
      {
        q: 'July 1 is a Monday.\nHow many SATURDAYS are in July?\n(July has 31 days)',
        type: 'input', answer: 4, unit: 'Saturdays',
        hint: 'July 1 = Monday. Count to the first Saturday: Mon+5 = Saturday = July 6. Then Saturdays fall on July 6, 13, 20, 27. Does July 34 exist? No — so count how many you listed.'
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
        type: 'input', answer: 21,
        hint: 'The differences are: +2, +3, +4, +5 … The next difference will be +6. So 15 + 6 = ?'
      },
      {
        q: 'A rectangle has a perimeter of 20 cm\nand a length of 6 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 24, unit: 'cm²',
        hint: 'Perimeter = 2 × (length + width) = 20. So length + width = 10. Length = 6, so width = 10 − 6 = 4. Area = length × width = 6 × 4 = ?'
      },
      {
        q: 'What comes next?\n2, 3, 5, 8, 13, ___\n(Each number = sum of the two before it)',
        type: 'input', answer: 21,
        hint: 'Each number = the two before it added together. The last two numbers are 8 and 13. What is 8 + 13?'
      },
      {
        q: 'A rectangular garden is 8 m long and 5 m wide.\nA 1-meter-wide path goes around the INSIDE.\n\nWhat is the area of JUST the path?',
        type: 'input', answer: 22, unit: 'm²',
        hint: 'The path is 1 m wide inside the border. The inner rectangle (without the path) = (8−2) × (5−2) = 6 × 3 = 18 m². Garden area = 8 × 5 = 40 m². Path area = 40 − 18 = ?'
      },
      {
        q: 'What is the sum of 1 + 2 + 3 + … + 10?',
        type: 'input', answer: 55,
        hint: 'Pair up numbers from each end: (1+10) + (2+9) + (3+8) + (4+7) + (5+6) = 5 pairs each summing to 11. Total = 5 × 11 = ?'
      },
      {
        q: 'A square has a perimeter of 36 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 81, unit: 'cm²',
        hint: 'A square has 4 equal sides. Each side = 36 ÷ 4 = 9 cm. Area = side × side = 9 × 9 = ?'
      },
      {
        q: 'What comes next?\n2, 5, 10, 17, 26, ___\n(Differences: +3, +5, +7, +9, +11 …)',
        type: 'input', answer: 37,
        hint: 'The differences increase by 2 each time: +3, +5, +7, +9, +11. The next difference is +11. So 26 + 11 = ?'
      },
      {
        q: 'How many squares of ALL SIZES\nare in a 3×3 grid of unit squares?\n(Count 1×1, 2×2, AND 3×3 squares)',
        type: 'input', answer: 14,
        hint: 'Count by size: 1×1 squares = 9 (one for each cell). 2×2 squares = 4 (they can start at 4 different corners). 3×3 squares = 1 (just the whole grid). Total = 9 + 4 + 1 = ?'
      },
      {
        q: 'What is the 20th number in this pattern?\n3, 7, 11, 15, 19 …\n(Rule: add 4 each time)',
        type: 'input', answer: 79,
        hint: 'The pattern starts at 3 and adds 4 each time. The nth term = 3 + (n−1) × 4. For n = 20: 3 + 19 × 4 = 3 + 76 = ?'
      },
      {
        q: 'A rectangle has its LENGTH twice its WIDTH.\nIts perimeter is 24 cm.\n\nWhat is its AREA?',
        type: 'input', answer: 32, unit: 'cm²',
        hint: 'Let width = w. Then length = 2w. Perimeter = 2(w + 2w) = 6w = 24, so w = 4. Length = 8. Area = 8 × 4 = ?'
      },
      {
        q: 'What comes next?\n100, 91, 83, 76, 70, ___\n(Differences: −9, −8, −7, −6, −5 …)',
        type: 'input', answer: 65,
        hint: 'The differences decrease by 1 each time: −9, −8, −7, −6, −5. The next difference is −5. So 70 − 5 = ?'
      },
      {
        q: 'Three squares, each with side 4 cm,\nare placed in a row touching each other.\n\nWhat is the perimeter of the WHOLE shape?',
        type: 'input', answer: 32, unit: 'cm',
        hint: 'The whole shape is 12 cm long and 4 cm tall. But the perimeter isn\'t just 2×(12+4)=32 — you need to subtract the hidden shared sides. Top: 12, Bottom: 12, Left side: 4, Right side: 4. Total outer edges = 12 + 12 + 4 + 4 = ?'
      },
      {
        q: 'What is the sum of the FIRST 5 ODD numbers?\n1 + 3 + 5 + 7 + 9 = ?',
        type: 'input', answer: 25,
        hint: 'Add them one by one: 1 + 3 = 4, then + 5 = 9, then + 7 = 16, then + 9 = ? (There\'s also a shortcut: the sum of the first n odd numbers = n², so 5² = 25.)'
      },
      {
        q: 'How many triangles of ALL SIZES\nare in a large triangle that is divided into\n4 equal smaller triangles?',
        type: 'input', answer: 5,
        hint: 'Count by size: small triangles (each unit) = 4. Large triangle (the whole shape) = 1. Are there any medium triangles? Look carefully — are there any triangles made of exactly 2 or 3 small ones? Total = ?'
      },
      {
        q: '5 cats eat 5 mice in 5 minutes.\n\nHow many minutes does it take\n1 cat to eat 1 mouse?',
        type: 'input', answer: 5, unit: 'minutes',
        hint: '5 cats eat 5 mice in 5 minutes — so each cat eats 1 mouse in 5 minutes. It takes 1 cat the same 5 minutes to eat 1 mouse (each cat works at its own pace independently).'
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
