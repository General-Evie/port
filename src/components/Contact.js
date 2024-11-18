import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GitIcon } from './images/gitsvg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({ message: '', isError: false });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_fhu8r2y', 'template_qr6wr3g', formData, 'f466Xh4grqplIldlF')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedback({ message: 'Your message has been sent successfully!', isError: false });
      }, (err) => {
        console.log('FAILED...', err);
        setFeedback({ message: 'There was an error sending your message. Please try again later.', isError: true });
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };



  return (
    <div className='contact'>
      <h1>GeneralEvie9@outlook.com</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange} 
          placeholder='Your Name' 
          required 
        />
        <label>Email</label>
        <input 
          type='email' 
          name='email' 
          value={formData.email} 
          onChange={handleChange} 
          placeholder='Your Email' 
          required 
        />
        <label>Message</label>
        <textarea 
          name='message' 
          value={formData.message} 
          onChange={handleChange} 
          placeholder='Your Message' 
          required 
          className="message-box"
        />
        
        <button type='submit'>Send</button>
        {feedback && <p className={`feedback-message ${feedback.isError ? 'error' : ''}`}>
          {feedback.message}
        </p>}
      </form>
      <footer>
        <a href="https://github.com/General-Evie" target='blank' ><GitIcon /></a>
      </footer>
    </div>
  );
}

export default Contact;