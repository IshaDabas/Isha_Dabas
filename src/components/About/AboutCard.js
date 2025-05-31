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
            from <span className="purple"> Holly Springs, NC, USA.</span>
            <br />I completed my Bachelor's degree in Computer Applications
            (BCA) from Bennett University, Greater Noida, India, with a
            specialization in Cyber Security and Cloud Computing in 2023.
            <br />
            <br />
            During my academic journey, I discovered my passion for{" "}
            <span className="purple">designing and developing websites</span>,
            which naturally led me to pursue a career in front-end development.
            Along the way, I also explored the{" "}
            <span className="purple">MERN stack</span>, commonly referred to as
            full-stack development, gaining experience in building both the
            front and back ends of web applications.
            <br />
            <br />
            I’ve had the opportunity to work on several real-world projects,
            both for the company I was employed with and their client
            organizations. My responsibilities included everything from{" "}
            <span className="purple">
              {" "}
              redesigning and maintaining websites to testing functionality and
              ensuring APIs
            </span>{" "}
            were working correctly.
            <br />
            <br />
            My curiosity about how websites rank in search engine results
            sparked a deeper interest in{" "}
            <span className="purple"> Digital Marketing</span>. I went on to
            study key areas like{" "}
            <span className="purple">
              SEO, content marketing, video marketing, and social media
              management
            </span>
            , allowing me to understand how to not only build great websites but
            also help them reach the right audience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn about Digital Marketing Strategies, SEO,
              Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn new UI tools to design websites or logos or
              banners or posters, etc.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Competitive FPS Games, Video Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
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
