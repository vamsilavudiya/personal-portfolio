import React from "react";
import "./projects.css";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.jpg";
import Project5 from "../../assets/project5.jpg";
import Project6 from "../../assets/project6.png";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="cards">
        <div className="card card1">
          <img src={Project1} alt="" />
          <div>
            <div>
              <h2>Amazon Clone</h2>
              <a target="_blank" href="https://vamsi-amazon-clone.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
        <div className="card card2">
          <img src={Project2} alt="" />
          <div>
            <div>
              <h2>Instagram clone</h2>
              <a target="_blank" href="https://vamsi-instagram-clone.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
        <div className="card card3">
          <img src={Project3} alt="" />
          <div>
            <div>
              <h2>Table Reservation</h2>
              <a target="_blank" href="https://vamsi-table-reservation.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
        <div className="card card4">
          <img src={Project4} alt="" />
          <div>
            <div>
              <h2>Tesla Clone</h2>
              <a target="_blank" href="https://vamsi-tesla-clone.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
        <div className="card card5">
          <img src={Project5} alt="" />
          <div>
            <div>
              <h2>Travel Advisor</h2>
              <a target="_blank" href="https://vamsi-travel-advisor.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
        <div className="card card6">
          <img src={Project6} alt="" />
          <div>
            <div>
              <h2>Youtube Clone</h2>
              <a target="_blank" href="https://vamsi-youtube-clone.netlify.app">
                Link
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
              </a>
            </div>
            <span>Vamsi Lavudiya</span>
            <p>About This project and tell some good things</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
