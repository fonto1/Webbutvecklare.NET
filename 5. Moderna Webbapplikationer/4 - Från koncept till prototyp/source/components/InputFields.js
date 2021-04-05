import React, { Component } from "react";
import MyContext from "./MyContext";
import PropTypes from "prop-types";

export default class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      buttonName: this.props.btnName,
    };
  }

  resetFields = () => {
    this.setState({
      userName: "",
      password: "",
    });
  };

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { checkLogin, createUser, inputErrMsg, message } = value;
          let { userName, password, buttonName } = this.state;
          return (
            <div className="login-container">
              <form>
                <div>
                  <label>Username</label>
                  <br />
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={this.inputHandler}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.inputHandler}
                  />
                </div>
                <br />
                <span>{message}</span>

                <br />
                <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    userName = userName.toLowerCase();
                    if (userName && password && buttonName === "Login") {
                      this.resetFields();
                      checkLogin(userName, password);
                      return;
                    }
                    if (userName && password && buttonName === "Register") {
                      this.resetFields();
                      createUser(userName, password);
                      return;
                    }
                    inputErrMsg("Error, Empty Fields");
                    this.resetFields();
                  }}
                  className="btn btn-danger btn-lg"
                  type="submit"
                >
                  {this.props.btnName}
                </button>
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

InputFields.propTypes = {
  btnName: PropTypes.string,
};
