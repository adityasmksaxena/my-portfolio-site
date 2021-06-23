import React from "react";
import PropTypes from "prop-types";
import { StyledNavigationLink } from "./style";

function NavLink({ children, href, ...restConfig }) {
  return (
    <StyledNavigationLink>
      <a href={href} className="navigation__link" {...restConfig}>
        {children}
      </a>
    </StyledNavigationLink>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;
