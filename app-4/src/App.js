import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: '',
      pass: ''
    }
  }
  changeUser(val){
    this.setState({
      user: val
    })
    this.alertLog = this.alertLog.bind(this);
  }
  changePass(val) {
    this.setState({
      pass:val
    })
  }
  alertLog(){
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }
  
  render() {
    return (
      <div style={{'display':'flex', 'justify-content':'center'}}>
        <input type="text" name="" id="" onChange={e=>this.changeUser(e.target.value)}/>
        <input type="text" name="" id="" onChange={e => this.changePass(e.target.value)}/>
        <button onClick={this.alertLog}>Login</button>
      </div>
    )
  }
}

export default App;
