import { configureStore } from "@reduxjs/toolkit";

import navSlice from "../actions/openSidebar";
const store = configureStore({
  reducer: {
    sideBar: navSlice.reducer,
  },
});

export default store;
