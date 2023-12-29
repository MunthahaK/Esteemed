import React from 'react'
import './AboutRow3.css'
import { services, img1 } from '../../Assets'
import { motion } from 'framer-motion'

function AboutRow3() {
  return (
    <div className='container'>
      <div className='AboutRow3-background'  style={{backgroundImage:`url(${img1})`}}>
         <div className='AboutRow3-background-contents'>

           <div className='AboutRow3-columns'>
           <div className='AboutRow3-column1'>
           <motion.h1 
              initial={{ opacity: 0, scale:0.8 }}
              whileInView={{ opacity: 1, scale:1 }}
              transition={{duration:0.6}}
            className='AboutRow3-title'>Commitment to Quality<p className='AboutRow3-description'>Quality is the cornerstone of our operations. We meticulously select products from trusted manufacturers, ensuring that every item in our catalog contributes to the efficiency and success of dental practices. Your confidence in our offerings is our measure of success.</p>
            </motion.h1>
           </div>

           <div className='AboutRow3-column2'>
           <motion.h1 
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{duration:0.6}}
            className='AboutRow3-title'>Customer-Centric Approach<p className='AboutRow3-description'>Your satisfication is our priority. We are committed to providing personalized service, addressing your unique needs, and fostering lasting partnerships. Your success is our success, and we are dedicated to supporting your practice every step of the way.</p>
            </motion.h1>
           </div>
           </div>
        
            <motion.div className='AboutRow3-image'
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{duration:0.6}}>
              <img className='AboutRow3-image-style' src={services} alt='Image' loading='lazy'/>
            </motion.div>

         </div>
        </div>
      </div>
  )
}

export default AboutRow3
