/** @format */
//  import scs from "../assets/company/scs.png";
import mysql from '../assets/tech/mysql.png';
import nextJs from '../assets/tech/nextJs.png';
import postman from '../assets/tech/postman.png';
import expressJs from '../assets/tech/expressJs.png';
import tableau from '../assets/tech/tableau.png';
import youtube from '../assets/youtube.jpg';
import codebuilder from '../assets/codeBuilder.jpg';
import project from '../assets/project.jpg';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  shopify,
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'NextJs',
    icon: nextJs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Express JS',
    icon: expressJs,
  },

  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'mySQL',
    icon: mysql,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Tableau',
    icon: tableau,
  },
];

const experiences = [
  {
    title: 'Teacher',
    company_name: 'Syrian Ministry Of Education',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'August 2006 - Jun 2015',
    points: [
      'Developed structured lesson plans to cater to diverse learning styles, showcasing organizational skills.',
      'Collaborated with colleagues to develop interdisciplinary learning opportunities, highlighting teamwork abilities.',
      'Provided thorough feedback on assignments, ensuring accuracy through attention to detail.',
      'Communicated complex ideas clearly to students with varying levels of understanding, emphasizing effective communication skills',
    ],
  },
  {
    title: 'Trainer and Lecturer',
    company_name: 'Syrian Computer Society (SCS)',
    //  icon: scs,
    iconBg: '#E6DEDD',
    date: 'Jun 2006 - Jun 2008',
    points: [
      'Planned and trained in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook).',
      'Provided personalized guidance and support to participants to enhance their proficiency in using Microsoft Office tools, emphasizing a customer-focused approach.',
      'Collaborated with colleagues to design and deliver tailored training programs to meet the specific needs of diverse audiences, highlighting teamwork and collaboration skills.',
    ],
  },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'CodeBuilder',
    description:
      'CodeBuilder is a tool for creating and saving various code snippets, building your own code snippet library.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: codebuilder,
    source_code_link: 'https://github.com/HackYourFuture-CPH/CodeBuilder',
    demo: 'https://codebuilder.dev/',
  },
  {
    name: 'YouTube app',
    description:
      ' A responsive ReactJS application consisting of video sections, custom categories, channel pages , where you can play videos straight from YouTube App.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/Dima-Kutaini/React-Project',
    demo: 'https://youtube-app-hazel.vercel.app/',
  },
  {
    name: 'Interior Designer Website',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: project,
    source_code_link:
      'https://github.com/Dima-Kutaini/HTML-CSS-Javascript-project',
    demo: 'https://html-css-javascript-project.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
