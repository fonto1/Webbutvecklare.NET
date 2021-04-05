import React, { Component } from "react";
import InputFields from "../components/InputFields";
import ScrollList from "../components/ScrollList";
import Forum from "../components/Forum";
import AnnounceBoard from "../components/AnnounceBoard";
import MyContext from "../components/MyContext";
import ErrorBoundary from "../components/ErrorBoundary";
import FriendList from "../components/FriendList";

export default class StartPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { loggedIn } = value.currentUser;
          return loggedIn ? (
            <div>
              <div className="row">
                <div className="col-8 ">
                  {" "}
                  <AnnounceBoard />
                </div>
                <div className="col-4">
                  <FriendList />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-8 ">
                  {" "}
                  <ErrorBoundary>
                    <Forum />
                  </ErrorBoundary>
                </div>
                <div className="col-4">
                  <ScrollList />
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center ">
              <InputFields btnName="Login" />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
