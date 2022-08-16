/** @format */

import React from "react";
import "./styles/about.css";
import "./Practical";
import Practical from "./Practical";

function About() {
  return (
    <div>
      <div className='about-header' id='About'>
        <h1>
          About <span className='red'>Me</span>{" "}
        </h1>
      </div>
      <div className='about-info'>
        <p>
          {" "}
          I am a passionate and goal driven{" "}
          <p>
            Tech Enthusiast whose interest is to be involved in anything and
            everything Tech.
          </p>
          <p>
            I have extensive knowledge and experience and familiarities with
            libraries ,frame works and UI/UK design.
          </p>
          <p>
            I want to use Technology to solve real world problems and make
            people better <br /> and perhaps one day i will have my own Tech
            Company
          </p>
        </p>
      </div>
      <div className='about-header'>
        <h2>
          {" "}
          <span className='red'>My</span> Projects
        </h2>
      </div>
      <div className='myProjects'>
        <div>
          <a href='http://tip-calculator-silk.vercel.app/' target='_blank'>
            Tip Calculator
          </a>
        </div>
        <div>
          <a href='http://greek-mythology-quiz-app.vercel.app/' target='_blank'>
            Greek Mythology Quiz
          </a>
        </div>
        <div>
          <a href='http://website-using-aos-lib.vercel.app/' target='_blank'>
            A website using an Aos library
          </a>
        </div>
        <div>
          <a href='https://clever-peony-fb2860.netlify.app/' target='_blank'>
            My first ever website
          </a>
        </div>
        <div>
          <a href='https://taupe-gumption-f11d09.netlify.app/' target='_blank'>
            Aptech group Project
          </a>
        </div>
      </div>
      <Practical />
    </div>
  );
}

export default About;
