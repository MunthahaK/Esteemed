import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'
import TopNavbar from './Components/NavBar/TopNavbar/TopNavbar'
import Navbar from './Components/NavBar/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Medical from './Pages/Medical'
import Dental from './Pages/Dental'

   
   /* const Home = lazy(()=>import Home from './Pages/Home')
    const AboutUs = lazy(()=>import('./Pages/AboutUs'))
    const Contact = lazy(()=>import('./Pages/Contact'))
    const Medical = lazy(()=>import('./Pages/Medical'))
    const Dental = lazy(()=>import('./Pages/Dental'))*/

function App() {
  return (
   <div>
     <BrowserRouter>
     <TopNavbar/>
     <Navbar/>
     <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/medical' element={<Medical/>}></Route>
            <Route path='/dental' element={<Dental/>}></Route>
          </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
