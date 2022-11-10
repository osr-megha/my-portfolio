import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import MainContent from '../../Component/MainContent/MainContent';
import ContactForm from '../../Component/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <Navbar />
    <MainContent heading="Contact Me" text="Lets discuss.."/>
    <ContactForm />
    <Footer />
    
    </div>
  )
}

export default Contact