import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import ContactRow from '../Components/ContactRow/ContactRow'
import RowLocation from '../Components/RowLocation/RowLocation'
import FooterTop from '../Components/Footer/FooterTop'
import Footer from '../Components/Footer/Footer'
import FooterBottom from '../Components/Footer/FooterBottom'
import { iconRowBanner } from '../Assets'
import TopNavbar from '../Components/NavBar/TopNavbar/TopNavbar'

function Contact() {
  return (
    <div>
      <ContactBanner title='Contact Us' image={iconRowBanner}/>
      <ContactRow/>
      <RowLocation/>
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Contact
