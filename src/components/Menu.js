import React, { Component } from "react";

import '../styles/App.css';

class Menu extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div id='nav'>
                <button id='logInButton'>Log In</button>
                <div id="navItems">
                    <button className='navItem'>About Mark</button>
                    <button className='navItem'>Research Publications</button>
                    <button className='navItem'>Sponsors</button>
                </div>
            </div>        
        );
    }
}

export default Menu;