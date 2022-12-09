import React from "react";

import styled from "./styled.module.css";

export default function Cards() {
  return (
    <div className={styled.cards}>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.primero}>
          <h3 className={styled.title}>Layout the page</h3>
          <p>Translate the design of the site to code Html and Css </p>
        </div>
        <div className={styled.card + " " + styled.segundo}>
          <h3 className={styled.title}>Programing</h3>

          <p>Program, change and hold a website</p>
        </div>
      </div>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.cuarto}>
          <h3 className={styled.title}></h3>
        </div>
        <div className={styled.card + " " + styled.quinto}>
          <h3 className={styled.title}>Create Tools</h3>

          <p>Create tools that upgrade the interaction between user and web </p>
        </div>
        <div className={styled.card + " " + styled.sexto}>
          <h3 className={styled.title}>Queries</h3>

          <p>Using APIs for connect the web with services and systems</p>
        </div>
      </div>
    </div>
  );
}
