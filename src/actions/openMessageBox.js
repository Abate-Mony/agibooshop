import { createSlice } from "@reduxjs/toolkit";
const messageSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMessage: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const {toggleMessage} = messageSlice.actions;

export default messageSlice;
