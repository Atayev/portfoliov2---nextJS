import React from "react";
import { SocialIcon } from "react-social-icons";
import { InboxIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#da9e63"
            bgColor="transparent"
          />
        ))}
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
        className="flex flex-row items-center  text-gray-300 cursor-pointer"
      >
        <Link href="#contact" className='flex space-x-2 '>
        <InboxIcon
          className="cursor-pointer mr-3 mt-3 md:mr-0 md:mt-0 w-6 h-6 text-[#da9e63]"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#da9e63]" >
          Get in touch
        </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
