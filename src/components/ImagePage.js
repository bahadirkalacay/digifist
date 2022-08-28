import React from "react";
import imageProduct from "../public/bg.png";
import "../css/image.css";

const ImagePage = () => {
  return (
    <section className="imageDiv">
      <img src={imageProduct} />
    </section>
  );
};

export default ImagePage;
