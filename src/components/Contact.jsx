import React, { useRef, useState } from 'react';


const Contact = () => {
  
  const [from_name,setName]=useState('');
  const [message,setMessege]=useState('');
  const [user_email,setEmail]=useState('');
  const formData= {from_name,user_email,message,to_name:'Ashafque Ahmad'};
  const [disabled,setDisabled]=useState(false);
  const buttonRef=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    if(buttonRef.current)
      {
        buttonRef.current.style.backgroundColor = 'gray';
      }

    emailjs.send('service_p6dmrlx', 'template_vgqoimi', formData, 'KRkvJ2cNa5CrzqHsh')
      .then((result) => {
        setName('');
        setMessege('');
        setEmail('');
        alert('Message sent successfully');
      }, (error) => {
          console.error('There was an error sending the message!', error);
      });

      setTimeout(() => {
        setDisabled(false);
        buttonRef.current.style.backgroundColor = '#0d6efd';
      }, 1500);

  };

  return (
    
    <>
    <section id="contact" className="my-5">
      <div className="container">
        <h2 className="text-center hollow-text auto-show">Contact</h2>
        <form onSubmit={handleSubmit} className='auto-show'>
          <div className="mb-3">
            <label htmlFor="formName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="formName"
              name="name"
              value={from_name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              name="email"
              value={user_email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formMessage" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="formMessage"
              name="message"
              rows="3"
              value={message}
              onChange={(e)=>setMessege(e.target.value)}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={disabled} ref={buttonRef}>Submit</button>
        </form>
      </div>
    </section></>
  );
};

export default Contact;
