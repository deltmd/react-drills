import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ],
      filter: ''
    }
  }
  handleUpdate(val){
    this.setState({
      filter: val
    })
  }

  render() {
    let foodsToDisplay = this.state.foods.map((e, i) => {
      if (e.indexOf(this.state.filter)>-1) {
        return (<h2 key={i}>{e}</h2>)
      }
    })
    return (
      <div className="App">
        <input type="text" name="" id="" onChange={e=>this.handleUpdate(e.target.value)}/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
