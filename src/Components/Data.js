import Image1 from "../Images/svg-1.svg";
import Image2 from "../Images/svg-2.svg";
import Image4 from "../Images/svg-4.svg";
export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'About',
  headline: 'Notepad',
  description: 'A multi-purpose notepad with additional functionality for goal-tracking and logging.',
  imgStart: false,
  dark: false,
  primary: true,
  darkText: true,
  img: Image1,
  alt: 'none',
  lvisible: false


};

export const homeObjTwo = {
  id: 'none',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Download Now',
  headline: "Improvement Made Easy",
  description: 'Keep track of your goals and view your progress. Try out the new and improved notepad app today for free.',
  ButtonLabel: 'Download Here',
  imgStart: true,
  dark: false,
  primary: true,
  darkText: true,
  img: Image2,
  alt: 'none',
  lvisible: true,
  buttonLink: '/download'

};


export const homeObjThree = {
  id: 'usage',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Usage',
  headline: 'A Purpose for Everyone',
  description: 'With 12 different templates and configurations, find one that is catered to you. See how people are using BetterNotepad to improve their lives. ',
  ButtonLabel: 'Learn More',
  imgStart: true,
  dark: false,
  primary: true,
  darkText: true,
  img: Image1,
  alt: 'none',
  lvisible: true,
  buttonLink: '/usage'


};

export const homeObjFour = {
  id: 'support',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Support',
  headline: 'Have an enquiry or an issue with BetterNotepad? ',
  description: 'Contact us by clicking the button below.',
  ButtonLabel: 'Contact Us',
  imgStart: false,
  dark: false,
  primary: true,
  darkText: true,
  img: Image4,
  alt: 'none',
  lvisible: true,
  buttonLink: '/contact'
}
