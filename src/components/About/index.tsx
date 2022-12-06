import React from "react";
import BtnNormal from "../BtnNormal";

import mosaico from "../../assets/mosaico.jpg";

import styled from "./styled.module.css";

import cv from "../../../public/cv.pdf";

function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(cv).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className={styled.ContainerAbout}>
      <div className={styled.textoAboutMe}>
        <div className={styled.containerBar}>
          <div className={styled.bar}></div>
          <h4 id="about" className={styled.titleH4}>
            ABOUT ME
          </h4>
        </div>
        <p className={styled.textP}>
          I'm a front end developer with experiences in ReactJs. I created much
          pages like personal projects. I wanna work in one startup or company.
          I can work with modern javascript
        </p>

        <ul className={styled.list}>
          <li className={styled.ul}>
            <div className={styled.circle2}>
              <div className={styled.circle1}></div>
            </div>
            Problem Solving
          </li>
          <li className={styled.ul}>
            <div className={styled.circle2}>
              <div className={styled.circle1}></div>
            </div>
            Creative Ideas
          </li>
          <li className={styled.ul}>
            <div className={styled.circle2}>
              <div className={styled.circle1}></div>
            </div>
            High Quality
          </li>
          <li className={styled.ul}>
            <div className={styled.circle2}>
              <div className={styled.circle1}></div>
            </div>
            Highly Motivated
          </li>
        </ul>
        <div className={styled.btnContainer}>
          <BtnNormal handlerClick={onButtonClick}>Hire Me</BtnNormal>
          <button className={styled.cvBtn}>Download CV</button>
        </div>
      </div>
      <div className={styled.containerImg}>
        <picture className={styled.picture1 + " " + styled.picture}>
          <img src={mosaico} alt="" />
        </picture>
        <picture className={styled.picture2 + " " + styled.picture}>
          <img src={mosaico} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default About;
