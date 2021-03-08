import {FETCH_SNEAKERS} from './sneakers.constants'
import firebase from '../../firebase/firebase.utils'

export const fetchSneakers = () => async (dispatch) => {
  const firestore = firebase.firestore()
  try {
    let SneakersQuery = await firestore.collection('products').where('category', '==', 'Sneakers').limit(20).get()

    let Sneakers = []

    for (let i = 0; i < SneakersQuery.docs.length; i++) {
      let sneaker = {
        ...SneakersQuery.docs[i].data(),
        id: SneakersQuery.docs[i].id,
      }
      Sneakers.push(sneaker)
    }
    dispatch({type: FETCH_SNEAKERS, payload: {Sneakers}});
  } catch (e) {
    console.log(e)
  }
}
