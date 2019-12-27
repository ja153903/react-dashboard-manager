import React from "react";

import { GlobalProvider } from "./contexts/GlobalContext";
import Router from "./components/Router";
import NavBar from "./components/NavBar";

/**
 * TODO: Should implement Router here instead of having Authorization right there
 */

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;
