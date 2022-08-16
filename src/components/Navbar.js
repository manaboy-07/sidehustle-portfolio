/** @format */

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "./styles/navbar.css";

export const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <div>
      <nav>
        <h1>Manasseh</h1>
        <ul
          className={responsive ? "nav-links-mobile" : "nav-links"}
          onClick={() => setResponsive(false)}>
          <a href='#About'>
            <li>About Me</li>
          </a>

          <a href='#experience'>
            <li> Experience</li>
          </a>
          <a href='#contact'>
            <li>Contact Me</li>
          </a>
          <a href='#education'>
            <li> Education</li>
          </a>
        </ul>

        <button
          className='mobile-menu-icon'
          onClick={() => setResponsive(!responsive)}>
          {responsive ? <VscChromeClose /> : <FaBars />}
        </button>
      </nav>
      <div></div>
    </div>
  );
};
export default Navbar;
