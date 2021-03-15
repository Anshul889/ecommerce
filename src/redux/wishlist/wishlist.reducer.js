import { createReducer } from '../../util/reducerUtils'
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlist.constants'

const initialState = []

const addToWishlist = (state, payload) => {
  return [...state, payload]
}

const removeFromWishlist = (state, payload) => {
  return [...state.filter((product) => product.id !== payload.id)]
}

export default createReducer(initialState, {
  [ADD_TO_WISHLIST]: addToWishlist,
  [REMOVE_FROM_WISHLIST]: removeFromWishlist
})
