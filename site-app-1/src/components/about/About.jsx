import React from 'react'
import './about.css'
import img from '../../assets/mulher.png'
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
          <img src={img} alt="about image" className='img'></img>
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
              <small> 100+ Worlwide</small>
                
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5> Projects</h5>
              <small> 80+ Completed Projects</small>
            </article>
          <p>"Front End developer with expertise in JavaScript, CSS5, 
  SASS and other technologies. Passionate about creating stunning 
  and engaging user interfaces, constantly seeking innovative and efficient 
  solutions for projects. Detail-oriented and committed to delivering high-quality work,
   believes in teamwork to achieve remarkable results."
          </p>
          <a href='#contact' className='btn btn-primary'>Let`s Talk </a>



        </div>
      </div>
      </section>
  )
}

export default About