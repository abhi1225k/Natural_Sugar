import React from 'react'
import './About.css'
import ncmd from '../../assets/ncmd.jpg'

const About = ({setPlayState}) => {
  return (
    
    <div className='about'>
     
      <div className='about-left'>
        <img src={ncmd} alt='' className='about-img' onClick={()=>{setPlayState(true)}}/>
        
      </div>
      
      <div className='about-right'>
        <h1>Chairman & Managing Director Message</h1>
        <br/>
        <p>
            I believe in empowering farmers by supporting farming and related industries. It's our social responsibility to provide poison-free food & environmental friendly development to community. Natural Sugar Commits to provide sugar and other Allied products of the highest purity at reasonable cost to satisfy our customer's present and future needs and expectations of quality, purity, reliability and service.
          </p>
          <br/>
           <p> 
              B.B. Thombare
              <br/>
              Chairman & Managing Director
            </p>
        
      </div>
    </div>
  )
}

export default About
