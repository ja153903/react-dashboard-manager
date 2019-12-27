import React, { createContext } from "react";

import { AuthorizationStore } from "../stores/Authorization";

import { AUTHORIZATION_STORE } from "../constants/stores";

const initialStores = {
  [AUTHORIZATION_STORE]: new AuthorizationStore()
};

export const GlobalContext = createContext(initialStores);

export const GlobalProvider: React.FC = ({ children }) => (
  <GlobalContext.Provider value={initialStores}>
    {children}
  </GlobalContext.Provider>
);
