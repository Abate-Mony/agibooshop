import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false
    },
    reducers: {

        toggle: (state, action) => {
            state.isOpen = !state.isOpen
        },
        close:(state)=>{
        state.isOpen=false
        }
    }

})
export const actions = navSlice.actions

export default navSlice