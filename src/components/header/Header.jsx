import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me5.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dhanush</h1>
        <h2 className="text-light">Aspiring Fullstack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img id="img" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
