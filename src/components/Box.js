import React, { Component } from 'react';
import './Box.css';
import {lemon,watermelon,tomato,carrot} from './Images/Icons';

class Box extends Component {
   
  render() {
       const value = this.props.label-1;
    let images = [lemon,watermelon,tomato,carrot];
    return (
      
        <div className="Boxone">
        
        <img src={images[value]} alt="fruit" />
        
        
        
        </div>
     
    );
  }
}

export default Box;
