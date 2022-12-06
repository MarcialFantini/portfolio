import React from "react";
import BtnNormal from "../BtnNormal";
import Link from "../Navbar/Link";

import styled from "./styled.module.css";

function Footer() {
  return (
    <div className={styled.containerFooter}>
      <div>
        <h1 className={styled.title}>Marcial.</h1>
        <ul className={styled.listLink}>
          <Link refF="home">Home</Link>
          <Link refF="services">Services</Link>
          <Link refF="projects">Projects</Link>
          <Link refF="about">About Me</Link>
          <Link refF="contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
