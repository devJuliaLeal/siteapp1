import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
     <div className='contener header_conteiner'> 
     <h5> Hello, I`m </h5>
     <h1> Julia</h1>
     <h5 className='text-light'> FrontEnd Developer </h5>
     <CTA/>
     </div>
    </header>
  )
}

export default Header