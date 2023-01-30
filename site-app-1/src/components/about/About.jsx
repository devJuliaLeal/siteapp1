import React from 'react'
import './about.css'
import img from '../../assets/meninadancando.gif'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={img}></img>
        </div>
        <div className='about__content'>

        </div>
      </div>
      </section>
  )
}

export default About