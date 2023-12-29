import React from 'react'
import './FooterTop.css'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function FooterTop() {

  const ScrollToPageTop =()=>{
    window.scrollTo(0, 0)
}

  return (
    <div className='row-main'>
     <div className='row-second'>
      <div className='row-third'>
      <div className='heading'>
          <h2 className='style-heading'>We are always ready to help you and answer your questions</h2>
       </div>
       <div className='link-contact'>
          <Link to='/contact' onClick={ScrollToPageTop} className='link-contact-style'>
            Contact<span className='style-icon'><ArrowRightIcon/></span>
          </Link>
       </div>    
      </div> 
     </div>        
    </div>
  )
}

export default FooterTop
