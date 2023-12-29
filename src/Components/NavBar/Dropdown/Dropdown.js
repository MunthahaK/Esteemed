import React, { useState } from 'react'
import './Dropdown.css'
import { serviceDropdown } from '../NavItems';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Dropdown() {

    const [dropdown,setDropdown] = useState(false);

    const ScrollToPageTop =()=>{
      window.scrollTo(0, 0)
  }

  return (
    <div className='dropdown-box'>
       <motion.ul
        initial={{opacity:0,y:"-50%"}}
        animate={{opacity:1,y:"0%"}}
        exit={{opacity:0,y:"-50%",transition:{duration:"0.35"}}}
        transition={{type:"spring",stiffness:"100",duration:"0.75"}}
       className={ dropdown ? 'services_submenu clicked' : 'services_submenu'}
       onClick={()=> setDropdown(!dropdown)}
        >
         {
           serviceDropdown.map((item) => {
             return (
             <li key={item.id} onClick={()=>setDropdown(false)}> 
              <Link to = {item.path} className={item.cName} onClick={ScrollToPageTop}>
                {item.title}
              </Link>
              </li>
             )
            })
         }
       </motion.ul>
    </div>
  )
}

export default Dropdown
