import React, { Component } from "react";
import MyContext from "./MyContext";
export default class FriendList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClick = (e) => {
    console.log(e.target.id);
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              <p style={{ textAlign: "right" }}>FriendsList</p>
              <div className="d-flex justify-content-end">
                <br></br>
                <ul style={{}}>
                  {value.notLoggedInUsers.map((user) => {
                    return (
                      <li
                        className="list-group-item"
                        key={user.id}
                        onClick={this.onClick}
                        value={user.name}
                        id={user.id}
                      >
                        {user.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

FriendList.contextType = MyContext;
