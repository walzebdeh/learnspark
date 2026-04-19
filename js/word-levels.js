// ============================================================
// WORD-LEVELS — word level definitions, word lists, scramble
// ============================================================

const WORDS_PER_SHEET          = 10;
const WORD_SHEETS_TO_COMPLETE  = 50;
const WORD_HINT_AFTER          = 5; // wrong attempts before hint is offered
const WORD_PLACEMENT_CHECKPOINTS = [0, 1, 2, 3, 4];

function scrambleWord(word) {
  const a = word.split('');
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  const s = a.join('');
  // ensure scramble differs from original
  if (s === word) { [a[0], a[1]] = [a[1], a[0]]; return a.join(''); }
  return s;
}

function pickWords(list, n) {
  return [...list]
    .sort(() => Math.random() - .5)
    .slice(0, n)
    .map(w => ({ word: w, scrambled: scrambleWord(w) }));
}

const WORD_LEVELS = [
  {
    id: 0, name: '3-Letter Words', emoji: '🐱', color: '#ff6b6b',
    words: [
      'cat','dog','hat','sun','cup','bed','red','big','run','sit',
      'fan','pig','top','web','mud','fog','jet','hop','dig','log',
      'bug','bus','cut','fit','got','hit','hot','hug','let','lip',
      'map','nap','net','nut','pan','pat','pin','pit','pop','pot',
      'rip','rug','sad','saw','set','sky','tan','ten','tip','zip',
      'bat','bit','bun','cob','cod','cog','cot','den','dip','dot',
      'elf','elm','fig','fin','fix','fun','gap','gem','gym','hen',
      'hex','hub','hum','ice','ivy','jam','jar','jaw','jot','jug',
    ],
    generate() { return pickWords(this.words, WORDS_PER_SHEET); },
    hint: w => `Starts with "${w[0].toUpperCase()}"`
  },
  {
    id: 1, name: '4-Letter Words', emoji: '🐸', color: '#ffa94d',
    words: [
      'cake','bike','frog','ship','drum','star','flag','hand','ring','jump',
      'blue','play','rain','tree','bird','fish','duck','ball','book','door',
      'bear','belt','blow','bold','bone','born','bowl','burn','bush','calm',
      'card','care','cart','cave','chat','chip','city','clip','club','coal',
      'coat','cold','cook','cool','copy','cord','corn','crab','crop','cube',
      'curl','cute','dare','dark','dawn','dear','deck','diet','dine','dirt',
      'dish','dive','dock','doll','dome','dove','draw','drip','drop','dusk',
      'dust','earl','earn','ease','east','easy','edge','face','fact','fade',
      'fail','fair','fake','fall','fame','farm','fast','fate','fear','feat',
      'feel','feet','fern','fill','film','find','fine','firm','fist','five',
      'flat','flip','flow','foam','fold','folk','food','fool','foot','ford',
      'form','fort','four','free','fuel','full','gale','game','gear','gift',
      'glee','glow','glue','goal','gold','golf','good','gold','grab','grin',
      'grip','grow','gulf','gust','hack','hall','harm','harp','hawk','head',
    ],
    generate() { return pickWords(this.words, WORDS_PER_SHEET); },
    hint: w => `Starts with "${w[0].toUpperCase()}" (${w.length} letters)`
  },
  {
    id: 2, name: '5-Letter Words', emoji: '🦋', color: '#51cf66',
    words: [
      'plant','chair','apple','bread','clock','drink','earth','field','floor','ghost',
      'grape','horse','light','money','night','ocean','phone','queen','river','smile',
      'about','after','again','alone','angel','angry','ankle','apart','arrow','badly',
      'being','below','bench','berry','birth','black','blank','blast','blaze','blind',
      'block','blood','bloom','board','brain','brand','brave','break','bride','brief',
      'bring','broad','brush','build','burst','cabin','candy','carry','catch','cause',
      'chain','cheap','check','chest','child','clean','clear','climb','close','cloud',
      'clown','coast','color','coral','count','court','crack','craft','crane','crash',
      'crazy','cream','crime','cross','crowd','crown','crush','curve','cycle','dance',
      'delay','depth','dirty','dodge','doubt','draft','drain','drama','drawn','dream',
      'dress','drive','eager','eagle','early','eight','empty','enemy','enjoy','every',
      'exact','extra','fable','fairy','faith','false','fancy','feast','fence','fever',
      'fifth','fifty','fight','final','first','fixed','flame','flash','float','flood',
      'flute','force','forge','found','frame','frank','fresh','fruit','funny','giant',
      'glass','glaze','gleam','glide','globe','grace','grade','grand','grant','grass',
    ],
    generate() { return pickWords(this.words, WORDS_PER_SHEET); },
    hint: w => `First letter: "${w[0].toUpperCase()}" — ${w.length} letters`
  },
  {
    id: 3, name: '6-Letter Words', emoji: '🦊', color: '#339af0',
    words: [
      'basket','bottle','bridge','butter','castle','cheese','cherry','church','clouds','cotton',
      'donkey','dragon','finger','forest','garden','hammer','island','jacket','jungle','kitten',
      'almost','bright','broken','bronze','bubble','budget','button','camera','candle','canvas',
      'career','carpet','cattle','change','charge','choice','circle','clever','column','combat',
      'corner','couple','course','cousin','cowboy','detail','dinner','double','driver','during',
      'empire','escape','fallen','famous','father','figure','flight','flower','follow','frozen',
      'gather','gentle','golden','happen','hidden','higher','honest','hunter','injury','insect',
      'joined','keeper','launch','leader','lesson','listen','little','meadow','middle','mirror',
      'moment','monkey','mother','museum','nation','nearby','orange','parent','parrot','pepper',
      'person','picnic','pigeon','planet','player','police','potato','pretty','prince','prison',
      'rabbit','rescue','secret','select','silver','simple','singer','single','sister','smooth',
      'soccer','social','spider','spring','square','street','strong','summer','switch','symbol',
      'system','target','temple','tennis','theory','throat','timber','tongue','travel','turtle',
      'twenty','unique','valley','varied','vendor','victim','violet','visual','wallet','window',
      'winter','wisdom','wonder','wooden','writer','yellow','zipper','zodiac','zombie','zoning',
    ],
    generate() { return pickWords(this.words, WORDS_PER_SHEET); },
    hint: w => `First: "${w[0].toUpperCase()}", Last: "${w[w.length-1].toUpperCase()}"`
  },
  {
    id: 4, name: '7-Letter Words', emoji: '🦁', color: '#cc5de8',
    words: [
      'blanket','chicken','diamond','dolphin','feather','freedom','gallery','morning','nothing','pancake',
      'penguin','rainbow','present','kitchen','problem','already','amazing','another','awesome','because',
      'bedroom','brother','buffalo','builder','captain','cartoon','century','chapter','company','content',
      'correct','counter','country','curious','curtain','decided','destroy','digital','disease','distant',
      'drawing','dreamer','eastern','element','emperor','episode','evening','example','factory','fantasy',
      'fashion','feeling','finally','frosted','further','general','glitter','gravity','grocery','harvest',
      'hearing','history','holiday','however','hundred','husband','imagine','kingdom','knowing','leather',
      'library','machine','managed','meaning','message','missing','monster','musical','mystery','natural',
      'officer','outside','package','painter','partner','passage','patient','pattern','payment','perhaps',
      'picture','pitcher','playing','popular','pottery','pretend','private','program','project','protect',
      'provide','publish','purpose','quarter','quickly','reading','reality','receive','recover','reflect',
      'request','reserve','respect','restore','retired','revenge','reverse','rolling','roughly','royalty',
      'sailing','serious','service','shelter','shortly','silence','similar','singing','someone','somehow',
      'special','stadium','started','station','staying','stomach','strange','student','success','surface',
      'teacher','telling','thought','thunder','tonight','towards','traffic','trouble','trumpet','twinkle',
    ],
    generate() { return pickWords(this.words, WORDS_PER_SHEET); },
    hint: w => `First letter: "${w[0].toUpperCase()}" — ${w.length} letters`
  },
];
