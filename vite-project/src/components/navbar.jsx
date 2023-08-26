import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Lila Ellis' Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/about">
              About
            </a>
            <a className="nav-item nav-link" href="/portfolio">
              Portfolio
            </a>
            <a className="nav-item nav-link" href="/contact">
              Contact
            </a>
            <a className="nav-item nav-link" href="/error">
              Error
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
