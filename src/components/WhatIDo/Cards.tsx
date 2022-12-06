import React from "react";

import styled from "./styled.module.css";

export default function Cards() {
  return (
    <div className={styled.cards}>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.primero}>
          <h3 className={styled.title}>Layout the page</h3>
          <p>Traducir el diseño de un sitio a código HTML y CSS. </p>
        </div>
        <div className={styled.card + " " + styled.segundo}>
          <h3 className={styled.title}>Programing</h3>
          <p>Programar, cambiar y mantener un sitio web. </p>
        </div>
      </div>
      <div className={styled.column}>
        <div className={styled.card + " " + styled.cuarto}>
          <h3 className={styled.title}></h3>
        </div>
        <div className={styled.card + " " + styled.quinto}>
          <h3 className={styled.title}>Create Tools</h3>
          <p>
            Crear herramientas que mejoren la interacción entre usuario y web.
          </p>
        </div>
        <div className={styled.card + " " + styled.sexto}>
          <h3 className={styled.title}>Queries</h3>
          <p>Usar APIs para conectar la web con servicios y sistemas. </p>
        </div>
      </div>
    </div>
  );
}
