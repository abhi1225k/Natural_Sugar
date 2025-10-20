import React from 'react'
import './Biofuel.css'
import bioethanol from '../../assets/bioethanol.png'

const Biofuel = () => {
  return (
    <div className='about3'>
      <div className='about-left3'>
        <img src={bioethanol} alt=''/>
      </div>
      <div className='abot-right3'>
        <h1>Bioethanol Fuel</h1>
        <p>The bioethanol production process

    Harvesting: Sugarcane is cut either manually or mechanically and quickly transported to a processing plant. Timely transportation is critical to prevent the loss of sucrose, the primary fermentable sugar.
    Juice extraction: At the plant, the sugarcane stalks are crushed or milled to extract the juice. The fibrous residue, known as bagasse, is separated and often used as a fuel source to power the mill.
    Clarification: The extracted juice is heated and treated with lime to neutralize its acidity and precipitate impurities. This process results in a clearer, purer juice for fermentation.
    Fermentation: This is the core step where simple sugars are converted into ethanol and carbon dioxide.
        Ingredient preparation: The clarified juice, or a byproduct called molasses, is diluted with water to achieve an optimal sugar concentration. Yeast nutrients, such as nitrogen, are also added.
        Yeast addition: The solution is pumped into fermentation tanks where yeast, typically Saccharomyces cerevisiae, is added.</p>
      </div>
    </div>
  )
}

export default Biofuel
