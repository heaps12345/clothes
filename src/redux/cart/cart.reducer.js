import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils'
const initialState = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM: {
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    }
    default:
      return state;
  }
};
