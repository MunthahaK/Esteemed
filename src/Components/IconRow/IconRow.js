import React from 'react'
import './IconRow.css'
import { motion } from 'framer-motion'
import { iconRowBanner,services1,services2 } from '../../Assets'
import { Link } from 'react-router-dom'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function IconRow() {
  return (
   <div className='container'>
    
    <div className='row_bg'  style={{backgroundImage:`url(${iconRowBanner})`}}> 
      <div className='iconrow-contents'>
      <motion.h2 
          initial={{ opacity: 0, scale:0.5 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:0.6}}
        className ='title2'>Our Services
        </motion.h2>
       <div className='title-underline-line'>
        <div className='title-underline'></div>
        <MedicalServicesIcon fontSize='small'/>
        <div className='title-underline'></div>
       </div>
      

      <motion.div 
      initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{duration:0.6}}
      className ='image_box'>
          <Link to = '/dental'>
          <div className='image-card-style'>
            <img className='image_style' src={services1} alt='Card Image' loading='lazy'/>
            <h1 className='card-title'>Dental</h1>
          </div>
          </Link>
          <Link to = '/medical'>
          <div className='image-card-style'>
            <img className='image_style' src={services2} alt='Card Image' loading='lazy'/>
            <h1 className='card-title'>Medical</h1>
          </div>
          </Link>
      </motion.div>
      </div>
      </div>
   </div>
   
  )
}

export default IconRow
