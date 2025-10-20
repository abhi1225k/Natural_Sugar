import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Dairys from './Components/Dairys/Dairys'
import Testimoniels from './Components/Testimoniels/Testimoniels'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Invester from './Components/Investor/Invester'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Environment from './Components/Environment/Environment'
import Steel from './Components/Steel/Steel'
import Biofuel from './Components/Biofuel/Biofuel'
import Byproduct from './Components/Byproduct/Byproduct'




const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className='container'>
        <Title subTitle='Sugarcane Verieties' title='Popular Farmers choice'/>
        <Programs/>
        <About setPlayState={setPlayState}/>

        <Byproduct/>

        <Title subTitle=' Dairy Products' title='Popular Dairy Products'/>
        <Dairys/>
        <Testimoniels/>
        <Title subTitle='Investors' title='In Our Copmpany'/>
        <Invester/>
        
        <Title subTitle='Environment' title='Protect Our Nature'/>
              <Title title=' Be the solution, not the pollution.'/>
        <Environment/>

        <Title subTitle='Steel' title='Better for long life'/>
        <Title  title='Industry also make steel from raw material'/>
        <Steel/>

        <Title subTitle='Ethanol' title='Environmental free biofuel'/>
        <Title  title=' Choose Bio Ethanol for a sustainable future!'/>
        <Biofuel/>

        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>        
        <Footer/>
        
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
