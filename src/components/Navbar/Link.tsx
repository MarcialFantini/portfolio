import React, { useState } from "react";

import styled from "./styled.module.css";

interface props {
  children: string;
}

function Link(props: props) {
  const [state, setState] = useState(false);
  const handlerOnHover = () => {
    setState(!state);
  };

  return (
    <li
      onMouseLeave={handlerOnHover}
      onMouseEnter={handlerOnHover}
      className={styled.link}
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
