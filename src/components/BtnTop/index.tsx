import React from "react";

import styled from "./styled.module.css";

function BtnTop() {
  const toTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={toTop} className={styled.btnTop}>
      Tap
    </button>
  );
}

export default BtnTop;
