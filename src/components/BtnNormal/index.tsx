import React from "react";

import styled from "./styled.module.css";

interface props {
  children: string;
  handlerClick?: () => void;
}

function BtnNormal(props: props) {
  return (
    <button onClick={props.handlerClick} className={styled.btnContainer}>
      {props.children}
    </button>
  );
}

export default BtnNormal;
