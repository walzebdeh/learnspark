// ============================================================
// ARABIC LEVELS — alphabet, vocabulary, grammar, sentences
// ============================================================

const ARABIC_SHEETS_TO_COMPLETE  = 50;
const ARABIC_PASS_SCORE          = 8;   // out of 10
const ARABIC_QUESTIONS_PER_SHEET = 10;
const ARABIC_PTS_PER_SHEET       = 10;

const ARABIC_GRADE_STARTS = { 1: 0, 2: 4, 3: 8, 4: 12 };
const ARABIC_GRADE_NAMES  = { 1: 'الأوَّل', 2: 'الثاني', 3: 'الثالث', 4: 'الرابع' };

// Build a multiple-choice Arabic problem (shuffleArr from levels.js)
function arabicMC(question, prompt, correct, wrongPool) {
  const wrongs  = shuffleArr([...wrongPool].filter(w => w !== correct)).slice(0, 3);
  const choices = shuffleArr([correct, ...wrongs]);
  return { type: 'arabic', question, prompt, choices, answer: choices.indexOf(correct) };
}

// Generate n problems cycling through pairs [[question, answer], ...]
function genArabicPairs(pairs, prompt, answerPool, n) {
  const fresh = pairs.filter(([q]) => !_excludeQs.has(q));
  const src   = fresh.length >= Math.ceil(n / 2) ? fresh : pairs;
  const out   = [];
  while (out.length < n) {
    for (const [q, a] of shuffleArr([...src])) {
      if (out.length >= n) break;
      out.push(arabicMC(q, prompt, a, answerPool));
    }
  }
  return out;
}

// ── Grade 1: الحروف ───────────────────────────────────────────

const LETTERS_A_KHA = [
  ['أ', 'ألف'], ['ب', 'باء'], ['ت', 'تاء'], ['ث', 'ثاء'],
  ['ج', 'جيم'], ['ح', 'حاء'], ['خ', 'خاء']
];
const NAMES_A_KHA = LETTERS_A_KHA.map(p => p[1]);

const LETTERS_D_DAD = [
  ['د', 'دال'], ['ذ', 'ذال'], ['ر', 'راء'], ['ز', 'زاي'],
  ['س', 'سين'], ['ش', 'شين'], ['ص', 'صاد'], ['ض', 'ضاد']
];
const NAMES_D_DAD = LETTERS_D_DAD.map(p => p[1]);

const LETTERS_T_YA = [
  ['ط', 'طاء'], ['ظ', 'ظاء'], ['ع', 'عين'], ['غ', 'غين'],
  ['ف', 'فاء'], ['ق', 'قاف'], ['ك', 'كاف'], ['ل', 'لام'],
  ['م', 'ميم'], ['ن', 'نون'], ['ه', 'هاء'], ['و', 'واو'], ['ي', 'ياء']
];
const NAMES_T_YA = LETTERS_T_YA.map(p => p[1]);

const HARAKAT_PAIRS = [
  ['بَ', 'فَتحة'], ['تَ', 'فَتحة'], ['كَ', 'فَتحة'], ['سَ', 'فَتحة'], ['مَ', 'فَتحة'],
  ['بُ', 'ضَمَّة'], ['تُ', 'ضَمَّة'], ['كُ', 'ضَمَّة'], ['سُ', 'ضَمَّة'], ['مُ', 'ضَمَّة'],
  ['بِ', 'كَسرة'], ['تِ', 'كَسرة'], ['كِ', 'كَسرة'], ['سِ', 'كَسرة'], ['مِ', 'كَسرة'],
  ['بْ', 'سُكون'], ['تْ', 'سُكون'], ['كْ', 'سُكون'], ['سْ', 'سُكون'], ['مْ', 'سُكون']
];
const HARAKAT_NAMES = ['فَتحة', 'ضَمَّة', 'كَسرة', 'سُكون'];

// ── Grade 2: المفردات ─────────────────────────────────────────

