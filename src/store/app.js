import { configureStore } from "@reduxjs/toolkit";

import navSlice from "../actions/openSidebar";
import messageSlice from "../actions/openMessageBox";
import cartItems from "../actions/cartItems";
import cartSlice from "../actions/openCart";
const store = configureStore({
  reducer: {
    sideBar: navSlice.reducer,
    message: messageSlice.reducer
    , cartItems,
    cartSlice
  },
});

export default store;
