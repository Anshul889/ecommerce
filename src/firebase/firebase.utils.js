import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: 'AIzaSyDYfUT0PI_Htuq8Zy1x52_hEQSZRFl8Xhc',
  authDomain: 'ecom-shopify.firebaseapp.com',
  projectId: 'ecom-shopify',
  storageBucket: 'ecom-shopify.appspot.com',
  messagingSenderId: '268393106769',
  appId: '1:268393106769:web:75206f16ed6fa75a87d770',
  measurementId: 'G-1587W8KFTM',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef
}

firebase.initializeApp(Config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
