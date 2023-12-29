import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { logo, colorlogo } from '../../Assets'
import Dropdown from './Dropdown/Dropdown'
import { navItems } from './NavItems'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Navbar() {

  const ScrollToPageTop =()=>{
    window.scrollTo(0, 0)
}

  const [isResponsive, setIsResponsive] = useState(false);

  const [showNavBar,setShowNavBar] = useState(false)

 
       useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 30) {
             setShowNavBar(true)
      }else
        setShowNavBar(false)
    });
  },[])


  const [dropdown, showDropdown] = useState(false)

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: {duration:0.4,ease:[0.12, 0, 0.39, 0]} },
    exit: { scaleY: 0, transition: {duration:0.4, ease:[0.22, 1, 0.36, 1]}}
  }

  return (
   
      <nav className={`${showNavBar ? "black_navbar" : "navbar"}`}>
      <Link to='/' onClick={ScrollToPageTop}>
      {showNavBar ? <img className='main-logo' src={colorlogo}/> : <img className='main-logo' src={logo}/>}
      </Link>
      {/*<div>
       <ul className={isResponsive ? `${showNavBar?"nav_items_responsive2":"nav_items_responsive"}` : 'nav_items'}
       >
         {navItems.map((item) => {
          if(item.title === 'Services'){
            return (
              <li key={item.id} 
              onClick={()=>showDropdown(true)}
              onMouseLeave={()=>showDropdown(false)}>
                <Link to={item.path} className={showNavBar?item.cName2:item.cName}>{item.title}</Link>
               {dropdown && <Dropdown/>}
              </li>
             )
          }
           return (
            <li key={item.id} ><Link to={item.path} className={showNavBar?item.cName2:item.cName}>{item.title}</Link></li>
           )
         })}
       </ul>   
        </div>*/}
        
          <AnimatePresence>
          {isResponsive &&
            (<div>
              <motion.ul className={showNavBar?"nav_items_responsive2":"nav_items_responsive"}
                style={{transformOrigin:"top"}}
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
               >
                {navItems.map((item) => {
                 if(item.title === 'Services'){
                   return (
                     <li key={item.id}
                     onClick={()=>showDropdown(true)}
                     onMouseLeave={()=>showDropdown(false)}>
                       <Link className={showNavBar?item.cName2:item.cName}>
                        {item.title}<span className={showNavBar?'black-service-icon':'service-icon'}><KeyboardArrowDownOutlinedIcon/></span>
                       </Link>
                     <div onClick={()=>setIsResponsive(()=>showDropdown(false))}> {dropdown && <Dropdown/>}</div>
                     </li>
                    )
                 }
                  return (
                   <li key={item.id}
                   onClick={()=>setIsResponsive(false)}
                   >
                    <Link to={item.path} onClick={ScrollToPageTop} className={showNavBar?item.cName2:item.cName}>{item.title}</Link>
                    </li>
                  )
                })}
              </motion.ul>   
               </div>)}
          </AnimatePresence>
                    
               <div>
                  <ul className= 'nav_items'>
                  {navItems.map((item) => {
                   if(item.title === 'Services'){
                     return (
                       <li key={item.id} 
                       onMouseEnter={()=>showDropdown(true)}
                       onMouseLeave={()=>showDropdown(false)}>
                         <Link to={item.path} className={showNavBar?item.cName2:item.cName}>
                          {item.title}<span className={showNavBar?'black-service-icon':'service-icon'}><KeyboardArrowDownOutlinedIcon/></span>
                         </Link>
                        {dropdown && <Dropdown/>}
                       </li>
                      )
                   }
                    return (
                     <li key={item.id} 
                     onClick={ScrollToPageTop}
                     >
                      <Link to={item.path} className={showNavBar?item.cName2:item.cName}>
                      {item.title}
                      </Link>
                      </li>
                    )
                  })}
                </ul>   
                 </div>

      
      <a href='BROCHURE.pdf'>
      <button className='btn'>
        Our Brochure
      </button>
      </a>
     
      
      <button className={showNavBar ?'responsive-menu-icon2':'responsive-menu-icon'} 
          onClick={()=>setIsResponsive(!isResponsive)}>
           {isResponsive ? <FaTimes/> : <FaBars/>}
         </button>
      
    </nav>
     
   
  )
}

export default Navbar
