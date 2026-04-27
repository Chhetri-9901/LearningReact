import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { multiplierSlice } from "../features/multiplierSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiplier: multiplierSlice
  },
});
