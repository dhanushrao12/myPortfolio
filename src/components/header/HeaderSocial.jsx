import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/dhanushrao12/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin size={25} />
      </a>
      <a
        href="https://github.com/dhanushrao12"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub size={25} />
      </a>
    </div>
  );
};

export default HeaderSocial;
