import React from 'react';
import './about.css';
import ImageForAbout from '../../assets/web.svg'

function About() {
  return (
    <div id='about' className='about'>
      <div className="left">
        <img src={ImageForAbout} alt="" />
      </div>
      <div className="right">
        <div className="container">
          <h2>About Me</h2>
          <h1>I'm Vamsi Lavudiya</h1>
          <div>
          <div className="right-left">
            <span>Date of Birth</span>
            <span>Nick Name</span>
            <span>Profession</span>
            <span>Address</span>
          </div>
          <div className="right-right">
            <span>25 Aug 2000</span>
            <span>Vamsi</span>
            <span>Web Developer</span>
            <span>Jaggayyapeta, <br /> andhra pradesh - 521190</span>
          </div>
        </div>
          </div>
      </div>
    </div>
  )
}

export default About