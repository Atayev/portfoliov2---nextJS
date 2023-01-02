import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:1.2}}
          className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-[#c2ab94] text-2xl '>
              About
          </h3>
          <motion.img
              initial={{
                  x: -200,
                  opacity:0
              }}
              transition={{
                  duration:1.2
              }}
             className='h-56 w-56 mt-96 md:my-32  -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96'
              whileInView={{ x: 0 ,opacity:1}}
              viewport={{once:true}}
              src='https://i.ibb.co/svFHZN3/msg1882371139-33693.jpg' />
          <div className='space-y-10 px-0 md:px-10 mt-32'>
              <h4 className='text-4xl font-semibold'>
                  Here is a <span className='underline decoration-[#c2ab94]/50'>
                  little 
                  </span> background
              </h4>
              <p className='text-base'>
                  Hi ,i'am Ibrahim and i am 24 y/o a result-oriented developer.I have studied Computer Science which provided me with some outstanding and technical skills. I consider myself equipped with most of web development skills, but I know I still need to learn a lot more. I am highly trainable and can easily learn tasks.  Eager to study and familiarize myself with new technologies. I can determine the cause of the problem, diagnose non-obvious problems, and find out-of-the-box solutions to solve them. I have working experience more than six months, also worked as a freelancer. My main goal is professional growth and gaining new skills.
              </p>
          </div>
    </motion.div>
  )
}

export default About