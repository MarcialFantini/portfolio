import React from "react";

import styled from "./styled.module.css";

function BtnTop(props: { toggle: () => void }) {
  const toTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styled.containerBtn}>
      <button className={styled.btn} onClick={toTop}>
        Top
      </button>
      <button className={styled.btn} onClick={props.toggle}>
        Theme
      </button>
    </div>
  );
}

export default BtnTop;
