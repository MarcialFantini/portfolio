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
        <img className={styled.img} src={image1} alt="" />
        <img className={styled.img} src={image2} alt="" />
        <img className={styled.img} src={image3} alt="" />
        <img className={styled.img} src={image4} alt="" />
        <img className={styled.img} src={image5} alt="" />
      </div>
      <div className={styled.containerText}>
        <div className={styled.containerLine}>
          <div className={styled.line}></div>
          <h4 className={styled.title}>My Skills</h4>
        </div>
        <h2 className={styled.titleH2}>Language & Tools</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          adipisci enim sit animi, sequi nisi neque expedita aspernatur illum
          odit molestiae minima ipsa earum, autem placeat assumenda. Sint, sequi
          dolorem?
        </p>
      </div>
    </div>
  );
}

export default Skills;
