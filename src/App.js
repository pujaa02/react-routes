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
import Inputref from "./pages/useref";
import Inputref2 from "./pages/useref2";
import Fetch from "./pages/fetch";
import Show from "./practice/usestate/show_hide";
import Stopwatch from "./practice/usestate/Stopwatch";
import Todo from "./practice/usestate/todo";
import Progress from "./practice/usestate/mainprogress";
import Form from "./practice/usestate/form";
import Maxcount from "./practice/usestate/maxcount";
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
            <li>
              <Link to="/Inputref">useRef</Link>
            </li>
            <li>
              <Link to="/Inputref2">useRef-2</Link>
            </li>
            <li>
              <Link to="/fetchjsondata">Fetchdata</Link>
            </li>
            <li>
              <Link to="/showhide">Show/Hide</Link>
            </li>
            <li>
              <Link to="/Stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/Todo">TodoList</Link>
            </li>
            <li>
              <Link to="/Progress">ProgressBar</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/Maxcount">Maxcount</Link>
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
            <Route path="/Inputref" element={<Inputref />}></Route>
            <Route path="/Inputref2" element={<Inputref2 />}></Route>
            <Route path="/fetchjsondata" element={<Fetch />}></Route>
            <Route path="/showhide" element={<Show />}></Route>
            <Route path="/Stopwatch" element={<Stopwatch />}></Route>
            <Route path="/Todo" element={<Todo />}></Route>
            <Route path="/Progress" element={<Progress />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/Maxcount" element={<Maxcount />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
