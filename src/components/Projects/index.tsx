import React from "react";
import styled from "./styled.module.css";

import mosaicoSrc from "../../assets/mosaico.jpg";

function Projects() {
  return (
    <div className={styled.projectsContainer}>
      <div>
        <div className={styled.containerLine}>
          <div className={styled.line}></div>
          <h2 className={styled.titleH2}>My works</h2>
        </div>
        <p className={styled.textProject}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          quas labore tempora eligendi libero id distinctio nobis rerum
          exercitationem? Qui nam pariatur debitis laboriosam quasi veniam
          quisquam repellat aut est.
        </p>
      </div>
      <div className={styled.mosaicos}>
        <picture className={styled.uno + " " + styled.card}>
          <img className={styled.img} src={mosaicoSrc} alt="" />
        </picture>
        <picture className={styled.dos + " " + styled.card}>
          <img className={styled.img} src={mosaicoSrc} alt="" />
        </picture>
        <picture className={styled.tres + " " + styled.card}>
          <img className={styled.img} src={mosaicoSrc} alt="" />
        </picture>
        <picture className={styled.cuatro + " " + styled.card}>
          <img className={styled.img} src={mosaicoSrc} alt="" />
        </picture>
        <picture className={styled.cinco + " " + styled.card}>
          <img className={styled.img} src={mosaicoSrc} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default Projects;
