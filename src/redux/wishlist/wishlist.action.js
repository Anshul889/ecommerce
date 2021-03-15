import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlist.constants'

export const addToWishlist = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST, payload: product })
}

export const removeFromWishlist = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: product })
}
