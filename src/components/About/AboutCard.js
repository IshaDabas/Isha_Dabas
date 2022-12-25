import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Isha Dabas </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am a junior pursuing Bachelors in Computer Applications from Bennett
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games and Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Event Management
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Isha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
