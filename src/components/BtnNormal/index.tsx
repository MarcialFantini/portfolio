import React from "react";

import styled from "./styled.module.css";

interface props {
  children: string;
}

function BtnNormal(props: props) {
  return <button className={styled.btnContainer}>{props.children}</button>;
}

export default BtnNormal;
