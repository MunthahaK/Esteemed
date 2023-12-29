import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Banner from '../Components/Banner/Banner'
import IconRow from '../Components/IconRow/IconRow'
import RowPost from '../Components/RowPost/RowPost'
import Footer from '../Components/Footer/Footer'
import FooterBottom from '../Components/Footer/FooterBottom'
import Rowpost2 from '../Components/RowPost2/Rowpost2'
import FooterTop from '../Components/Footer/FooterTop'
import RowLocation from '../Components/RowLocation/RowLocation'
import TopNavbar from '../Components/NavBar/TopNavbar/TopNavbar'



function Home() {
  return (
    <div>
      <Banner/>
      <Rowpost2/>
      <IconRow/>
      <RowPost/>
      <RowLocation/>
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default Home
