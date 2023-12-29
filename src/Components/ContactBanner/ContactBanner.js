import React from 'react'
import './ContactBanner.css'
import { motion } from 'framer-motion'

function ContactBanner({title,image}) {
  return (
    <div className='contact_container'>
        
        <div className='contact_banner' style={{backgroundImage:`url(${image})`}}>   
            <div className='contact_fade'>
               <div className='contact_banner_contents'>
                   <motion.h1 
                    initial={{x:-400}}
                    animate={{x:0}}
                    transition={{duration: 1}}
                     className='contact_banner_title'>{title}
                   </motion.h1> 
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactBanner
