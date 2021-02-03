import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Ruma from "./Components/RumaCaseStudy";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import styled from "styled-components";

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
`;

const LightBoxImg = styled.img`
  width: 70%;
  height: auto;
`;

const LightBoxCaption = styled.figcaption`
  color: var(--main-txt-colour);
  padding-top: 12px;
  font-size: clamp(18px, 1.5vw, 22px);
`;

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
