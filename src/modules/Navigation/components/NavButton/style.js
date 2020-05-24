import styled from "@emotion/styled";

export default styled.button`
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  outline: none;
  border: 0;

  @media only screen and (max-width: 56.25em) {
    top: 4rem;
    right: 4rem;
  }
  @media only screen and (max-width: 37.5em) {
    top: 3rem;
    right: 3rem;
  }

  .navigation__icon {
    position: relative;
    margin-top: 1.5rem;
  }
  .navigation__icon,
  .navigation__icon::before,
  .navigation__icon::after {
    width: 3rem;
    height: 2px;
    background-color: #333;
    display: inline-block;
  }
  .navigation__icon::before,
  .navigation__icon::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  .navigation__icon::before {
    top: -0.8rem;
  }
  .navigation__icon::after {
    top: 0.8rem;
  }

  &:hover .navigation__icon::before {
    top: -1rem;
  }

  &:hover .navigation__icon::after {
    top: 1rem;
  }

  .navigation__icon.open {
    background-color: transparent;
  }

  .navigation__icon.open::before {
    top: 0;
    transform: rotate(135deg);
  }

  .navigation__icon.open::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;
