import React from 'react'
import './services.css'
import {BsCheckCircle} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
     
{/*UI/UX*/}

     
      <div className='container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
               <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
                <p> Diz-me com quem andas e te direi se vou contigo.. </p>
            </li>
              <li><BsCheckCircle className='service__list-icon'/>
                <p> Diz-me com quem andas e te direi se vou contigo.</p>
             </li>
              <li><BsCheckCircle className='service__list-icon'/>
                <p> Diz-me com quem andas e te direi se vou contigo.</p>
              </li>
          </ul>
        </article>
    

{/*WEB DEVELOPMENT*/}
        
        
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.. </p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
            <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>

          </ul>
         </article>
           



{/*CONTENT CREATION */}
      
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.. </p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
            <li><BsCheckCircle className='service__list-icon'/>
              <p> Diz-me com quem andas e te direi se vou contigo.</p>
            </li>
          </ul>
        </article>
        </div>
    </section>

        
 
  

  )
}

export default Services