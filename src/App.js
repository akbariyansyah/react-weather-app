import React from 'react';
import './App.css';
import MainRouter from './components/router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-lg-12">
          <div className="main-content">
            <MainRouter />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
