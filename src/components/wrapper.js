import React from "react";
import "./wstyle.css"
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
