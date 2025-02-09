import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from 'react-redux';

function AboutCard() {
  const globalState = useSelector(state => state);
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{globalState?.data?.aboutCard?.fullname || "Rahul Gupta "}</span>
            from <span className="purple"> {globalState?.data?.aboutCard?.location || "Mumbai, India "}</span>
            <br />
            {globalState?.data?.aboutCard?.employment || "I am currently working as a SSE at RNLIC "}
            <br />
            {globalState?.data?.aboutCard?.education || "I have completed B.Tech from Atharva College of Engineering, Mumbai, India "}
            <br />
          </p>

          {
            globalState?.data?.aboutCard?.hobbieslist?.length ?
              <div style={{ textAlign: "justify" }}>
                Apart from coding, some other activities that I love to do!
                <ul>
                  {
                    globalState?.data?.aboutCard?.hobbieslist?.map(val => (
                      <li key={val} className="about-activity">
                        <ImPointRight /> {val}
                      </li>))
                  }
                </ul>
              </div>
              :
              <div style={{ textAlign: "justify" }}>
                Apart from coding, some other activities that I love to do!
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Playing Games
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Writing Tech Blogs
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Travelling
                  </li>
                </ul>
              </div>
          }

          {
            globalState?.data?.aboutCard?.quote ?
              <p style={{ color: "rgb(155 126 172)" }}>
                {globalState?.data?.aboutCard?.quote}
              </p>
              :
              <p style={{ color: "rgb(155 126 172)" }}>
                "Strive to build things that make a difference!"{" "}
              </p>
          }
          {
            globalState?.data?.aboutCard?.name ?
            <footer className="blockquote-footer">{globalState?.data?.aboutCard?.name}</footer>
              :
              <footer className="blockquote-footer">Rahul</footer>
          }
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
