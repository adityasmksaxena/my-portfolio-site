import React, { Fragment, useRef } from "react";

import { Delay, Reset, Typing } from "components/TypingAnimation";

import ImageMain from "./components/ImageMain";
import { StyledHeader } from "./style";
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
      <div className="header__box">
        <ImageMain />
        <h1 className="heading">
          <span
            className="heading--main"
            onMouseEnter={onHeadingMainMouseEnter}
            ref={headingPrimaryMainNode}
          >
            Aditya Saxena
          </span>
          <Typing loop speed={150} className="sub-heading-box">
            <Reset count={0} />
            <span className="check-mark">&#10004;</span>
            {SELF_DESCRIPTIONS.map((desc, index, arr) => {
              return (
                <Fragment key={desc}>
                  <span className="heading--sub">{desc}</span>
                  {index === arr.length - 1 ? (
                    <Delay ms={ANIMATION_DELAY_MS} />
                  ) : (
                    <Reset count={1} delay={ANIMATION_DELAY_MS} />
                  )}
                </Fragment>
              );
            })}
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
