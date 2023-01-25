import React, {useState, useRef} from 'react'
import './contactform.css'
import emailjs from '@emailjs/browser';



const ContactForm = () => {

  const form = useRef();

    const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
    
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_stsk6ei', 'template_d8cjpj6', form.current, 'uDMWglxItranzIrNF')
      .then((result) => {
        
          console.log(result.text);
          setMessage(true);
          console.log('message sent');
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className='form'>
    <form ref={form} onSubmit={sendEmail}>
    <label>Your Name</label>
    <input type='text' name="user_name"></input>
    <label>Email </label>
    <input type='email' name="user_email"></input>
    <label>Subject</label>
    <input type='text'></input>
    <label>Message</label>
    <textarea rows='6' placeholder='Enter Your Message Here' name="message"></textarea>

    {/** 
    <input type="submit" value="Send" className='btn'/>

   */}
    <button className='btn' onClick={sendEmail} value="Send">Submit</button>
    {message && <span>Thank you, I will reply soon!!</span>}
    
    </form>
    </div>
    
  )
}

export default ContactForm

 {/** 
    <div className='form'>
    <form action="https://formsubmit.co/megha-sharma@live.com" method="POST"> 
    <label>Your Name</label>
    <input type='text' name="user_name" required></input>
    <label>Email </label>
    <input type='email' name="user_email" required></input>
    <label>Subject</label>
    <input type='text'></input>
    <label>Message</label>
    <textarea rows='6' placeholder='Enter Your Message Here' name="message"></textarea>
    <button className='btn' onClick={handleSubmit}>Submit</button>
    {message && <span>Thank you, I will reply soon!!</span>}
    
    </form>
    </div>
*/}
