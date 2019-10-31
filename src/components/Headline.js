import React, { Component } from 'react';
import './Headline.css';

class Headline extends Component {
  render() {
    return (
      
        <div className="Head">   
        <h1>{this.props.games}</h1>
        </div>
     
    );
  }
}

export default Headline;
