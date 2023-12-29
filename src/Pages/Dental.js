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
          description1='Esteemed Trading LLC is a company that continuously provides Sourcing, Trading Distribution and excellence in the Dental & Medical Sectors through outstanding quality and exclusive services & products.We import and export various products but mainly Dental & Medical, Safety Equipments worldwide.'
          description2='We handle the production, distribution and the selection of local distributors in different countries. We set out to develop and distribute the products while maintaining the highest quality and evolving along with the times.'
      />
      <ProductsItem productImage={services} productTitle='Dental Equipments'
                    productDescription='Mouth Mirror | Cotton Forceps | Periodontal Probe | Ultrasonic Scaler | Extracting Forceps | Dental Elevator | Air Water Syringe'
      />
      <ProductsItem productImage={services4} productTitle='Invisible Teeth Braces'
                    productDescription='Lingual Braces | Invisalign Braces | Ceramic Braces'
      />
      <ProductsItem productImage={image1} productTitle='Dental Implant Tools'
                    productDescription='Restorative Drivers | Periodontal Probes | Drills & Burs | Drill Stoppers | Periotomes | Hemostats | Bone Mills | Extraction Forceps | Retractors | Needle Drivers'
      />
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Dental
