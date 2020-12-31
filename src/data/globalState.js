import React, { createContext, useReducer } from "react";

import users from "./users.json";

import AppReducer from "./AppReducer";

const initialState = { monsters: users, searchField: "" };

//Action

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        monsters: state.monsters,

        searchField: state.searchField,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
