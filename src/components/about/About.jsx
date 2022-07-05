import React from "react";
import "./about.css";
import ME from "../../assets/me6.jpg";
import { GiTeacher } from "react-icons/gi";
import { DiJavascript1 } from "react-icons/di";

const About = () => {
  return (
    <section id="about">
      <h5 id="main">Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiTeacher className="about__icon" />
              <h5>Teacher</h5>
              <small>3 Years</small>
            </article>
            <article className="about__card">
              <DiJavascript1 className="about__icon" />
              <h5>Developer</h5>
              <small>Fresher</small>
            </article>
          </div>
          <p className="about__text">
            Teaching professional who developed a passion for coding. Currently
            in pursuit of becoming a full stack Web Developer.
          </p>
          <a href="#contact" id="btn" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
