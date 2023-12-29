import React from 'react';
import './RowPost.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function RowPost() {

  return (
    <div className="row">

        <div className="column_1">
         <h2 className='title_small'>About Esteemed Trading LLC</h2>   
         <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big'>Quality is the cornerstone of our operations.</motion.h1> 
         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_1'>Esteemed Trading LLC is a company based in Abu Dhabi, United Arab Emirates. Since its inception in 2023, it has been engaged in sourcing, importing, and distributing various healthcare products such as medical disposables, dental products, and aesthetic products, as well as marine equipment and tools.</motion.h1>
         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_2'>Our focus is on providing exceptional quality and exclusive services to our customers, while upholding ethical and sustainable business practices.</motion.h1>
          <motion.div
           initial={{ opacity: 0, scale:0.8 }}
           whileInView={{ opacity: 1, scale:1 }}
           transition={{duration:0.6}}
          className='link'><Link to='/about' className='link_name'>
           MORE ABOUT OUR COMPANY
           <span className='icon-style'><KeyboardDoubleArrowRightIcon/></span>
          </Link>
          </motion.div>
        </div> 


        <div className="column_2">
        <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big_column2'>Mission
         </motion.h1> 

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
         className='description_1'>Our mission is to deliver excellent products and services to our customers, while also contributing to the economic and social development of the communities and countries in which we operate.</motion.h1>

         <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
          className='description_2'>Our goal is to continue growing our business and making a positive impact on society.</motion.h1>
         
         <motion.h1 
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}
         className='title_big_column2'>Vision
         </motion.h1>  

          <motion.h1
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
          className='description_2'>To be a leading global player in the trading industry, recognized for our excellence in customer service, ethical standards, and innovative solutions.
          </motion.h1>

        </div> 
    </div>
  )
}

export default RowPost
