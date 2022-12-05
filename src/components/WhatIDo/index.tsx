import React from "react";
import Cards from "./Cards";

import styled from "./styled.module.css";

export default function WhatIDo() {
  return (
    <div className={styled.container}>
      <Cards></Cards>
      <div className={styled.textDo}>
        <div>
          <div className={styled.barContainer}>
            <div className={styled.bar}></div>
            <h5>WHAT I DO</h5>
          </div>
          <h1 className={styled.title}>Better Programs</h1>
          <h1 className={styled.title}>Better Experiences</h1>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            pariatur beatae? Non, quidem velit voluptatem officiis perferendis
            possimus numquam delectus harum eaque facere dolor nobis.
          </p>
        </div>
      </div>
    </div>
  );
}
