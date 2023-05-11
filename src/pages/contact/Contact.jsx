import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_uq9xil9", "template_3z47gpj", form.current,"G4AlsdIDBljDKid5y" )
      .then((result) => {
          console.log(result.text);
          alert("succesfully submited");
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
  };
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="inputs">
          <span>Name</span>
          <input type="text" name='user_name' placeholder="Enter Your Name" required/>
          <span>Email</span>
          <input type="text" name='user_email' placeholder="Enter Your Email" required/>
          <span>Mobile Number</span>
          <input type="text" name='user_number' placeholder="Enter Your Number" required/>
          <span>Message</span>
          <textarea name='message' placeholder="Enter Your text here" required/>
          <button type="submit">Send Message</button>
          <div>
            <a href="mailto:vamsilavadiyaa@gmail.com"> Send Me a Mail</a>
            <a href="sms:+919959553143"> Send Me a SMS</a>
            <a href="tel:+919959553143"> Call Me</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
