import React from "react";
import Link from "../Navbar/Link";
import BtnNormal from "../BtnNormal";

import styled from "./styled.module.css";

function Pop(props: { changePop: () => void }) {
  const findElement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.changePop();
    document
      .getElementById(e.currentTarget.value)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className={styled.pop}>
      <button value="home" onClick={findElement} className={styled.btn}>
        Home
      </button>
      <button value="services" onClick={findElement} className={styled.btn}>
        Services
      </button>
      <button value="projects" onClick={findElement} className={styled.btn}>
        Projects
      </button>
      <button value="about" onClick={findElement} className={styled.btn}>
        About Me
      </button>
      <button value="contact" onClick={findElement} className={styled.btn}>
        Contact
      </button>
    </ul>
  );
}

export default Pop;
