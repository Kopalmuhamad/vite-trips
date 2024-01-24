import React from "react";
import "./Image.scss";

const Image = ({ width, height, src, alt, classname }) => {
  return (
    <img
      className={`image ${classname}`}
      width={width}
      height={height}
      src={src}
      alt={alt}
    ></img>
  );
};

export default Image;
