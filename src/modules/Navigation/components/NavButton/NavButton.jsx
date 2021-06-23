import React from "react";
import cN from "classnames";
import PropTypes from "prop-types";

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

NavButton.propTypes = {
  open: PropTypes.bool.isRequired,
  handleNavigationButtonClick: PropTypes.func.isRequired,
};

export default NavButton;
