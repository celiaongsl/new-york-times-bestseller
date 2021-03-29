const { conversation, Canvas } = require("@assistant/conversation");
const functions = require("firebase-functions");

const app = conversation();

const NEW_GREETING = `Welcome to the New York Times Bestseller List!`;
const RETURNING_GREETINGS = [
  `Hey, you're back to the New York Times Bestseller List!`,
  `Welcome back to the New York Times Bestseller List!`,
  `Hey there, you made it to the New York Times Bestseller List!`,
];

const FICTION_LIST = [
  {
    position: 1,
    weeksOnList: "6 weeks on the list",
    title: "The Four Winds",
    author: "Kristin Hannah",
    shortSummary:
      "As dust storms roll during the Great Depression, Elsa must choose between saving the family and farm or heading West.",
    longSummary: `Texas, 1934. Millions are out of work and a drought has broken the Great Plains. Farmers are fighting to keep their land and their livelihoods as the crops are failing, the water is drying up, and dust threatens to bury them all. One of the darkest periods of the Great Depression, the Dust Bowl era, has arrived with a vengeance.

    In this uncertain and dangerous time, Elsa Martinelli—like so many of her neighbors—must make an agonizing choice: fight for the land she loves or go west, to California, in search of a better life. The Four Winds is an indelible portrait of America and the American Dream, as seen through the eyes of one indomitable woman whose courage and sacrifice will come to define a generation.
    
    From the #1 New York Times bestselling author of The Nightingale and The Great Alone comes an epic novel of love and heroism and hope, set against the backdrop of one of America’s most defining eras—the Great Depression.`,
    bookCoverURL: "https://i.ibb.co/kqbtCd7/the-four-winds.jpg",
  },
  {
    position: 2,
    weeksOnList: "2 weeks on the list",
    title: "Life After Death",
    author: "Sister Souljah",
    shortSummary:
      "In a sequel to “The Coldest Winter Ever,” Winter Santiaga emerges after time served and seeks revenge.",
    longSummary: `Instant #1 New York Times Bestseller
    Instant USA TODAY Bestseller
    
    The long-anticipated sequel to Sister Souljah’s million copy New York Times bestseller The Coldest Winter Ever.
    
    Winter Santiaga hit time served. Still stunning, still pretty, still bold, still loves her father more than any man in the world, still got her hustle and high fashion flow. She’s eager to pay back her enemies, rebuild her father’s empire, reset his crown, and ultimately to snatch Midnight back into her life no matter which bitch had him while she was locked up. But Winter is not the only one with revenge on her mind. Simone, Winter’s young business partner and friend, is locked and loaded and Winter is her target. Will she blow Winter’s head off? Can Winter dodge the bullets? Or will at least one bullet blast Winter into another world? Either way Winter is fearless. Hell is the same as any hood and certainly the Brooklyn hood she grew up in. That’s what Winter thinks.
    
    A heartwarming, heart-burning, passionate, sexual, comical, and completely original adventure is about to happen in real time—raw, shocking, soulful, and shameless. True fans won’t let Winter travel alone on this amazing journey.`,
    bookCoverURL:
      "https://i.ibb.co/M2Jwwt1/life-after-death-9781982139131-hr.jpg",
  },
  {
    position: 3,
    weeksOnList: "2 weeks on the list",
    title: "Later",
    author: "Stephen King",
    shortSummary:
      "An N.Y.P.D. detective asks the son of a struggling single mother to use his unnatural ability to track a killer.",
    longSummary: `#1 bestselling author Stephen King returns with a brand-new novel about the secrets we keep buried and the cost of unearthing them.

    The son of a struggling single mother, Jamie Conklin just wants an ordinary childhood. But Jamie is no ordinary child. Born with an unnatural ability his mom urges him to keep secret, Jamie can see what no one else can see and learn what no one else can learn. But the cost of using this ability is higher than Jamie can imagine - as he discovers when an NYPD detective draws him into the pursuit of a killer who has threatened to strike from beyond the grave.
    
    Later is Stephen King at his finest, a terrifying and touching story of innocence lost and the trials that test our sense of right and wrong. With echoes of King's classic novel IT, Later is a powerful, haunting, unforgettable exploration of what it takes to stand up to evil in all the faces it wears.`,
    bookCoverURL: "https://i.ibb.co/RvKs7Tv/81-Lo-D65-Jy6-L.jpg",
  },
  {
    position: 4,
    weeksOnList: "New this week",
    title: "Fast Ice",
    author: "Clive Cussler and Graham Brown",
    shortSummary:
      "The 18th book in the NUMA Files series. Kurt Austin and Joe Zavala uncover a decades-old conspiracy when they search for a missing former colleague in Antarctica.",
    longSummary: `Kurt Austin races to Antarctica to stop a chilling plot that imperils the entire planet in the latest novel from the #1 New York Times-bestselling Grand Master of Adventure.

    After a former NUMA colleague disappears while researching the icebergs of Antarctica, Kurt Austin and his assistant Joe Zavala embark for the freezing edge of the world to investigate. Even as they confront perilous waters and frigid temperatures, they are also are up against a terrifying man-made weapon--a fast-growing ice that could usher in a new Ice Age.
    
    Pitted against a determined madman and a monstrous storm, Kurt and the NUMA team must unravel a Nazi-era plot in order to save the globe from a freeze that would bury it once and for all`,
    bookCoverURL: "https://i.ibb.co/HDBCDcf/9780593395615.jpg",
  },
  {
    position: 5,
    weeksOnList: "New this week",
    title: "The Rose Code",
    author: "Kate Quinn",
    shortSummary:
      "As a post-World War II royal wedding approaches, an encrypted letter resurrects an alliance between three female code breakers.",
    longSummary: `The New York Times and USA Today bestselling author of The Huntress and The Alice Network returns with another heart-stopping World War II story of three female code breakers at Bletchley Park and the spy they must root out after the war is over.

    1940. As England prepares to fight the Nazis, three very different women answer the call to mysterious country estate Bletchley Park, where the best minds in Britain train to break German military codes. 
    
    Vivacious debutante Osla is the girl who has everything—beauty, wealth, and the dashing Prince Philip of Greece sending her roses—but she burns to prove herself as more than a society girl, and puts her fluent German to use as a translator of decoded enemy secrets. Imperious self-made Mab, product of east-end London poverty, works the legendary codebreaking machines as she conceals old wounds and looks for a socially advantageous husband. Both Osla and Mab are quick to see the potential in local village spinster Beth, whose shyness conceals a brilliant facility with puzzles, and soon Beth spreads her wings as one of the Park’s few female cryptanalysts. 
    
    But war, loss, and the impossible pressure of secrecy will tear the three apart. 1947. As the royal wedding of Princess Elizabeth and Prince Philip whips post-war Britain into a fever, three friends-turned-enemies are reunited by a mysterious encrypted letter--the key to which lies buried in the long-ago betrayal that destroyed their friendship and left one of them confined to an asylum. A mysterious traitor has emerged from the shadows of their Bletchley Park past, and now Osla, Mab, and Beth must resurrect their old alliance and crack one last code together. But each petal they remove from the rose code brings danger--and their true enemy--closer...`,
    bookCoverURL: "https://i.ibb.co/3NBhLqm/53914938.jpg",
  },
];

