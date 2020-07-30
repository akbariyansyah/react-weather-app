import React from 'react';
import WeatherByName from '../WeatherByName'
import WeatherById from '../WeatherById'
import WeatherByZip from '../WeatherByZip'
import Card from '../Card'
import Nav from '../Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function Container() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={WeatherByName} />
          <Route path="/id" component={WeatherById} />
          <Route path="/zip" exact component={WeatherByZip} />
        </Switch>

      </div>
    </Router>
  );
}

export default Container;