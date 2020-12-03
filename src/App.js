import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// importing bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "./Static/CSS/theme.css"

// importing components and actions
import About from "./Components/About"
import Navbar from "./Components/Navbar"

import Lookup from "./Actions/Lookup"

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/weather" exact >
            <Lookup/>
        </Route>
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  )
}

export default App
