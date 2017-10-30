import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }
  handleChange(str){
    this.setState({
      message: str
    })
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
