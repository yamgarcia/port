import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
// import Resume from "./pages/Resume";
// import Portfolio from "./pages/Portfolio";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' component={Landing} exact />
        {/* <Route path='/resume' component={Resume} exact />
        <Route path='/portfolio' component={Portfolio} exact /> */}
      </BrowserRouter>
    </>
  );
};

export default Routes;