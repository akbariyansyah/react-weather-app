import React from 'react';
import ByNameContainer from './ByNameContainer'
import WeatherById from '../WeatherById'
import WeatherByZip from '../WeatherByZip'

import Nav from '../Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ByIdContainer from './ByIdContainer';


function MainRouter() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ByNameContainer} />
          <Route path="/id" component={ByIdContainer} />
          <Route path="/zip" exact component={WeatherByZip} />
        </Switch>

      </div>
    </Router>
  );
}

export default MainRouter;