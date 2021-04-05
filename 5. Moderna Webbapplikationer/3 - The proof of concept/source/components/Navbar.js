import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "./MyContext";

export default class Navbar extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { loggedIn, name } = value.currentUser;
          return (
            <div>
              <nav className="navbar navbar-light bg-light">
                <div id="swipe">
                  {loggedIn ? (
                    <div className="row">
                      <a
                        className="col text-left navbar-brand"
                        href="index.html"
                      >
                        Return!
                      </a>
                      <Link
                        className="col navbar-brand text-right"
                        to="/"
                        onClick={value.logout}
                      >
                        LogOut
                      </Link>
                    </div>
                  ) : (
                    <div className="row">
                      <a
                        className="col text-left navbar-brand"
                        href="index.html"
                      >
                        Return!
                      </a>
                    </div>
                  )}
                </div>

                <div id="swipe" className="row">
                  {loggedIn ? (
                    <Link
                      className="col navbar-brand text-left disabled-link"
                      to="#"
                    >
                      User: {name}
                    </Link>
                  ) : (
                    <Link
                      className="col navbar-brand text-left "
                      to="/registration"
                      onClick={() => {
                        value.inputErrMsg("");
                      }}
                    >
                      Registration
                    </Link>
                  )}

                  <Link
                    className="col navbar-brand text-center"
                    to="/"
                    onClick={() => {
                      value.inputErrMsg("");
                    }}
                  >
                    StartPage
                  </Link>
                  <Link
                    className="col navbar-brand text-right"
                    to="/profile"
                    onClick={() => {
                      value.inputErrMsg("");
                    }}
                    style={{
                      visibility: loggedIn ? "visible" : "hidden",
                    }}
                  >
                    Profile
                  </Link>
                </div>
              </nav>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
