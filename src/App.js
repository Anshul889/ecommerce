import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/sigup' component={SignUp}/>
      </Switch>
    </div>
  )
}

export default App