const NON_FICTION_LIST = [
  {
    position: 1,
    weeksOnList: "New this week",
    title: "This is the fire",
    author: "Don Lemon",
    shortSummary:
      "The CNN host looks at the impact of racism on his life and prescribes ways to address systemic flaws in America.",
    longSummary: `Don Lemon brings his vast audience and experience as a reporter and a Black man to today’s most urgent question: How can we end racism in America in our lifetimes?
 
    The host of CNN Tonight with Don Lemon is more popular than ever. As America’s only Black prime-time anchor, Lemon and his daily monologues on racism and antiracism, on the failures of the Trump administration and of so many of our leaders, and on America’s systemic flaws speak for his millions of fans. Now, in an urgent, deeply personal, riveting plea, he shows us all how deep our problems lie, and what we can do to begin to fix them.
    
    Beginning with a letter to one of his Black nephews, he proceeds with reporting and reflections on his slave ancestors, his upbringing in the shadows of segregation, and his adult confrontations with politicians, activists, and scholars. In doing so, Lemon offers a searing and poetic ultimatum to America. He visits the slave port where a direct ancestor was shackled and shipped to America. He recalls a slave uprising in Louisiana, just a few miles from his birthplace. And he takes us to the heart of the 2020 protests in New York City. As he writes to his young nephew: We must resist racism every single day. We must resist it with love.`,
    bookCoverURL: "https://i.ibb.co/dKVqwq5/9780316257572.jpg",
  },
  {
    position: 2,
    weeksOnList: "2 weeks on the list",
    title: "The Code Breaker",
    author: "Walter Isaacson",
    shortSummary:
      "How the Nobel Prize winner Jennifer Doudna and her colleagues invented CRISPR, a tool that can edit DNA.",
    longSummary: `The bestselling author of Leonardo da Vinci and Steve Jobs returns with a gripping account of how Nobel Prize winner Jennifer Doudna and her colleagues launched a revolution that will allow us to cure diseases, fend off viruses, and have healthier babies.

    When Jennifer Doudna was in sixth grade, she came home one day to find that her dad had left a paperback titled The Double Helix on her bed. She put it aside, thinking it was one of those detective tales she loved. When she read it on a rainy Saturday, she discovered she was right, in a way. As she sped through the pages, she became enthralled by the intense drama behind the competition to discover the code of life. Even though her high school counselor told her girls didn’t become scientists, she decided she would.
    
    Driven by a passion to understand how nature works and to turn discoveries into inventions, she would help to make what the book’s author, James Watson, told her was the most important biological advance since his co-discovery of the structure of DNA. She and her collaborators turned ​a curiosity ​of nature into an invention that will transform the human race: an easy-to-use tool that can edit DNA. Known as CRISPR, it opened a brave new world of medical miracles and moral questions.
    
    The development of CRISPR and the race to create vaccines for coronavirus will hasten our transition to the next great innovation revolution. The past half-century has been a digital age, based on the microchip, computer, and internet. Now we are entering a life-science revolution. Children who study digital coding will be joined by those who study genetic code.
    
    Should we use our new evolution-hacking powers to make us less susceptible to viruses? What a wonderful boon that would be! And what about preventing depression? Hmmm…Should we allow parents, if they can afford it, to enhance the height or muscles or IQ of their kids?
    
    After helping to discover CRISPR, Doudna became a leader in wrestling with these moral issues and, with her collaborator Emmanuelle Charpentier, won the Nobel Prize in 2020. Her story is a thrilling detective tale that involves the most profound wonders of nature, from the origins of life to the future of our species.`,
    bookCoverURL:
      "https://i.ibb.co/syn6Jmd/the-code-breaker-9781982115852-hr.jpg",
  },
  {
    position: 3,
    weeksOnList: "22 weeks on the list",
    title: "Greenlights",
    author: "Matthew McConaughey",
    shortSummary:
      "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years.",
    longSummary: `From the Academy Award®–winning actor, an unconventional memoir filled with raucous stories, outlaw wisdom, and lessons learned the hard way about living with greater satisfaction

    I’ve been in this life for fifty years, been trying to work out its riddle for forty-two, and been keeping diaries of clues to that riddle for the last thirty-five. Notes about successes and failures, joys and sorrows, things that made me marvel, and things that made me laugh out loud. How to be fair. How to have less stress. How to have fun. How to hurt people less. How to get hurt less. How to be a good man. How to have meaning in life. How to be more me.
    
    Recently, I worked up the courage to sit down with those diaries. I found stories I experienced, lessons I learned and forgot, poems, prayers, prescriptions, beliefs about what matters, some great photographs, and a whole bunch of bumper stickers. I found a reliable theme, an approach to living that gave me more satisfaction, at the time, and still: If you know how, and when, to deal with life’s challenges - how to get relative with the inevitable - you can enjoy a state of success I call “catching greenlights.”
    
    So I took a one-way ticket to the desert and wrote this book: an album, a record, a story of my life so far. This is fifty years of my sights and seens, felts and figured-outs, cools and shamefuls. Graces, truths, and beauties of brutality. Getting away withs, getting caughts, and getting wets while trying to dance between the raindrops.
    
    Hopefully, it’s medicine that tastes good, a couple of aspirin instead of the infirmary, a spaceship to Mars without needing your pilot’s license, going to church without having to be born again, and laughing through the tears.
    
    It’s a love letter. To life.
    
    It’s also a guide to catching more greenlights - and to realizing that the yellows and reds eventually turn green too.
    
    Good luck.`,
    bookCoverURL: "https://i.ibb.co/pQdnHhc/greenlights-1.jpg",
  },
  {
    position: 4,
    weeksOnList: "33 weeks on the list",
    title: "Caste",
    author: "Isabel Wilkerson",
    shortSummary:
      "The Pulitzer Prize-winning journalist examines aspects of caste systems across civilizations and reveals a rigid hierarchy in America today.",
    longSummary: `The Pulitzer Prize–winning, bestselling author of The Warmth of Other Suns examines the unspoken caste system that has shaped America and shows how our lives today are still defined by a hierarchy of human divisions.

    “As we go about our daily lives, caste is the wordless usher in a darkened theater, flashlight cast down in the aisles, guiding us to our assigned seats for a performance. The hierarchy of caste is not about feelings or morality. It is about power—which groups have it and which do not.”
    
    In this brilliant book, Isabel Wilkerson gives us a masterful portrait of an unseen phenomenon in America as she explores, through an immersive, deeply researched narrative and stories about real people, how America today and throughout its history has been shaped by a hidden caste system, a rigid hierarchy of human rankings.
    
    Beyond race, class, or other factors, there is a powerful caste system that influences people’s lives and behavior and the nation’s fate. Linking the caste systems of America, India, and Nazi Germany, Wilkerson explores eight pillars that underlie caste systems across civilizations, including divine will, bloodlines, stigma, and more. Using riveting stories about people—including Martin Luther King, Jr., baseball’s Satchel Paige, a single father and his toddler son, Wilkerson herself, and many others—she shows the ways that the insidious undertow of caste is experienced every day. She documents how the Nazis studied the racial systems in America to plan their out-cast of the Jews; she discusses why the cruel logic of caste requires that there be a bottom rung for those in the middle to measure themselves against; she writes about the surprising health costs of caste, in depression and life expectancy, and the effects of this hierarchy on our culture and politics. Finally, she points forward to ways America can move beyond the artificial and destructive separations of human divisions, toward hope in our common humanity.`,
    bookCoverURL:
      "https://i.ibb.co/gSwspww/nf-wilkerson-isabel-caste-cover.jpg",
  },
  {
    position: 5,
    weeksOnList: "5 weeks on the list",
    title: "How to avoid a climate disaster",
    author: "Bill Gates",
    shortSummary:
      "A prescription for what business, governments and individuals can do to work toward zero emissions.",
    longSummary: `In this urgent, authoritative book, Bill Gates sets out a wide-ranging, practical - and accessible - plan for how the world can get to zero greenhouse gas emissions in time to avoid a climate catastrophe.

    Bill Gates has spent a decade investigating the causes and effects of climate change. With the help of experts in the fields of physics, chemistry, biology, engineering, political science, and finance, he has focused on what must be done in order to stop the planet's slide toward certain environmental disaster. In this book, he not only explains why we need to work toward net-zero emissions of greenhouse gases, but also details what we need to do to achieve this profoundly important goal.
    
    He gives us a clear-eyed description of the challenges we face. Drawing on his understanding of innovation and what it takes to get new ideas into the market, he describes the areas in which technology is already helping to reduce emissions, where and how the current technology can be made to function more effectively, where breakthrough technologies are needed, and who is working on these essential innovations. Finally, he lays out a concrete, practical plan for achieving the goal of zero emissions-suggesting not only policies that governments should adopt, but what we as individuals can do to keep our government, our employers, and ourselves accountable in this crucial enterprise.
    
    As Bill Gates makes clear, achieving zero emissions will not be simple or easy to do, but if we follow the plan he sets out here, it is a goal firmly within our reach.`,
    bookCoverURL:
      "https://i.ibb.co/b1Ybb0P/How-to-Avoid-a-Climate-Disaster-Main-1.jpg",
  },
];

