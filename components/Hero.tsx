import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, i am Ibrahim Atayev", "TrueCoffeeLover.jsx","<ButLovetoCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
          <BackgroundCircles />
          <img src="https://i.ibb.co/8B87JNf/photo1672579251.jpg" alt="" className="h-32 w-32 rounded-full object-cover mx-auto relative"/>
         <h2 className="text-sm uppercase text-[#c2ab94] pb-2 tracking-[15px] font-bold">Frontend Developer</h2>
          <h1 className="text-4xl lg:text-5xl font-semibold px-10 z-20 ">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#da9e63" />
          </h1>
          <div className='pt-5 z-10'>
              <Link href='#about'>
              <button className="heroButtons">About</button>
              </Link>
              <Link href='#experience'>
              <button className="heroButtons">Experience</button>
              </Link>
              <Link href='#skills'>
              <button className="heroButtons">Skills</button>
              </Link>
              <Link href='#projects'>
              <button className="heroButtons">Projects</button>
              </Link>
          </div>
    </div>
  );
}

export default Hero;
