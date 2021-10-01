import React, { Component } from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-body">
          <Profile />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
