import React from 'react'
import TopNavbar from '../Components/NavBar/TopNavbar/TopNavbar'
import Navbar from '../Components/NavBar/Navbar'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import { banner, services4, image1, services } from '../Assets'
import AboutRow from '../Components/AboutRow/AboutRow'
import ProductsItem from '../Components/ProductItems/ProductsItem'
import FooterTop from '../Components/Footer/FooterTop'
import Footer from '../Components/Footer/Footer'
import FooterBottom from '../Components/Footer/FooterBottom'

function Dental() {
  return (
    <div>
      <ContactBanner title='Dental' image={banner}/>
      <AboutRow
          description1='Esteemed Trading is a company that continuously provides Sourcing, Distribution and excellence in the Dental & Medical Sectors through outstanding quality and exclusive services & products.'
          description2='We handle the distribution of different products throughout the UAE. We set out to develop and distribute the products while maintaining the highest quality and evolving along with the times.'
      />
      <ProductsItem productImage={services} productTitle='Dental Equipments'
                    productDescription={<p>Mouth Mirror <b>|</b> Cotton Forceps <b>|</b> Periodontal Probe <b>|</b> Ultrasonic Scaler <b>|</b> Extracting Forceps <b>|</b> Dental Elevator <b>|</b> Air Water Syringe</p>}
      />
      <ProductsItem productImage={services4} productTitle='Invisible Teeth Braces'
                    productDescription={<p>Lingual Braces <b>|</b> Invisalign Braces <b>|</b> Ceramic Braces</p>}
      />
      <ProductsItem productImage={image1} productTitle='Dental Implant Tools'
                    productDescription={<p>Restorative Drivers <b>|</b> Periodontal Probes <b>|</b> Drills & Burs <b>|</b> Drill Stoppers <b>|</b> Periotomes <b>|</b> Hemostats <b>|</b> Bone Mills <b>|</b> Extraction Forceps <b>|</b> Retractors <b>|</b> Needle Drivers</p>}
      />
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Dental
