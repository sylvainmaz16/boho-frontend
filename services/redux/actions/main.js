import * as t from "../types";

export const setAuth = (tokens) => ({
  type: t.SET_TOKENS,
  payload: tokens,
});
