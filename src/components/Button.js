import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
 
    refresh(){
        window.location.reload();
    }
    
    render() {
    return (
      
        <div className="Button-div">
        
        <button className="ButtonPlay" onClick={this.refresh}><h1>PLAY AGAIN</h1></button>
        
        
       
        
        
        
        </div>
     
    );
  }
}


export default Button;
