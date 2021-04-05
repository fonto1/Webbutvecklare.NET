import React, { Component } from "react";
import InputFields from "../components/InputFields";
import MyContext from "../components/MyContext";

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              <InputFields btnName="Register" />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
