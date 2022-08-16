/** @format */

import React from "react";
import Image from "./images/portfolio1.jpg";
import "./styles/info.css";

function info() {
  return (
    <section>
      <div className='info-container container'>
        <div className='info-header'>
          <h1>
            Hi there 👋, <br />I am Manasseh
          </h1>
          <p>A front-end developer with additional knowledge of C++</p>
          <p>Also aspiring to be a full-stack developer</p>
        </div>
        <div className='info-image'>
          <img src={Image} alt='' className='img' />
        </div>
      </div>
    </section>
  );
}

export default info;
