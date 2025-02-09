import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import * as diIcons from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import * as siIcons from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import * as tbIcons from "react-icons/tb";
import { useSelector } from 'react-redux';


function Techstack() {
  const globalState = useSelector(state => state);
  const skillsetIconName = globalState?.data?.skillsetIconName;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        skillsetIconName?.length ?
          skillsetIconName.map((val, index) => {
            const IconComponent = diIcons?.[val] || siIcons?.[val] || tbIcons?.[val];

            return IconComponent ?
              <Col xs={4} md={2} className="tech-icons" key={index}>
                <IconComponent />
              </Col> : <></>;
          }) : <>
            <Col xs={4} md={2} className="tech-icons">
              <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <TbBrandGolang />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiSolidity />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJava />
            </Col>
          </>}
    </Row>
  );
}

export default Techstack;
