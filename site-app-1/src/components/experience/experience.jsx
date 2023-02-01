import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5> 


      <h2>My experience</h2>

 {/* FRONTEND*/}     
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3> Frontend Experience</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <h4> HTML</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> CSS</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> JavaScript</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> React</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> Tailwind</h4>
            <h5 className='text-light'>Experienced</h5>
            </article>
            </div>
        </div>
{/* BACKEND*/}

        
        <div className='experience__backend'>
        <h3> Frontend Experience</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <h4> HTML</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> CSS</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> JavaScript</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> React</h4>
            <h5 className='text-light'>Experienced</h5>
            <BsFillPatchCheckFill/>
            <h4> Tailwind</h4>
            <h5 className='text-light'>Experienced</h5>
            </article>
          </div>
        </div>
       </div>
    
 </section>
  )
}

export default experience