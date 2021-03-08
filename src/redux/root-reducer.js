import { combineReducers } from 'redux'
import hatsReducer from './products/hats.reducer'
import sneakersReducer from './products/sneakers.reducer'

import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer,
  hats: hatsReducer,
  sneakers: sneakersReducer
})
