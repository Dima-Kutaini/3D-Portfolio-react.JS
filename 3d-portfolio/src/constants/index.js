/** @format */
import mysql from '../assets/tech/mysql.png';
import nextJs from '../assets/tech/nextJs.png';
import expressJs from '../assets/tech/expressJs.png';
import tableau from '../assets/tech/tableau.png';
import youtube from '../assets/youtube.jpg';
import codebuilder from '../assets/codeBuilder.jpg';
import project from '../assets/project.jpg';
import scs from '../assets/company/scs.png';
import teacher from '../assets/company/teacher.jpeg';

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
    title: 'Full Stack Developer',
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
    icon: teacher,
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
    icon: scs,
    iconBg: '#E6DEDD',
    date: 'Jun 2006 - Jun 2008',
    points: [
      'Planned and trained in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook).',
      'Provided personalized guidance and support to participants to enhance their proficiency in using Microsoft Office tools, emphasizing a customer-focused approach.',
      'Collaborated with colleagues to design and deliver tailored training programs to meet the specific needs of diverse audiences, highlighting teamwork and collaboration skills.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Dima has successfully made a career switch from teaching to web development, and I witnessed her work incredibly hard during HackYourFutures intensive, front-end web development boot camp over the period of October 2022 to July 2023. If you are looking for a talented, motivated junior frontend developer I would highly encourage reaching out to Dima 🤓',
    name: 'René Jøhnke ',
    designation: 'Project Manager',
    company: 'HackYourFuture Denmark',
    image:
      'https://media.licdn.com/dms/image/C4E03AQHEPAtr-MOoMg/profile-displayphoto-shrink_800_800/0/1653299418473?e=1713398400&v=beta&t=nvi1OjzK-ypu6gmpLBsbcvGuNYvXWk6fL2NiqTQ8FA4',
  },
  {
    testimonial:
      'Dima is an outstanding web developer with a remarkable ability to adapt and learn quickly.During her journey at the HackYourFuture boot camp, Dima truly shone in the final project. She not only showcased her technical prowess but also demonstrated an exceptional aptitude for teamwork.If your team is in search of a talented individual who brings a unique blend of technical expertise and a growth mindset, I highly recommend Dima. She has the potential to make a significant impact in both front-end and back-end roles.',
    name: 'Maher Hussain',
    designation: 'Frontend Developer',
    company: 'Ucommerce',
    image:
      'https://media.licdn.com/dms/image/D4E03AQHVL2JorpNt9w/profile-displayphoto-shrink_400_400/0/1667716593585?e=1713398400&v=beta&t=CISliVo8nmyZ8tcdScrENj-SoYiHznNgrCNOybow2VM',
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
