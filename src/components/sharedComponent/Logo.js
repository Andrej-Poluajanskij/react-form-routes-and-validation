import React, { Component } from 'react';
import logo from './logo.svg';
import './Logo.scss'


export default class Logo extends Component{
    render(){
        return(
            <div className="container-right">
            <img src={logo} className="App-logo" alt="logo" />
              
            </div>   
   
        )
    }
}