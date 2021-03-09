import { createReducer } from '../../util/reducerUtils'

import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from './cart.constants'

const initialState = []

const addToCart = (state, payload) => {
  return [...state, payload]
}

const increaseQuantity =(state, payload) => {
  return [
    ...state.filter(product => product.id !== payload.id),
    Object.assign({}, payload)
  ];
}

const decreaseQuantity =(state, payload) => {
  return [
    ...state.filter(product => product.id !== payload.id),
    Object.assign({}, payload)
  ];
}
const removeFromCart = (state, payload) => {
  return [...state.filter(product => product.id !== payload.id)]
}


export default createReducer(initialState, {
  [ADD_TO_CART]: addToCart,
  [INCREASE_QUANTITY]: increaseQuantity,
  [DECREASE_QUANTITY]: decreaseQuantity,
  [REMOVE_FROM_CART]: removeFromCart
})
