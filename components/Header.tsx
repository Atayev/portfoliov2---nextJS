import React from "react";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin/in/atayevibrahim"
          fgColor="#da9e63"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin/in/atayevibrahim"
          fgColor="#da9e63"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin/in/atayevibrahim"
          fgColor="#da9e63"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin/in/atayevibrahim"
          fgColor="#da9e63"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#da9e63"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#da9e63]">
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
