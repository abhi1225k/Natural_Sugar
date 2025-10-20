import React from 'react'
import './Environment.css'
import plantation from '../../assets/plantation.png'

const Environment = () => {
  return (
    <div className='about2' id='environment'>
    
      <div className='about-lef2t'>
        <img src={plantation} alt='' />
        </div>
        <div className='about-right2'>
            <h1>Environment Policy</h1>
            <p>Air pollution: The practice of burning sugarcane fields before harvest releases pollutants that degrade air quality and harm public health.
                Greenhouse gas emissions: The industry's footprint includes greenhouse gas emissions from cultivation, processing, and transportation. The treatment of wastewater and the burning of byproducts like bagasse also contribute to these emissions
            In addition to the risk of explosion, sugar dust can also pose health risks to workers in the sugar industry. Inhaling sugar dust may result in respiratory issues like asthma., and exposure to sugar dust can also lead to skin irritation and eye irritation
            </p>
        
      </div>
    </div>
  )
}

export default Environment
