import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Authorization from "../Authorization";
import Home from "../Home";
import NavBar from "../NavBar";

// import { useGlobalStore } from "../../hooks/useStores";

const Router: React.FC = () => {
  // const { authorizationStore } = useGlobalStore();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <NavBar>
            <Home />
          </NavBar>
        </Route>
        <Route path="/">
          <NavBar>
            <Authorization />
          </NavBar>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default observer(Router);
