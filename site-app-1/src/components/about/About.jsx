import React from 'react'
import './about.css'
import img from '../../assets/meninadancando.gif'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={img} alt="about image"></img>
        </div>
        <div className='about__content'>
          <div className='about__cards'></div>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small> 2+ Years Working</small>
                
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients</h5>
              <small> 10+ Worlwide</small>
                
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5> Projects</h5>
              <small> 80+ Completed Projects</small>
                
            </article>

        </div>
      </div>
      </section>
  )
}

export default About