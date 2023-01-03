import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
      <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center'>
           <h3 className='absolute top-24 uppercase tracking-[20px] text-[#c2ab94] text-2xl '>
              Skills
          </h3>

          <h3 className='absolute top-36 uppercase tracking-[3px] text-sm'>Hover over a skill for current proficiensy</h3>

          <div className='grid grid-cols-4 gap-5'>
              <Skill />
              <Skill />
              <Skill />
              <Skill />
          </div>
    </motion.div>
  )
}

export default Skills