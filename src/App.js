import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./cmps/Home";
import AboutMe from "./cmps/AboutMe";
import Contact from "./cmps/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/aboutMe" component={AboutMe}>
        </Route>
        <Route exact path="/contact" component={Contact}>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
