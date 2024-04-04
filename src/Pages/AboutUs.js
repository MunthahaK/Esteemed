import React from 'react'
import Footer from '../Components/Footer/Footer'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import { banner6 } from '../Assets'
import AboutRow from '../Components/AboutRow/AboutRow'
import AboutRow2 from '../Components/AboutRow2/AboutRow2'
import FooterTop from '../Components/Footer/FooterTop'
import FooterBottom from '../Components/Footer/FooterBottom'
import AboutRow3 from '../Components/AboutRow3/AboutRow3'


function AboutUs() {
  return (
    <div>
     <ContactBanner title='About Us' image={banner6}/>
     <AboutRow description1 ='Esteemed Trading is a company based in Abu Dhabi, United Arab Emirates. Since its launch in 2023, it has been engaged in sourcing and distributing various healthcare products such as medical disposables, dental products and tools.'  
               description2 ='Our focus is on providing exceptional quality and exclusive services to our customers, while upholding ethical and sustainable business practices.'/>
     <AboutRow3/>
     <AboutRow2/>
     <FooterTop/>
     <Footer/>
     <FooterBottom/>
    </div>
  )
}

export default AboutUs
