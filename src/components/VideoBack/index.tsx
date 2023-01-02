import React from "react";

import styled from "./styled.module.css";

const dark = "dark";
const light = "light";

function VideoBack(props: { theme: boolean }) {
  return (
    <div
      className={styled[props.theme ? dark : light] + " " + styled.container}
    ></div>
  );
}

export default VideoBack;
