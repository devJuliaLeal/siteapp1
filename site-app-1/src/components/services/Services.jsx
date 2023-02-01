import React from 'react'
import './services.css'
import {BsCheckCircle} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='serivice__list'>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.. Os últimos serão os primeiros e os do meio sempre serão os do meio.. O dinheiro não traz felicidade, então, dê todo o seu pra mim e seja feliz.. Antes tarde do que mais tarde.. Jesus salva! Que passa para Moisés, que chuta e é gooooolllll....</p>
            </li>
          </ul>


        </article>
      </div>
    </section>
  )
}

export default Services