const TERMS_ROUTE = 'https://www.twitter.com';
const PRIVACY_ROUTE = 'https://www.facebook.com';

const inputs = [
  {
    placeholder: 'First Name',
    name: 'fname',
    maxlength: 15,
    keyboard: 'default',
  },
  {
    placeholder: 'Last Name',
    name: 'lname',
    maxlength: 15,
    keyboard: 'default',
  },
  {
    placeholder: 'Email',
    name: 'email',
    maxlength: 30,
    keyboard: 'email-address',
  },
];

const options = [
  {
    name: 'Paid',
    info: 'Full library access at 350/-',
    features: ['850+ words', 'Test', 'Revisions'],
    cost: '₹350',
  },
  {
    name: 'Trail',
    info: 'A 15 day trail period with limited access',
    features: ['30 words', 'Tests (till 30 words)'],
    cost: 'Free',
  },
];

const SettingRoutes = [
  {
    id: '1',
    route: 'Doc',
    title: 'Privacy Policy',
    routeLink: PRIVACY_ROUTE,
    icon: 'ios-document',
  },
  {
    id: '2',
    route: 'Doc',
    title: 'Terms of Usage',
    routeLink: TERMS_ROUTE,
    icon: 'ios-lock',
  },
  {
    id: '4',
    route: 'Credits',
    title: 'Credits',
    routeLink: '',
    icon: 'ios-ribbon',
  },
  {
    id: '5',
    route: 'About',
    title: 'About',
    routeLink: '',
    icon: 'md-information-circle-outline',
  },
  {
    id: '3',
    route: 'DeleteAccount',
    title: 'Delete Account',
    routeLink: '',
    icon: 'ios-trash',
  },
];

const btnArray = [
  {
    id: 1,
    name: 'Favourites',
    color: '#C709C0',
    route: 'Favourites',
    icon: 'ios-heart',
  },
  {
    id: 2,
    name: 'Scores',
    color: '#2587C2',
    route: 'Scores',
    icon: 'ios-create',
  },
  {
    id: 3,
    name: 'Membership',
    color: '#FB823A',
    route: 'Membership',
    icon: 'md-cart',
  },
];

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
);

