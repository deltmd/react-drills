import React, { Component } from 'react';
import Todo from './Todo.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoStr: '',
      todoArr: []
    }
    this.todoStrUpdater = this.todoStrUpdater.bind(this);
    this.todoArrUpdater = this.todoArrUpdater.bind(this);
  }

  todoStrUpdater(val){
    this.setState({
      todoStr: val
    })
  }
  todoArrUpdater(){
    var newArr = this.state.todoArr;
    newArr.unshift(this.state.todoStr);
    this.setState({
      todoArr: newArr
    })
  }
  
  render() {
    return (
      <div >
       <h1>My to-do list:</h1>
       <input type="text" onChange={e=>this.todoStrUpdater(e.target.value)}/>
       <button onClick={this.todoArrUpdater}>Add</button>
       <Todo list={this.state.todoArr}/>
      </div>
    );
  }
}

export default App;
