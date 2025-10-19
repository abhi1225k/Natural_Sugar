import React from 'react'
import './Programs.css'
import sugara from '../../assets/sugara.jpg'
import sugarb from '../../assets/sugarb.jpg'
import sugarc from '../../assets/sugarc.jpeg'
import sugar from '../../assets/sugar.png'

const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={sugara} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p>co419</p>
        </div>
      </div>

      <div className='program'>
        <img src={sugarb} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p>co7219</p>
        </div>
      </div>

      <div className='program'>
        <img src={sugarc} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p>coC671</p>
        </div>
      </div>
      
        
    </div>
  )
}

export default Program
