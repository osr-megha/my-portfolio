import React, {useState} from 'react'
import './contactform.css'


const ContactForm = () => {

    const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className='form'>
    <form>
    <label>Your Name</label>
    <input type='text'></input>
    <label>Email </label>
    <input type='email'></input>
    <label>Subject</label>
    <input type='text'></input>
    <label>Message</label>
    <textarea rows='6' placeholder='Enter Your Message Here'></textarea>
    <button className='btn' onClick={handleSubmit}>Submit</button>
    {message && <span>Thank you, I will reply soon!!</span>}

    </form>
    </div>
  )
}

export default ContactForm