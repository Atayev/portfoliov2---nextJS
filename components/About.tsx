import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    pageInfo:PageInfo
}

function About({pageInfo}: Props) {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:1.2}}
          className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-14 uppercase tracking-[20px] text-[#c2ab94] text-2xl '>
              About
          </h3>
          <motion.img
              initial={{
                  x: -200,
                  opacity: 0
              }}
              transition={{
                  duration: 1.2
              }}
              className='h-48 w-48  -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96'
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(pageInfo?.profilePic).url()}
              alt={ pageInfo?._type } />
          <div className='space-y-10 px-0 md:px-10 '>
              <h4 className='text-2xl md:text-4xl font-semibold'>
                  Here is a <span className='underline decoration-[#c2ab94]/50'>
                  little 
                  </span> background
              </h4>
              <p className='text-base'>
                  {pageInfo?.backgroundInformation}
              </p>
          </div>
    </motion.div>
  )
}

export default About