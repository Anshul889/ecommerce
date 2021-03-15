import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart/cart.reducer'
import hatsReducer from './products/hats.reducer'
import sneakersReducer from './products/sneakers.reducer'

import userReducer from './user/user.reducer'
import wishlistReducer from './wishlist/wishlist.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishlist']
}

const rootReducer = combineReducers({
  user: userReducer,
  hats: hatsReducer,
  sneakers: sneakersReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
})

export default persistReducer(persistConfig, rootReducer)
