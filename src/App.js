import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Count from "./pages/Count";
import Count2 from "./pages/Count2";
import Changecolor from "./pages/Changecolor";
import Car from "./pages/Car";
import Timer from "./pages/Timer";
import Timer2 from "./pages/Timer2";
import Component1 from "./pages/Context";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="count">Counter</Link>
            </li>
            <li>
              <Link to="/Changecolor">Changecolor</Link>
            </li>
            <li>
              <Link to="/Car">Car</Link>
            </li>
            <li>
              <Link to="/Timer">Timer</Link>
            </li>
            <li>
              <Link to="/Timer2">Timer2</Link>
            </li>
            <li>
              <Link to="/Component1">useContext</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Count" element={<Count />}></Route>
            <Route path="/Changecolor" element={<Changecolor />}></Route>
            <Route path="/Car" element={<Car />}></Route>
            <Route path="/Timer" element={<Timer />}></Route>
            <Route path="/Timer2" element={<Timer2 />}></Route>
            <Route path="/Component1" element={<Component1 />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