// Show English label → pick correct Arabic word
const FAMILY_PAIRS = [
  ['father', 'أَب'], ['mother', 'أُم'],
  ['brother', 'أَخ'], ['sister', 'أُخت'],
  ['grandfather', 'جَدّ'], ['grandmother', 'جَدَّة'],
  ['uncle (dad)', 'عَمّ'], ['aunt (dad)', 'عَمَّة'],
  ['uncle (mom)', 'خَال'], ['aunt (mom)', 'خَالة']
];
const FAMILY_AR = FAMILY_PAIRS.map(p => p[1]);

const COLOR_PAIRS = [
  ['🔴 red', 'أَحمَر'], ['🔵 blue', 'أَزرَق'], ['🟢 green', 'أَخضَر'],
  ['🟡 yellow', 'أَصفَر'], ['⬜ white', 'أَبيَض'], ['⬛ black', 'أَسوَد'],
  ['🟠 orange', 'بُرتُقالي'], ['🟣 purple', 'بَنَفسَجي'],
  ['🩷 pink', 'وَردي'], ['🟤 brown', 'بُنِّي']
];
const COLOR_AR = COLOR_PAIRS.map(p => p[1]);

const NUMBER_PAIRS = [
  ['١', 'واحِد'], ['٢', 'اثنان'], ['٣', 'ثَلاثة'], ['٤', 'أَربَعة'],
  ['٥', 'خَمسة'], ['٦', 'سِتَّة'], ['٧', 'سَبعة'], ['٨', 'ثَمانية'],
  ['٩', 'تِسعة'], ['١٠', 'عَشَرة']
];
const NUMBER_WORDS = NUMBER_PAIRS.map(p => p[1]);

const ANIMAL_PAIRS = [
  ['🐱', 'قِطَّة'], ['🐶', 'كَلب'], ['🐴', 'حِصان'], ['🐮', 'بَقَرة'],
  ['🦁', 'أَسَد'], ['🐘', 'فِيل'], ['🐒', 'قِرد'], ['🐦', 'طائِر'],
  ['🐟', 'سَمَكة'], ['🐇', 'أَرنَب']
];
const ANIMAL_AR = ANIMAL_PAIRS.map(p => p[1]);

// ── Grade 3: القواعد ──────────────────────────────────────────

const GENDER_PAIRS = [
  ['طالِب', 'مُذَكَّر'], ['طالِبَة', 'مُؤَنَّث'],
  ['مُعَلِّم', 'مُذَكَّر'], ['مُعَلِّمَة', 'مُؤَنَّث'],
  ['كِتاب', 'مُذَكَّر'], ['مَدرَسَة', 'مُؤَنَّث'],
  ['وَلَد', 'مُذَكَّر'], ['بِنت', 'مُؤَنَّث'],
  ['قَلَم', 'مُذَكَّر'], ['سَيَّارَة', 'مُؤَنَّث'],
  ['بَيت', 'مُذَكَّر'], ['غُرفَة', 'مُؤَنَّث'],
  ['باب', 'مُذَكَّر'], ['شَجَرَة', 'مُؤَنَّث']
];
const GENDER_LABELS = ['مُذَكَّر', 'مُؤَنَّث'];

const PLURAL_PAIRS = [
  ['كِتاب → ___', 'كُتُب'], ['طالِب → ___', 'طُلَّاب'],
  ['بَيت → ___', 'بُيوت'], ['قَلَم → ___', 'أَقلام'],
  ['كَلب → ___', 'كِلاب'], ['يَد → ___', 'أَيدي'],
  ['عَين → ___', 'عُيون'], ['كُرسي → ___', 'كَراسي'],
  ['دَرس → ___', 'دُروس'], ['وَلَد → ___', 'أَولاد']
];
const PLURAL_ANSWERS = PLURAL_PAIRS.map(p => p[1]);

const DEF_PAIRS = [
  ['وَلَد → ___', 'الوَلَد'], ['بِنت → ___', 'البِنت'],
  ['كِتاب → ___', 'الكِتاب'], ['بَيت → ___', 'البَيت'],
  ['قَلَم → ___', 'القَلَم'], ['باب → ___', 'الباب'],
  ['كُرسي → ___', 'الكُرسي'], ['مَدرَسَة → ___', 'المَدرَسَة'],
  ['شَجَرَة → ___', 'الشَّجَرَة'], ['طالِب → ___', 'الطَّالِب']
];
const DEF_ANSWERS = DEF_PAIRS.map(p => p[1]);

