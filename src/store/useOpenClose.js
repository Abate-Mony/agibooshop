import { useDispatch, useSelector } from 'react-redux'
import { open as openCart, close as closeCart } from '../actions/openCart'
const useOpenClose = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cartSlice.isOpen);
    console.log(state)
    const open = () => dispatch(openCart())
    const close = () => dispatch(closeCart())
    return (
        {
            isOpen: state,
            open, close
        }
    )
}

export default useOpenClose