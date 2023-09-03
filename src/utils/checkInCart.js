import { useSelector, useDispatch } from "react-redux"
// import { useCallback } from "react";
// import { data } from "../constants/demoData";
// import { addToCart } from "../actions/cartItems";
const useItem = (id) => {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cartItems);
    const incart = cartItem.some(({ id: cartId }) => cartId == id);
   
    return {
        incart,
    }

}
export default useItem