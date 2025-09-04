import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an <b className="purple">Enginner</b> who
              discovered a deep passion for{" "}
              <b className="purple">Data Engineering & Modelling</b> and{" "}
              <b className="purple">Software Development</b>.
              <br />
              <br />
              I am skilled in{" "}
              <i>
                <b className="purple">Python, SQL, R, Typescript, C#, Matlab, Node.js and React</b>
              </i>{" "}
              with experience across{" "}
              <b className="purple">fintech, logistics, and oil & gas</b>{" "}
              sectors.
              <br />
              <br />
              My interests include building{" "}
              <i>
                <b className="purple">data-driven solutions</b>, exploring{" "}
                <b className="purple">AI & predictive modeling</b>, and writing
                about{" "}
                <b className="purple">data/tech topics on Medium</b>.
              </i>
              <br />
              <br />
              I enjoy creating products and tools that transform{" "}
              <b className="purple">data into insights</b> and{" "}
              <b className="purple">ideas into scalable solutions</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niyiroyce"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/@pyniyi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/neyfrosh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@niyi.py"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
