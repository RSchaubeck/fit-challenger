import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import {Route} from "react-router-dom";
import MainPage from './main/main_page';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SendChallFormContainer from "./challenge/send_challenge_form_container";

const App = () => (
  <div className="entire-page">
    <NavBarContainer />
    <Route exact path = "/new_challenge" component = {SendChallFormContainer}></Route>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </Switch>
  </div>
);

export default App;