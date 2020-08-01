import React from 'react';
import './App.css';
import MainRouter from './components/router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <MainRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
