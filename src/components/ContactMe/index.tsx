import React from "react";

import styled from "./styled.module.css";

function ContactMe() {
  return (
    <div id="contact" className={styled.containerContact}>
      <div className={styled.containerBar}>
        <div className={styled.bar}></div>
        <h4 className={styled.titleH4}>Contact Me</h4>
      </div>
      <h2 className={styled.titleH2}>Drop Me A Message</h2>
      <p className={styled.text}>Hey! contact me on my networks!</p>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>Phone: +543533685147</p>
        </div>
      </div>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>Email: marcialfantini@gmail.com</p>
        </div>
      </div>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>
            LinkedIn :{"  "}
            <a
              className={styled.linkA}
              href="https://www.linkedin.com/in/marcial-domingo-fantini-87b9b920a/"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
