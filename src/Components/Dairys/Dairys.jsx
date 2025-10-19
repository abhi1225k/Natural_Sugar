import React from 'react'
import './Dairys.css'
import ndhoodhpacket from '../../Assets/ndhoodhpacket.jpg'
import shrikhand from '../../Assets/shrikhand.jpg'
import tup from '../../Assets/tup.jpg'
import tupa2 from '../../Assets/tupa2.jpg'
import white_arrow from '../../Assets/white-arrow.png'

const Dairys = () => {
  return (
    <div className='dairy'>
      <div className='gallary'>
        <img src={ndhoodhpacket} alt=''  />
        <img src={shrikhand} alt=''  />
        <img src={tup} alt=''  />
        <img src={tupa2} alt=''  />
      </div>
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt=''/></button>
    </div>
  )
}

export default Dairys
