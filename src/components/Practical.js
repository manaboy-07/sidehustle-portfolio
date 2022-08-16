/** @format */

import React from "react";
import "./styles/practical.css";
function Practical() {
  return (
    <section>
      <div className='practical-container container' id="experience">
        <div className='practical-header header'>
          <h1 className='text-center'>Practical <span className="red">Experiences</span> </h1>
        </div>
        <div className='practical-stuffs'>
          <div className='practical-info practices'>
            <h3>Clever Media</h3>
            <p>
              I work at Clever Media , a github Organisaton <br /> with skilled
              and gifted tech associates{" "}
            </p>
          </div>
          <div className='practical-position practices'>
            <h3>Position: </h3>
            <p>I worked as a front-end developer on the team</p>
            <p>
              My main task was to work on the responsiveness on our projects{" "}
              <br /> and also providing and beautifying the websites
            </p>
          </div>
          <div className='practical-date practices'>
            <h3>Date: </h3>
            <p>
              I started working there since May 3rd 2019 <br /> and currently
              working there
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practical;
