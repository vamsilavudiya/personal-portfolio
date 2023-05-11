import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <div className="inputs">
          <span>Name</span>
          <input type="text" placeholder="Enter Your Name" />
          <span>Email</span>
          <input type="text" placeholder="Enter Your Email" />
          <span>Mobile Number</span>
          <input type="text" placeholder="Enter Your Number" />
          <span>Message</span>
          <textarea placeholder="Enter Your text here" />
          <button type="button">Send Message</button>
          <div>
            <a href="mailto:vamsilavadiyaa@gmail.com"> Send Me a Mail</a>
            <a href="sms:+919959553143"> Send Me a SMS</a>
            <a href="tel:+919959553143"> Call Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
