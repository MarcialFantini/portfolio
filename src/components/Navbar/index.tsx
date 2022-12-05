import React from "react";
import BtnNormal from "../BtnNormal";
import Link from "./Link";

import styled from "./styled.module.css";

function Navbar() {
  return (
    <div className={styled.header}>
      <h2 className={styled.title}>Marcial.</h2>
      <ul className={styled.listLink}>
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>Projects</Link>
        <Link>About Me</Link>
        <Link>Contact</Link>
        <BtnNormal>Resume</BtnNormal>
      </ul>
    </div>
  );
}

export default Navbar;
