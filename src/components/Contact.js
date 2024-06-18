import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GitIcon } from './images/gitsvg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
      }, (err) => {
        console.log('FAILED...', err);
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
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange} 
          placeholder='Your Name' 
          required 
        />
        <input 
          type='email' 
          name='email' 
          value={formData.email} 
          onChange={handleChange} 
          placeholder='Your Email' 
          required 
        />
        <textarea 
          name='message' 
          value={formData.message} 
          onChange={handleChange} 
          placeholder='Your Message' 
          required 
        />
        <button type='submit'>Send</button>
      </form>
      <footer>
        <a href="https://github.com/General-Evie" target='blank' ><GitIcon /></a>
      </footer>
    </div>
  );
}

export default Contact;