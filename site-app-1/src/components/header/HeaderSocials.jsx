import React from 'react'
import {CiLinkedin} from 'react-icons/ci'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com'target='_blank'><CiLinkedin/></a>
        <a href='https://github.com'target='_blank'></a>
        <a href='https://instagram.com'target='_blank'></a>
    </div>
  )
}

export default HeaderSocials