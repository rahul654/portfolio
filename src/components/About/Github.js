import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import { useSelector } from 'react-redux';

function Github() {
  const globalState = useSelector(state => state);
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={globalState?.data?.githubUserName || "rahulgupta654"}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
