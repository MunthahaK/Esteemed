import React from 'react'
import './RowLocation.css'
import { motion } from 'framer-motion'

function RowLocation() {
  return (
    <div className='bg'>
      <motion.iframe
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.8}} 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232521.45984051807!2d54.493474!3d24.410932000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1698330895962!5m2!1sen!2sus" 
              width="90%"
              height="500" 
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
      </motion.iframe>
    </div>
  )
}

export default RowLocation
