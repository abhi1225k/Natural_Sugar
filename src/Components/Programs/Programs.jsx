import React from 'react'
import './Programs.css'
import co419 from '../../assets/co419.jpg'
import c10001 from '../../assets/c10001.jpg'
import coC671 from '../../assets/coC671.jpeg'
import sugar from '../../assets/sugar.png'

const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={co419} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p><h1>co419</h1></p>
        </div>
      </div>

      <div className='program'>
        <img src={c10001} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p><h1>co7219</h1></p>
        </div>
      </div>

      <div className='program'>
        <img src={coC671} alt=''/>
        <div className='caption'>
          <img src={sugar} alt=''/>
          <p><h1>coC671</h1></p>
        </div>
      </div>
      
        
    </div>
  )
}

export default Program
