import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./Pages/Board";
import HeaderLinks from "./Components/HeaderLinks";
import "./App.css";
import CellToolbar from "./Components/CellToolbar";
import { initializeIcons } from "@uifabric/icons";
import LeftPanel from "./Components/LeftPanel";
import IssuePage from "./Pages/IssuePage";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";

initializeIcons();

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Router>
      <div className="container">
        <div className="header"><Header/></div>
        <div className="leftPanel">
          <LeftPanel />
        </div>
        <div className="center">
          <Switch>
            <Route exact path="/" component={Board} />
            <Route exact path="/IssuePage/:id?" component={IssuePage} />
            <Route exact path="/error" component={ErrorPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <div className="rightPanel"></div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}
