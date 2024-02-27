/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dima </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create user interfaces and <br className="sm:block hidden" />
            develop dynamic web applications
          </p>
          <div className="mt-12 ml-20 text-center items-center justify-center xs:block hidden xs:w-50 h-90">
            <img
              // src="./desktop_pc/computer.png"
              src="https://raw.githubusercontent.com/BhavyaCodes/BhavyaCodes/master/.github/cat.gif"
              // src="https://user-images.githubusercontent.com/74038190/213760718-ca064723-1c29-4b82-985c-aadc7f57c090.gif"
              alt="computer "
              className="object-fill  "
            />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 mt-2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");
