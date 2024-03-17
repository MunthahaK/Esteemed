import React from 'react'
import TopNavbar from '../Components/NavBar/TopNavbar/TopNavbar'
import Navbar from '../Components/NavBar/Navbar'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import { image31, services0, services30, services2,ankle_support,body_belts,forearm_product,fracture_aids,image_placeholder } from '../Assets'
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
                productDescription={<p>Masks <b>|</b>  Gloves <b>|</b> Head Cap <b>|</b> Safety Googles <b>|</b> Disposable Isolation Gown <b>|</b> Disposable Face Shield <b>|</b> Coverall <b>|</b> Shoe Cover <b>|</b> Hand Sleeves <b>|</b> Biohazard Bags</p>}
      />
      <ProductsItem productImage={fracture_aids} productTitle='Fracture Aids'
                    productDescription={<p>Shoulder Immobilizer <b>|</b> Shoulder Immobilizer with support <b>|</b> Shoulder Support <b>|</b> Pouch Arm Sling <b>|</b> Tropical Arm Sling <b>|</b> Clavicle Brace <b>|</b> Cuff "N" Collar <b>|</b> Shoulder Immobilizer baggy <b>|</b> Easy Sling <b>|</b> Soft Sling Roll <b>|</b> Pouch Arm Sling Cock up Splint <b>|</b> Cast Shoes </p>}
      />
      <ProductsItem productImage={services30} productTitle='Knee Support'
                     productDescription={<p>Knee Cap Standard <b>|</b> Knee Cap Open Patella <b>|</b> Knee Cap Hinged <b>|</b> Functional Knee Mobilizer <b>|</b> Hinged Knee Wrap <b>|</b> Patellar Support <b>|</b> Knee Immobilizer 14’ <b>|</b> Knee Immobilizer 19’ <b>|</b> Knee Immobilizer 22’ <b>|</b> R.O.M Knee Brace <b>|</b> Knee Cap Active <b>|</b> Universal Knee Wrap <b>|</b> Varicose Vein Stockings (Above Knee) <b>|</b> Medical Compression Stockings (Below Knee) <b>|</b> Knee Cap Comfort <b>|</b> Knee Cap w/ Patellar Ring</p>}                  
      />
      <ProductsItem productImage={image_placeholder} productTitle='Finger Supports'
                    productDescription={<p>Finger Cot <b>|</b> Finger Cot Velcro <b>|</b> Frog Splint <b>|</b> mallet Finger Splint <b>|</b> Universal Finger Support <b>|</b> Zimmer Splint <b>|</b> Thumb Spica Splint <b>|</b> Finger Extension Splint </p>}
      />
      <ProductsItem productImage={forearm_product} productTitle='Wrist & Forearm Products'
                    productDescription={<p>Wrist Brace <b>|</b> Wrist Binder <b>|</b> Wrist Thumb Support <b>|</b> Tennis Elbow <b>|</b> Forearm Splint <b>|</b> Wrist & Forearm Splint <b>|</b> Elbow Support <b>|</b> Elastic Wrist Splint <b>|</b> Dynamic Cockup Splint <b>|</b> Hand Resting Splint </p>}
      />
      <ProductsItem productImage={body_belts} productTitle='Body Belts & Braces Products'
                    productDescription={<p>Lumbo Sacral Belt <b>|</b> Lumbo Contoured belt <b>|</b> Lumbo Corset belt <b>|</b> Lumbo Fit Belt <b>|</b> Abdominal Corset <b>|</b> Abdominal Binder <b>|</b> Abs Wrap Neo <b>|</b> Taylors Brace <b>|</b> Posture Corrector <b>|</b> Hyper extension Brace <b>|</b> Rib Belt <b>|</b> Chest Binder </p>}
      />
      <ProductsItem productImage={image_placeholder} productTitle='Junior Series'
                    productDescription={<p>Junior Arm Sling <b>|</b> Junior Clavicle brace <b>|</b> Junior Shoulder Immobilizer <b>|</b> Junior Walker <b>|</b> Junior Cervical Collar <b>|</b> Junior Cervical Collar <b>|</b> Junior Cockup Splint <b>|</b> Junior Wrist Splint <b>|</b> Junior Knee Immobilizer <b>|</b> Junior Skin Traction <b>|</b> Junior Arc Support <b>|</b> Junior Foot Drop Splint <b>|</b> Junior Leg Traction </p>}
     />      
      <ProductsItem productImage={services2} productTitle='Cervical Aids'
                    productDescription={<p>Soft Cervical Collar <b>|</b> Hard Cervical Collar <b>|</b> Micro Phill Collar <b>|</b> Contoured Cervical Pillow <b>|</b> Collar Soft Firm Density </p>}
     />
      <ProductsItem productImage={ankle_support} productTitle='Ankle Support & Footcare Products'
                     productDescription={<p>Ankle Binder <b>|</b> Anklet Comfort With Binder <b>|</b> Ankle Splint <b>|</b> Ankle Beige Pair <b>|</b> Ankle Support Neoprene <b>|</b> Metatarsal Cushion <b>|</b> Hallux Valgus/Bunion Splint <b>|</b> Foot Drop Splint <b>|</b> Night Splint (De-Rotational Splint) <b>|</b> Anklet Comfort </p>}
      />
      <ProductsItem productImage={image_placeholder} productTitle='Traction Aids'
                     productDescription={<p>Cervical Traction (Header) <b>|</b> Pelvic Traction Belt <b>|</b> Skin Traction (Rexine) <b>|</b> Skin Traction (PUF Liner) <b>|</b> Leg Traction <b>|</b> Traction Weight Bag </p>}
      />
      <ProductsItem productImage={image_placeholder} productTitle='Wellness Products'
                     productDescription={<p>Cotton Crepe 4 Mt <b>|</b> Stockinette 10 Mt <b>|</b> Back Rest <b>|</b> Orthopedic Cushion Seat <b>|</b> Diabetic Insole <b>|</b> Heel Cushion <b>|</b> Arch Support <b>|</b> Toe Separator<b>|</b> Hot & Cold Get Pack <b>|</b> Orthopedic heating pad<b>|</b> Diabetic Insole w/Arch <b>|</b> Bed back Rest </p>}
      />
      <ProductsItem productImage={image_placeholder} productTitle='Walking Aids'
                    productDescription={<p>Walking Stick (L Type) <b>|</b> Walking Stick <b>|</b> Walking Stick Tripod <b>|</b> Walking Stick Quadripod <b>|</b> Elbow Crutches <b>|</b> Ranger Walker Adjustable <b>|</b> Nova Walker Adjustable <b>|</b> Nut Bolt Fixed Walker <b>|</b> Walking Stick Bushes <b>|</b> Side Pouch </p>}
      />
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Medical
