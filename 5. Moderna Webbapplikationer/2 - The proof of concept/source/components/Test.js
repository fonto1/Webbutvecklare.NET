import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Test extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              <h1>test</h1>
              <h2>bog</h2>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
