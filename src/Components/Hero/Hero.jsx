import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>NATURAL SUGAR & ALLIED INDUSTRIES LTD.</h1>
        <p>
            (Sainager,Ranjani,Ta.Kallam, Dist.Dharashiv-413528)
            <br/>
            CIN-U72214MH1998PLC121048
        </p>
         <button
              onClick={() => {
                const aboutSection = document.getElementById("environment");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary">Explore More</button> 
      </div>
    </div>
  )
}

export default Hero
