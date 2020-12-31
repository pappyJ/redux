const appReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_STATE":
      return {
        ...state,

        searchField: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
