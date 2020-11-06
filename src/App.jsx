import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'


function App() {
  return (<div className="App">
  <Router>
  <Header></Header>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/About'>
        <About></About>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
  </div>)
      
}

export default App;
