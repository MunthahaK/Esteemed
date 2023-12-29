import React from 'react'
import './AboutRow2.css'
import { motion } from 'framer-motion'

function AboutRow2() {
  return (
    <div className='main_about_row2'>
       <div className='heading1_about_row2'>
         <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big_about_row2'>Mission
         </motion.h1> 

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_1_about_row2'>Our mission is to deliver excellent products and services to our customers, while also contributing to the economic and social development of the communities and countries in which we operate.
         </motion.h1>

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
          className='description_2_about_row2'>Our goal is to continue growing our business and making a positive impact on society.
          </motion.h1>
       </div> 
       <div className='heading2_about_row2'>
       <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big_about_row2'>Vision
         </motion.h1>  

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
          className='description_2_about_row2'>To be a leading global player in the trading industry, recognized for our excellence in customer service, ethical standards, and innovative solutions.
          </motion.h1>
       </div>
    </div>
  )
}

export default AboutRow2
