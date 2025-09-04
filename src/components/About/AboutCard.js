import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adebowale Adeniyi </span>
            from <span className="purple">Lagos, Nigeria.</span>
            <br />
            I am an Engineer with a strong passion for{" "}
            <span className="purple">Data Engineering and modeling</span> and{" "}
            <span className="purple">Software Development</span>.
            <br />
            I have experience working across{" "}
            <span className="purple">
              fintech, logistics, and downstream oil & gas
            </span>{" "}
            sectors, building data-driven solutions that improve efficiency and
            decision-making.
            <br />
            <br />
            Apart from coding and analysis, some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing tech blogs on Medium
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & predictive modeling projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I enjoy turning data into insights and building solutions that make
            an impact."
          </p>
          <footer className="blockquote-footer">Adebowale Adeniyi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
