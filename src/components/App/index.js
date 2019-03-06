import React, { Component } from "react"; //imports in order of importance 1. npm module
//our libraries or components
import Increment from "../Increment"; //..means go up a folder.  Imports index by default
//styling things
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Press the Button!
          </a>

          <Increment />
        </header>
      </div>
    );
  }
}

export default App;
