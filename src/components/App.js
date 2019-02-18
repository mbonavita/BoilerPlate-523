import React, { Component } from "react";
import Menu from './Menu'

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div id="bod" >
                <img src="./src/logo.svg" id = 'mainLogo'></img>
                <Menu/>
            </div>
             
        );
    }
}


export default App;