/**
 * Pick a random item from an array. This is to make
 * responses more conversational.
 *
 * @param  {array} array representing a list of elements.
 * @return  {string} item from an array.
 */
const randomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

app.handle("welcome", (conv) => {

  // if (!conv.device.capabilities.includes("INTERACTIVE_CANVAS")) {
  //   conv.add("Sorry, this device does not support Interactive Canvas!");
  //   conv.scene.next.name = "actions.page.END_CONVERSATION";
  //   return;
  // }

  if (conv.user.lastSeenTime === undefined) {
    conv.add(`<speak>${NEW_GREETING}</speak>`);
  } else {
    conv.add(`<speak>${randomArrayItem(RETURNING_GREETINGS)}</speak>`);
  }
  conv.add(
    new Canvas({
      data: {
        scene: "WELCOME",
      },
    })
  );
  conv.add("Would you like to see the fiction or non-fiction list today?");
});

app.handle("book_details", (conv) => {
  const chosenBookTitle = conv.intent.params.books_options.resolved;
  let chosenBookDetails = [];
  let categoryOption = conv.session.params.book_categories_options;

  if (categoryOption === "fiction") {
    chosenBookDetails = FICTION_LIST.find(
      (item) => item.title === chosenBookTitle
    );
  } else {
    chosenBookDetails = NON_FICTION_LIST.find(
      (item) => item.title === chosenBookTitle
    );
  }

  conv.add(
    `<speak>${chosenBookTitle}: <break
    time='1000ms'/>  ${chosenBookDetails.shortSummary}</speak>`
  );
  conv.add(
    new Canvas({
      data: {
        scene: "BOOK_DETAILS",
        params: { chosenBookDetails, categoryOption },
      },
    })
  );
});

handleTypeOverride = ({ conv, list }) => {
  conv.session.typeOverrides = [
    {
      name: "books_options",
      mode: "TYPE_REPLACE",
      synonym: {
        entries: [
          list.map((item) => {
            return { name: item.title, synonyms: [item.title] };
          }),
        ],
      },
    },
  ];
};

app.handle("category_bestsellers", (conv) => {
  let intentCategoryOption = conv.intent.params.book_categories_options.resolved;
  let bookData = [];
  // let categoryOption = conv.session.params.book_categories_options;
  if (intentCategoryOption === "fiction") {
    bookData = FICTION_LIST;
    handleTypeOverride({ conv, list: FICTION_LIST });
  } else {
    bookData = NON_FICTION_LIST;
    handleTypeOverride({ conv, list: NON_FICTION_LIST });
  }

  conv.add(
    `<speak>Here's the bestsellers for the ${intentCategoryOption} category!</speak>`
  );
  conv.add(
    new Canvas({
      data: {
        scene: "CATEGORY_BESTSELLERS",
        params: { bookData, intentCategoryOption },
      },
    })
  );
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
