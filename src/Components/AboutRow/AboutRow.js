import React from 'react'
import './AboutRow.css'
import { logo_mark } from '../../Assets'
import { motion } from 'framer-motion'

function AboutRow({description1, description2}) {
  return (
    <div className='main_row_about'>
       <div className='logo_section_about'>
        <img className='logo_mark_style' src={logo_mark} alt=''/>
       </div>
       <div className='text_section_about'>
          <h2 className='title_small_about'>About Esteemed Trading LLC</h2>

          <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big_about'>Quality is the cornerstone of our operations.
         </motion.h1>

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_1_about'>{description1}
         </motion.h1>

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_2_about'>{description2}
          </motion.h1>

       </div>
    </div>
  )
}

export default AboutRow
