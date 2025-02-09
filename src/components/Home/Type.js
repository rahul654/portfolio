import React from "react";
import Typewriter from "typewriter-effect";

import { useSelector } from 'react-redux';

function Type() {
  const globalState = useSelector(state => state);
  return (
    <Typewriter
      options={{
        strings: globalState?.data?.titles?.length ? globalState?.data?.titles : [
          "Senior Software Engineer",
          "Freelancer",
          "Open Source Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
