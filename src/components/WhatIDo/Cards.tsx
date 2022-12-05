import React from "react";

import styled from "./styled.module.css";

export default function Cards() {
  return (
    <div className={styled.cards}>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.primero}>
          <h3 className={styled.title}>Web App</h3>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim error distinctio ab pariatur explicabo fuga aspernatur, dolore
            sapiente quaerat.
          </p>
        </div>
        <div className={styled.card + " " + styled.segundo}>
          <h3 className={styled.title}>Web App</h3>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim error distinctio ab pariatur explicabo fuga aspernatur, dolore
            sapiente quaerat.
          </p>
        </div>
      </div>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.cuarto}>
          <h3 className={styled.title}>Web App</h3>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim error distinctio ab pariatur explicabo fuga aspernatur, dolore
            sapiente quaerat.
          </p>
        </div>
        <div className={styled.card + " " + styled.quinto}>
          <h3 className={styled.title}>Web App</h3>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim error distinctio ab pariatur explicabo fuga aspernatur, dolore
            sapiente quaerat.
          </p>
        </div>
        <div className={styled.card + " " + styled.sexto}>
          <h3 className={styled.title}>Web App</h3>
          <p className={styled.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim error distinctio ab pariatur explicabo fuga aspernatur, dolore
            sapiente quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}
