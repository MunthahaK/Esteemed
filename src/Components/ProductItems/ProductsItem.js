import React from 'react'
import './ProductsItem.css'
import { motion } from 'framer-motion'

function ProductsItem({productImage, productTitle,  productDescription}) {
  return (
        <div className='products-background-row'>
        <motion.div className='products-image'
        initial={{ opacity: 0, scale:0.8 }}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{duration:0.6}}>
           <img className='products-image-style' src={productImage} alt='Product Image' loading='lazy'/>
        </motion.div>

        <motion.div className='product-details'
         initial={{ opacity: 0, scale:0.8 }}
         whileInView={{ opacity: 1, scale:1 }}
         transition={{duration:0.6}}>
           <h2 className='product-title-syle'>{productTitle}</h2>
           <p className='product-description-style'>{productDescription}</p>
        </motion.div>
    </div>
  )
}

export default ProductsItem
