import {
  avatar,
  HatsuneMiku,
  KagamineRin,
  KagamineLen,
  MegurineLuka,
  Meiko,
  Kaito
} from '../assets';

const media = {
  avatar,
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
];

const memoji = {
  image: [avatar],
};

export {
  media,
  introduction,
  characters,
  memoji,
};
