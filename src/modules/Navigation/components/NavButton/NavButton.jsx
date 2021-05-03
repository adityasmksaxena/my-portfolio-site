import React from "react";
import cN from "classnames";
import StyledNavButton from "./style";

const NavButton = ({ open, handleNavigationButtonClick }) => {
  return (
    <StyledNavButton
      onClick={handleNavigationButtonClick}
      aria-label={open ? "Close Navigation" : "Open Navigation"}
    >
      <span className={cN("navigation__icon", { open })}>&nbsp;</span>
    </StyledNavButton>
  );
};

export default NavButton;
