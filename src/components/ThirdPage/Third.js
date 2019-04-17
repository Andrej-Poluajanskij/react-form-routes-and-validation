import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../routes/index'

export default class Third extends Component{
    render(){
        const {email2} = this.props.location.state   
        return(
            <div className="container-left">

                <h1>Successful registration email:</h1>
                <h1>{email2.email}</h1>

                <Link to={ROUTES.HOMEPAGE} >GO BACK </Link>
            </div>
   
        )
    }


}