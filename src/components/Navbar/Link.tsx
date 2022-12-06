import React, { useState } from "react";

import styled from "./styled.module.css";

interface props {
  children: string;
  handlerClick?: () => void;
  refF: string;
}

function Link(props: props) {
  const [state, setState] = useState(false);
  const handlerOnHover = () => {
    setState(!state);
  };

  const findPart = () => {
    props.handlerClick ? props.handlerClick() : null;
    document.getElementById(props.refF)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      onMouseLeave={handlerOnHover}
      onMouseEnter={handlerOnHover}
      className={styled.link}
      onClick={findPart}
    >
      {props.children}
      <div
        className={`${state ? styled.linkBarActive : styled.linkBar} ${
          styled.linkBarBase
        }`}
      ></div>
    </li>
  );
}

export default Link;
