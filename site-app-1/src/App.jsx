import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portifolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'





const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Contact/>
      <Experience/>
      <Footer/>
      <Nav/>
      <Portifolio/>
      <Testimonials/>

    </div>
  )
}

export default App