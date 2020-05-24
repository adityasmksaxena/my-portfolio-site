import React, { useState } from "react";
import Wrapper from "./components/Wrapper";

function Navigation() {
  const [open, setOpen] = useState(false);

  function handleNavigationButtonClick() {
    setOpen(state => !state);
  }

  return <Wrapper open={open} handleNavigationButtonClick={handleNavigationButtonClick} />;
}

export default Navigation;
