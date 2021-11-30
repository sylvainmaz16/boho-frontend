import * as t from "../types";

const main = (
  state = {
    userAuth: {
      access: "",
      refresh: "",
      isLoggedIn: false,
    },
  },
  action
) => {
  switch (action.type) {
    case t.SET_TOKENS:
      return {
        ...state,
        userAuth: {
          access: action.payload.access,
          refresh: action.payload.refresh,
          isLoggedIn: true,
        },
      };
    default:
      return state;
  }
};

export default main;
