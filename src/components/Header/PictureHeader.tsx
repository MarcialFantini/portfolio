import React from "react";

import styled from "./styled.module.css";
import srcImg from "../../assets/heardImg.svg";

export default function PictureHeader() {
  return (
    <picture className={styled.picture}>
      <img src={srcImg} alt="" />
    </picture>
  );
}
