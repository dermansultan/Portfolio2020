import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Ruma from "./Components/RumaCaseStudy";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [lightBox, setLightBox] = useState({
    image: "",
    caption: "",
  });

  const toggleLightBox = () => {
    let elem = document.getElementById("lightBoxElem");
    if (elem.style.display == "none") {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  };

  const lightBoxHandler = (img, cap) => {
    setLightBox({ image: img, caption: cap });
    toggleLightBox();
  };
  return (
    <div className="App">
      {/* editing locally get rid of basename attr */}
      {/* <Header></Header> */}
      <div
        className="lightBox wrapper"
        id="lightBoxElem"
        onClick={() => {
          toggleLightBox();
        }}
        style={{ display: "none" }}
      >
        <div className="lightBox content">
          <img src={lightBox.image}></img>
          <h2>{lightBox.caption}</h2>
        </div>
      </div>
      <Router basename="/">
        <ScrollToTop />
        <Header></Header>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/About"
                  component={About}
                  title="About Page"
                />
                <Route exact path="/Ruma">
                  <Ruma lightBoxHandler={lightBoxHandler}></Ruma>
                </Route>
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
