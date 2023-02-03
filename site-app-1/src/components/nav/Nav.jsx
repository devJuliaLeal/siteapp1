import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'



const nav = () => {
  return (
    <div className='nav'>
      
      <a href='#' ><RiHomeLine/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><AiOutlineBook/></a>
  
     
  




    </div>
  )
}

export default nav