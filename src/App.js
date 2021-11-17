import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import React from "react";
import Form from './Component/Form';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import DessertDetails from './Component/DessertDetails';
import Contact from './Component/Contact';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/Form">
        <Form/>
      </Route>
      <Route path="/Contact">
        <Contact/>
      </Route>
      <Route path="/DessertDetails/:id">
      <DessertDetails/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
