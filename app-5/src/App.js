import React, { Component } from 'react';
import logo from './logo.svg';
import Image from './Image.js'

class App extends Component {
  render() {
    return (
      <div>
        <Image img = {logo}/>
      </div>
    );
  }
}

export default App;
