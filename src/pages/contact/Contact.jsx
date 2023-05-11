import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id='contact' className='contact'>
      <a href = "mailto:vamsilavadiyaa@gmail.com"> Send Me a Mail</a>
      <a href="sms:+919959553143"> Send Me a SMS</a>
      <a href = "tel:+919959553143"> Call Me</a>
    </div>
  )
}

export default Contact