import { createReducer } from '../../util/reducerUtils'

import { FETCH_SNEAKERS } from './sneakers.constants'

const initialState = []

const fetchSneakers = (state, payload) => {
  return payload.Sneakers
}

export default createReducer(initialState, {
  [FETCH_SNEAKERS]: fetchSneakers,
})