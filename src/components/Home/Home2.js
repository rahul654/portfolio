import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as faIcons from "react-icons/fa";
import { useSelector } from 'react-redux';


function Home2() {
  const globalState = useSelector(state => state);
  const footerSocialDetails = globalState?.data?.footer?.footerSocialDetails;
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {globalState?.data?.home2?.detailsAboutMe?.map(val => (
                <>
                  {val}
                  <br />
                  <br />
                </>
              ))}
            </p>
          </Col>
          <Col md={4} className="my-auto">
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
            {
              footerSocialDetails?.length ?
                <ul className="home-about-social-links">
                  {
                    footerSocialDetails.map((val, index) => {
                      const IconComponent = aiIcons?.[val?.socialIconType] || faIcons?.[val?.socialIconType];

                      return IconComponent ?
                        <li key={index} className="social-icons">
                          <a
                            href={val?.socialLink || ""}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <IconComponent />
                          </a>
                        </li> : <></>;
                    })
                  }
                </ul> : <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/rahul654"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
            }
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
