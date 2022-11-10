import React from 'react'
import Footer from '../../Component/Footer/Footer'
import HeroImage from '../../Component/HeroImage/HeroImage'
import Navbar from '../../Component/Navbar/Navbar'

const Home = () => {
  return (
    <React.Fragment>
    <div className='home' id='home'>
    <Navbar/>
    <HeroImage/>
    <Footer />
    </div>
    </React.Fragment>
  )
}

export default Home