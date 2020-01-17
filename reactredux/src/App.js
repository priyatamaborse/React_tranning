import React, { Component } from "react";
import "./App.css";
import Routing from "./Routing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Routing />
      </>
    );
  }
}

export default App;
