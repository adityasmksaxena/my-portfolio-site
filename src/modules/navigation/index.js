import classNames from "classnames";
import React, { useState } from "react";
import NavButton from "./components/NavButton";
import NavLink from "./components/NavLink";
import StyledNavbar from "./style.js";
import { NAV_MENUS } from "./utils/constants";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavigationButtonClick() {
    setOpen(state => !state);
  }

  const navBackgroundClass = classNames("navigation__background", {
    scale: open,
  });

  return (
    <StyledNavbar>
      <NavButton open={open} handleNavigationButtonClick={handleNavigationButtonClick} />
      <div className={navBackgroundClass}>&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {NAV_MENUS.map(item => (
            <NavLink key={item.text} href={item.href} handleLinkClick={this.handleLinkClick}>
              {item.text}
            </NavLink>
          ))}
        </ul>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
