import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  jekyllIcon,
  dockerIcon,
  dockerContainerIcon,
  neovimIcon,
  expoGoIcon,
  swaggerIcon,
  sequelizeLogo,
  jestLogo,
  mongoDbLogo,
  tailwindLogo,
  spaceTrackerUI,
  koreanDiary,
  responsiveDesign,
  movieTracker,
  avatar,
  puertoRico,
  unitedStates,
  southKorea,
  HatsuneMiku,
  KagamineRin,
  KagamineLen,
  MegurineLuka,
  Meiko,
  Kaito
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  jekyllIcon,
  dockerIcon,
  dockerContainerIcon,
  neovimIcon,
  expoGoIcon,
  swaggerIcon,
  sequelizeLogo,
  jestLogo,
  mongoDbLogo,
  tailwindLogo,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hi Hi!",

    "My name is Cora, and I am a 25-year-old online student at Full Sail University pursuing a bachelor of science in web development.",
    "I made this page as a side project for my portfolio and to showcase the vocaloid characters. The color scheme is inspired by Hatsune Miku."
  ]
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'characters',
    title: 'Characters',
  },
];

const characters = [
  {
    name: "Hatsune Miku",
    description: 'Hatsune Miku is a music software developed by Crypton Future Media, INC., which enables anyone to make their computer sing by entering lyrics and melodies. As a massive number of users created music using the software and posted their works on the Internet, Hatsune Miku quickly evolved into a cultural phenomenon. Since then, Hatsune Miku has gained much attention as a character, involved in many fields such as merchandising and live performance as a virtual singer. Now her popularity has spread across the globe.',
    image: HatsuneMiku,
  },
  {
    name: "Kagamine Rin",
    description: 'Rin is a charming and youthful female character, whose trademarks are her blond hair with a huge white ribbon, blue eyes and a school uniform-like outfit. Rin was released in one package with Len, her male counterpart, in the software “VOCALOID2 Kagamine Rin & Len” on December 27th, 2007. The development of the duo of KAGAMINE RIN and KAGAMINE LEN is based on the concept of creating a twin pair of female and male voice banks recorded from the same Japanese female voice actress, Asami Shimoda. Their names were developed according to this idea, with “Rin” for “right” and “Len” for “left” audio channel, whereas the surname KAGAMINE means “mirrored sound”.',
    image: KagamineRin,
  },
  {
    name: "Kagamine Len",
    description: 'Len is a male character and his looks feature short blond hair, blue eyes and a school uniform. Len was created together with Rin for the voice synthesizer product “VOCALOID2 Kagamine Rin & Len”, first released on December 27th, 2007. Len’s youthful voice was made from that of Asami Shimoda, also the voice actress of Kagamine Rin.',
    image: KagamineLen,
  },
  {
    name: "Megurine Luka",
    description: `MEGURINE LUKA is a character well liked for her mysterious looks and cool expression. Her trademarks are pink long hair and an attractively designed slit china dress. The character illustration was featured on the voice synthesizer software “VOCALOID2 Megurine Luka” that was first released on January, 30th 2009.
                  Luka is the third release of Crypton’s Character Vocal Series, and was based on the concept of a “cool, moody female persona with a breathy voice”. The original voice is sampled from Japanese voice actress Yu Asakawa.`,
    image: MegurineLuka,
  },
  {
    name: "Meiko",
    description: `MEIKO is the first vocal synthesizer developed by Crypton Future Media, and was released on November, 5th 2004. Her character illustration was the first of its kind to be used for a music software product, which led Crypton to start a character series with various voices. MEIKO’s trademarks are her short brown hair bob, red mini-skirt, and boots.
                  The software MEIKO features voice samples of a real singer and songwriter, Meiko Haigo, and offers a pure and consistent voice suitable for various genres of music such as pop, rock, jazz and many more.`,
    image: Meiko
  },
  {
    name: "Kaito",
    description: `KAITO is a male character whose trademarks are his blue hair and a long blue stole. KAITO is popular for his smooth and grown-up voice, and his various singing styles can be combined to produce rich musical pieces.
                  KAITO was first released on February 17th 2006, based on the sampled voice of Japanese singer Naoto Fuga.`,
    image: Kaito
  }
  // {
  //   name: 'Pawsitive',
  //   description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
  //   image: pawsitivePrototype,
  //   source_code_link: 'https://github.com/bl33h/pawsitive',
  //   demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  // },
  // {
  //   name: 'Basic Calculator',
  //   description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
  //   image: calculator,
  //   source_code_link: 'https://github.com/bl33h/calculator',
  //   demo_link: 'https://bl33hscalculator.netlify.app/',
  // },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
    'I have a great understanding of HTML for arranging web pages and creating useful information that is accessible to everyone.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I have expertise in using CSS to design web pages and create visually appealing layouts that improve the overall user experience.'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have plenty of experience using JavaScript to add interactivity and functionality to web pages, which results in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React JS',
    icon: reactIcon,
    description:
    'I am adept with React, designing reusable components, and managing application state with hooks and context.',
  },
  {
    id: 'reactNative',
    title: 'React Native',
    icon: reactIcon,
    description:
    'I have introductory experience with React Native and successfully developed an app as part of a class project. While I am still in the early stages of learning, I am enthusiastic about furthering my skills in mobile app development.'
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
    'Having excelled in college assignments that required extensive use of EC2 and RDS instances, I believe I am skilled at leveraging the power of cloud computing to create scalable and reliable infrastructures using AWS services.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'While my passion is in development, I am fairly knowledgeable about Figma.' 
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
    'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
    'I learned the basics of PostgreSQL through specialized college classes and assignments. While I performed well, I still consider myself a beginner.',
  },
  {
    id: 'node',
    title: 'Node JS',
    icon: nodeIcon,
    description:
    'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
    'My knowledge of it is in utilizing its capabilities to create powerful recommendation systems using graph-based data modeling. During my college study, I used Neo4j extensively, largely relying on Neo4j Desktop for assignments and attaining satisfactory results.',
  },
  {
    id: 'jekyll',
    title: 'Jekyll',
    icon: jekyllIcon,
    description:
    'Proficient in Jekyll project setup, Markdown content management, theme customization, and website deployment.'
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: dockerIcon,
    description:
    'Experienced with Docker containerization, including application development, shipping, and operation. Experience using Docker CLI, Dockerfile, Docker Hub, and Docker Engine.'  
  },
  {
    id: 'dockerContainer',
    title: 'Docker Container',
    icon: dockerContainerIcon,
    description:
    'Proficient in Docker Compose to define and manage multi-container Docker applications. Experience with YAML configuration, service, network, and volume definition, and containerized application orchestration.'
  },
  {
    id: 'neovim',
    title: 'Neovim',
    icon: neovimIcon,
    description:
    "Capable of using Neovim (nvim) for text editing and development tasks, including Dockerfiles, Docker Compose setups, and other Docker-related files. Using Neovim's capabilities for efficient code editing, navigation, and customization." 
  },
  {
    id: 'expoGo',
    title: 'Expo Go',
    icon: expoGoIcon,
    description:
    "Proficient in leveraging Expo's features for rapid prototyping, live reloading, and real-time testing on iOS and Android devices. Familiar with deploying and sharing Expo projects for testing and collaboration." 
  },
  {
    id: 'swagger',
    title: 'Swagger',
    icon: swaggerIcon,
    description:
    "Skilled at building, documenting, and testing RESTful APIs with Swagger. Experience utilizing Swagger specifications to define API endpoints, request/response schemas, authentication techniques, and API versioning."
  },
  {
    id: 'sequelize',
    title: 'Sequelize ORM',
    icon: sequelizeLogo,
    description:
    "Experienced for database management and querying in Node.js apps, defining models, associations, and migrations for use with relational databases. Capable of performing CRUD operations, and sophisticated queries through it's query interface."  
  },
  {
    id: 'jest',
    title: 'Jest',
    icon: jestLogo,
    description:
    "Experience writing test suites, test cases, and assertions to validate the application's dependability and functionality. All while mimicking dependencies, testing asynchronous programming, and providing coverage reports."
  },
  {
    id: 'mongoDb',
    title: 'MongoDB',
    icon: mongoDbLogo,
    description:
    "Experience with schema-less data modeling, document-oriented database design, and CRUD operations. Skilled in performing queries, aggregations, indexing, and data manipulation in MongoDB collections."
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: tailwindLogo,
    description:
    "Experience with utility classes, utility-first workflow, and atomic CSS principles. Skilled in creating layouts, components, and responsive designs efficiently using Tailwind's utility classes."
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  characters,
  memoji,
  skills,
  markerSvg,
  icons,
};
