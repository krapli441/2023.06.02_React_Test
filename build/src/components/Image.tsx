import React from "react";

const ImageComponent = () => {
  return (
    <div className="imageFile">
      <img src={require("../img/image.png")} alt="image" />
    </div>
  );
};

export default ImageComponent;
