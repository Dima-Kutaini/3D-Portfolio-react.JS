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
import norddjurs from'../assets/company/norddjurs.png'

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
    title: 'Administrative Officer & Website Administrator',
    company_name: 'Norddjurs Kommune ',
    icon: norddjurs,
    iconBg: '#383E56',
    date: 'Juni 2024- present',
    points: [
      'Independently managed administrative tasks, case processing, and system support.',
      'Maintained, structured, and quality-assured data with a strong focus on accuracy and compliance',
      'Handled invoicing, payments, and financial follow-ups using Excel',
      'CRegistered, monitored, and archived information in administrative systems (LUDUS and Acadre)',
      'Coordinated and followed up on absence management and scheduling activities',
      'Served as Website Administrator for jobogsprogdjurs.dk, responsible for ongoing content updates, maintenance, and quality control',
    ],
  },
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
      ' Dima Kutaini trådte ind hos os hos Job og Sprog i en kompleks og travl hverdag, og hun viste hurtigt en stor naturlighed og et udpræget overblik. I sin rolle som administrativ medarbejder på sprogskolen håndterede hun kursistadministration, reception, telefoniske henvendelser og kontakten til jobcenteret – altid med professionalisme og et skarpt blik for detaljen. Hun løste sine opgaver med høj kvalitet og tog desuden af egen drift fat på opgaver, hun selv identificerede behovet for. Dima var desuden en særdeles stabil medarbejder, som vi altid kunne regne med i en travl hverdag. Med sin rolige og tillidsvækkende personlighed blev hun hurtigt en værdsat kollega blandt både undervisere og ledelse. Jeg vil til enhver tid give hende mine varmeste anbefalinger og ville ikke tøve med at ansætte hende igen.',
    name: 'Almaz Mengesha',
    designation: 'Manager ',
    company: 'Job&sprog Djurs',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQG1RSW9EtSxWA/profile-displayphoto-scale_100_100/B4DZiiZl5hGgAg-/0/1755071275396?e=1772668800&v=beta&t=Ooe6Wwvv9VyUCo0GxvDPFo6-UhZ0PjZjQGDTYGccrRU',
  },
  {
    testimonial:
      'Dima has successfully made a career switch from teaching to web development, and I witnessed her work incredibly hard during HackYourFutures intensive, front-end web development boot camp over the period of October 2022 to July 2023. If you are looking for a talented, motivated junior frontend developer I would highly encourage reaching out to Dima 🤓',
    name: 'René Jøhnke ',
    designation: 'Project Manager',
    company: 'HackYourFuture Denmark',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGNsamDkEl1nQ/profile-displayphoto-shrink_400_400/B4DZcw5EdHGkAg-/0/1748871956716?e=1772668800&v=beta&t=fRl_vsR_WOcX8X5iG_eJhuF7D7bYw0uUpgHxXBFL3E4',
  },
  {
    testimonial:
      'Dima is an outstanding web developer with a remarkable ability to adapt and learn quickly.During her journey at the HackYourFuture boot camp, Dima truly shone in the final project. She not only showcased her technical prowess but also demonstrated an exceptional aptitude for teamwork.If your team is in search of a talented individual who brings a unique blend of technical expertise and a growth mindset, I highly recommend Dima. She has the potential to make a significant impact in both front-end and back-end roles.',
    name: 'Maher Hussain',
    designation: 'Frontend Developer',
    company: 'Ucommerce',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQFY-tHppg-vXQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730374978547?e=1771624800&v=beta&t=5JausaKEyejmzpZWJZgoOG0KYr31TeHxh4N163IlY6A',
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
      'A responsive website for interior Designer. featuring an animated page to enhance the user interface and includes a counter.',
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
