import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import * as aiIcons from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import * as faIcons from "react-icons/fa";
import { useSelector } from 'react-redux';

function Footer() {
  const globalState = useSelector(state => state);
  const footerSocialDetails = globalState?.data?.footer?.footerSocialDetails;
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{globalState?.data?.footer?.footerText || "Designed and Developed by Rahul Gupta"}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{globalState?.data?.footer?.copyrightText || `Copyright © `} {year}</h3>
        </Col>
        {
          footerSocialDetails?.length ?

            <Col md="4" className="footer-body">
              <ul className="footer-icons">
                {
                  footerSocialDetails.map((val, index) => {
                    const IconComponent = aiIcons?.[val?.socialIconType] || faIcons?.[val?.socialIconType];

                    return IconComponent ?

                      <li key={index} className="social-icons">
                        <a
                          href={val?.socialLink || ""}
                          style={{ color: "white" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent />
                        </a>
                      </li> : <></>;
                  })
                }
              </ul>
            </Col>
            : <>
              <Col md="4" className="footer-body">
                <ul className="footer-icons">
                  <li className="social-icons">
                    <a
                      href="https://github.com/rahul654"
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </>}
      </Row>
    </Container>
  );
}

export default Footer;
