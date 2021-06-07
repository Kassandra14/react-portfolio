import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
import "./App.scss"


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <h2>Hei</h2>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;