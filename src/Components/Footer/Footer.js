import React from 'react'
import './Footer.css'
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
 
   const ScrollToPageTop =()=>{
         window.scrollTo(0, 0)
    }

    return (
    <div className='main'>
      <div className='content_box'>
          <div>
            <h2 className='heading_style'>Quick Contact</h2>
              <div className='title_box'>
                <h2 className='title_style2'>Adress - Abu Dhabi, UAE</h2>
                <h2 className='title_style2'>Phone - +971 543 020 889</h2>
                <Link to = '/contact'  onClick={ScrollToPageTop}><h2 className='title_style'>Email - sales@esteemedtr.com</h2></Link>
                <h2 className='title_style2'>Follow Us</h2>
                 <div className='box_icon'>
                 <span className='icon_card'> <FaFacebook className='icon_style'/> </span>
                 <span className='icon_card'><FaTwitter className='icon_style'/></span>
                 <span  className='icon_card'><FaInstagram className='icon_style'/></span>
                 <span className='icon_card'><FaGoogle className='icon_style'/></span>
                 </div>
              </div>
          </div>
          <div>
            <h2 className='heading_style'>Quick Links</h2>
              <div className='title_box'>
               <Link to = '/' onClick={ScrollToPageTop}> <h2 className='title_style'>Home</h2></Link>
                <Link to = '/about' onClick={ScrollToPageTop}><h2 className='title_style'>About Us</h2></Link>
                <Link to = '/' onClick={ScrollToPageTop}><h2 className='title_style'>Services</h2></Link>
                <Link to = '/contact' onClick={ScrollToPageTop}><h2 className='title_style'>Contact</h2></Link>
              </div>
          </div>
          <div>
            <h2 className='heading_style'>Our Services</h2>
              <div className='title_box'>
               <Link to = '/dental' onClick={ScrollToPageTop}><h2 className='title_style'>Dental</h2></Link>
               <Link to = '/medical' onClick={ScrollToPageTop}><h2 className='title_style'>Medical</h2></Link>
                <h2 className='title_style'>Marine</h2>
              </div>
          </div>
          <div className=''>
            <h2 className='heading_style'>Help</h2>
              <div className='title_box'>
                <h2 className='title_style'>Privacy policy</h2>
                <h2 className='title_style'>Support</h2>
                <h2 className='title_style'>Terms & conditions</h2>
                <h2 className='title_style'>License and uses</h2>
              </div>
          </div>
          
      </div>
      
    </div>
    
  )
}

export default Footer
