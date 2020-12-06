import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
      {name:'Max', age:24},
      {name:'mohan',age:28},
      {name:'venky',age:21}
    ]
  }




switchNameHandler=()=>{
//  console.log(Math.random()*10)//
// DON'T DO THIS- this.state.persons[0].name='visweswara rao';//
this.setState({
  persons: [
    {name:'maximum',age:24},
    {name:'mohan',age:28},
    {name:'venky',age:22}
  ]
})
}

secondHandler=()=>{
  this.setState({
    persons:[
      {name:'maxium', age:24},
      {name:'raviteja',age:28},
      {name:'venky',age:21}
    ]
  })
}


  render() {
    return (
      <div className="App">
        <h1>venkatesh yedureswarapu</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="venkatesh" age="24"/>
        <button className="firstButton" onClick={this.switchNameHandler}>Click Me</button>
        <button onClick={this.secondHandler}>second</button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name="vijay" age="22">venaktesh vijay venkatesh</Person>

      </div>
      
    );
  }
}

export default App;
