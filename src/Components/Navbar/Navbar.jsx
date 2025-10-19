import React, { useEffect, useState } from 'react'
import './Navbar.css'
import nsai from '../../assets/nsai.jpg'
import ndhoodh from '../../assets/ndhoodh.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

const [sticky, setSticky] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 1000 ? setSticky(true) :
        setSticky(false);
    })
},[])

const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = () => {
 mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
      <img src={nsai} alt='' className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu' }>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='program' smooth={true} offset={-250} duration={500}>Division</Link></li>
        <li><Link to='products' smooth={true} offset={-260} duration={500}>Products</Link></li>
        <li><Link to='dairy' smooth={true} offset={-260} duration={500}>Dairy</Link></li>
        <li><Link to='invester' smooth={true} offset={-260} duration={500}>Investors</Link></li>
        <li><Link to='environment' smooth={true} offset={-260} duration={500}>Environment</Link></li>
        <li><Link className='btn'>contact Us</Link></li>
      </ul>
      <img src={ndhoodh} alt='' className='ndhoodh' />
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
