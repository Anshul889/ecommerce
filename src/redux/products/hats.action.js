import {FETCH_HATS} from './hats.constants'
import firebase from '../../firebase/firebase.utils'

export const fetchHats = () => async (dispatch) => {
  const firestore = firebase.firestore()
  try {
    let HatsQuery = await firestore.collection('products').where('category', '==', 'Hats').limit(20).get()

    let Hats = []

    for (let i = 0; i < HatsQuery.docs.length; i++) {
      let hat = {
        ...HatsQuery.docs[i].data(),
        id: HatsQuery.docs[i].id,
      }
      Hats.push(hat)
    }
    dispatch({type: FETCH_HATS, payload: {Hats}});
  } catch (e) {
    console.log(e)
  }
}
