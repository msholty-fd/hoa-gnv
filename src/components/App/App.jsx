import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

export default hot(module)(App);
