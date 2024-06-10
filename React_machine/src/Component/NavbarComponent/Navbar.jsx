import React, { useState } from 'react'
import './Navbar.css';

export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>MyBrand</div>
        <div className={`nav-links ${isOpen?'open':''}`}>
            <a href="#home">Home</a>
            <a href="#services">services</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
        </div>
        <div className='nav-toggle' onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    </nav>
  )
}
