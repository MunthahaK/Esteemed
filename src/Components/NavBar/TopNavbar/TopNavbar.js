import React from 'react'
import './TopNavbar.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function TopNavbar() {
  return (
    <div className='complete-header'>
        <div className='location-section'>
        <LocationOnIcon fontSize='16px'/>
         <h1 className='text-design'>Abu Dhabi, UAE</h1>
        </div>
        <div className='phone-section'><PhoneIcon fontSize='16px'/>
        <h1 className='text-design'>+971 543 020 889</h1>
        </div>
        <Link to = '/contact'>
        <div className='email-section'><EmailIcon fontSize='16px'/>
        <h1 className='text-design'>sales@esteemedtr.com</h1>
        </div>
        </Link>
        <div className='follow-icons-section'>
            <h1 className='text-design'>Follow Us</h1>
            <div className='box_icon_top'>
              <a href='https://www.facebook.com/Esteemedtr' target='_blank'><span className='icon_card_top'><FaFacebook className='icon_style_top'/></span></a>
              <a href='https://www.twitter.com' target='_blank'><span className='icon_card_top'><FaTwitter className='icon_style_top'/></span></a>
              <a href='https://www.instagram.com' target='_blank'><span  className='icon_card_top'><FaInstagram className='icon_style_top'/></span></a>
              <a href='https://www.google.com' target='_blank'><span className='icon_card_top'><FaGoogle className='icon_style_top'/></span></a>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar
