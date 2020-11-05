import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./component1/Header/Header";
import Hero from "./component1/Hero/Hero";
import Home from './containers/Home/Home'
import Contact from "./containers/Contact/Contact";
import Post from "./containers/Post/Post";
import About from "./containers/About/About";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/post/:postId" component={Post} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
