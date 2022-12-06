import React, { useState } from "react";
import BtnNormal from "../BtnNormal";
import Link from "./Link";

import styled from "./styled.module.css";

function Navbar() {
  const [state, setState] = useState(false);

  const alterTrue = () => setState(true);
  const alterFalse = () => setState(false);
  return (
    <div id="home" className={styled.header}>
      <h2 className={styled.title}>Marcial.</h2>
      <ul
        className={
          !state ? styled.listLink + " " + styled.activeNav : styled.listLink
        }
      >
        <Link refF="home" handlerClick={alterFalse}>
          Home
        </Link>
        <Link refF="services" handlerClick={alterFalse}>
          Services
        </Link>
        <Link refF="projects" handlerClick={alterFalse}>
          Projects
        </Link>
        <Link refF="about" handlerClick={alterFalse}>
          About Me
        </Link>
        <Link refF="contact" handlerClick={alterFalse}>
          Contact
        </Link>
        <BtnNormal>Resume</BtnNormal>
      </ul>
      <div onClick={alterTrue} className={styled.btnHamburger}>
        |||
      </div>
    </div>
  );
}

export default Navbar;
