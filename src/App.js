import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Homepage from './pages/Homepage/Homepage'
import Profile from './pages/Profile/Profile'
import ShopPage from './pages/shop/ShopPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignIn} />
          <Route  path='/signup' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    )
  }
}

export default App
