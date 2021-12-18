import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingInfo from "./components/BookingInfo/BookingInfo.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp.js";
import MainInterface from './components/MainInterface/MainInterface.js';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import RoomSelected from "./components/RoomSelected/RoomSelected.js";
import './StyleSheet/Main.scss'

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <div className="Main">
        <Router>
          <Switch>
            <Route path="/home">
              <MainInterface />
            </Route>
            <Route exact path="/">
              <MainInterface />
            </Route>
            <PrivateRoute path="/roomSelected/:bedTypes">
              <RoomSelected />
            </PrivateRoute>
            <Route path="/login">
              <LoginSignUp />
            </Route>
            <Route path="/bookingInfo">
              <BookingInfo/>
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </div>

    </userContext.Provider>
  );
}

export default App;
