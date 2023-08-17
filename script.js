const topLane = document.querySelector('#top');
const jgLane = document.querySelector('#jg')
const midLane = document.querySelector('#mid')
const adcLane = document.querySelector('#adc')
const supLane = document.querySelector('#sup')

const topChampions=[
  'aatrox',
  'akali',
  'akshan',
  'camille',
  'chogath',
  'darius',
  'dr mundo',
  'fiora',
  'gangplank',
  'garen',
  'gnar',
  'gragas',
  'gwen',
  'heimerdinger',
  'illaoi',
  'irelia',
  'jax',
  'jayce',
  'ksante',
  'kayle',
  'kennen',
  'kled',
  'malphite',
  'mordekaiser',
  'naafiri',
  'nasus',
  'olaf',
  'ornn',
  'pantheon',
  'poppy',
  'quinn',
  'renekton',
  'rengar',
  'riven',
  'rumble',
  'sett',
  'shen',
  'shyvana',
  'singed',
  'sion',
  'tahm kench',
  'trundle',
  'tryndamere',
  'urgot',
  'vayne',
  'vladimir',
  'volibear',
  'warwick',
  'wukong',
  'yasuo',
  'yone',
  'yorick',
  'zac'
]

const jgChampions =[
  'amumu',
  'belveth',
  'diana',
  'dr mundo',
  'ekko',
  'elise',
  'evelynn',
  'fiddlesticks',
  'gragas',
  'graves',
  'hecarim',
  'ivern',
  'jarvan iv',
  'jax',
  'karthus',
  'kayn',
  'khazix',
  'kindred',
  'lee sin',
  'lillia',
  'maokai',
  'master yi',
  'mordekaiser',
  'nidalee',
  'nocturne',
  'nunu',
  'pantheon',
  'poppy',
  'naafiri',
  'rammus',
  'reksai',
  'rengar',
  'sejuani',
  'shaco',
  'shyvana',
  'skarner',
  'sylas',
  'talyah',
  'talon',
  'teemo',
  'trundle',
  'twitch',
  'udyr',
  'vi',
  'viego',
  'volibear',
  'warwick',
  'wukong',
  'xin zhao',
  'zac',
  'zed',
]

const midChampions =[
  'ahri',
  'akali',
  'akshan',
  'anivia',
  'annie',
  'aurelion sol',
  'azir',
  'brand',
  'cassiopeia',
  'chogath',
  'naafiri',
  'corki',
  'diana',
  'ekko',
  'fizz',
  'galio',
  'gangplank',
  'garen',
  'gragas',
  'heimerdinger',
  'irelia',
  'jayce',
  'karma',
  'kassadin',
  'katarina',
  'leblanc',
  'lissandra',
  'lucian',
  'lux',
  'malphite',
  'malzahar',
  'neeko',
  'orianna',
  'pantheon',
  'qyana',
  'renekton',
  'rumble',
  'ryze',
  'sett',
  'singed',
  'swain',
  'sylas',
  'syndra',
  'taliyah',
  'talon',
  'tristana',
  'tryndamere',
  'twisted fate',
  'varus',
  'veigar',
  'velkoz',
  'vex',
  'viego',
  'viktor',
  'vladimir',
  'xerath',
  'yasuo',
  'yone',
  'zed',
  'ziggs',
  'zoe',
]

const adcChampions =[
  'aphelios',
  'ashe',
  'caitlyn',
  'draven',
  'ezreal',
  'jhin',
  'jinx',
  'kaisa',
  'kalista',
  'kogmaw',
  'lucian',
  'miss fortune',
  'nilah',
  'samira',
  'syndra',
  'sivir',
  'tristana',
  'twitch',
  'varus',
  'vayne',
  'veigar',
  'xayah',
  'yasuo',
  'zeri',
  'ziggs',
]

const supChampions = [
  'alistar',
  'amumu',
  'ashe',
  'bard',
  'blitzcrank',
  'brand',
  'braum',
  'heimerdinger',
  'janna',
  'karma',
  'leona',
  'lulu',
  'maokai',
  'miss fortune',
  'morgana',
  'nami',
  'nautilus',
  'pantheon',
  'pyke',
  'rakan',
  'rell',
  'renata glasc',
  'senna',
  'seraphine',
  'sett',
  'shaco',
  'sona',
  'milio',
  'soraka',
  'swain',
  'tahm kench',
  'taric',
  'thresh',
  'velkoz',
  'xerath',
  'yuumi',
  'zac',
  'zilean',
  'zyra',
]

//i've used the variable topTest in of the roles because for some reason i can't explain its already reserved in the script//
const topTest = 'top';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const jungle = 'jungle';
const mid = 'mid';
const adc = 'adc';
const support = 'support';

const randomChampion = (champions) =>
{
  return champions[Math.floor(Math.random()*champions.length)];
}


const shuffleRole = (champions) =>{

  let shuffledChampion = randomChampion(champions);

  let championIcon = document.querySelector('.champion-icon');
  let championName = document.querySelector('.champion-name');

  championIcon.setAttribute('src', `images/${shuffledChampion}.png`);
  championName.innerText =`${shuffledChampion.toUpperCase()}`
}

const addLink = (role) =>
{
  // i've created the championBrute variable to treat the champion name html div and transform into string and pass to the op.gg link
  let championBrute = document.querySelector('.champion-name').textContent;
  let linkButton = document.querySelector('.link');
  
  let championLink = championBrute.toLowerCase();

  linkButton.href = `https://www.op.gg/champions/${championLink}/${role}/build?region=global&tier=platinum_plus`
}

const shuffleTop = () =>
{
  shuffleRole(topChampions)
  addLink(topTest)
}

const shuffleJg = () =>
{
    shuffleRole(jgChampions)
    addLink(jungle)
}

  const shuffleMid = () =>
  {
    shuffleRole(midChampions)
    addLink(mid)
  }

  const shuffleAdc = () =>
  {    
   shuffleRole(adcChampions)
   addLink(adc);
  }

  const shuffleSup = () =>
  {
    shuffleRole(supChampions)
    addLink(support)

  }

topLane.addEventListener('click', shuffleTop)
jgLane.addEventListener('click', shuffleJg);
midLane.addEventListener('click', shuffleMid);
adcLane.addEventListener('click', shuffleAdc);
supLane.addEventListener('click', shuffleSup);