import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";



import { createBrowserHistory } from "history";
import AdminLayout from "./deshbord/layouts/Admin/Admin";


import "./deshbord/assets/scss/black-dashboard-react.scss";
import "./deshbord/assets/demo/demo.css";
import "./deshbord/assets/css/nucleo-icons.css";
import './app.css'
import { useEffect } from "react";

class App extends React.Component{
  componentDidMount(){
    
  }
  render(){
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      
      <Route path="/home" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <RegisterPage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
  )
  }
}


export default App