import { createSlice } from "@reduxjs/toolkit";
const initialState = {
isOpen:false
}
const cartSlice = createSlice({
    initialState,
    name: "cartslice",
    reducers: {
        open: (state,action) => {
            state.isOpen = true
        },
        close: (state,action) => {
            state.isOpen = false
        }

    }

})
export const { open, close } = cartSlice.actions
export default cartSlice.reducer