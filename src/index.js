import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import UserProfile from "./components/UserProfile";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            {/* Оба /roster и /roster/:number начинаются с /roster */}
            <Route path="/profile" component={UserProfile} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
