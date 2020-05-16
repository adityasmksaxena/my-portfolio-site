import cN from "classnames";
import React from "react";
import StyledNavButton from "./style";

const NavButton = ({ open, handleNavigationButtonClick }) => {
  return (
    <StyledNavButton onClick={handleNavigationButtonClick}>
      <span className={cN("navigation__icon", { open })}>&nbsp;</span>
    </StyledNavButton>
  );
};

export default NavButton;
