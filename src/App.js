import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './components/Headline';
import Box from './components/Box';
import Button from './components/Button';


class App extends Component {
    
  getValues () {
    var values =[];
    for (var i=0; i<3; i++) {
        var num = Math.floor(Math.random()*4)+1;
        values.push(num);




    }
    return values;
    }
    
  render() {
      let values = this.getValues();
    return (
      <div className="App">
        <Headline games = "Slot Machines"></Headline>
        <div className="BoxRow">
        <Box label ={values[0]}></Box>
        <Box label ={values[1]}></Box>
        <Box label ={values[2]}></Box>
         </div>
        
        <h1>{values[0]===values[1]& values[1]===values[2]?"Congratulations, you are still a loser" : "Sorry, you are a loser"}</h1>
        <Button />
        </div>
    )
  }
}

export default App;
