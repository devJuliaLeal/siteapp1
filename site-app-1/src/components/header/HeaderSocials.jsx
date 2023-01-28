import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithubAlt} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  href='https://linkedin.com'target='_blank' ><CiLinkedin/></a>
        <a href='https://github.com'target='_blank'><FaGithubAlt/></a>
        <a href='https://instagram.com'target='_blank'><AiOutlineInstagram/></a>
        <a href='https://whatsapp.com'target='_blank'><AiOutlineWhatsApp/></a>
    </div>
  )
}

export default HeaderSocials