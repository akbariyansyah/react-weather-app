import React from 'react';
import ByNameContainer from '../container/ByNameContainer'
import ByIdContainer from '../container/ByIdContainer'
import ByCordContainer from '../container/ByCordContainer'
import ByZipContainer from '../container/ByZipContainer'

import Nav from '../common/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


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