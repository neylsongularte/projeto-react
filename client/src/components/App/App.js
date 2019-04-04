import React, { Component } from 'react';
// import logo from './assets/logo.svg';
// import './App.css';

class App extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <button type="button" className="btn btn-primary">Cursos</button>
                </div>

                <div className="col-sm">
                    One of three columns
                </div>

                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
    );
  }
}

export default App;
