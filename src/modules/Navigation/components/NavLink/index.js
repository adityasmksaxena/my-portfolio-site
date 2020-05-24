import React from "react";
import StyledNavigationLink from "./style.js";

function NavLink({ href, children, ...restConfig }) {
  return (
    <StyledNavigationLink>
      <a href={href} className="navigation__link" {...restConfig}>
        {children}
      </a>
    </StyledNavigationLink>
  );
}

export default NavLink;
