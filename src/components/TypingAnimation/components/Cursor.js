import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const CursorSpan = styled.span`
  font-weight: 100;
  color: black;
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

const Cursor = ({ element, className }) => (
  <CursorSpan as={element} className={className}>
    |
  </CursorSpan>
);

Cursor.propTypes = {
  className: PropTypes.string,
  element: PropTypes.string,
};
Cursor.defaultProps = {
  className: "",
  element: "span",
};

export default Cursor;
