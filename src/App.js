import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Menuitem/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App
