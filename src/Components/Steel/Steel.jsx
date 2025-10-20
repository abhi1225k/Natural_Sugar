import React from 'react'
import './Steel.css'
import steel from '../../assets/steel.webp'

const Steel = () => {
  return (
    <div className='about1'>
      <div className='about-left1'>
        <img src={steel} alt='' className='steel'/>
      </div>
      <div className='about-right1'>
        <h1>Steel Manufacturing Process</h1>
        <p>Manufacturing process
            Raw materials: The process begins with iron ore, coke (produced from coal), and limestone.
            Pig iron production: In an integrated plant, iron ore is smelted in a blast furnace to produce pig iron.
            Steel production: Pig iron is then converted into steel.
            Integrated plants often use a basic oxygen furnace to refine the pig iron.
            Mini mills use electric arc furnaces to melt scrap steel.
            Finishing: The molten steel is then continuously cast into final shapes

            </p>
      </div>
    </div>
  )
}

export default Steel
