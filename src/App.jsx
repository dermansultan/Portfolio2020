import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Ruma from "./Components/RumaCaseStudy";
import ToDo from "./Components/ToDoCaseStudy";
import Weather from "./Components/WeatherCaseStudy";
import Trac from "./Components/TracCaseStudy";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import styled from "styled-components";
import { createBrowserHistory } from "history";
import ReactGa from "react-ga";

const LightBoxWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const LightBoxContent = styled.div`
  position: relative;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 95%;
  border-radius: 10px;
  @media only screen and (max-width: 700px) {
    height: 70%;
    width: 95%;
  }
`;

const LightBoxImg = styled.img`
  width: 60%;
  height: auto;
  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;

const LightBoxCaption = styled.figcaption`
  color: var(--main-txt-colour);
  padding-top: 12px;
  font-size: clamp(18px, 1.5vw, 22px);
`;

const trackingId = "UA-177262949-1";

function App() {
  useEffect(() => {
    ReactGa.initialize(trackingId);

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

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
      <LightBoxWrapper
        id="lightBoxElem"
        onClick={() => {
          toggleLightBox();
        }}
        style={{ display: "none" }}
      >
        <LightBoxContent>
          <LightBoxImg src={lightBox.image} />
          <LightBoxCaption>{lightBox.caption}</LightBoxCaption>
        </LightBoxContent>
      </LightBoxWrapper>
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
                <Route exact path="/ToDo">
                  <ToDo lightBoxHandler={lightBoxHandler}></ToDo>
                </Route>
                <Route exact path="/Climate">
                  <Weather lightBoxHandler={lightBoxHandler}></Weather>
                </Route>
                <Route exact path="/Trac">
                  <Trac lightBoxHandler={lightBoxHandler}></Trac>
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
