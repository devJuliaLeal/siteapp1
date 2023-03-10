import React from 'react'
import './header.css'
import CTA from './CTA'
import IM from '../../assets/meninadancando.gif'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
     <div className='header_container'> 
     <h5> Hello, I`m </h5>
     <h1> Julia Leal</h1>
     <h5 className='text-light'> FrontEnd Developer </h5>
     <CTA/>
     <HeaderSocials/>
     

     <div className='imagem'>
 <img src={IM} alt='imagem minha' className='img1'></img> 
     </div>
     <a href="#contact" className='scroll_down'> Scroll Down</a>
     </div>
    </header>
  )
}

export default Header


