// ============================================================
// NOETIC LEARNING OFFICIAL PRACTICE EXAMS — Grade 2
// Fall 2020, 2021, 2022
// ============================================================

const _tile = (on=true) =>
  `<div style="width:30px;height:30px;background:${on?'#6366f1':'transparent'};border-radius:4px;flex-shrink:0"></div>`;
const _gap = () => `<div style="width:30px;height:30px;flex-shrink:0"></div>`;

const NOETIC_REAL_EXAMS = [

  // ── Fall 2020 ─────────────────────────────────────────────
  {
    id: 'fall2020', title: 'Fall 2020', season: 'Fall', year: 2020, color: '#5b34c4',
    problems: [
      {
        q: '20 + 20 = ?',
        answer: 40,
        hint: 'Think of each 20 as 2 tens. How many tens do you have in all?'
      },
      {
        q: 'The figure below shows a grid of boxes with dots inside.\nHow many dots are in the figure in total?',
        fig: `<div style="display:inline-flex;flex-direction:column;gap:3px;border:2px solid #6b7280;border-radius:8px;padding:8px;background:#f3f4f6;margin:8px auto">
  <div style="display:flex;gap:3px">
    ${['•  •','•  •','•  •'].map(d=>`<div style="width:52px;height:52px;border:2px solid #d1d5db;border-radius:4px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;letter-spacing:2px;color:#1e293b">${d}</div>`).join('')}
  </div>
  <div style="display:flex;gap:3px">
    ${['•  •','•  •','•  •'].map(d=>`<div style="width:52px;height:52px;border:2px solid #d1d5db;border-radius:4px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;letter-spacing:2px;color:#1e293b">${d}</div>`).join('')}
  </div>
</div>`,
        answer: 12,
        hint: 'Count how many boxes there are in the grid. Then count the dots in just ONE box. Try skip-counting by that number for all the boxes.'
      },
      {
        q: 'Jack chose one jersey number from the list below.\nHis number is ODD and GREATER THAN 7.\nWhich number did Jack choose?',
        fig: `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin:10px 0">
  ${['4','7','8','25','34','52'].map(n=>`<div style="width:52px;height:60px;background:#e0e7ff;border:2px solid #6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:900;color:#4338ca">${n}</div>`).join('')}
</div>`,
        answer: 25,
        hint: 'First, circle all the ODD numbers in the list. Then check which of those odd numbers is also greater than 7. Remember: 7 is not greater than 7.'
      },
      {
        q: 'Colby made a plus-sign shape using square tiles (shown on the left).\nPam made a smaller plus-sign shape (shown on the right).\n\nHow many MORE tiles did Colby use than Pam?',
        fig: `<div style="display:flex;gap:32px;justify-content:center;align-items:center;flex-wrap:wrap;margin:10px 0">
  <div style="text-align:center">
    <div style="font-size:.8rem;font-weight:800;color:#4338ca;margin-bottom:6px">Colby</div>
    <div style="display:inline-flex;flex-direction:column;gap:2px">
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_tile()}${_tile()}${_tile()}${_tile()}${_tile()}${_tile()}${_tile()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_gap()}${_tile()}${_gap()}${_gap()}</div>
    </div>
    <div style="font-size:.72rem;color:#6b7280;margin-top:4px">13 tiles</div>
  </div>
  <div style="text-align:center">
    <div style="font-size:.8rem;font-weight:800;color:#dc2626;margin-bottom:6px">Pam</div>
    <div style="display:inline-flex;flex-direction:column;gap:2px">
      <div style="display:flex;gap:2px">${_gap()}${_tile()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_tile()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_tile()}${_tile()}${_tile()}${_tile()}${_tile()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_tile()}${_gap()}</div>
      <div style="display:flex;gap:2px">${_gap()}${_tile()}${_gap()}</div>
    </div>
    <div style="font-size:.72rem;color:#6b7280;margin-top:4px">9 tiles</div>
  </div>
</div>`,
        answer: 4,
        hint: 'Count the tiles in each figure. Then find the difference between the two totals.'
      },
      {
        q: 'Sherry and Ravi went shopping together.\nSherry bought 9 notebooks.\nRavi bought 3 MORE notebooks than Sherry.\n\nHow many notebooks did they buy altogether?',
        answer: 21,
        hint: 'First find out how many Ravi bought on his own. Then add both their amounts together.'
      },
      {
        q: 'During a 5-day trip, Gary read 3 picture books each day.\n\nHow many picture books did Gary read in total?',
        answer: 15,
        hint: 'Add 3 for each of the 5 days, or think of it as groups of 3.'
      },
      {
        q: 'Prisha has 2 boxes of crayons. Each box has 12 crayons.\nShe gives Beth 8 crayons.\n\nHow many crayons will Prisha have left?',
        answer: 16,
        hint: 'First find the total crayons from both boxes. Then subtract what she gave away.'
      },
      {
        q: 'Find the mystery number:\n  • I am less than 18\n  • I am NOT 17\n  • I am greater than 5 + 5 + 5\n\nWhat number am I?',
        answer: 16,
        hint: 'Calculate 5+5+5 first. Then look for numbers greater than that result but less than 18. The last clue narrows it to one answer.'
      },
      {
        q: 'It is lunchtime. Omar\'s lunch break started 18 minutes ago.\nIt will end in 17 more minutes.\n\nHow many minutes long is the lunch break in total?',
        answer: 35,
        hint: 'The total break includes the time that already passed AND the time still left. Add those two parts.'
      },
      {
        q: 'The hotel sends one bus to the airport every 60 minutes.\nThe first bus leaves at 6:30 am.\n\nHow many buses will the hotel send from 6:30 am up to (but not including) 12:00 noon?',
        answer: 6,
        hint: 'Write out the bus times starting at 6:30, adding 60 minutes each time. Stop when you reach noon. Count how many times you wrote.'
      },
      {
        q: 'Martha\'s coloring book has pages in a repeating pattern.\nThe first 6 pages are shown. If the pattern continues, what page number has a sheep AFTER page 6?',
        fig: `<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin:10px 0">
  ${[['🐔','1'],['🐑','2'],['🐄','3'],['🐔','4'],['🐑','5'],['🐄','6'],['?','7'],['?','8']].map(([e,p],i)=>`<div style="background:${i>=6?'#fef9c3':'#f0f4ff'};border:2px solid ${i>=6?'#f59e0b':'#818cf8'};border-radius:10px;padding:8px 10px;text-align:center;min-width:42px"><div style="font-size:1.5rem">${e}</div><div style="font-size:.65rem;font-weight:700;color:#6366f1">pg ${p}</div></div>`).join('')}
</div>`,
        answer: 8,
        hint: 'Look at the pattern — what animal is on page 2? What is the next page with the same animal after page 2? Keep following that pattern to find the page after 5.'
      },
      {
        q: 'Kelly and Aruna were born in the same year.\nKelly\'s birthday falls on a Thursday.\nAruna\'s birthday falls on the Friday BEFORE Kelly\'s birthday.\n\nHow many days OLDER is Aruna than Kelly?',
        answer: 6,
        hint: 'Starting from Friday (Aruna\'s birthday), count forward to the next Thursday (Kelly\'s birthday). How many days did you count?'
      },
      {
        q: 'There are 12 cookies in the big jar and 6 in the small jar.\nCookies will be moved from the big jar to the small jar until both jars have the SAME number.\n\nHow many cookies need to be moved?',
        answer: 3,
        hint: 'Add all the cookies together. If they must be split equally between 2 jars, how many in each? How many must leave the big jar to reach that number?'
      },
      {
        q: 'Todd painted a pinwheel design on a tile.\nFour tiles are shown (numbered 1–4), each rotated to a different position.\n\nWhich tile number matches Todd\'s original design?',
        fig: `<div style="display:flex;gap:14px;justify-content:center;align-items:flex-end;flex-wrap:wrap;margin:10px 0">
  <div style="text-align:center">
    <div style="width:64px;height:64px;background:#dbeafe;border:2px solid #3b82f6;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:2.2rem">🌀</div>
    <div style="font-size:.72rem;font-weight:800;color:#1d4ed8;margin-top:4px">Todd's tile</div>
  </div>
  <div style="font-size:1.5rem;color:#9ca3af;margin-bottom:18px">→</div>
  ${[['↙️','1'],['↖️','2'],['🌀','3'],['↗️','4']].map(([icon,num])=>`<div style="text-align:center"><div style="width:56px;height:56px;background:${num==='3'?'#dcfce7':'#f3f4f6'};border:2px solid ${num==='3'?'#16a34a':'#d1d5db'};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.8rem">${icon}</div><div style="font-size:.8rem;font-weight:700;color:#374151;margin-top:4px">Tile ${num}</div></div>`).join('')}
</div>`,
        answer: 3,
        hint: 'Imagine turning each tile until it lines up with Todd\'s design. Only one of them will look exactly the same after rotating.'
      },
      {
        q: 'Sydney visited her grandma\'s orchard for 3 days.\nEach day she picked 12 peaches, ate 3, and saved the rest.\n\nHow many peaches did she save altogether?',
        answer: 27,
        hint: 'Figure out how many peaches Sydney saves in ONE day. Then use that to find the 3-day total.'
      },
      {
        q: 'Four people sit at a round table. Chairs are numbered 1–4 going clockwise.\n  • Cory sits in chair 2\n  • Frank sits DIRECTLY ACROSS from Cory\n  • Greg sits to the RIGHT of Cory\n\nWhat chair does Seth sit in?',
        fig: `<div style="position:relative;width:190px;height:190px;margin:14px auto">
  <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90px;height:90px;border-radius:50%;background:#d4a574;border:3px solid #92400e;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;color:#92400e">TABLE</div>
  <div style="position:absolute;left:50%;top:4%;transform:translateX(-50%);background:#6366f1;color:#fff;border-radius:8px;padding:5px 10px;font-size:.85rem;font-weight:800;white-space:nowrap">Chair 1</div>
  <div style="position:absolute;right:2%;top:50%;transform:translateY(-50%);background:#ef4444;color:#fff;border-radius:8px;padding:5px 8px;font-size:.82rem;font-weight:800;white-space:nowrap">Chair 2</div>
  <div style="position:absolute;left:50%;bottom:4%;transform:translateX(-50%);background:#6b7280;color:#fff;border-radius:8px;padding:5px 10px;font-size:.85rem;font-weight:800;white-space:nowrap">Chair 3</div>
  <div style="position:absolute;left:2%;top:50%;transform:translateY(-50%);background:#0e8f6b;color:#fff;border-radius:8px;padding:5px 8px;font-size:.82rem;font-weight:800;white-space:nowrap">Chair 4</div>
</div>`,
        answer: 3,
        hint: 'Place each person one at a time. Cory is in chair 2. Frank sits directly across — which chair is opposite chair 2? Greg sits to Cory\'s right — which chair is that? Seth takes whatever chair is left.'
      },
      {
        q: 'Mrs. Cline has 6 pens: blue, red, and black.\nShe has AT LEAST 1 of each color.\nShe has MORE blue than red.\nShe has MORE red than black.\n\nHow many BLUE pens does she have?',
        answer: 3,
        hint: 'Start with the smallest possible amount for each color following the rules. What\'s the minimum for black? For red? For blue? Do those minimums add up to exactly 6?'
      },
      {
        q: 'Sisters Natalie and Mary are celebrating their birthdays today.\n16 candles total will be on their two cakes.\nNatalie is 2 years OLDER than Mary.\n\nHow many candles will be on Mary\'s cake?',
        answer: 7,
        hint: 'Natalie gets 2 extra candles because she\'s older. How can you split the remaining candles equally? Then give Natalie her 2 extra ones back.'
      },
      {
        q: 'Students stand in a lunch line:\n  • 2 students are between Andy and Bernard\n  • 4 students are between Bernard and Claire\n  • 3 students are between Claire and David\n\nHow many students are between Andy and David?',
        answer: 11,
        hint: 'Draw a line and place everyone in order: Andy, 2 students, Bernard, 4 students, Claire, 3 students, David. Count all the people between Andy and David — including Bernard and Claire.'
      },
      {
        q: 'Ethan has one brother and one sister.\n  • Ethan\'s age + brother\'s age = 16\n  • Ethan\'s age + sister\'s age = 20\n  • Sister is 11 years old.\n\nHow old is Ethan\'s BROTHER?',
        answer: 7,
        hint: 'Use the sister\'s clue to find Ethan\'s age first. Then use Ethan\'s age to find the brother\'s age.'
      },
    ]
  },

  // ── Fall 2021 ─────────────────────────────────────────────
  {
    id: 'fall2021', title: 'Fall 2021', season: 'Fall', year: 2021, color: '#0e8f6b',
    problems: [
      {
        q: 'Look at the numbers below.\nHow many of them are LESS THAN 6?',
        fig: `<div style="display:flex;gap:12px;justify-content:center;margin:10px 0;flex-wrap:wrap">
  ${['7','4','3','5','8'].map(n=>`<div style="width:52px;height:52px;background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.7rem;font-weight:900;color:#166534">${n}</div>`).join('')}
</div>`,
        answer: 3,
        hint: 'Go through each number one at a time. Ask yourself: is this number less than 6? Keep a count of the ones that say yes.'
      },
      {
        q: 'A blue rectangle and a red triangle are overlapping. Dots are scattered inside the rectangle.\n\nHow many dots are inside the rectangle but OUTSIDE the triangle (not covered by it)?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="260" height="190" viewBox="0 0 260 190" style="border-radius:10px">
    <rect x="15" y="65" width="230" height="115" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5" rx="5"/>
    <polygon points="130,12 25,120 235,120" fill="rgba(254,202,202,0.85)" stroke="#ef4444" stroke-width="2.5"/>
    <!-- Dots outside triangle (blue) -->
    <circle cx="30" cy="135" r="6" fill="#1d4ed8"/><circle cx="68" cy="158" r="6" fill="#1d4ed8"/>
    <circle cx="110" cy="150" r="6" fill="#1d4ed8"/><circle cx="148" cy="162" r="6" fill="#1d4ed8"/>
    <circle cx="192" cy="140" r="6" fill="#1d4ed8"/><circle cx="228" cy="158" r="6" fill="#1d4ed8"/>
    <circle cx="44" cy="172" r="6" fill="#1d4ed8"/><circle cx="175" cy="172" r="6" fill="#1d4ed8"/>
    <circle cx="118" cy="175" r="6" fill="#1d4ed8"/>
    <!-- Dots inside triangle (red/pink - don't count) -->
    <circle cx="95" cy="88" r="6" fill="#fca5a5"/><circle cx="140" cy="78" r="6" fill="#fca5a5"/>
    <circle cx="165" cy="100" r="6" fill="#fca5a5"/>
    <!-- Labels -->
    <text x="130" y="57" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">▲ triangle</text>
    <text x="130" y="190" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="bold">■ rectangle</text>
  </svg>
</div>
<p style="font-size:.78rem;color:#6b7280;text-align:center;margin:4px 0">🔵 blue dots = count these &nbsp;&nbsp; 🔴 red dots = don't count (under triangle)</p>`,
        answer: 9,
        hint: 'Count only the dots that are inside the blue rectangle but NOT under the red triangle. Ignore the dots that the triangle covers.'
      },
      {
        q: 'Six jack-o-lanterns are shown. Look at the EYES and NOSE of each one.\nHow many have TRIANGLE eyes AND a RECTANGLE nose?',
        fig: `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:10px 0">
  ${[
    {n:1,eyes:'○ ○',nose:'▽',match:false,el:'round eyes, triangle nose'},
    {n:2,eyes:'△ △',nose:'▽',match:false,el:'triangle eyes, triangle nose'},
    {n:3,eyes:'○ ○',nose:'▽',match:false,el:'round eyes, triangle nose'},
    {n:4,eyes:'△ △',nose:'▬',match:true, el:'triangle eyes, rect. nose ✓'},
    {n:5,eyes:'○ ○',nose:'○',match:false,el:'round eyes, round nose'},
    {n:6,eyes:'△ △',nose:'▬',match:true, el:'triangle eyes, rect. nose ✓'},
  ].map(j=>`<div style="text-align:center;width:72px">
    <div style="width:68px;height:68px;background:${j.match?'#fef9c3':'#f3f4f6'};border:2.5px solid ${j.match?'#f59e0b':'#d1d5db'};border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:.95rem">
      <div>${j.eyes}</div>
      <div style="font-size:.85rem">${j.nose}</div>
    </div>
    <div style="font-size:.62rem;color:#6b7280;margin-top:4px;line-height:1.3">${j.n}<br>${j.el}</div>
  </div>`).join('')}
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">△ = triangle &nbsp; ○ = circle &nbsp; ▬ = rectangle &nbsp; ▽ = triangle nose</p>`,
        answer: 2,
        hint: 'Check EACH jack-o-lantern for BOTH conditions: does it have triangle (△) eyes? AND a rectangle (▬) nose? It must pass BOTH tests to count.'
      },
      {
        q: 'There are 14 marbles in a jar.\n5 are black. The rest are white.\n\nHow many MORE white marbles are there than black marbles?',
        answer: 4,
        hint: 'First find how many white marbles there are. Then compare the two groups — which has more, and by how much?'
      },
      {
        q: 'Annie, Brian, and Claire are classmates.\n  • Annie is TALLER than Claire.\n  • Brian is SHORTER than Claire.\n\nWhich classmate is the SHORTEST?\n\nA) Annie   B) Brian   C) Claire',
        answer: 'B',
        hint: 'Build a height order by comparing them two at a time. Who is shorter than who? Line them up from tallest to shortest to find the answer.'
      },
      {
        q: 'Ethan can walk 80 meters every minute.\n\nHow many meters can he walk in 3 minutes?',
        answer: 240,
        hint: 'Add 80 meters for each minute, or think of it as groups of 80.'
      },
      {
        q: 'Freddy the frog sits on the center lily pad. The lines show which pads he can jump to.\nHow many lily pads can Freddy NOT reach within 2 jumps?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="270" height="210" viewBox="0 0 270 210" style="border-radius:10px;background:#e0f2fe">
    <line x1="135" y1="105" x2="68" y2="52" stroke="#6b7280" stroke-width="2"/>
    <line x1="135" y1="105" x2="202" y2="52" stroke="#6b7280" stroke-width="2"/>
    <line x1="135" y1="105" x2="52" y2="138" stroke="#6b7280" stroke-width="2"/>
    <line x1="135" y1="105" x2="218" y2="138" stroke="#6b7280" stroke-width="2"/>
    <line x1="135" y1="105" x2="135" y2="178" stroke="#6b7280" stroke-width="2"/>
    <line x1="68" y1="52" x2="28" y2="18" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="202" y1="52" x2="242" y2="18" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="52" y1="138" x2="18" y2="172" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5"/>
    <!-- Unreachable -->
    <circle cx="250" cy="155" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
    <text x="250" y="160" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="bold">?</text>
    <circle cx="135" cy="12" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
    <text x="135" y="17" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="bold">?</text>
    <!-- Center -->
    <circle cx="135" cy="105" r="20" fill="#4ade80" stroke="#15803d" stroke-width="2.5"/>
    <text x="135" y="101" text-anchor="middle" font-size="9" fill="#14532d" font-weight="bold">🐸</text>
    <text x="135" y="114" text-anchor="middle" font-size="9" fill="#14532d" font-weight="bold">Freddy</text>
    <!-- 1-jump pads -->
    ${[[68,52,'A'],[202,52,'B'],[52,138,'C'],[218,138,'D'],[135,178,'E']].map(([cx,cy,l])=>`<circle cx="${cx}" cy="${cy}" r="16" fill="#86efac" stroke="#15803d" stroke-width="2"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="12" fill="#14532d" font-weight="bold">${l}</text>`).join('')}
    <!-- 2-jump pads -->
    ${[[28,18,'F'],[242,18,'G'],[18,172,'H']].map(([cx,cy,l])=>`<circle cx="${cx}" cy="${cy}" r="14" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/><text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">${l}</text>`).join('')}
  </svg>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">🟢 Reachable &nbsp;🔴 Can Freddy reach the red pads in 1 or 2 jumps?</p>`,
        answer: 2,
        hint: 'First mark all the pads Freddy can reach in exactly 1 jump. Then from EACH of those pads, mark what he can reach with 1 more jump. Count any pads still unmarked.'
      },
      {
        q: 'Gabby and Don stand in a lunch line.\n  • 8 people are in front of Gabby\n  • Don is right BEHIND Gabby\n  • 4 people are behind Don\n\nHow many people are in the lunch line in all?',
        answer: 14,
        hint: 'Draw the line from front to back. Fill in the 8 people, then Gabby, then Don, then the 4 people behind. Count everyone.'
      },
      {
        q: 'It is 8:10 am. Dean\'s bus leaves at 9:20 am.\n\nHow many minutes does Dean have to wait?',
        answer: 70,
        hint: 'Try counting from 8:10 to 9:10 first — that\'s a nice round number. Then count the remaining minutes from 9:10 to 9:20.'
      },
      {
        q: 'Liam reads one book every two months.\n\nHow many books does Liam read in one year (12 months)?',
        answer: 6,
        hint: 'How many groups of 2 months fit into 12 months? That\'s how many books Liam reads.'
      },
      {
        q: 'George\'s radio show runs from 12:00 pm to 12:30 pm.\nGeorge walks from 11:50 am to 12:20 pm.\n\nHow many minutes of the show does George hear while walking?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="280" height="100" viewBox="0 0 280 100" style="border-radius:8px;background:#f9fafb;padding:4px">
    <line x1="20" y1="50" x2="260" y2="50" stroke="#d1d5db" stroke-width="2"/>
    <text x="20" y="68" text-anchor="middle" font-size="10" fill="#6b7280">11:50</text>
    <text x="95" y="68" text-anchor="middle" font-size="10" fill="#6b7280">12:00</text>
    <text x="170" y="68" text-anchor="middle" font-size="10" fill="#6b7280">12:20</text>
    <text x="245" y="68" text-anchor="middle" font-size="10" fill="#6b7280">12:30</text>
    <rect x="20" y="30" width="150" height="14" fill="#86efac" stroke="#16a34a" stroke-width="1.5" rx="3"/>
    <text x="95" y="26" text-anchor="middle" font-size="9" fill="#166534" font-weight="bold">George's walk</text>
    <rect x="95" y="52" width="150" height="14" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5" rx="3"/>
    <text x="170" y="80" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="bold">Radio show</text>
    <rect x="95" y="30" width="75" height="36" fill="rgba(251,191,36,0.4)" stroke="#f59e0b" stroke-width="2" rx="3"/>
    <text x="132" y="92" text-anchor="middle" font-size="10" fill="#b45309" font-weight="bold">overlap = ?</text>
  </svg>
</div>`,
        answer: 20,
        hint: 'Look at the timeline — when does the show start? When does the walk end? Only the time when BOTH are happening at the same time counts.'
      },
      {
        q: 'Eddie, Leslie, and Jim each hold one of these three cards:\n\nJim\'s card has a SQUARE.\nEddie holds the card with the number 2.\n\nWhat number is on Leslie\'s card?',
        fig: `<div style="display:flex;gap:14px;justify-content:center;margin:10px 0;flex-wrap:wrap">
  ${[['8','🟩 square'],['2','🟩 square'],['7','🔺 triangle']].map(([n,s])=>`<div style="background:#fff;border:2.5px solid #d1d5db;border-radius:12px;padding:14px 18px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.08)"><div style="font-size:2rem;font-weight:900;color:#1e293b">${n}</div><div style="font-size:.68rem;color:#6b7280;margin-top:6px">${s}</div></div>`).join('')}
</div>`,
        answer: 7,
        hint: 'Jim\'s card has a square — look at which cards have squares. Eddie has one of them. So Jim must have the other one. What card is left for Leslie?'
      },
      {
        q: 'A snack cart sells:\n  Water: $1   Cookies: $2   Cupcakes: $3\n\nBrea spent exactly $10 on 1 bottle of water and some cupcakes.\n\nHow many cupcakes did Brea buy?',
        answer: 3,
        hint: 'After paying for the water, how much money does Brea have left? How many cupcakes can she buy with exactly that amount?'
      },
      {
        q: 'Mia placed 5 coins on a 4×4 grid as shown.\nShe wants every ROW and every COLUMN to have exactly 2 coins.\n\nHow many MORE coins does she need to add?',
        fig: `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;margin:10px 0">
  <table style="border-collapse:collapse">
    ${[[false,false,true,false],[true,false,false,false],[false,true,false,true],[false,false,false,true]].map((row,r)=>`<tr>${row.map((c,col)=>`<td style="width:50px;height:50px;border:2px solid #9ca3af;background:${c?'#fef9c3':'#f9fafb'};text-align:center;font-size:1.6rem">${c?'🪙':''}</td>`).join('')}</tr>`).join('')}
  </table>
  <p style="font-size:.76rem;color:#6b7280;margin:0">Each row → must have 2 coins &nbsp;|&nbsp; Each column ↓ must have 2 coins</p>
</div>`,
        answer: 3,
        hint: 'Figure out how many total coins you need for 4 rows with 2 coins each. Then subtract the coins already on the board.'
      },
      {
        q: 'In a theater, the 1st row has 11 seats.\nEach row after has 2 MORE seats than the row before.\n\nHow many seats are in the 10th row?',
        fig: `<div style="display:flex;flex-direction:column;gap:5px;margin:10px 0;align-items:center">
  ${[[1,11],[2,13],[3,15]].map(([r,s])=>`<div style="display:flex;align-items:center;gap:8px"><span style="font-size:.72rem;color:#6b7280;width:44px;text-align:right;flex-shrink:0">Row ${r}:</span><div style="display:flex;gap:2px">${Array(s).fill(0).map(()=>`<div style="width:12px;height:20px;background:#818cf8;border-radius:3px 3px 0 0"></div>`).join('')}</div></div>`).join('')}
  <div style="font-size:.75rem;color:#9ca3af;margin-top:2px">⋮</div>
  <div style="display:flex;align-items:center;gap:8px"><span style="font-size:.72rem;color:#f59e0b;width:44px;text-align:right;flex-shrink:0">Row 10:</span><span style="font-size:.85rem;font-weight:800;color:#f59e0b">?</span></div>
</div>`,
        answer: 29,
        hint: 'Write out the seat count for each row, adding 2 each time: Row 1=11, Row 2=13... Keep going until you reach Row 10.'
      },
      {
        q: 'Two scales are perfectly balanced.\nAll muffins weigh the same.\n\nHow many grams does the BANANA weigh?',
        fig: `<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin:10px 0">
  ${[{left:'🧁  🧁',right:'80g',label:'Scale 1'},{left:'🧁  🍌',right:'150g',label:'Scale 2'}].map(sc=>`<div style="text-align:center">
    <svg width="150" height="95" viewBox="0 0 150 95">
      <line x1="75" y1="15" x2="75" y2="45" stroke="#78716c" stroke-width="3"/>
      <line x1="20" y1="45" x2="130" y2="45" stroke="#78716c" stroke-width="3"/>
      <line x1="20" y1="45" x2="20" y2="60" stroke="#78716c" stroke-width="2"/>
      <line x1="130" y1="45" x2="130" y2="60" stroke="#78716c" stroke-width="2"/>
      <rect x="5" y="60" width="30" height="28" rx="5" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="20" y="78" text-anchor="middle" font-size="13">${sc.left}</text>
      <rect x="115" y="60" width="30" height="28" rx="5" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
      <text x="130" y="78" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">${sc.right}</text>
    </svg>
    <div style="font-size:.72rem;color:#6b7280;margin-top:-4px">${sc.label}</div>
  </div>`).join('')}
</div>`,
        answer: 110,
        hint: 'Use Scale 1 to figure out how much ONE muffin weighs. Then plug that weight into Scale 2 to find the banana\'s weight.'
      },
      {
        q: 'There are 7 treat bags. Each bag has either 5 cookies OR 2 muffins.\nEmma opened all bags and counted 6 muffins total.\n\nHow many COOKIES are there in all?',
        answer: 20,
        hint: 'If there are 6 muffins total and each muffin bag holds 2 muffins, how many bags have muffins? The remaining bags have cookies — how many cookies is that?'
      },
      {
        q: 'Jonah is 12 years old. Tina is 4 years old.\n\nIn how many years will Jonah be EXACTLY TWICE as old as Tina?',
        answer: 4,
        hint: 'The age difference between Jonah and Tina never changes. Try different future ages for Tina and check if Jonah\'s age at that time would be exactly double.'
      },
      {
        q: 'A drawer has 12 socks: 8 white and 4 gray.\nYou pull socks out one at a time WITHOUT looking.\n\nWhat is the FEWEST socks you must pull out to be SURE you have at least 2 white ones?',
        answer: 6,
        hint: 'Imagine the worst possible luck — what if you kept pulling the wrong color? How many of the wrong color could you pull before you run out? After that, how many more do you need to guarantee 2 white ones?'
      },
      {
        q: 'The map shows ferry routes and ticket prices between 6 islands.\nAll routes to island F must pass through island D.\n\nWhat is the CHEAPEST total cost to travel from island A to island F?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="290" height="210" viewBox="0 0 290 210" style="border-radius:10px;background:#e0f7fa">
    <line x1="40" y1="105" x2="105" y2="62" stroke="#78716c" stroke-width="1.5"/>
    <text x="64" y="77" font-size="10" fill="#78716c" font-weight="bold">$3</text>
    <line x1="105" y1="62" x2="168" y2="62" stroke="#78716c" stroke-width="1.5"/>
    <text x="128" y="54" font-size="10" fill="#78716c" font-weight="bold">$1</text>
    <line x1="168" y1="62" x2="195" y2="138" stroke="#78716c" stroke-width="1.5"/>
    <text x="192" y="97" font-size="10" fill="#78716c" font-weight="bold">$3</text>
    <line x1="105" y1="62" x2="136" y2="138" stroke="#78716c" stroke-width="1.5"/>
    <text x="105" y="108" font-size="10" fill="#78716c" font-weight="bold">$11</text>
    <line x1="136" y1="138" x2="195" y2="138" stroke="#78716c" stroke-width="1.5"/>
    <text x="158" y="130" font-size="10" fill="#78716c" font-weight="bold">$5</text>
    <line x1="40" y1="105" x2="168" y2="62" stroke="#78716c" stroke-width="1.5" stroke-dasharray="5"/>
    <text x="95" y="70" font-size="10" fill="#78716c" font-weight="bold">$5</text>
    <line x1="136" y1="138" x2="252" y2="168" stroke="#2563eb" stroke-width="2.5"/>
    <text x="198" y="148" font-size="10" fill="#2563eb" font-weight="bold">$12</text>
    ${[[40,105,'A','#4ade80','#15803d'],[105,62,'B','#86efac','#15803d'],[168,62,'C','#86efac','#15803d'],[195,138,'E','#86efac','#15803d'],[136,138,'D','#fbbf24','#d97706'],[252,168,'F','#f87171','#dc2626']].map(([cx,cy,l,fill,stroke])=>`<circle cx="${cx}" cy="${cy}" r="19" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="900">${l}</text>`).join('')}
  </svg>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">You MUST go through D to reach F. Find cheapest A→D path, then add D→F.</p>`,
        answer: 24,
        hint: 'You must go through island D to reach F. Try all the different routes from A to D and add up the costs for each. Pick the cheapest one, then add the price from D to F.'
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
        hint: 'Add one step at a time, left to right.'
      },
      {
        q: 'Four friends picked apples (🍎) and pears (🍐) at an orchard.\nWho picked MORE pears than apples?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <table style="border-collapse:collapse;font-size:.9rem">
    <tr style="background:#f0fdf4"><th style="padding:8px 14px;border:2px solid #86efac;font-weight:800;color:#166534"></th><th style="padding:8px 14px;border:2px solid #86efac;font-weight:800;color:#166534">🍎 Apples</th><th style="padding:8px 14px;border:2px solid #86efac;font-weight:800;color:#166534">🍐 Pears</th></tr>
    ${[['Ally',3,2],['Bernard',4,1],['Cole',2,3],['Diane',4,3]].map(([n,a,p])=>`<tr style="background:${p>a?'#fef9c3':'#fff'}"><td style="padding:8px 14px;border:2px solid #d1d5db;font-weight:700">${n}</td><td style="padding:8px 14px;border:2px solid #d1d5db;text-align:center">${a}</td><td style="padding:8px 14px;border:2px solid #d1d5db;text-align:center">${p}${p>a?' ⬅':'':''}${p>a?'':''}</td></tr>`).join('')}
  </table>
</div>`,
        answer: 'Cole',
        hint: 'For each person, ask: are their pears more than their apples? Check every row in the table.'
      },
      {
        q: 'A frog starts at lily pad 1 and jumps along a row of lily pads.\nEach jump goes 1 pad FARTHER than the jump before it.\n\nThe first 3 jumps are shown. Where does the frog land on jump 4?',
        fig: `<div style="overflow-x:auto;margin:10px 0;padding-bottom:4px">
  <div style="min-width:380px;padding:4px">
    <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap">
      ${Array.from({length:16},(_,i)=>{
        const n=i+1;
        const landed=[1,3,6,10].includes(n);
        return `<div style="min-width:30px;height:30px;border-radius:50%;background:${landed?'#4ade80':'#d1fae5'};border:2px solid ${landed?'#15803d':'#86efac'};display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;color:${landed?'#14532d':'#6b7280'};flex-shrink:0">${n===1?'🐸':n}</div>`;
      }).join('')}
      <div style="min-width:32px;height:32px;border-radius:50%;background:#fef9c3;border:2px dashed #f59e0b;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:900;color:#92400e;flex-shrink:0">?</div>
    </div>
    <div style="display:flex;gap:0;align-items:flex-start;padding-left:15px;margin-top:6px;font-size:.65rem;color:#6b7280">
      <span style="display:inline-block;width:72px;text-align:center;border-top:2px solid #6366f1;padding-top:2px">Jump 1<br>+2 pads</span>
      <span style="display:inline-block;width:108px;text-align:center;border-top:2px solid #6366f1;padding-top:2px">Jump 2<br>+3 pads</span>
      <span style="display:inline-block;width:144px;text-align:center;border-top:2px solid #6366f1;padding-top:2px">Jump 3<br>+4 pads</span>
      <span style="display:inline-block;width:38px;text-align:center;border-top:2px dashed #f59e0b;padding-top:2px;color:#92400e">Jump 4<br>?</span>
    </div>
  </div>
</div>`,
        answer: 15,
        hint: 'Look at the jump sizes: jump 1 = +2, jump 2 = +3, jump 3 = +4. What will jump 4 be? Add that to where the frog is after jump 3.'
      },
      {
        q: 'A bookcase has 4 shelves.\nThe top 3 shelves each hold 10 books.\nThe bottom shelf holds 6 books.\n\nHow many books are there in total?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="200" height="165" viewBox="0 0 200 165" style="border-radius:8px;background:#fafaf9">
    <rect x="12" y="8" width="176" height="150" rx="6" fill="#d6d3d1" stroke="#78716c" stroke-width="2"/>
    ${[0,1,2,3].map((i)=>{const y=16+i*34;const n=i<3?10:6;return `<rect x="18" y="${y}" width="164" height="28" rx="3" fill="#fef3c7" stroke="#fbbf24" stroke-width="1.5"/><text x="24" y="${y+19}" font-size="11" fill="#92400e">${'📚'.repeat(n)}</text><text x="182" y="${y+19}" text-anchor="end" font-size="11" fill="#78350f" font-weight="900">${n}</text>`;}).join('')}
  </svg>
</div>`,
        answer: 36,
        hint: 'Add the number of books on each shelf. There are 3 shelves with 10 books and 1 shelf with 6 books.'
      },
      {
        q: 'Mariah has a magic garden with 18 flowers. When she removes 1 flower, 4 new ones bloom in its place.\nMariah removes 2 flowers (one at a time).\n\nHow many flowers are there after both removals?',
        answer: 24,
        hint: 'Work through it one removal at a time. Remove 1 flower — how many bloom back? Now you have a new total. Remove the 2nd flower from that new total.'
      },
      {
        q: 'Sandy buys 1 ice cream cone per day starting next Saturday.\nShe gets a FREE cookie after buying 10 ice cream cones.\n\nOn which day of the week does Sandy earn her free cookie?\n\nA) Sunday   B) Monday   C) Tuesday   D) Wednesday',
        fig: `<div style="display:flex;gap:5px;flex-wrap:wrap;justify-content:center;margin:10px 0">
  ${['Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon'].map((d,i)=>`<div style="background:${i===9?'#fef9c3':'#f0f4ff'};border:2px solid ${i===9?'#f59e0b':'#818cf8'};border-radius:8px;padding:6px 8px;text-align:center;min-width:36px"><div style="font-size:.68rem;font-weight:700;color:#4338ca">${d}</div><div style="font-size:1rem">🍦</div><div style="font-size:.72rem;font-weight:800;color:#374151">${i+1}</div></div>`).join('')}
</div>`,
        answer: 'B',
        hint: 'Count out 10 days starting from Saturday (day 1). What day of the week is day 10?'
      },
      {
        q: 'Evan picked up 9 bottles and 5 cans.\nDante picked up 14 bottles and 2 cans.\nTia picked up 6 FEWER bottles than Evan, and 3 MORE cans than Dante.\n\nHow many CANS did Tia pick up?',
        answer: 5,
        hint: 'Calculate Tia\'s cans on their own — start with Dante\'s cans and apply Tia\'s difference.'
      },
      {
        q: 'Three sisters each own exactly one hat:\n  Hat A → has a feather ONLY\n  Hat B → has NEITHER a feather NOR a bow\n  Hat C → has BOTH a feather AND a bow\n\nEsther\'s hat has a feather.\nJane\'s hat has a bow.\nMaya\'s hat does NOT have a feather.\n\nWhich hat belongs to Esther? (Enter A, B, or C)',
        fig: `<div style="display:flex;gap:16px;justify-content:center;margin:10px 0;flex-wrap:wrap">
  ${[{id:'A',text:'🪶 feather\n(no bow)',c:'#dbeafe',b:'#3b82f6'},{id:'B',text:'(no feather)\n(no bow)',c:'#f3f4f6',b:'#6b7280'},{id:'C',text:'🪶 feather\n🎀 bow',c:'#fce7f3',b:'#ec4899'}].map(h=>`<div style="text-align:center"><div style="width:80px;height:68px;background:${h.c};border:2.5px solid ${h.b};border-radius:40% 40% 10px 10px;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;color:#1e293b;white-space:pre-line;line-height:1.4">${h.text}</div><div style="font-size:.9rem;font-weight:900;color:#374151;margin-top:6px">Hat ${h.id}</div></div>`).join('')}
</div>`,
        answer: 'A',
        hint: 'Start with Maya — she has no feather. Which hat must be hers? Then use the remaining hats to figure out Esther and Jane.'
      },
      {
        q: 'Pens are sold in boxes of 12.\nMs. Garcia needs at least 40 pens.\n\nHow many boxes should she buy?',
        answer: 4,
        hint: 'Keep adding 12 for each box until you have at least 40 pens. How many boxes did it take?'
      },
      {
        q: 'Gloria has 3 different shirts and 2 different skirts.\nShe picks 1 shirt and 1 skirt to wear.\n\nHow many different outfit choices does she have?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="250" height="120" viewBox="0 0 250 120" style="border-radius:8px;background:#f9fafb">
    ${['#fde68a','#bbf7d0','#bfdbfe'].map((c,i)=>`<rect x="${10+i*54}" y="10" width="42" height="38" rx="5" fill="${c}" stroke="#9ca3af" stroke-width="1.5"/><text x="${31+i*54}" y="33" text-anchor="middle" font-size="12">👕</text><text x="${31+i*54}" y="60" text-anchor="middle" font-size="9" fill="#6b7280" font-weight="bold">Shirt ${i+1}</text>`).join('')}
    ${['#f9a8d4','#a5b4fc'].map((c,i)=>`<rect x="${70+i*78}" y="72" width="52" height="38" rx="5" fill="${c}" stroke="#9ca3af" stroke-width="1.5"/><text x="${96+i*78}" y="95" text-anchor="middle" font-size="12">👗</text><text x="${96+i*78}" y="116" text-anchor="middle" font-size="9" fill="#6b7280" font-weight="bold">Skirt ${i+1}</text>`).join('')}
    ${[0,1,2].flatMap(s=>[0,1].map(sk=>`<line x1="${31+s*54}" y1="48" x2="${96+sk*78}" y2="72" stroke="#d1d5db" stroke-width="1.2"/>`)).join('')}
  </svg>
</div>`,
        answer: 6,
        hint: 'Each shirt can be paired with each skirt. How many total combinations does that give?'
      },
      {
        q: 'Grandma says: "In 10 years I will be 80 years old."\nGrandma is 60 years OLDER than Kim.\n\nHow old is Kim NOW?',
        answer: 10,
        hint: 'First figure out Grandma\'s age right now. Then use the age difference to find Kim\'s current age.'
      },
      {
        q: 'Dylan brought his friends to ride a roller coaster.\nThe coaster has 7 carts with 2 seats each (14 seats total).\nEvery seat is taken by Dylan, his friends, and 5 other people.\n\nHow many FRIENDS did Dylan bring?',
        answer: 8,
        hint: 'Start with total seats. Subtract the 5 other people. The rest are Dylan\'s group — but don\'t forget Dylan himself takes one of those seats too.'
      },
      {
        q: 'Using the digits 2, 5, and 8 (each used exactly once), how many different 3-digit EVEN numbers can be made?',
        fig: `<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:10px 0">
  ${['2','5','8'].map(d=>`<div style="width:48px;height:48px;background:#f0f4ff;border:2px solid #6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:900;color:#4338ca">${d}</div>`).join('')}
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">Even numbers end in an even digit. Which of these digits are even?</p>`,
        answer: 4,
        hint: 'Even numbers end in an even digit. Which digits from 2, 5, 8 are even? Those can go in the ones place. Then arrange the other two digits in the hundreds and tens places. How many ways can you do that?'
      },
      {
        q: 'Ginger hangs 7 posters in a row on her wall, side by side.\nEvery corner of a poster needs a push pin.\nPosters that share a side SHARE the corner push pins between them.\n\nHow many push pins does Ginger need in all?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="310" height="85" viewBox="0 0 310 85" style="border-radius:8px;background:#f9fafb">
    ${Array.from({length:7},(_,i)=>{const x=10+i*42;return `<rect x="${x}" y="20" width="42" height="52" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/><text x="${x+21}" y="50" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">${i+1}</text>`;}).join('')}
    ${[10,52,94,136,178,220,262,304].map(px=>[20,72].map(py=>`<circle cx="${px}" cy="${py}" r="5" fill="#ef4444" stroke="#fff" stroke-width="1.5"/>`).join('')).join('')}
  </svg>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">🔴 = push pin &nbsp; Posters share pins at the edges between them</p>`,
        answer: 16,
        hint: 'The first poster needs all 4 of its corner pins. Each additional poster shares 2 pins with the one next to it, so it only needs 2 new pins. Add it all up.'
      },
      {
        q: 'Three friends trade baseball cards:\n  1. Wyatt gives Casey 3 cards, and Casey gives Wyatt 5 cards.\n  2. Zelda gives Casey 2 cards, and Casey gives Zelda 3 cards.\n  3. Wyatt gives Zelda 1 card, and Zelda gives Wyatt 6 cards.\n\nHow many MORE cards does Wyatt have now compared to the start?',
        answer: 7,
        hint: 'Focus ONLY on trades that include Wyatt. For each of those trades, did Wyatt gain or lose cards? Find the total change for Wyatt.'
      },
      {
        q: 'Six circles are connected by 4 lines through the center.\nEach LINE of 2 circles must add up to the SAME total.\nSome numbers are given. What number goes in the circle marked "?"',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <svg width="210" height="210" viewBox="0 0 210 210" style="border-radius:10px;background:#f9fafb">
    <line x1="105" y1="25" x2="105" y2="185" stroke="#9ca3af" stroke-width="2"/>
    <line x1="25" y1="105" x2="185" y2="105" stroke="#9ca3af" stroke-width="2"/>
    <line x1="38" y1="38" x2="172" y2="172" stroke="#9ca3af" stroke-width="2"/>
    <line x1="172" y1="38" x2="38" y2="172" stroke="#9ca3af" stroke-width="2"/>
    ${[[105,25,'7','#dbeafe','#3b82f6'],[25,105,'?','#fef9c3','#f59e0b'],[185,105,'3','#dbeafe','#3b82f6'],[105,185,'2','#dcfce7','#16a34a'],[38,38,'1','#dcfce7','#16a34a'],[172,172,'8','#dcfce7','#16a34a']].map(([cx,cy,val,fill,stroke])=>`<circle cx="${cx}" cy="${cy}" r="22" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/><text x="${cx}" y="${cy+6}" text-anchor="middle" font-size="15" fill="#1e293b" font-weight="900">${val}</text>`).join('')}
  </svg>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">Every line of 2 circles must add up to the same sum.</p>`,
        answer: 6,
        hint: 'Pick a line where you know both numbers already and find their sum. Every other line must equal that same sum. Use that to find the missing number.'
      },
      {
        q: 'Henry is in a line.\nHe is the 16th person from the FRONT.\nHe is also the 16th person from the BACK.\n\nJim is the 9th person from the front of the same line.\n\nHow many people are standing BEHIND Jim?',
        answer: 22,
        hint: 'First figure out how many people are in the line in total — use Henry\'s position from both ends to work that out. Then use Jim\'s position to find how many people are behind him.'
      },
      {
        q: 'On a farm, there are ONLY chickens and cows.\nThere are 4 MORE chickens than cows.\nThe animals have 38 legs altogether.\n(Chickens: 2 legs · Cows: 4 legs)\n\nHow many CHICKENS are on the farm?',
        answer: 9,
        hint: 'Try a number of cows and calculate the chickens (4 more). Count all the legs. Is the total 38? Adjust your guess and try again until it works.'
      },
      {
        q: 'A subtraction problem has 3 digits hidden under ink blots (●).\nFind each hidden digit, then enter their SUM as your answer.',
        fig: `<div style="display:flex;justify-content:center;margin:12px 0">
  <div style="background:#fff;border:2px solid #d1d5db;border-radius:14px;padding:18px 28px;display:inline-block;box-shadow:0 2px 8px rgba(0,0,0,.08)">
    <div style="font-family:monospace;font-size:1.9rem;font-weight:900;text-align:right;line-height:1.6">
      <div><span style="color:#ef4444">●</span><span style="color:#ef4444">●</span><span style="color:#1e293b">1</span></div>
      <div style="display:flex;align-items:center;justify-content:flex-end;gap:2px;border-bottom:3px solid #1e293b;padding-bottom:4px"><span style="font-size:1.2rem;color:#6b7280;font-weight:400;margin-right:4px">−</span><span style="color:#1e293b">6</span><span style="color:#ef4444">●</span></div>
      <div style="padding-top:4px;color:#1e293b">278</div>
    </div>
  </div>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">Find the 3 red digits (●). Then add them together.</p>`,
        answer: 10,
        hint: 'Work from RIGHT to LEFT (ones digit first, then tens, then hundreds). When the top digit is smaller than what you\'re subtracting, you need to borrow. Find all 3 hidden digits, then add them together.'
      },
      {
        q: 'A baseball team has 25 players total.\nPlayers wear either white or gray jerseys.\nPlayers are either 2nd or 3rd graders.\n\nUse the clues in the table to find: how many 3rd graders wear GRAY jerseys?',
        fig: `<div style="display:flex;justify-content:center;margin:10px 0">
  <table style="border-collapse:collapse;font-size:.88rem">
    <tr style="background:#f0f9ff"><th style="padding:8px 12px;border:2px solid #7dd3fc;font-weight:800;color:#0369a1"></th><th style="padding:8px 12px;border:2px solid #7dd3fc;font-weight:800;color:#0369a1">⬜ White</th><th style="padding:8px 12px;border:2px solid #7dd3fc;font-weight:800;color:#0369a1">🩶 Gray</th><th style="padding:8px 12px;border:2px solid #7dd3fc;font-weight:800;color:#0369a1">Total</th></tr>
    <tr><td style="padding:8px 12px;border:2px solid #d1d5db;font-weight:700">2nd graders</td><td style="padding:8px 12px;border:2px solid #d1d5db;text-align:center">4</td><td style="padding:8px 12px;border:2px solid #d1d5db;text-align:center;color:#9ca3af">?</td><td style="padding:8px 12px;border:2px solid #d1d5db;text-align:center">12</td></tr>
    <tr><td style="padding:8px 12px;border:2px solid #d1d5db;font-weight:700">3rd graders</td><td style="padding:8px 12px;border:2px solid #d1d5db;text-align:center;color:#9ca3af">?</td><td style="padding:8px 12px;border:2px solid #fbbf24;background:#fef9c3;text-align:center;font-size:1.1rem">⭐</td><td style="padding:8px 12px;border:2px solid #d1d5db;text-align:center;color:#9ca3af">?</td></tr>
    <tr style="background:#f0f9ff"><td style="padding:8px 12px;border:2px solid #7dd3fc;font-weight:700">Total</td><td style="padding:8px 12px;border:2px solid #7dd3fc;text-align:center;font-weight:700">11</td><td style="padding:8px 12px;border:2px solid #7dd3fc;text-align:center;font-weight:700">14</td><td style="padding:8px 12px;border:2px solid #7dd3fc;text-align:center;font-weight:700">25</td></tr>
  </table>
</div>
<p style="font-size:.76rem;color:#6b7280;text-align:center;margin:4px 0">⭐ = the number you need to find</p>`,
        answer: 6,
        hint: 'Fill in the table using the row and column totals. Start with 2nd graders in gray, then figure out 3rd graders in gray from the column total.'
      },
    ]
  }
];

function checkExamAnswer(given, expected) {
  const g = String(given).trim().toLowerCase().replace(/\s+/g, ' ');
  if (typeof expected === 'number') {
    const n = parseFloat(g.replace(/[^0-9.\-]/g, ''));
    return n === expected;
  }
  return g === String(expected).trim().toLowerCase();
}
