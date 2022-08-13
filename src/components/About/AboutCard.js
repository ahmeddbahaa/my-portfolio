import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed Bahaa </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br></br>
            <br />I'm very ambitious Software Enginerr looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            <br />
          </p>
          <p> I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.</p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
