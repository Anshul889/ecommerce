import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Cart from './pages/Cart/Cart'
import Homepage from './pages/Homepage/Homepage'
import Product from './pages/Product/Product'
import Profile from './pages/Profile/Profile'
import ShopPage from './pages/shop/ShopPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile' component={Profile} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={Product} />
        </Switch>
      </div>
    )
  }
}

const actions = {
  setCurrentUser
}

export default connect(null, actions)(App)
