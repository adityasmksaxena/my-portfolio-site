import React from "react";
import cN from "classnames";
import { NAV_MENUS_CONFIG } from "../../utils/constants";
import NavButton from "../NavButton";
import NavLink from "../NavLink";
import StyledNavbar from "./style";

function Wrapper({ open, handleNavigationButtonClick }) {
  return (
    <StyledNavbar>
      <NavButton open={open} handleNavigationButtonClick={handleNavigationButtonClick} />
      <div className={cN("navigation__background", { open })}>&nbsp;</div>
      <nav className={cN("navigation__nav", { open })}>
        <ul className="navigation__list">
          {NAV_MENUS_CONFIG.map(({ text, ...restConfig }) => {
            return (
              <NavLink key={text} {...restConfig} onClick={handleNavigationButtonClick}>
                {text}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </StyledNavbar>
  );
}

export default Wrapper;
