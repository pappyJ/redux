import React, { useReducer } from "react";

import { connect } from "react-redux";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

// import AppReducer from "./data/AppReducer";

import setCurrentUser from "./data/user.actions";

import "./App.css";

// import { GlobalProvider, GlobalContext } from "./data/globalState";

const App = (currentState) => {
  // const [globalState, dispatch] = useReducer(AppReducer, GlobalContext);

  // const filterState = (searchField = "") =>
  //   dispatch({
  //     type: "FILTER_STATE",

  //     payload: searchField,
  //   });

  // const filteredState = (() =>
  //   state.monsters.filter((monster) =>
  //     monster.name.toLowerCase().includes(globalState.searchField || "")
  //   ))();
  return (
    // <GlobalProvider>
    <div className="App">
      <h1>monsters Rolodex</h1>
      <SearchBox
        inputText="search monsters"
        inputAction={(e) => currentState.setCurrentUser(e.target.value)}
      />
      <CardList monsters={currentState}></CardList>
    </div>
    // {/* </GlobalProvider> */}
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentState: state.user.origin,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
