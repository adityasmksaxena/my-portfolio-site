import styled from "styled-components";

export default styled.header`
  height: 85vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 133, 0.8)
  );
  background-size: cover;
  background-position: top;
  position: relative;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    height: 100vh;
  }
  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    only screen and (min-width: 125em) {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    );
  }

  .header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }
  .header__checkmark {
    padding-right: 1rem;
  }
  .header__logo {
    height: 3.5rem;
  }
  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
  }
  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 1.5rem;
    /*
      animation-delay: 3s;
      animation-iteration-count: 3;
      */
  }
  @media only screen and (max-width: 37.5em) {
    .heading-primary--main {
      letter-spacing: 1rem;
      font-size: 3rem;
    }
  }
  .heading-primary--sub {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    animation: moveInRight 1s ease-out;
  }
  @media only screen and (max-width: 37.5em) {
    .heading-primary--sub {
      letter-spacing: 0.5rem;
      font-size: 1.5rem;
    }
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }

  @keyframes rubberBand {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scaleX(1.25) scaleY(0.75);
    }
    40% {
      transform: scaleX(0.75) scaleY(1.25);
    }
    60% {
      transform: scaleX(1.15) scaleY(0.85);
    }
    100% {
      transform: scale(1);
    }
  }

  .rubberBand {
    animation-name: rubberBand;
  }

  /* @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .pulse {
    animation-name: pulse;
    animation-duration: 1s;
  } */

  /* .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;
  }
  @media only screen and (max-width: 56.25em) {
    .heading-secondary {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 37.5em) {
    .heading-secondary {
      font-size: 2.5rem;
    }
  }
  .heading-secondary:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .heading-tertiary {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  } */

  .btn,
  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn:active,
  .btn:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .btn--white {
    background-color: #fff;
    color: #777;
  }
  .btn--white::after {
    background-color: #fff;
  }

  .btn--green {
    background-color: #55c57a;
    color: #fff;
  }
  .btn--green::after {
    background-color: #55c57a;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  .btn-text:link,
  .btn-text:visited {
    font-size: 1.6rem;
    color: #55c57a;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #55c57a;
    padding: 3px;
    transition: all 0.2s;
  }

  .btn-text:hover {
    background-color: #55c57a;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .btn-text:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;
