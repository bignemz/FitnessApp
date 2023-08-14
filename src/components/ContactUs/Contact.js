import React, { useState } from 'react'
import './Contact.scss'

function Contact() {
    const [Formdata, setFormdata]= useState({
    })

    function handleSubmit(e){
        e.preventDefault();

    }


    function handleInputChange(e){
           const { name, value } = e.target;
        setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    }


  return (
    <div className="contact-form-container">
        <h2>Contact us</h2>
       <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
                name='name'
                value={Formdata.name}
                onChange={handleInputChange}
    
        />

        <label>Email</label>
        <input type="Email"
                name='email'
                value={Formdata.email}
                onChange={handleInputChange}
    
        />

        <label>Message</label>
        <textarea 
                name='message'
                value={Formdata.message}
                onChange={handleInputChange}
    
        />
        <button type='submit'>Submit</button>
     
       </form>
       
    </div>
  )
}

export default Contact
