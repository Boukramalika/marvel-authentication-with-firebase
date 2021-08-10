//npx i creat-react-app
import React from 'react';
//npm i --save react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../../App.css';
import Header from '../Header/Header'

import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/login';
import Signup from '../Signup/Signup';
import ErrorPage from '../ErrorPage/ErrorPage';
function App() {
  return (
    //remplacer la div principal par router
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;