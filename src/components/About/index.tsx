import React from "react";
import BtnNormal from "../BtnNormal";

import mosaico from "../../assets/mosaico.jpg";

import styled from "./styled.module.css";

function About() {
  return (
    <div className={styled.ContainerAbout}>
      <div className={styled.textoAboutMe}>
        <div className={styled.containerBar}>
          <div className={styled.bar}></div>
          <h4 className={styled.titleH4}>ABOUT ME</h4>
        </div>
        <p className={styled.textP}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          enim accusantium porro deserunt ipsa ex, pariatur fugiat suscipit
          iusto necessitatibus labore quaerat nihil adipisci aut debitis eius
          recusandae numquam obcaecati.
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
          <BtnNormal>Hire Me</BtnNormal>
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
