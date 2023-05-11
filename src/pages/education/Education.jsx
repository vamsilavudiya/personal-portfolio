import React from "react";
import "./education.css";
import AboutImg from "../../assets/about.svg";

function Education() {
  return (
    <div id="education" className="education">
      <h1>Education</h1>
      <div>
        <div className="left">
          <div>
            <h3>Bachelor Degree <span>(B.com)</span></h3>
            <div>
              <span>Jaggayypeta, AP - 521175</span>
              <span>Aug 2019 to Jun 2023</span>
            </div>
            <p>
              I have Completed My graduation on smt Gentela sakunthalamma
              college, jaggayyapeta with the GPA - 8.0
            </p>
          </div>
          <div>
            <h3>Intermediate <span>(Agriculture)</span></h3>

            <div>
              <span>Nuzvid, AP - 521175</span>
              <span>Aug 2015 to July 2017</span>
            </div>
            <p>
              I have Completed My Intermediate on Nova Agriculture polytechnic
              college, Nuzvid with the GPA - 8.2
            </p>
          </div>
          <div>
            <h3>
              SSC <span>(10th)</span>
            </h3>
            <div>
              <span>Kanneveedu, AP - 521190</span>
              <span>Jun 2014 to Mar 2015</span>
            </div>
            <p>
              I have Completed My SSC 10th class on Zilla Parishad School
              , Kanneveedu with the GPA - 8.2
            </p>
          </div>
        </div>
        <div className="right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
