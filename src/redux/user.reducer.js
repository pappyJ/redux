import data from "../data/users.json";

const INITIAL_STATE = { origin: data, searchField: "" };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_USER":
      return {
        ...state,

        searchField: action.payload,

        origin: INITIAL_STATE.origin.filter((user) =>
          user.name.toLowerCase().includes(action.payload || "")
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
