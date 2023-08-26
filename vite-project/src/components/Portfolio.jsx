import React from "react";

const Projects = [
  {
    title: "SVG Logo Maker",
    github: "https://github.com/LilaJe/svg-logo-maker",
    description:
      "This project was created to allow users to create their own SVG logo. The user can choose from a variety of colors and shapes to create their own logo. The user can also download their logo as an SVG file.",
  },
  {
    title: "Note Taker",
    github: "https://github.com/LilaJe/note-taker",
    description:
      "This project was created to allow users to create and save notes even when you're offline. The note you write will be stored until you are online, and it will be saved when you return online. The user can create a note with a title and text, save the note, and delete the note.",
  },
  {
    title: "Professional README Generator",
    github: "https://github.com/LilaJe/professional-readme-generator",
    description:
      "This project was created to allow users to create a professional README file for their project. The user will be prompted with a series of questions about their project, and the answers will be used to create a README file.",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="columns">
        {Projects.map((project) => (
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">{project.title}</p>
                <p className="subtitle">{project.description}</p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href={project.github}>Github</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
