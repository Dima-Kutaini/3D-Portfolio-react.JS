/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import myLogo from '../assets/myLogo.jpg';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    setActive('');
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={scrollToTop}>
          <img
            src={myLogo}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Dima &nbsp;
            <span className=" md:block hidden "> | Web Developer</span>
          </p>
        </Link>
        {/* <div className="flex items-center justify-between mt-8"> */}
        <a
          href="https://www.linkedin.com/in/dima-kutaini/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 ml-5 text-white">
          <FaLinkedin
            size={24}
            className="hover:text-primary"
          />
        </a>
        <a
          href="https://github.com/Dima-Kutaini"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white">
          <FaGithub
            size={24}
            className="hover:text-primary"
          />
        </a>
        <a
          href="mailto:deemakutainy@gmail.com?subject=Regarding%20Your%20Portfolio"
          className="text-white">
          <FaEnvelope
            size={24}
            className="mr-2"
          />
        </a>
        {/* </div> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col  gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  }  font-poppins font-medium curser-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
