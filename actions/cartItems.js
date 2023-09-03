import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItem: [],
    isLoading: false,
    amount: 0,
    total: 0
}
const cartSlice = createSlice({
    initialState,
    name: "cartItem",
    addToCart: (state, { payload }) => {
        const {
            cartItem: item
        } = state;
        const isItem = item.find(({ id }) => id === payload);
        console.log({

            ...item
        })
        if (isItem) {
            // code here
            state.cartItem = [
                ...state.cartItem,


            ]
        }
    },
    removeFromCart: (state, { payload }) => {
        const {
            cartItem: items
        } = state;
        const newItems = items.filter(({ id }) => id !== payload);
        state.cartItem = newItems
    },
    calculateTotal: (state, { payload }) => {
        const items = state.cartItem
        const { amount: totalAmount, total: totalItems } = items.reduce((acc, next) => ({
            amount: acc ? acc.amount + next.amount : acc
        }))
        state.total = totalItems
        state.amount = totalAmount
    }
})
export const { removeFromCart, calculateTotal, addToCart } = cartSlice.actions
export default cartSlice.reducer