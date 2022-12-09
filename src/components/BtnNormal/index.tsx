import React from "react";

import styled from "./styled.module.css";

import cv from "../../../public/cv.pdf";

interface props {
  children: string;
  handlerClick?: () => void;
}

function BtnNormal(props: props) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(cv).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MarcialFantini_FrontEnd.pdf";
        alink.click();
      });
    });
  };
  return (
    <button
      onClick={() => {
        if (props.handlerClick) {
          props.handlerClick();
        }
        onButtonClick();
      }}
      className={styled.btnContainer}
    >
      {props.children}
    </button>
  );
}

export default BtnNormal;
