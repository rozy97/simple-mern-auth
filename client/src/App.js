import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/Register";
import Login from "./components/auth/Login";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello</h1>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
