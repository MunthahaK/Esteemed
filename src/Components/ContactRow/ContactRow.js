import React from 'react'
import './ContactRow.css'
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa'
import Form from '../Form/Form'

function ContactRow() {
  return (
    <div className='contact_row'>
       <div className='contact_first_column'>
         <h2 className='contact_small_title'>Contacts</h2>
         <h1 className='contact_big_title'>We are always ready to help you and answer your questions</h1>
           <div className='contact_details'>
              <div className='contact_details_item'>Address
              <h1 className='contact_details_item_style'>Abu Dhabi, UAE</h1>
              </div>
              <div className='contact_details_item'>Email
              <h1 className='contact_details_item_style'>sales@esteemedtr.com</h1>
              </div>
              <div className='contact_details_item'>Phone
              <h1 className='contact_details_item_style'>+971 543 020 889</h1>
              </div>
              <div className='contact_details_item'>Follow Us
              <div className='contact_box_icon'>
                 <a href='https://www.facebook.com/Esteemedtr' target='_blank'><span className='contact_icon_card'><FaFacebook className='contact_icon_style'/></span></a>
                 <a href='https://www.twitter.com' target='_blank'><span className='contact_icon_card'><FaTwitter className='contact_icon_style'/></span></a>
                 <a href='https://www.instagram.com' target='_blank'><span  className='contact_icon_card'><FaInstagram className='contact_icon_style'/></span></a>
                 <a href='https://www.google.com' target='_blank'><span className='contact_icon_card'><FaGoogle className='contact_icon_style'/></span></a>
              </div>
              </div>
           </div>
       </div>
       <div className='contact_second_column'>
           <Form/>
       </div>
    </div>
  )
}

export default ContactRow
