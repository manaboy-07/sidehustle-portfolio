/** @format */

import React from "react";
import "./styles/contact.css";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
function contact() {
  return (
    <div className='contact-container' id="contact">
      <div className='contact-header'>
        <h1 className='text-center'>
          Contact <span className='red'>Me</span>{" "}
        </h1>
      </div>

      <div className='contact-info'>
        {/* get in touch */}
        <div className='get-touch'>
          <h1>
            Get <span className='red'>In</span> Touch
          </h1>
          <div className='icon-flex'>
            <div>
              <BsEnvelopeFill className='icon-description' />
            </div>
            <div>
              <span>
                <h2>Email: </h2>
              </span>{" "}
              <h4> manassehoruebor@gmail.com</h4>
              <p>Feel free to message me anytime</p>
            </div>
          </div>
          <div className='icon-flex'>
            <div>
              {" "}
              <BsFillTelephoneFill className='icon-description' />{" "}
            </div>
            <div className='icon-display'>
              <h3> Phone Number</h3>
              <p>+2347043608352</p>
            </div>
          </div>
          <div className='icon-flex'>
            <div>
              <a href='https://www.instagram.com/mana___boy/'>
                <BsInstagram className='icon-description' />
              </a>
            </div>
            <div>
              <p>
                <a href='https://www.instagram.com/mana___boy/'>
                  <h3>Instagram</h3>
                </a>
              </p>
            </div>
          </div>
          <div className='icon-flex'>
            <div>
              <BsGithub className='icon-description' />
            </div>
            <div>
              <h3>Github</h3>
              <p>github account : mana___boy07</p>
            </div>
          </div>
        </div>

        <div className='service'>
          <h3>Need a Service ?</h3>
          <h2>Send a Message</h2>
          <div className='contact-message'>
            <div className='input-contact'>
              <input
                type='text'
                className='contact-input'
                placeholder='Enter Full Name'
              />
            </div>
            <div className='input-contact'>
              <input
                type='email'
                className='contact-input'
                placeholder='Enter Email Address'
              />
            </div>
            <div className='input-contact'>
              <textarea
                cols='30'
                rows='10'
                className='contact-input'
                placeholder='Write A message'></textarea>
            </div>
          </div>
          <div className='contact-button'>
            <button className='contact-btn'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
