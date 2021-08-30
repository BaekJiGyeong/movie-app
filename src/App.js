import React from 'react';
import PropTypes from 'prop-types';

class App extends React .Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }
  state = {
   count:0 
  };
  add = () => {
    console.log("add");
    this.setState(current=>({count:current.count + 1}));
  }
  minus = () => {
    console.log("minus");
    this.setState(current=>({count: current.count -1}));
  }
  componentDidMount(){
    console.log("commponent rendered");
  }
  componentDidUpdate(){
    console.log("component updated");
  }
  render () {
    console.log("I'm rendering");
    return (
    <div>
      <h1>I am a Class Component : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
