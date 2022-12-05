import React from "react";
import BtnNormal from "../BtnNormal";
import PictureHeader from "./PictureHeader";

import styled from "./styled.module.css";

export default function Header() {
  return (
    <div className={styled.containerHeader}>
      <div className={styled.textContainer}>
        <p className={styled.text}>Hello! I'm</p>
        <h1 className={styled.title}>Marcial Fantini</h1>
        <h2 className={styled.subTitle}>Front End Developer</h2>
        <BtnNormal>Get In Touch</BtnNormal>
      </div>
      <PictureHeader />
    </div>
  );
}
