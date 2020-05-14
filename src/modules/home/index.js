import React, { useRef } from "react";
import StyledHeader from "./style";
import { RESUME_DOWNLOAD_LINK } from "./utils/constants";

const className = {
  animated: "animated",
  animationType: "rubberBand", // "pulse",
};

const Home = () => {
  const headingPrimaryMainNode = useRef(null);

  const handleHeadingPrimaryMainMouseEnter = () => {
    const domNode = headingPrimaryMainNode.current;
    if (!Array.from(domNode.classList).includes(className.animated)) {
      domNode.classList.add(className.animated, className.animationType);
      setTimeout(() => {
        domNode.classList.remove(className.animated, className.animationType);
      }, 1000);
    }
  };

  return (
    <StyledHeader>
      <div className="header__text-box">
        <div className="profile-pic"></div>
        <h1 className="heading-primary">
          <span
            className="heading-primary--main"
            onMouseEnter={handleHeadingPrimaryMainMouseEnter}
            ref={headingPrimaryMainNode}
          >
            <span>aditya saxena</span>
          </span>
        </h1>
        <a href={RESUME_DOWNLOAD_LINK} className="btn btn--white btn--animated">
          Download Resume
        </a>
      </div>
    </StyledHeader>
  );
};

export default Home;
