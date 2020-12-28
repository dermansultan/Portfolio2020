import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Ruma from "./Components/RumaCaseStudy";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
    {/* editing locally get rid of basename attr */}
      <Router basename='Portfolio2020/'>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
        </Switch>
        <Route path="/Ruma">
          <Ruma></Ruma>
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
