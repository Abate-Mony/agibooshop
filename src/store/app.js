import { configureStore } from "@reduxjs/toolkit";

import navSlice from "../actions/openSidebar";
import messageSlice from "../actions/openMessageBox";
const store = configureStore({
  reducer: {
    sideBar: navSlice.reducer,
    message:messageSlice.reducer
  },
});

export default store;
