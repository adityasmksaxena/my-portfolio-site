import React, { useState } from "react";
import Wrapper from "./components/Wrapper";

function Navigation() {
  const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState(false);

  const toggleNavigationMenuVisibility = () => {
    return setIsNavigationMenuVisible(!isNavigationMenuVisible);
  };

  return (
    <Wrapper
      open={isNavigationMenuVisible}
      handleNavigationButtonClick={toggleNavigationMenuVisibility}
    />
  );
}

export default Navigation;
