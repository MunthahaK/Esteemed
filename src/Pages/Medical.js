import React from 'react'
import TopNavbar from '../Components/NavBar/TopNavbar/TopNavbar'
import Navbar from '../Components/NavBar/Navbar'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import { image31, services0, services30, services2 } from '../Assets'
import FooterTop from '../Components/Footer/FooterTop'
import Footer from '../Components/Footer/Footer'
import FooterBottom from '../Components/Footer/FooterBottom'
import ProductsItem from '../Components/ProductItems/ProductsItem'
import AboutRow from '../Components/AboutRow/AboutRow'



function Medical() {
  return (
    <div>
      <ContactBanner title='Medical' image={image31}/>
      <AboutRow description1='Esteemed Trading LLC is a company that continuously provides Sourcing, Trading Distribution and excellence in the Dental & Medical Sectors through outstanding quality and exclusive services & products.We import and export various products but mainly Dental & Medical, Safety Equipments worldwide.'
                description2='We handle the production, distribution and the selection of local distributors in different countries. We set out to develop and distribute the products while maintaining the highest quality and evolving along with the times.'
      />
      <ProductsItem productImage={services0} productTitle='Personal Protective Products'
                    productDescription='Masks | Gloves | Head Cap | Safety Googles | Disposable Isolation Gown | Disposable Face Shield | Coverall |  Shoe Cover | Hand Sleeves | Biohazard Bags'
      />
      <ProductsItem productImage={services30} productTitle='Knee Support Brace'
                    productDescription="Hinged Knee Brace | Adjustable Compression Knee Support Brace for Men & Women"
      />
      <ProductsItem productImage={services2} productTitle='Neck Support Cervical Collar'
                    productDescription='Aspen Collar |  Malibu  Collar | Miami J  Collar | Philadelphia  Collar'
      />
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Medical
