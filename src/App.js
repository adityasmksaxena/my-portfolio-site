// import withLazySuspense from "hocs/withLazySuspense";
import React, { StrictMode } from "react";
import Home from "./modules/Home";
import Navigation from "./modules/Navigation";
// const Navigation = withLazySuspense(() =>
//   import(/* webpackChunkName: "Navigation" */ "./modules/Navigation")
// );

const App = () => (
  <StrictMode>
    <Navigation />
    <Home />
  </StrictMode>
);

export default App;