// English → Arabic pronoun
const PRONOUN_PAIRS = [
  ['I', 'أنا'], ['you (m.)', 'أنتَ'], ['you (f.)', 'أنتِ'],
  ['he', 'هُوَ'], ['she', 'هِيَ'], ['we', 'نَحنُ'],
  ['they (m.)', 'هُم'], ['they (f.)', 'هُنَّ']
];
const PRONOUN_AR = PRONOUN_PAIRS.map(p => p[1]);

// ── Grade 4: الجمل ────────────────────────────────────────────

// Arabic verb → English meaning
const VERB_PAIRS = [
  ['يَكتُب', 'he writes'], ['تَكتُب', 'she writes'],
  ['يَقرَأ', 'he reads'], ['تَقرَأ', 'she reads'],
  ['يَلعَب', 'he plays'], ['تَلعَب', 'she plays'],
  ['يَذهَب', 'he goes'], ['تَذهَب', 'she goes'],
  ['يَأكُل', 'he eats'], ['تَأكُل', 'she eats'],
  ['يَشرَب', 'he drinks'], ['تَشرَب', 'she drinks'],
  ['يَجري', 'he runs'], ['تَجري', 'she runs']
];
const VERB_ENG = VERB_PAIRS.map(p => p[1]);

// Arabic question word → English meaning
const QWORD_PAIRS = [
  ['ما', 'what (thing)'], ['ماذا', 'what (action)'],
  ['مَن', 'who'], ['أَين', 'where'],
  ['مَتى', 'when'], ['كَيف', 'how'],
  ['لِماذا', 'why'], ['كَم', 'how many']
];
const QWORD_ENG = QWORD_PAIRS.map(p => p[1]);

// Context → correct demonstrative pronoun
const DEMO_PAIRS = [
  ['___ كِتاب (this — masc.)', 'هذا'],
  ['___ مَدرَسَة (this — fem.)', 'هذه'],
  ['___ بَيت (that — masc.)', 'ذلك'],
  ['___ سَيَّارَة (that — fem.)', 'تلك'],
  ['___ وَلَد (this — masc.)', 'هذا'],
  ['___ بِنت (this — fem.)', 'هذه'],
  ['___ قَلَم (that — masc.)', 'ذلك'],
  ['___ غُرفَة (that — fem.)', 'تلك'],
  ['___ طالِب (this — masc.)', 'هذا'],
  ['___ طالِبَة (this — fem.)', 'هذه']
];
const DEMO_AR = ['هذا', 'هذه', 'ذلك', 'تلك'];

// Affirmative → choose correct negation
const NEG_PAIRS = [
  ['يَكتُب → ?', 'لا يَكتُب'], ['تَكتُب → ?', 'لا تَكتُب'],
  ['يَلعَب → ?', 'لا يَلعَب'], ['يَذهَب → ?', 'لا يَذهَب'],
  ['يَقرَأ → ?', 'لا يَقرَأ'], ['يَأكُل → ?', 'لا يَأكُل'],
  ['يَشرَب → ?', 'لا يَشرَب'], ['تَذهَب → ?', 'لا تَذهَب']
];
const NEG_POOL = NEG_PAIRS.map(p => p[1]).concat(
  ['لم يَكتُب', 'لم يَذهَب', 'لم يَلعَب', 'لم يَقرَأ']
);

// ── Level definitions ─────────────────────────────────────────

