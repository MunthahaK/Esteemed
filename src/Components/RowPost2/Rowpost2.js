import React from 'react'
import './Rowpost2.css'
import { image3 } from '../../Assets'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from 'framer-motion'

function Rowpost2() {
  return (
    <div className='main-row'>
        <div 
        className='image-section'>
           <motion.img 
            initial={{ opacity: 0, scale:0.8 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{duration:0.7}}
           className='image-style2' src={image3} alt='Image' loading='lazy'></motion.img>
              <motion.div 
              initial={{ opacity: 0, scale:0.8 }}
              whileInView={{ opacity: 1, scale:1 }}
              transition={{duration:0.7}}
              className='box'>
                <h2 className='box-text'>Best products & services for the customers </h2>
                </motion.div>
        </div>

        <div className='text-section'>
             <motion.h2 
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{duration:0.6}}
             className='title-feature'>Features</motion.h2>

             <motion.h1
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{duration:0.6}}
             className='second-title'>The greatest asset of the company is client satisfaction</motion.h1>

             <motion.h1
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{duration:0.6}}
             className='description-style'>Our team ensures seamless operations with reliable supply chain in the industry who strives to provide with excellent service, high quality products and top notch distribution system in UAE.</motion.h1>
             
             <ul className='list-items'>
                <motion.li 
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{duration:0.6}}
                className='list-item'><span className='star-style'><AiOutlineCheckCircle size='1.2rem'/></span>Integrity
                </motion.li>
                 
                <motion.li 
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{duration:0.6}}
                className='list-item'><span className='star-style'><AiOutlineCheckCircle size='1.2rem'/></span>Quality
                </motion.li>

                <motion.li 
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{duration:0.6}}
                className='list-item'><span className='star-style'><AiOutlineCheckCircle size='1.2rem'/></span>Affordable
                </motion.li>

                <motion.li 
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{duration:0.6}}
                className='list-item'><span className='star-style'><AiOutlineCheckCircle size='1.2rem'/></span>Reliable
                </motion.li>
             </ul>
        </div>
    </div>
  )
}

export default Rowpost2
