import React, { Component } from "react";
import MyContext from "./MyContext";
import Axios from "axios";
const server = "http://localhost:3000/";
const externalLink = "https://api.thedogapi.com/v1/breeds";
import { User } from "../classes/User";
import { Dog } from "../classes/Dog";

export default class Provider extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      database: [],
      currentUser: {},
      message: "",
      loading: true,
      extDatabase: [],
      notLoggedInUsers: [],
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    const fetchServerApi = Axios.get(server + "user");
    const fetchExternalDatabase = Axios.get(externalLink);

    Axios.all([fetchServerApi, fetchExternalDatabase]).then(
      Axios.spread((...responses) => {
        const userDatabase = responses[0].data;
        const extDatabase = responses[1].data;
        const loggedInUser = userDatabase.filter(
          (filter) => filter.loggedIn === true
        );

        const otherUsers = userDatabase.filter(
          (filter) => filter.loggedIn === false
        );

        this.setState(
          {
            database: userDatabase,
            currentUser: loggedInUser[0] || {},
            extDatabase: extDatabase,
            loading: false,
            notLoggedInUsers: otherUsers,
          },
          () => {
            console.log("current database is: ", this.state.database);
            console.log("current user is: ", this.state.currentUser);
          }
        );
      })
    );
  }

  createUser = (name, password) => {
    const checkIfUserExist = this.state.database.some(
      (user) => user.name === name
    );

    if (!checkIfUserExist) {
      const newUser = new User(name, password);
      this.setState(
        (prevState) => ({
          database: [...prevState.database, newUser],
          message: `${name} Registred`,
        }),
        () => {
          Axios({
            method: "post",
            url: "http://localhost:3000/User",
            data: newUser,
          });
          console.log("new user registered");
        }
      );
    } else {
      this.inputErrMsg("Error, Username Already Used");
    }
  };

  checkLogin = (name, password) => {
    this.state.database.map((tempUser) => {
      if (tempUser.name === name && tempUser.password === password) {
        tempUser.loggedIn = true;
        console.log("congrat sucessful login");

        Axios({
          method: "put",
          url: "http://localhost:3000/user/" + tempUser.id,
          data: tempUser,
        })
          .then(() => {
            return Axios.get(server + "user");
          })
          .then((getResponse) => {
            const otherUsers = getResponse.data.filter(
              (filter) => filter.loggedIn === false
            );

            this.setState(
              {
                currentUser: tempUser,
                notLoggedInUsers: otherUsers,
              },
              () => {
                return;
              }
            );
          });
      }
    });
    this.inputErrMsg("Error, Username/Password");
  };

  addDog = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      let newDog = new Dog("non_name", "no_Age");
      newDog.image = res.data.message;
      let currentUserState = { ...this.state.currentUser };
      currentUserState.dogs.push(newDog);

      this.setState(
        (prevstate) => ({
          currentUser: currentUserState,
        }),
        () => {
          Axios({
            method: "put",
            url: server + "user/" + this.state.currentUser.id,
            data: this.state.currentUser,
          });
        }
      );
    });
  };

  cardsInputHandler = (e) => {
    let currentUserState = { ...this.state.currentUser };
    let index = currentUserState.dogs.findIndex(
      (obj) => obj.id == e.target.parentNode.parentNode.id
    );
    currentUserState.dogs[index][e.target.name] = [e.target.value];
    this.setState(
      {
        currentUser: currentUserState,
      },
      () => {
        Axios({
          method: "put",
          url: server + "user/" + this.state.currentUser.id,
          data: this.state.currentUser,
        });
      }
    );
  };

  updateImg = (img) => {
    let currentUserState = { ...this.state.currentUser };
    let index = currentUserState.dogs.findIndex((obj) => obj.id == e.target.id);
    currentUserState.dogs[index].image = img.data.message;
    this.setState(
      {
        currentUser: currentUserState,
      },
      () => {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(this.state.currentUser)
        );
      }
    );
  };

  logout = () => {
    let logOut = { ...this.state.currentUser };
    logOut.loggedIn = false;

    Axios({
      method: "put",
      url: "http://localhost:3000/user/" + logOut.id,
      data: logOut,
    })
      .then(() => {
        this.setState({
          currentUser: {},
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  inputErrMsg = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  };

  render() {
    return this.state.loading ? (
      <div></div>
    ) : (
      <MyContext.Provider
        value={{
          database: this.state.database,
          currentUser: this.state.currentUser,
          message: this.state.message,
          createUser: this.createUser,
          checkLogin: this.checkLogin,
          addDog: this.addDog,
          cardsInputHandler: this.cardsInputHandler,
          logout: this.logout,
          inputErrMsg: this.inputErrMsg,
          extDatabase: this.state.extDatabase,
          notLoggedInUsers: this.state.notLoggedInUsers,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
