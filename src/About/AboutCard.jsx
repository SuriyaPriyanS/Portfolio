import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Suriyapriyan </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am currently looking for as a Full-Stack developer intership.
            <br />
            I have completed Master of Computer Apllication at ACCET
            Theni
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            
            
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work Never Fails!"{" "}
          </p>
          <footer className="blockquote-footer">Suriya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;