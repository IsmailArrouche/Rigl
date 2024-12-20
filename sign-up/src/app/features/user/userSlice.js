import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  editUser: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
    clear: (state) => {
      state.user = [];
    },
    editInfo: (state, action) => {
      state.editUser = [];
      state.editUser = action.payload;
    },
  },
});

export const { signUp, clear, editInfo } = userSlice.actions;

export default userSlice.reducer;
