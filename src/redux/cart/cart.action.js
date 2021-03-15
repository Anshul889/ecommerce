import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
} from './cart.constants'
import firebase from '../../firebase/firebase.utils'

export const addToCart = (product, quantity) => (dispatch) => {
  const firestore = firebase.firestore()
  const cartItem = { ...product, quantity }
  dispatch({ type: ADD_TO_CART, payload: cartItem })
}

export const removeFromCart = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: product })
}

export const increaseQuantity = (product) => (dispatch) => {
  const newProduct = {
    ...product, quantity: product.quantity + 1
  }
  dispatch({ type: INCREASE_QUANTITY, payload: newProduct })
}

export const decreaseQuantity = (product) => (dispatch) => {
  const newProduct = {
    ...product, quantity: product.quantity - 1
  }
  dispatch({ type: DECREASE_QUANTITY, payload: newProduct })
}
