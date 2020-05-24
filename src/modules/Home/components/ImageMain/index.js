import cN from "classnames";
import myPic from "images/aditya_saxena_image_480.jpg";
import React, { useState } from "react";

const ImageMain = () => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => setLoading(false);
  return (
    <div className={cN("image-container", { loaded: !loading })}>
      <img src={myPic} alt="Aditya Saxena" className="profile-image" onLoad={onLoad} />
    </div>
  );
};

export default ImageMain;
