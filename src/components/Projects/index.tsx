import React from "react";
import styled from "./styled.module.css";

import srcImage1 from "../../assets/projects/1.png";
import srcImage2 from "../../assets/projects/2.png";
import srcImage3 from "../../assets/projects/3.png";
import srcImage4 from "../../assets/projects/4.png";
import srcImage5 from "../../assets/projects/5.png";

import mosaicoSrc from "../../assets/mosaico.jpg";

function Projects() {
  return (
    <div id="projects" className={styled.projectsContainer}>
      <div>
        <div className={styled.containerLine}>
          <div className={styled.line}></div>
          <h2 className={styled.titleH2}>My works</h2>
        </div>
        <p className={styled.textProject}>
          Personal projects created in ReactJs and programmed by me
        </p>
      </div>
      <div className={styled.mosaicos}>
        <picture className={styled.uno + " " + styled.card}>
          <img className={styled.img} src={srcImage2} alt="" />
        </picture>
        <picture className={styled.dos + " " + styled.card}>
          <img className={styled.img} src={srcImage4} alt="" />
        </picture>
        <picture className={styled.tres + " " + styled.card}>
          <img className={styled.img} src={srcImage5} alt="" />
        </picture>
        <picture className={styled.cuatro + " " + styled.card}>
          <img className={styled.img} src={srcImage3} alt="" />
        </picture>
        <picture className={styled.cinco + " " + styled.card}>
          <img className={styled.img} src={srcImage1} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default Projects;
