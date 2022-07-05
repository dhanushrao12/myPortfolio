import React from "react";
import "./technologies.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Technologies = () => {
  return (
    <section id="technologies">
      <h4>Technical</h4>
      <h2>Skills</h2>
      <div className="container technologies__container">
        <div className="technologies">
          <h3>Technologies</h3>
          <div className="technologies__content">
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Front End*/}
        <div className="tools">
          <h3>Tools</h3>
          <div className="technologies__content">
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Heroku</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="technologies__details">
              <BsFillPatchCheckFill className="technologies__details-icon" />
              <div>
                <h4>MongoDB Atlas</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