const ARABIC_LEVELS = [
  // ── Grade 1 ──
  {
    id: 0, grade: 1,
    name: 'الحروف أ – خ',
    emoji: '🔤', color: '#e74c3c',
    generate: n => genArabicPairs(LETTERS_A_KHA, 'ما اسمُ هذا الحرف؟', NAMES_A_KHA, n)
  },
  {
    id: 1, grade: 1,
    name: 'الحروف د – ض',
    emoji: '🔤', color: '#c0392b',
    generate: n => genArabicPairs(LETTERS_D_DAD, 'ما اسمُ هذا الحرف؟', NAMES_D_DAD, n)
  },
  {
    id: 2, grade: 1,
    name: 'الحروف ط – ي',
    emoji: '🔤', color: '#922b21',
    generate: n => genArabicPairs(LETTERS_T_YA, 'ما اسمُ هذا الحرف؟', NAMES_T_YA, n)
  },
  {
    id: 3, grade: 1,
    name: 'الحَركات',
    emoji: '✍️', color: '#e67e22',
    generate: n => genArabicPairs(HARAKAT_PAIRS, 'ما الحَركَةُ على هذا الحرف؟', HARAKAT_NAMES, n)
  },

  // ── Grade 2 ──
  {
    id: 4, grade: 2,
    name: 'أسرة',
    emoji: '👨‍👩‍👧‍👦', color: '#27ae60',
    generate: n => genArabicPairs(FAMILY_PAIRS, 'اختَر الكَلِمَةَ العَرَبِيَّة:', FAMILY_AR, n)
  },
  {
    id: 5, grade: 2,
    name: 'الألوان',
    emoji: '🎨', color: '#8e44ad',
    generate: n => genArabicPairs(COLOR_PAIRS, 'ما اسمُ هذا اللَّون بالعَرَبِيَّة؟', COLOR_AR, n)
  },
  {
    id: 6, grade: 2,
    name: 'الأرقام',
    emoji: '🔢', color: '#2980b9',
    generate: n => genArabicPairs(NUMBER_PAIRS, 'ما هذا الرَّقم بالكَلِمات؟', NUMBER_WORDS, n)
  },
  {
    id: 7, grade: 2,
    name: 'الحيوانات',
    emoji: '🐾', color: '#16a085',
    generate: n => genArabicPairs(ANIMAL_PAIRS, 'ما اسمُ هذا الحيوان بالعَرَبِيَّة؟', ANIMAL_AR, n)
  },

  // ── Grade 3 ──
  {
    id: 8, grade: 3,
    name: 'مذكَّر ومؤنَّث',
    emoji: '⚤', color: '#d35400',
    generate(n) {
      const out = [];
      while (out.length < n) {
        for (const [word, label] of shuffleArr([...GENDER_PAIRS])) {
          if (out.length >= n) break;
          out.push(arabicMC(word, 'هذه الكَلِمَة:', label, GENDER_LABELS));
        }
      }
      return out;
    }
  },
  {
    id: 9, grade: 3,
    name: 'المُفرَد والجَمع',
    emoji: '📚', color: '#1a5276',
    generate: n => genArabicPairs(PLURAL_PAIRS, 'ما جَمعُ هذه الكَلِمَة؟', PLURAL_ANSWERS, n)
  },
  {
    id: 10, grade: 3,
    name: 'أل التَّعريف',
    emoji: '📝', color: '#1e8449',
    generate: n => genArabicPairs(DEF_PAIRS, 'أَضِف أل التَّعريف:', DEF_ANSWERS, n)
  },
  {
    id: 11, grade: 3,
    name: 'الضَّمائر',
    emoji: '👤', color: '#2471a3',
    generate: n => genArabicPairs(PRONOUN_PAIRS, 'اختَر الضَّمير العَرَبِيَّ الصَّحيح:', PRONOUN_AR, n)
  },

  // ── Grade 4 ──
  {
    id: 12, grade: 4,
    name: 'الفِعل المُضارِع',
    emoji: '🏃', color: '#6c3483',
    generate: n => genArabicPairs(VERB_PAIRS, 'ما مَعنى هذا الفِعل؟', VERB_ENG, n)
  },
  {
    id: 13, grade: 4,
    name: 'أدواتُ الاستِفهام',
    emoji: '❓', color: '#117a65',
    generate: n => genArabicPairs(QWORD_PAIRS, 'ما مَعنى هذه الأداة؟', QWORD_ENG, n)
  },
  {
    id: 14, grade: 4,
    name: 'أسماءُ الإشارة',
    emoji: '👆', color: '#ca6f1e',
    generate: n => genArabicPairs(DEMO_PAIRS, 'اختَر اسمَ الإشارَة الصَّحيح:', DEMO_AR, n)
  },
  {
    id: 15, grade: 4,
    name: 'النَّفي',
    emoji: '🚫', color: '#922b21',
    generate: n => genArabicPairs(NEG_PAIRS, 'اختَر الجُملَةَ المَنفِيَّة الصَّحيحة:', NEG_POOL, n)
  }
];
