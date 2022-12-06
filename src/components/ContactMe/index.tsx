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
      <p className={styled.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        necessitatibus provident excepturi sed architecto repellendus aspernatur
        cum quis, earum pariatur accusantium nulla iure voluptatibus repudiandae
        magnam veniam ex enim. Totam.
      </p>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>SDadwadwadwadawdawdwadwadwa</p>
        </div>
      </div>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>SDadwadwadwadawdawdwadwadwa</p>
        </div>
      </div>
      <div className={styled.row}>
        <img className={styled.img} src="" alt="" />
        <div className="">
          <p>SDadwadwadwadawdawdwadwadwa</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
