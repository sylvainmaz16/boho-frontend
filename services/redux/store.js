import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import root from "../redux/reducers/rootReducer";

export const makeStore = () =>
  configureStore({
    reducer: { root },
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore);
