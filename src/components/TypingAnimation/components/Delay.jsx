import React from "react";

const Delay = () => {
  return <noscript />;
};

Delay.updateCursor = (cursor, { ms }) => {
  return {
    ...cursor,
    delay: cursor.delay + ms,
  };
};

Delay.getName = () => {
  return "Delay";
};

export default Delay;
