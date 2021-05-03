import React from "react";

const Speed = () => {
  return <noscript />;
};

Speed.updateCursor = (cursor, { ms }) => {
  return {
    ...cursor,
    speed: ms,
  };
};

Speed.getName = () => {
  return "Speed";
};

export default Speed;
