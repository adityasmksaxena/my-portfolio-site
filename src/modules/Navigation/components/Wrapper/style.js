import styled from "@emotion/styled";

export default styled.div`
  .navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(#7ed56f, #28b485);
    z-index: 1000;
    transition: transform 0.8s;
  }
  @media only screen and (max-width: 56.25em) {
    .navigation__background {
      top: 4.5rem;
      right: 4.5rem;
    }
  }
  @media only screen and (max-width: 37.5em) {
    .navigation__background {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  .navigation__background.open {
    transform: scale(70);
  }

  .navigation__nav {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.8s;
  }

  .navigation__nav.open {
    opacity: 1;
    width: 100%;
  }

  .navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
`;
