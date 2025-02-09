import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import one from "../../Assets/Projects/1.jpeg";
import two from "../../Assets/Projects/2.jpg";
import three from "../../Assets/Projects/3.jpg";
import four from "../../Assets/Projects/4.jpg";
import five from "../../Assets/Projects/5.jpg";
import six from "../../Assets/Projects/6.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

import { useSelector } from 'react-redux';


function Projects() {
  const globalState = useSelector(state => state);
  const imgObj = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: chatify,
    8: editor,
    9: bitsOfCode,
  }
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {
          globalState?.data?.projects?.length ?
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {globalState?.data?.projects?.map((val, index) => {
                return <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={imgObj[index+1]}
                    title={val?.title}
                    description={val?.description}
                    ghLink={val?.githubLink}
                    demoLink={val?.demoLink}
                  />
                </Col>
              })}
            </Row>
            :
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={imgObj[1]}
                  title="Sales Assist 3.0"
                  description="An insurance app where I implemented paperless, anytime login with Device Lock for security, integrated DigiLocker for document retrieval and KYC, implemented NSDL verification and OCR-based data extraction, enabled EPFO data fetching, ITR pull, Account Aggregator, and Credit Report Pull, engineered reverse geocoding and location-based attendance tracking, and integrated Firebase for real-time push notifications."
                  ghLink=""
                  demoLink="https://play.google.com/store/apps/details?id=com.reliancenippon.salesassist&pcampaignid=web_share"
                />
              </Col>
            </Row>
        }
      </Container>
    </Container>
  );
}

export default Projects;
