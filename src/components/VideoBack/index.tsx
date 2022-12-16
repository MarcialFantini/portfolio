import React from "react";

import srcVideo from "../../assets/back.mp4";

import styled from "./styled.module.css";

function VideoBack() {
  return (
    <div className={styled.videoSource}>
      <video className={styled.video} loop autoPlay muted>
        <source src={srcVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBack;