const DATA = [
  {
    id: 1,
    wordNumber: '001',
    word: 'altruistic',
    wordRoot: [
      'alt → another, other, second',
      '-u  →  connective',
      ' istic  →  characterized by',
    ],
    meaning: 'showing unselfish concern for the welfare of others',
    context:
      "Someone who is altruistic always puts others first. An altruistic firefighter risks his life to save another's life, while an altruistic mom gives up the last bite of pie so her kid will be happy.",
    videoLink: 'J61mtatKT1I',
    videoText: 'Sci Show: Why are people and animals altruistic?',
    shorts: [
      {
        id: '1.1.1',
        picLink: require('../Images/altruistic1.jpeg'),
        heading:
          "Lil Bub's Owner Plans to Rocket the Late Cat's Remains Into Outer Space",
        content:
          "Lil Bub's owner has an out-of-this-world idea for the late cat's remains. Following the death of the Instagram-famous cat on Sunday, Mike Bridavsky, the owner of the altruistic animal, hopes to send Bub's ashes into orbit inside a satellite - and he's workin...",
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
      {
        id: '1.1.2',
        picLink: require('../Images/altruistic2.jpeg'),
        heading:
          "Married couple Teams Up to Donate Kidneys to Strangers: 'We Knew It Would Be a Good Thing'",
        content:
          "Frank and Cheryl Cohen, a married couple from New Jersey who both elected to donate a kidney earlier this year, are both hoping to inspire others to become altruistic kidney donors by providing a lifesaving organ to a complete stranger. “Frank and I, we're n...",
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
      {
        id: '1.1.3',
        picLink: require('../Images/altruistic3.jpeg'),
        heading:
          "Turn the 'getting' season into 'gratitude' season with help from Twin Cities nonprofit",
        content:
          'Sarah Aadland has gathered loads of research confirming that altruistic kids are happy kids. And what better time than December to practice?',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
    ],
    news: [
      {
        id: '1.2.1',
        publisher: 'Science Magazine',
        date: 'Mar 24, 2020',
        articleLink:
          'https://www.sciencemag.org/news/2020/03/researchers-are-tracking-another-epidemic-too-misinformation',
        headline:
          'For a lot of people, participation in the process is altruistic.',
      },
      {
        id: '1.2.2',
        publisher: 'New York Times',
        date: 'Mar 19, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
        headline:
          'A way to break isolation is to do something altruistic for someone else, like an elderly person in your building.',
      },
      {
        id: '1.2.3',
        publisher: 'Los Angeles Times',
        date: 'Mar 19, 2020',
        articleLink:
          'https://www.latimes.com/science/story/2020-03-19/adapting-life-with-the-coronavirus',
        headline: '“It is a very altruistic thing to do,” she said.',
      },
      {
        id: '1.2.4',
        publisher: 'Salon',
        date: 'Mar 15, 2020',
        articleLink:
          'https://www.salon.com/2020/03/15/how-coronavirus-is-upsetting-the-blood-supply-chain_partner/',
        headline:
          'It requires altruistic donations, collection, testing, processing and distribution to hospitals and medical centers.',
      },
    ],
    question: 'Synonym of Altruisitc?',
    options: ['Unselfish', 'Egoistic', 'Self centered'],
    ans: 0,
    funFact:
      'This word comes from the Old French altruistic and means "other people" and before that the Latin alter, which means "other." Our current word comes from the nineteenth century and comes from philosophy. It means that its important for people to be concerned with the good of others and to act unselfishly. When the word refers to the animal world, it means behavior that may actually harm the individual animal but will benefit the species in general. This is a truly selfless act!',
  },
  {
    id: 2,
    wordNumber: '002',
    word: 'Antiquated',
    wordRoot: ['Antiqu → old', 'Ed → having a particular state'],
    meaning: 'old-fashioned or outdated',
    context:
      "Something is antiquated when it is so old that it is no longer useful. If your parents believe that you shouldn't use the Internet when you write papers for school, you might call their ideas antiquated",
    videoLink: 'J61mtatKT1I',
    videoText:
      'AFP News Agency: This music store hopes some day to bring back the cassette, an antiquated format for music',
    shorts: [
      {
        id: '2.1.1',
        picLink: require('../Images/antiquated1.jpeg'),
        heading:
          "Dancing Astronaut's BIG 100-Top 25 Electronic Albums of the Decade",
        content:
          "The 25 electronic albums from the '10s that proved that the album sure as hell isn't antiquated",
        newsLink:
          'https://www.nytimes.com/2020/03/18/arts/design/how-to-save-museums.html',
      },
      {
        id: '2.1.2',
        picLink: require('../Images/antiquated2.jpeg'),
        heading:
          'The smart cities challenge: How tech will update antiquated infrastructures',
        content:
          'TechRepublic A CES 2020 panel discussed how blending new tech into established, sometimes crumbling infrastructures, offers renewable solutions.',
        newsLink:
          'https://www.washingtonpost.com/outlook/five-myths/myths-antitrust-law-amazon-google-monopoly/2020/03/20/ead2a072-6a1a-11ea-9923-57073adce27c_story.html',
      },
      {
        id: '2.1.3',
        picLink: require('../Images/antiquated3.jpeg'),
        heading:
          "Apple said to be prepping 5.4-inch 'iPhone SE 2' with Face ID",
        content:
          "Apple is prepping an iPhone 8 update that replaces the antiquated Home button with a modern True Depth camera module with Face ID, enabling a larger 5.4-inch display... The post Apple said to be prepping 5.4-inch 'iPhone SE 2' with Face ID appeared first on MacD...",
        newsLink:
          'https://www.salon.com/2020/03/07/can-multi-party-democracy-break-us-out-of-the-doom-loop-of-american-politics/',
      },
    ],
    news: [
      {
        id: '2.2.1',
        publisher: 'New York Times',
        date: 'Mar 18, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/18/arts/design/how-to-save-museums.html',
        headline:
          'This was evident when, earlier this year, Yale University’s History of Art department eliminated a revered but, in the department’s view antiquated, undergraduate survey course called “Introduction to Art History: Renaissance to the Present"',
      },
      {
        id: '2.2.2',
        publisher: 'Washington Post',
        date: 'Mar 20, 2020',
        articleLink:
          'https://www.washingtonpost.com/outlook/five-myths/myths-antitrust-law-amazon-google-monopoly/2020/03/20/ead2a072-6a1a-11ea-9923-57073adce27c_story.html',
        headline:
          'Axios recently remarked on the “bipartisan consensus . . . that antitrust law is antiquated, written for an analog world of railroad and tobacco giants.”',
      },
      {
        id: '2.2.3',
        publisher: 'Salon',
        date: 'Mar 7, 2020',
        articleLink:
          'https://www.salon.com/2020/03/07/can-multi-party-democracy-break-us-out-of-the-doom-loop-of-american-politics/',
        headline:
          'Our own democracy, with its antiquated winner-take-all or first-past-the-post system, is actually an outlier among more functional systems that use some form of proportional representation.',
      },
      {
        id: '2.2.4',
        publisher: 'Washington Times',
        date: 'Mar 6, 2020',
        articleLink:
          'https://www.washingtontimes.com/news/2020/mar/6/beatles-auction-to-include-stage-that-hosted-bands/',
        headline:
          'Beatles fans hoping to bid on a more antiquated piece of music history are in luck as well.',
      },
    ],
    question: 'Synonym of Antiquated?',
    options: ['Archaic', 'Latest (newest)', 'Solved'],
    ans: 0,
    funFact:
      "Something is antiquated when it is so old, it's like an antique or recognizable from another era and has the negative feel of being thoroughly outmoded. Things like typewriters, sealing wax for letters, and ideas of proper etiquette all seem antiquated in modern society. Currently, things get antiquated ever faster — 5-inch floppy disks for computers and dial-up modems were very modern fifteen years ago, but now they're antiquated.",
  },
  {
    id: 3,
    wordNumber: '003',
    word: 'Archipelago',
    wordRoot: ['Arch → chief, principal', 'Pelag → sea'],
    meaning: 'a group of many islands',
    context:
      "Wouldn't it be great to build your dream house in the Galapagos archipelago?",
    videoLink: 'J61mtatKT1I',
    videoText: 'Hawaiian islandsThe Hawaiian islands are an archipelago.',
    shorts: [
      {
        id: '3.1.1',
        picLink: require('../Images/archipelago.jpeg'),
        heading: 'Polar bear shot dead in Svalbard',
        content:
          'A polar bear was shot dead and killed in the early hours of the new year’s day on the Norwegian artic archipelago of Svalbard',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
    ],
    news: [
      {
        id: '3.2.1',
        publisher: 'Fox News',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.foxnews.com/media/hawaii-ultra-vulnerable-considering-travel-ban-affecting-mainland-us',
        headline:
          'After the first incidents of community spread of coronavirus were reported in Hawaii, the state government is considering suspending all non-essential travel to the archipelago and to quarantine arrivals there.',
      },
      {
        id: '3.2.2',
        publisher: 'New York Times',
        date: 'Mar 14, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/14/arts/television/whats-on-tv-saturday.html',
        headline:
          'The first puts the lens on New England’s striking colors and the diverse inhabitants of its trees; the remaining two episodes highlight Svalbard, a Norwegian archipelago, and Okavango, a river delta in Botswana.',
      },
      {
        id: '3.2.3',
        publisher: 'New York Times',
        date: 'Mar 10, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/10/world/europe/greece-migrants-secret-site.html',
        headline:
          'Hundreds of miles to the south, in the straits of the Aegean Sea between the Turkish mainland and an archipelago of Greek islands, the Greek Coast Guard is also using force.',
      },
      {
        id: '3.2.4',
        publisher: 'Reuters',
        date: 'Mar 7, 2020',
        articleLink:
          'https://www.reuters.com/article/us-portugal-quake-idUSKBN20U0XY',
        headline:
          'Madeira, an archipelago of four islands off the northwest coast of Africa, is home to just under 270,000 people and is visited by a million tourists each year.',
      },
    ],
    question: 'Meaning of Archipelago?',
    options: ['Group of Islands', 'Isolated Island', 'Island'],
    ans: 0,
    funFact:
      'It seems that archipelago came from the Italian Arciplago, the name for the Aegean Sea, which is full of many many islands. Somehow that became the word for any sea that is chock-full of islands. You can also use archipelago to indicate some other grouping that involves neither islands nor water but is similar to them. Your little sister might create an archipelago of Lego buildings on your living room carpet.',
  },
  {
    id: 4,
    wordNumber: '004',
    word: 'Rampant',
    wordRoot: ['ramp → rise up', 'ant → being in a state or condition'],
    meaning: 'Rampant means wild or out of control.',
    context:
      'Rampant means wild or out of control. Unruly children might run rampant at the supermarket, knocking cereal boxes off shelves and thoroughly annoying the customers.',
    videoLink: 'J61mtatKT1I',
    videoText: 'Charly Technology is rampant.',
    shorts: [
      {
        id: '4.1.1',
        picLink: require('../Images/rampant1.jpeg'),
        heading:
          'Former Grammys CEO alleges rampant sexual misconduct, discrimination, corruption within the Grammys',
        content:
          'Deborah Dugan alleges that the Grammys is plagued with a culture of racial and gender-based discrimination, and that artists like Ariana Grande and Ed Sheeran have been sidelined by voter corruption',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
      {
        id: '4.1.2',
        picLink: require('../Images/rampant2.jpeg'),
        heading:
          'Ex-manager at Soho salon claims workplace was racist to black staff, clients',
        content:
          'Charisse Samuel says she started with the company in 2015 and while working at the DevaCurl salon on Broome Street called, Devachan, she saw rampant racism by white employees toward black staff and clients, according to her Manhattan Supreme Court lawsuit.',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
    ],
    news: [
      {
        id: '4.2.1',
        publisher: 'Los Angeles Times',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.latimes.com/world-nation/story/2020-03-23/coronavirus-response-texas-florida-california-new-york',
        headline:
          'Hidalgo worries Texas will soon look like Italy, with rampant coronavirus infections and deaths, especially in places like the county jail.',
      },
      {
        id: '4.2.2',
        publisher: 'Salon',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.salon.com/2020/03/23/meghan-mccain-announces-she-is-pregnant-after-suffering-a-miscarriage-last-year/',
        headline:
          '"The comments made by President Trump intensifies the xenophobia and racism that\'s become rampant against Asians and Asian Americans globally," Rosalind Chou, a sociology professor at Georgia State University, told Salon last week.',
      },
      {
        id: '4.2.3',
        publisher: 'The Guardian',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.theguardian.com/stage/2020/mar/23/rosie-o-donnell-broadway-livestream',
        headline:
          'Sound delay was rampant, picture quality was iffy, the lighting mostly dismal.',
      },
      {
        id: '4.2.4',
        publisher: 'Washington Times',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.washingtontimes.com/news/2020/mar/23/travel-hub-uae-to-halt-flights-as-virus-reaches-ga/',
        headline:
          'Poverty is rampant and many medical facilities are barely functioning.',
      },
    ],
    question: 'Synonym of rampant?',
    options: ['Uncontrolled growth', 'Slow spread', 'Controlled fast growth'],
    ans: 0,
    funFact:
      "If you're running rampant, you're on a rampage. Both come from the French word ramper meaning 'to climb, creep' like an animal on hind legs, paws in climbing-mode, or like wild plants such as the kudzu that ran rampant over an old barn until the entire thing was covered. There can also be rampant wildfires that destroy houses in the Southwest, or robots that run rampant in the lab after the janitor accidentally sets them free.",
  },
  {
    id: 5,
    wordNumber: '005',
    word: 'Punitive',
    wordRoot: ['pun → punished', 'ive → of or that which does something'],
    meaning: 'inflicting or intended as punishment.',
    context:
      "Punitive describes inflicting a punishment. If someone takes punitive action against you, you'll probably whine and complain — you're in trouble and you're about to get punished",
    videoLink: 'J61mtatKT1I',
    videoText:
      'Orange is the New Black: The officer insists that her move to Virginia is not punitive in nature.',
    shorts: [
      {
        id: '5.1.1',
        picLink: require('../Images/punitive1.jpeg'),
        heading:
          'Schwartzberg | Luther: Riverside Man Wins $8.5 Million Verdict After Insurance Company Denies His RV Damage Claim ',
        content:
          'RIVERSIDE, Calif.-(BUSINESS WIRE)-A Riverside jury awarded an $8.46 million verdict, including $8 million in punitive damages, to a Riverside man whose insurance claim on his fire-damaged RV was denied by an insurance company acting in bad faith',
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
      {
        id: '5.1.2',
        picLink: require('../Images/punitive2.jpeg'),
        heading:
          'Lack of popular majority forbids majoritarian govt: Pranab Mukherjee',
        content:
          'Former President Pranab Mukherjee statement comes amid the central government is facing countrywide flak for taking punitive action against university students and protests in the North-East states against the recently amended Citizenship Act.',
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
    ],
    news: [
      {
        id: '5.2.1',
        publisher: 'New York Times',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
        headline:
          'The data showed two clear vulnerabilities for Mr. Biden: his past support for overhauling Social Security, and his authorship of a punitive criminal justice law in the 1990s.',
      },
      {
        id: '5.2.2',
        publisher: 'Salon',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.salon.com/2020/03/21/prosecutors-covid-19s-threat-to-millions-of-incarcerated-people-needs-to-be-addressed-now/',
        headline:
          'The overcrowding of our jails and prisons are due in no small part to harsh punitive policies historically embraced by prosecutors',
      },
      {
        id: '5.2.3',
        publisher: 'Washington Times',
        date: 'Mar 18, 2020',
        articleLink:
          'https://www.washingtontimes.com/news/2020/mar/23/travel-hub-uae-to-halt-flights-as-virus-reaches-ga/',
        headline:
          'The bill “protects the Idaho taxpayer from judgments of the courts that are without limits and that become punitive in nature,” Anthon told fellow senators.',
      },
      {
        id: '5.2.4',
        publisher: 'Los Angeles Times',
        date: 'Mar 18, 2020',
        articleLink:
          'https://www.latimes.com/entertainment-arts/business/story/2020-03-18/linda-fairstein-central-park-five-was-the-villain-in-when-they-see-us-now-shes-suing-netflix-ava-duvernay',
        headline:
          'The lawsuit is seeking unspecified damages, including punitive damages, as well as injunctive relief against further alleged defamation by DuVernay and the other defendants.',
      },
    ],
    question: 'Synonym of Punitive?',
    options: ['Punishment', 'Rehabilitation', 'Holiday'],
    ans: 0,
    funFact:
      'An easy way to remember the meaning of punitive is that it looks like the word punish — both come from the Latin root word punire, "to inflict a penalty on." Punitive doesn\'t always refer to a person-to-person punishment, like a mom disciplining a child. It can also describe the unpleasant result of an action on a large scale, like the punitive effect higher taxes will have on the middle class.',
  },
  {
    id: 6,
    wordNumber: '006',
    word: 'Mundane',
    wordRoot: ['Mund → world', 'ane → of or pertaining to'],
    meaning: 'lacking interest or excitement; dull.',
    context:
      'An ordinary, unexciting thing can be called mundane: "Superman hid his heroic feats by posing as his mundane alter ego, Clark Kent."',
    videoLink: 'J61mtatKT1I',
    videoText: 'Andy Warhol\'s "Eat" A pretty mundane scene.',
    shorts: [
      {
        id: '6.1.1',
        picLink: require('../Images/mundane1.jpeg'),
        heading:
          'Animal-Human Hybrids Spotted on New York Subway in Surreal Paintings by Matthew Grabelsky',
        content:
          'Los Angeles-based artist Matthew Grabelsky ( previously) is back with a new collection of oil paintings of people with animal heads casually navigating the New York City subway system. The paintings combine the mundane with the surreal, as others on the comm...',
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
      {
        id: '6.1.2',
        picLink: require('../Images/mundane2.jpeg'),
        heading:
          'As robots take over warehousing, workers pushed to adapt NORTH HAVEN, Conn. (AP)',
        content:
          "Robots haven't replaced warehouse workers yet, but they're here - and they need some human supervision. Doing your job side-by-side with robots isn't easy. According to their makers, the machines should take on the most mundane and...",
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
      {
        id: '6.1.3',
        picLink: require('../Images/mundane3.jpeg'),
        heading: 'Weekly Menu Planning - January 2020',
        content:
          'Aww, Thanks! Life can be crazy but we love it! For the record, I had hot dog buns in the freezer but when I took them out before dinner they were moldy? The girls think indoor picnics are such an adventure that a very mundane meal is now super exciting. ',
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
    ],
    news: [
      {
        id: '6.2.1',
        publisher: 'Los Angeles Times',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.latimes.com/sports/ucla/story/2020-03-23/even-with-no-games-something-fun-is-bruin-with-ucla-announcer-josh-lewin',
        headline:
          'Lewin happily obliged, adding his own humorous spin as the soundtrack to videos depicting mundane everyday occurrences.',
      },
      {
        id: '6.2.2',
        publisher: 'New York Times',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/21/us/coronavirus-national-guard.html',
        headline:
          'But Guard members are currently being ordered to complete tasks that are much more mundane.',
      },
      {
        id: '6.2.3',
        publisher: 'BBC',
        date: 'Mar 21, 2020',
        articleLink: 'https://www.bbc.co.uk/news/uk-51991566',
        headline:
          'We need to find new routines and systems for once mundane tasks.',
      },
      {
        id: '6.2.4',
        publisher: 'Los Angeles Times',
        date: 'Mar 18, 2020',
        articleLink:
          'https://www.latimes.com/entertainment-arts/tv/story/2020-03-18/best-tv-shows-streaming-binge-coronavirus-tips',
        headline:
          'When the mundane stuff of life starts to look like a horror movie, turn to a guy who views grocery shopping as an immersive theatrical spectacular — and the show that delivers on that vision.',
      },
    ],
    question: 'Synonym of mundane?',
    options: ['Daily boring routine', 'Exciting', 'Enthrall'],
    ans: 0,
    funFact:
      'Mundane, from the Latin word mundus, "world," originally referred to things on earth. Such things were supposed to be uninteresting when compared to the delights of Heaven; hence the word\'s present meaning. Writing about reality TV shows, a Newsweek writer opined, "In reality bizarro-world, the mundane is presented as the spectacular" — in other words, people\'s everyday routines are now televised as entertainment.',
  },
  {
    id: 7,
    wordNumber: '007',
    word: 'Bolster',
    wordRoot: ['bolster → cushion', 'Cushion is used to support the body'],
    meaning: 'To bolster is to offer support or strengthen.',
    context:
      "When you cheer up a friend who's feeling down, you bolster them. To bolster is to offer support or strengthen.",
    videoLink: 'J71mtatKT1I',
    videoText:
      "ABC World News- Are women the key factor for bolstering a company's bottom line?",
    shorts: [
      {
        id: '7.1.1',
        picLink: require('../Images/mundane1.jpeg'),
        heading: 'Justice Dept. memos back defiance of impeachment subpoenas',
        content:
          'WASHINGTON - The White House on Monday released Justice Department legal opinions meant to bolster its case for defying subpoenas from Congress in the impeachment inquiry of President Donald Trump.',
        newsLink:
          'https://www.nytimes.com/2020/03/21/us/politics/bernie-sanders-democrats-2020.html',
      },
    ],
    news: [
      {
        id: '7.2.1',
        publisher: 'Reuters',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.reuters.com/article/us-health-coronavirus-space-idUSKBN21A3YZ',
        headline:
          'As the pandemic evolves, the agency is considering plans to bolster the health stabilization checks.',
      },
      {
        id: '7.2.2',
        publisher: 'Reuters',
        date: 'Mar 23, 2020',
        articleLink:
          'https://www.reuters.com/article/us-health-coronavirus-treasuries-analysi-idUSKBN21A3W8',
        headline:
          'The Fed began stepping in with a rate cut in early March, followed by increasingly drastic measures to bolster market conditions.',
      },
      {
        id: '7.2.3',
        publisher: 'Washington Post',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.washingtonpost.com/business/2020/03/21/nursing-home-coronavirus-deaths/',
        headline:
          'As senior care centers across the country scrambled this week to bolster their defenses against the coronavirus, dozens discovered it already was inside.',
      },
      {
        id: '7.2.4',
        publisher: 'Washington Post',
        date: 'Mar 22, 2020',
        articleLink:
          'https://www.washingtonpost.com/us-policy/2020/03/22/vast-coronavirus-stimulus-bill-limbo-crunch-times-arrives-capitol-hill/',
        headline:
          'It would also send $1,200 checks to many Americans, bolster the unemployment insurance system, and disburse a broad range of emergency funds to help reinforce hospitals and other areas.',
      },
    ],
    question: 'Synonym of bolster?',
    options: ['To Re-inforce', 'To break', 'Loquacious'],
    ans: 0,
    funFact:
      "A bolster is also the name of a long pillow you might use to make your back feel better. And the two uses are not dissimilar. When you bolster your friends, you support them and prop them up, just like the pillow does for your back. When you're trying to bolster your credibility, you find people and/or documents that support you or your view. Bolster efforts to learn this word!",
  },
  {
    id: 8,
    wordNumber: '008',
    word: 'altruistic',
    wordRoot: [
      'alt → another, other, second',
      '-u  →  connective',
      ' istic  →  characterized by',
    ],
    meaning: 'showing unselfish concern for the welfare of others',
    context:
      "Someone who is altruistic always puts others first. An altruistic firefighter risks his life to save another's life, while an altruistic mom gives up the last bite of pie so her kid will be happy.",
    videoLink: 'J61mtatKT1I',
    videoText: 'Sci Show: Why are people and animals altruistic?',
    shorts: [
      {
        id: '8.1.1',
        picLink: require('../Images/altruistic1.jpeg'),
        heading:
          "Lil Bub's Owner Plans to Rocket the Late Cat's Remains Into Outer Space",
        content:
          "Lil Bub's owner has an out-of-this-world idea for the late cat's remains. Following the death of the Instagram-famous cat on Sunday, Mike Bridavsky, the owner of the altruistic animal, hopes to send Bub's ashes into orbit inside a satellite - and he's workin...",
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
      {
        id: '8.1.2',
        picLink: require('../Images/altruistic2.jpeg'),
        heading:
          "Married couple Teams Up to Donate Kidneys to Strangers: 'We Knew It Would Be a Good Thing'",
        content:
          "Frank and Cheryl Cohen, a married couple from New Jersey who both elected to donate a kidney earlier this year, are both hoping to inspire others to become altruistic kidney donors by providing a lifesaving organ to a complete stranger. “Frank and I, we're n...",
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
      {
        id: '8.1.3',
        picLink: require('../Images/altruistic3.jpeg'),
        heading:
          "Turn the 'getting' season into 'gratitude' season with help from Twin Cities nonprofit",
        content:
          'Sarah Aadland has gathered loads of research confirming that altruistic kids are happy kids. And what better time than December to practice?',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
    ],
    news: [
      {
        id: '8.2.1',
        publisher: 'Science Magazine',
        date: 'Mar 24, 2020',
        articleLink:
          'https://www.sciencemag.org/news/2020/03/researchers-are-tracking-another-epidemic-too-misinformation',
        headline:
          'For a lot of people, participation in the process is altruistic.',
      },
      {
        id: '8.2.2',
        publisher: 'New York Times',
        date: 'Mar 19, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
        headline:
          'A way to break isolation is to do something altruistic for someone else, like an elderly person in your building.',
      },
      {
        id: '8.2.3',
        publisher: 'Los Angeles Times',
        date: 'Mar 19, 2020',
        articleLink:
          'https://www.latimes.com/science/story/2020-03-19/adapting-life-with-the-coronavirus',
        headline: '“It is a very altruistic thing to do,” she said.',
      },
      {
        id: '8.2.4',
        publisher: 'Salon',
        date: 'Mar 15, 2020',
        articleLink:
          'https://www.salon.com/2020/03/15/how-coronavirus-is-upsetting-the-blood-supply-chain_partner/',
        headline:
          'It requires altruistic donations, collection, testing, processing and distribution to hospitals and medical centers.',
      },
    ],
    question: 'Synonym of Altruisitc?',
    options: ['Unselfish', 'Egoistic', 'Self centered'],
    ans: 0,
    funFact:
      'This word comes from the Old French altruistic and means "other people" and before that the Latin alter, which means "other." Our current word comes from the nineteenth century and comes from philosophy. It means that its important for people to be concerned with the good of others and to act unselfishly. When the word refers to the animal world, it means behavior that may actually harm the individual animal but will benefit the species in general. This is a truly selfless act!',
  },
  {
    id: 9,
    wordNumber: '009',
    word: 'Antiquated',
    wordRoot: ['Antiqu → old', 'Ed → having a particular state'],
    meaning: 'old-fashioned or outdated',
    context:
      "Something is antiquated when it is so old that it is no longer useful. If your parents believe that you shouldn't use the Internet when you write papers for school, you might call their ideas antiquated",
    videoLink: 'J61mtatKT1I',
    videoText:
      'AFP News Agency: This music store hopes some day to bring back the cassette, an antiquated format for music',
    shorts: [
      {
        id: '9.1.1',
        picLink: require('../Images/antiquated1.jpeg'),
        heading:
          "Dancing Astronaut's BIG 100-Top 25 Electronic Albums of the Decade",
        content:
          "The 25 electronic albums from the '10s that proved that the album sure as hell isn't antiquated",
        newsLink:
          'https://www.nytimes.com/2020/03/18/arts/design/how-to-save-museums.html',
      },
      {
        id: '9.1.2',
        picLink: require('../Images/antiquated2.jpeg'),
        heading:
          'The smart cities challenge: How tech will update antiquated infrastructures',
        content:
          'TechRepublic A CES 2020 panel discussed how blending new tech into established, sometimes crumbling infrastructures, offers renewable solutions.',
        newsLink:
          'https://www.washingtonpost.com/outlook/five-myths/myths-antitrust-law-amazon-google-monopoly/2020/03/20/ead2a072-6a1a-11ea-9923-57073adce27c_story.html',
      },
      {
        id: '9.1.3',
        picLink: require('../Images/antiquated3.jpeg'),
        heading:
          "Apple said to be prepping 5.4-inch 'iPhone SE 2' with Face ID",
        content:
          "Apple is prepping an iPhone 8 update that replaces the antiquated Home button with a modern True Depth camera module with Face ID, enabling a larger 5.4-inch display... The post Apple said to be prepping 5.4-inch 'iPhone SE 2' with Face ID appeared first on MacD...",
        newsLink:
          'https://www.salon.com/2020/03/07/can-multi-party-democracy-break-us-out-of-the-doom-loop-of-american-politics/',
      },
    ],
    news: [
      {
        id: '9.2.1',
        publisher: 'New York Times',
        date: 'Mar 18, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/18/arts/design/how-to-save-museums.html',
        headline:
          'This was evident when, earlier this year, Yale University’s History of Art department eliminated a revered but, in the department’s view antiquated, undergraduate survey course called “Introduction to Art History: Renaissance to the Present"',
      },
      {
        id: '9.2.2',
        publisher: 'Washington Post',
        date: 'Mar 20, 2020',
        articleLink:
          'https://www.washingtonpost.com/outlook/five-myths/myths-antitrust-law-amazon-google-monopoly/2020/03/20/ead2a072-6a1a-11ea-9923-57073adce27c_story.html',
        headline:
          'Axios recently remarked on the “bipartisan consensus . . . that antitrust law is antiquated, written for an analog world of railroad and tobacco giants.”',
      },
      {
        id: '9.2.3',
        publisher: 'Salon',
        date: 'Mar 7, 2020',
        articleLink:
          'https://www.salon.com/2020/03/07/can-multi-party-democracy-break-us-out-of-the-doom-loop-of-american-politics/',
        headline:
          'Our own democracy, with its antiquated winner-take-all or first-past-the-post system, is actually an outlier among more functional systems that use some form of proportional representation.',
      },
      {
        id: '9.2.4',
        publisher: 'Washington Times',
        date: 'Mar 6, 2020',
        articleLink:
          'https://www.washingtontimes.com/news/2020/mar/6/beatles-auction-to-include-stage-that-hosted-bands/',
        headline:
          'Beatles fans hoping to bid on a more antiquated piece of music history are in luck as well.',
      },
    ],
    question: 'Synonym of Antiquated?',
    options: ['Archaic', 'Latest (newest)', 'Solved'],
    ans: 0,
    funFact:
      "Something is antiquated when it is so old, it's like an antique or recognizable from another era and has the negative feel of being thoroughly outmoded. Things like typewriters, sealing wax for letters, and ideas of proper etiquette all seem antiquated in modern society. Currently, things get antiquated ever faster — 5-inch floppy disks for computers and dial-up modems were very modern fifteen years ago, but now they're antiquated.",
  },
  {
    id: 10,
    wordNumber: '010',
    word: 'Archipelago',
    wordRoot: ['Arch → chief, principal', 'Pelag → sea'],
    meaning: 'a group of many islands',
    context:
      "Wouldn't it be great to build your dream house in the Galapagos archipelago?",
    videoLink: 'J61mtatKT1I',
    videoText: 'Hawaiian islandsThe Hawaiian islands are an archipelago.',
    shorts: [
      {
        id: '10.1.1',
        picLink: require('../Images/archipelago.jpeg'),
        heading: 'Polar bear shot dead in Svalbard',
        content:
          'A polar bear was shot dead and killed in the early hours of the new year’s day on the Norwegian artic archipelago of Svalbard',
        newsLink:
          'https://www.nytimes.com/2020/03/19/nyregion/coronavirus-lockdown-nyc.html',
      },
    ],
    news: [
      {
        id: '10.2.1',
        publisher: 'Fox News',
        date: 'Mar 21, 2020',
        articleLink:
          'https://www.foxnews.com/media/hawaii-ultra-vulnerable-considering-travel-ban-affecting-mainland-us',
        headline:
          'After the first incidents of community spread of coronavirus were reported in Hawaii, the state government is considering suspending all non-essential travel to the archipelago and to quarantine arrivals there.',
      },
      {
        id: '10.2.2',
        publisher: 'New York Times',
        date: 'Mar 14, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/14/arts/television/whats-on-tv-saturday.html',
        headline:
          'The first puts the lens on New England’s striking colors and the diverse inhabitants of its trees; the remaining two episodes highlight Svalbard, a Norwegian archipelago, and Okavango, a river delta in Botswana.',
      },
      {
        id: '10.2.3',
        publisher: 'New York Times',
        date: 'Mar 10, 2020',
        articleLink:
          'https://www.nytimes.com/2020/03/10/world/europe/greece-migrants-secret-site.html',
        headline:
          'Hundreds of miles to the south, in the straits of the Aegean Sea between the Turkish mainland and an archipelago of Greek islands, the Greek Coast Guard is also using force.',
      },
      {
        id: '10.2.4',
        publisher: 'Reuters',
        date: 'Mar 7, 2020',
        articleLink:
          'https://www.reuters.com/article/us-portugal-quake-idUSKBN20U0XY',
        headline:
          'Madeira, an archipelago of four islands off the northwest coast of Africa, is home to just under 270,000 people and is visited by a million tourists each year.',
      },
    ],
    question: 'Meaning of Archipelago?',
    options: ['Group of Islands', 'Isolated Island', 'Island'],
    ans: 0,
    funFact:
      'It seems that archipelago came from the Italian Arciplago, the name for the Aegean Sea, which is full of many many islands. Somehow that became the word for any sea that is chock-full of islands. You can also use archipelago to indicate some other grouping that involves neither islands nor water but is similar to them. Your little sister might create an archipelago of Lego buildings on your living room carpet.',
  },
];

export {inputs, options, SettingRoutes, btnArray, validEmailRegex, DATA};
