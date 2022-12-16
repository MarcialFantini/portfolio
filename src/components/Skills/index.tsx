import React from "react";

import styled from "./styled.module.css";

import image1 from "../../assets/Lenguages/1.png";
import image2 from "../../assets/Lenguages/2.png";
import image3 from "../../assets/Lenguages/3.webp";
import image4 from "../../assets/Lenguages/4.png";
import image5 from "../../assets/Lenguages/5.png";

function Skills() {
  return (
    <div className={styled.containerSkill}>
      <div className={styled.containerImg}>
        <div className={styled.rowSkill}>
          <img className={styled.img} src={image4} alt="" />
          <h4 className={styled.titleH4}>Next13</h4>
        </div>

        <div className={styled.rowSkill}>
          <img className={styled.img} src={image2} alt="" />
          <h4 className={styled.titleH4}>ReactJS</h4>
        </div>
        <div className={styled.rowSkill}>
          <img className={styled.img} src={image3} alt="" />
          <h4 className={styled.titleH4}>Html5 JavaScript Css3</h4>
        </div>

        <div className={styled.rowSkill}>
          <img className={styled.img} src={image5} alt="" />
          <h4 className={styled.titleH4}>NodeJs</h4>
        </div>
        <div className={styled.rowSkill}>
          <img className={styled.img} src={image1} alt="" />
          <h4 className={styled.titleH4}>Git</h4>
        </div>
      </div>
      <div className={styled.containerText}>
        <div className={styled.containerLine}>
          <div className={styled.line}></div>
          <h4 className={styled.title}>My Skills</h4>
        </div>
        <h2 className={styled.titleH2}>Language & Tools</h2>
        <p className={styled.textP}>
          I am proficient in a range of web development technologies, including
          React JS, JavaScript, CSS3, HTML5, Git, and Redux JS. I have
          experience using React to build user interfaces, and I have used Redux
          to manage application state in projects that use React. I am also
          skilled in CSS3 and HTML5, which I have used to design and structure
          the content of web pages. I am familiar with Git, a version control
          system that allows me to track changes to my code and collaborate with
          others on projects. I am constantly looking to learn and improve my
          skills, and I am excited to continue developing my expertise in these
          technologies.
        </p>
      </div>
    </div>
  );
}

export default Skills;
