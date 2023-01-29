import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

const nav = () => {
  return (
    <div>
      <a href='#'><RiHomeLine/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><AiOutlineBook/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><BiMessageSquareDots/></a>
  




    </div>
  )
}

export default nav