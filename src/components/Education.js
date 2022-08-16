/** @format */

import React from "react";
import "./styles/education.css";
function Education() {
  return (
    <section>
      <div className='education-container container' id='education'>
        <img src='./images/portfolio1.jpg' alt='' />
        <div className='education-header'>
          <h1 className='text-center'>
            Education <span className='red'>Experience</span>{" "}
          </h1>
        </div>
        <div className='myschool'>
          <label htmlFor='school'>
            <h2 className='big'>School:</h2>
          </label>

          <p id='school'>
            <span>
              I studied at{" "}
              <span>
                <span className='school-name'>Early Height's College</span>
              </span>
              <span>
                <p>
                  I am currently in{" "}
                  <span className='school-name'>
                    Obafemi Awolowo University
                  </span>
                </p>
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
