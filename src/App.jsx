import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Ruma from "./Components/RumaCaseStudy";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
    <div className="App">
      {/* editing locally get rid of basename attr */}
      {/* <Header></Header> */}
      <Router basename="/">
      <ScrollToTop />
      <Header></Header>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Ruma" component={Ruma} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
