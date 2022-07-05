import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dhanush
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Tools and Technologies</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/dhanushrao12/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/dhanushrao91"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
