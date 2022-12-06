import React from "react";
import Cards from "./Cards";

import styled from "./styled.module.css";

export default function WhatIDo() {
  return (
    <div id="services" className={styled.container}>
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
            La mejor experiencia en de trato con el cliente para dar el mejor
            trabajo posible!
          </p>
        </div>
      </div>
    </div>
  );
}
