import React from 'react'
import NavBar from './components/NavBar';
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'
import Home  from './components/Home';
import Signin from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';



function App(){
  return(
    <BrowserRouter> 
    <NavBar/>

    <Route exact path="/">
    <Home/>
    </Route>

    <Route path="/signin">
    <Signin/>
    </Route>

    <Route path="/signup">
    <Signup/>
    </Route>


    <Route path="/profile">
    <Profile/>
    </Route>


    </BrowserRouter>
  )
}
export default App;