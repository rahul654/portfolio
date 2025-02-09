import React from "react";
import { useSelector } from 'react-redux';

function Pre(props) {
  const globalState = useSelector(state => state);
  return <div id={globalState?.loading ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
