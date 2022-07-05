import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/physics.gif";
import IMG2 from "../../assets/blog.gif";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Mind-Blogging",
    github: "https://github.com/dhanushrao12/myBlog",
    demo: "https://foundation-physics.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Mind-Blogging",
    github: "https://github.com/dhanushrao12/myBlog",
    demo: "https://foundation-physics.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Mind-Blogging",
    github: "https://github.com/dhanushrao12/myBlog",
    demo: "https://foundation-physics.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Physics Simplified",
    github: "https://github.com/dhanushrao12/Online_Course_Registration",
    demo: "https://foundation-physics.herokuapp.com/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Physics Simplified",
    github: "https://github.com/dhanushrao12/Online_Course_Registration",
    demo: "https://foundation-physics.herokuapp.com/",
  },
  {
    id: 6,
    image: IMG1,
    title: "Physics Simplified",
    github: "https://github.com/dhanushrao12/Online_Course_Registration",
    demo: "https://foundation-physics.herokuapp.com/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img className="portfolio__image" src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
