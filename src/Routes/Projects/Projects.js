import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import MainContent from '../../Component/MainContent/MainContent'
import Work from '../../Component/Work/Work'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
    <Navbar />
   <MainContent heading="Projects" text="I've built few side projects during my learning and have gained the technical skills for building delightful user interfaces and web applications. "/>
   <Work />
    <Footer />
    </div>
  )
}

export default Projects