import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import * as siIcons from "react-icons/si";
import { useSelector } from 'react-redux';

function Toolstack() {
  const globalState = useSelector(state => state);
  const toolsSkillsetIconName = globalState?.data?.toolsSkillsetIconName;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        toolsSkillsetIconName?.length ?
          toolsSkillsetIconName.map((val, index) => {
            const IconComponent = siIcons?.[val];

            return IconComponent ?
              <Col xs={4} md={2} className="tech-icons" key={index}>
                <IconComponent />
              </Col> : <></>;
          }) : <>
            <Col xs={4} md={2} className="tech-icons">
              <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiVercel />
            </Col>
          </>}
    </Row>
  );
}

export default Toolstack;
