import React from 'react';
import ByNameContainer from './ByNameContainer'
import ByIdContainer from './ByIdContainer';
import Nav from '../Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ByZipContainer from './ByZipContainer';


function MainRouter() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ByNameContainer} />
          <Route path="/id" component={ByIdContainer} />
          <Route path="/zip" exact component={ByZipContainer} />
        </Switch>

      </div>
    </Router>
  );
}

export default MainRouter;