import React from 'react';
import ByNameContainer from './ByNameContainer'
import ByIdContainer from './ByIdContainer';
import Nav from '../Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ByZipContainer from './ByZipContainer';
import ByCordContainer from './ByCordContainer';


function MainRouter() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ByNameContainer} />
          <Route path="/id" component={ByIdContainer} />
          <Route path="/zip" exact component={ByZipContainer} />
          <Route path="/cord" exact component={ByCordContainer} />
        </Switch>

      </div>
    </Router>
  );
}

export default MainRouter;