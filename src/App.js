import React, { Component } from 'react';
import './App.css';
import Controller from './Controller.js'

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

class App extends Component {
  render() {
    return (
	    <div className="App">
	    <Header title="Bouncing Balls"/>
            <Controller />
	    </div>
    );
  }
}

export default App;
