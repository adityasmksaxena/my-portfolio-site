import myPic from "images/aditya_saxena.jpg";
import React, { Fragment, useRef } from "react";
import Typing, { Delay, Reset } from "react-typing-animation";
import StyledHeader from "./style";
import {
  ANIMATION_DELAY_MS,
  CLASS_NAME,
  RESUME_VIEW_LINK,
  SELF_DESCRIPTIONS,
} from "./utils/constants";

const Home = () => {
  const headingPrimaryMainNode = useRef(null);

  const onHeadingMainMouseEnter = () => {
    const domNode = headingPrimaryMainNode.current;
    const classList = Array.from(domNode.classList);
    if (!classList.includes(CLASS_NAME.animated)) {
      domNode.classList.add(CLASS_NAME.animated, CLASS_NAME.animationType);
      setTimeout(() => {
        domNode.classList.remove(CLASS_NAME.animated, CLASS_NAME.animationType);
      }, 1000);
    }
  };

  return (
    <StyledHeader>
      <div className="header__text-box">
        <div className="image-container">
          <img className="profile-image" src={myPic} alt="Aditya Saxena" />
        </div>
        <h1 className="heading">
          <span
            className="heading--main"
            onMouseEnter={onHeadingMainMouseEnter}
            ref={headingPrimaryMainNode}
          >
            aditya saxena
          </span>
          <Typing loop speed={150} className="sub-heading-box">
            <Reset count={0} />
            <span className="check-mark">&#10004;</span>
            {SELF_DESCRIPTIONS.map((desc, index, arr) => (
              <Fragment key={desc}>
                <span className="heading--sub">{desc}</span>
                {index === arr.length - 1 ? (
                  <Delay ms={ANIMATION_DELAY_MS} />
                ) : (
                  <Reset count={1} delay={ANIMATION_DELAY_MS} />
                )}
              </Fragment>
            ))}
          </Typing>
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={RESUME_VIEW_LINK}
          className="btn btn--white btn--animated"
        >
          View Resume
        </a>
      </div>
    </StyledHeader>
  );
};

export default Home;
