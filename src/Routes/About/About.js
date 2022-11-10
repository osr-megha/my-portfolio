import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import MainContent from '../../Component/MainContent/MainContent'
import AboutContent from '../../Component/AboutContent/AboutContent'


const About = () => {
  return (
    <div id='about'>
    <Navbar />
    <MainContent heading="About Me" text="A self taught javascript/react developer with around 1.6 years of professional experience as a Frontend Developer.  "/>
    <AboutContent />
    <Footer/>
    </div>
  )
}

export default About