import React, { useState, useEffect} from 'react';
import './Banner.css';
import 'react-slideshow-image/dist/styles.css';
import { Fade} from 'react-slideshow-image';
import {banner1,banner2,banner4,mobileBanner} from '../../Assets';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const slides =[
    {
     url:`${banner1}`,
     caption:"Welcome to Medical & Dental trading Hub!",
     text:'Esteemed Trading is a young and fast growing company led by an efficient team in serving hospitals and clinics in UAE.'
    },
    {
     url:`${banner2}`,
     caption:"Get wide range of high quality supplies & equipment..",
     text:'Elevate your practice and patient care with the best medical, dental supplies and equipment.'
    },
    {
     url:`${banner4}`,
     caption:"Quality products tailored to your needs.",
     text:"From precision instruments to cutting-edge technology, we've got your needs covered and ensuring reliable delivery."
    },
 ]

   
 const mobileViewSlides =[
  {
   url:`${mobileBanner}`,
   caption:"Welcome to Medical, Dental & Marine trading Hub!",
   text:'Esteemed Trading is a young and fast growing company led by an efficient team in serving hospitals and clinics in UAE.'
  },
  {
   url:`${banner2}`,
   caption:"Get wide range of high quality supplies & equipment..",
   text:'Elevate your practice and patient care with the best medical, dental supplies and equipment.'
  },
  {
   url:`${banner4}`,
   caption:"Quality products tailored to your needs.",
   text:"From precision instruments to cutting-edge technology, we've got your needs covered and ensuring reliable delivery."
  },
]

 const ArrowRight = (props) => (
 <ArrowForwardIosIcon htmlColor='white' fontSize='10'
   style={{margin:"4px", padding:"5px", backgroundColor:"rgba(255, 255, 255, 0.200)", borderRadius:"2rem"}}
   {...props}/>
);
const ArrowLeft = (props) => (
 <ArrowBackIosNewIcon  htmlColor='white' fontSize='10'
 style={{margin:"4px", padding:"5px", backgroundColor:"rgba(255, 255, 255, 0.200)", borderRadius:"2rem"}}
 {...props}/>
);



 const fadeProperties = {
    duration: 5000,
    transitionDuration: 900,
    autoplay: true,
    nextArrow : <ArrowRight/>,
    prevArrow : <ArrowLeft/>
  }
  
function Banner() {

  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

    return (
      <div>
       {
        isMobile ? (
          <div className='container'>
          <Fade {...fadeProperties}>
          {mobileViewSlides.map((mobileSlide,index)=>(
              <div key={index}>
                 <div className='banner'
                  style={{backgroundImage:`url(${mobileSlide.url})`}}>   
                  <div className='fade'>
       <div className='banner_contents'>
         <motion.h1 
         initial={{x:-1000}}
         animate={{x:0}}
         transition={{duration: 2,delay:0}}
         className='banner_title'>{mobileSlide.caption}</motion.h1>
         <motion.h1 
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.5}}
         className='banner_description'>{mobileSlide.text}</motion.h1> 
         <motion.div
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.6}}
          className='banner_buttons'>
          <Link to = '/contact'>
            <button className='banner_button'>Contact Us</button>
          </Link>
         </motion.div>
       </div>
       </div>
                 </div>
              </div>
          ))}
      </Fade>
      </div>
        ):
       


(<div className='container'>
          <Fade {...fadeProperties}>
          {slides.map((slide,index)=>(
              <div key={index}>
                 <div className='banner'
                  style={{backgroundImage:`url(${slide.url})`}}>   
                  <div className='fade'>
       <div className='banner_contents'>
         <motion.h1 
         initial={{x:-1000}}
         animate={{x:0}}
         transition={{duration: 2,delay:0}}
         className='banner_title'>{slide.caption}</motion.h1>
         <motion.h1 
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.5}}
         className='banner_description'>{slide.text}</motion.h1> 
         <motion.div
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.6}}
          className='banner_buttons'>
          <Link to = '/contact'>
            <button className='banner_button'>Contact Us</button>
          </Link>
         </motion.div>
       </div>
       </div>
                 </div>
              </div>
          ))}
      </Fade>
      </div>)}
      </div>
       
       
  
    )
}

export default Banner
/*return (
        <div className='container'>
          <Fade {...fadeProperties}>
          {slides.map((slide,index)=>(
              <div key={index}>
                 <div className='banner'
                  style={{backgroundImage:`url(${slide.url})`}}>   
                  <div className='fade'>
       <div className='banner_contents'>
         <motion.h1 
         initial={{x:-1000}}
         animate={{x:0}}
         transition={{duration: 2,delay:0}}
         className='banner_title'>{slide.caption}</motion.h1>
         <motion.h1 
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.5}}
         className='banner_description'>{slide.text}</motion.h1> 
         <motion.div
           initial={{x:-1000}}
           animate={{x:0}}
           transition={{duration: 2,delay:0.6}}
          className='banner_buttons'>
          <Link to = '/contact'>
            <button className='banner_button'>Contact Us</button>
          </Link>
         </motion.div>
       </div>
       </div>
                 </div>
              </div>
          ))}
      </Fade>
      </div>
    )*/