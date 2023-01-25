import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portifolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'





const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portifolio/>
      <Testimonials/>
      <Contact/> 
      <Footer/>
      
     
    

    </>
  )
}

export default App