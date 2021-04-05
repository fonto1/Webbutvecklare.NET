import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import StartPage from "./pages/StartPage";
import Provider from "./components/Provider";
import MyContext from "./components/MyContext";
import TopicDetail from "./pages/TopicDetail";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename="/source/App">
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={StartPage} />
              <Route path="/registration" component={RegistrationPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/topic/:id" component={TopicDetail} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}
