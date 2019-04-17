import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import HomePage from './components/HomePage/HomePage';
import Second from './components/SecondPage/Second'
import Third from './components/ThirdPage/Third'

import Logo from './components/sharedComponent/Logo'

import * as ROUTES from './routes'

class App extends Component {

  render() {

    return (
      <div className="main-container" >
        <Router >
          
            <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />
            <Route exact path={ROUTES.SECONDPAGE} component={Second} />
            <Route path={ROUTES.THIRDPAGE} component={Third} />
            <Logo />
    
        </Router>
      </div>
    );
  }
}

export default App;
