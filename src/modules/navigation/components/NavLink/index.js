import React from "react";
import StyledNavigationLink from "./style.js";

function NavLink({ href, children, ...restConfig }) {
  return (
    <StyledNavigationLink>
      <li className="navigation__item">
        <a href={href} className="navigation__link" {...restConfig}>
          {children}
        </a>
      </li>
    </StyledNavigationLink>
  );
}

export default NavLink;
