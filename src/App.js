/** @format */
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [user,loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="app-loading">
        <div className="loading-content">
          <Spinner name="ball-spin-fade-loader" color="black" fadeIn="none" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
