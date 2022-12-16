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
          I have created a number of personal projects using ReactJs, a popular
          JavaScript library for building user interfaces. These projects were
          entirely programmed by me, allowing me to further develop my skills in
          React and web development. Some examples of the types of projects I
          have created include websites, web applications, and interactive
          elements for websites. These projects have helped me to become more
          proficient in React and have allowed me to create more dynamic and
          interactive experiences for users. In addition to improving my
          technical skills, working on personal projects has also given me the
          opportunity to explore my creativity and come up with new ideas for
          how to use React in unique and innovative ways.
        </p>
      </div>
      <div className={styled.mosaicos}>
        <div className={styled.flexRow}>
          <h2 className={styled.titleH2}>Timer</h2>
          <picture className={styled.uno + " " + styled.card}>
            <img className={styled.img} src={srcImage2} alt="" />
          </picture>
        </div>
        <div className={styled.flexRow}>
          <h2 className={styled.titleH2}>Timer</h2>
          <picture className={styled.dos + " " + styled.card}>
            <img className={styled.img} src={srcImage4} alt="" />
          </picture>
        </div>
        <div className={styled.flexRow}>
          <h2 className={styled.titleH2}>Timer</h2>
          <picture className={styled.tres + " " + styled.card}>
            <img className={styled.img} src={srcImage5} alt="" />
          </picture>
        </div>
        <div className={styled.flexRow}>
          <h2 className={styled.titleH2}>Timer</h2>
          <picture className={styled.cuatro + " " + styled.card}>
            <img className={styled.img} src={srcImage3} alt="" />
          </picture>
        </div>
        <div className={styled.flexRow}>
          <h2 className={styled.titleH2}>Timer</h2>
          <picture className={styled.cinco + " " + styled.card}>
            <img className={styled.img} src={srcImage1} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Projects;
