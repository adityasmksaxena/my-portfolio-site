import styled from "@emotion/styled";

const bgColor1 = `rgba(126, 213, 111, 0.8)`;
const bgColor2 = `rgba(40, 180, 133, 0.8)`;

export default styled.header`
  height: 85%;
  background-image: linear-gradient(to right bottom, ${bgColor1}, ${bgColor2});
  background-size: cover;
  background-position: top;
  position: relative;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    height: 100%;
  }
  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    only screen and (min-width: 125em) {
    background-image: linear-gradient(to right bottom, ${bgColor1}, ${bgColor2});
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .image-container {
    position: relative;
    z-index: 0;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;

    &.loaded::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: 0%;
      top: 0%;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(white, transparent),
        linear-gradient(transparent, transparent), linear-gradient(transparent, white);
      animation: rotate 10s linear infinite;
    }

    &.loaded:hover:before {
      animation-play-state: paused;
    }

    .profile-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 98%;
      /* height: 95%; */
      border-radius: 50%;
      /* border: 0.5rem solid white; */
    }
  }

  @media only screen and (max-width: 37.5em) {
    .image-container {
      height: 15rem;
      width: 15rem;
    }
  }

  .header__box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
  }
  @media only screen and (max-width: 37.5em) {
    .heading {
      width: 32rem;
      margin-bottom: 3rem;
    }
  }
  .heading--main {
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
    .heading--main {
      letter-spacing: 1rem;
      font-size: 3rem;
    }
  }
  .heading--sub {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    animation: moveInRight 1s ease-out;
  }
  @media only screen and (max-width: 37.5em) {
    .heading--sub {
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

  .sub-heading-box {
    min-height: 5rem;
  }

  .check-mark {
    padding-right: 1rem;
  }

  .heading--sub {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    animation: moveInRight 1s ease-out;
  }
  @media only screen and (max-width: 37.5em) {
    .heading--sub {
      letter-spacing: 0.5rem;
      font-size: 1.5rem;
    }
  }

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
