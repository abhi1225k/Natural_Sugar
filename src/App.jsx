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
        <Title subTitle=' Dairy Products' title='Popular Dairy Products'/>
        <Dairys/>
        <Testimoniels/>
        <Title subTitle='Investors' title='In Our Copmpany'/>
        <Invester/>

        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        
        <Footer/>
        
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
