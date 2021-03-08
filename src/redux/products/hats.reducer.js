import { createReducer } from '../../util/reducerUtils'

import { FETCH_HATS } from './hats.constants'

const initialState = []

const fetchHats = (state, payload) => {
  return payload.Hats
}

export default createReducer(initialState, {
  [FETCH_HATS]: fetchHats,
})
