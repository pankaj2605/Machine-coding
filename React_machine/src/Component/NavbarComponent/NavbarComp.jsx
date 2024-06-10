import React from 'react'
import Navbar from './Navbar'
import './NavbarComp.css';

export default function NavbarComp() {
  return (
    <div className="App">
            <Navbar />
            <main>
                <section id="home">
                    <h1>Home</h1>
                </section>
                <section id="services">
                    <h1>Services</h1>
                </section>
                <section id="about">
                    <h1>About</h1>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                </section>
            </main>
        </div>
  )
}
