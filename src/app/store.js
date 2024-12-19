import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/mode/modeSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    user: userReducer,
  },
});
