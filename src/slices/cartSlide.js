import { createSlice } from '@reduxjs/toolkit';

const cartSlide = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        removeToCart(state, action) {
            state.splice(action.payload,1)
        }
    }
})
const { actions, reducer } = cartSlide;
export const { addToCart, removeToCart } = actions;
export default reducer;