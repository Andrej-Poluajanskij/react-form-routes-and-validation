import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../routes/index'


export default class Second extends Component{
    constructor(){
        super()
        this.state = {email2: ''}
    }
    componentDidMount(){
        this.setState({
            email2: this.props.location.state
        })
    }
    render(){
        const {email} = this.props.location.state
        return(
            <div className="container-left">

                <h1>Verification email was sent to:</h1>
                <h1>{email}</h1>
                <p>Follow the link in a message to proceed with registration</p>

                <Link to={{
                    pathname: ROUTES.THIRDPAGE,
                    state: {email2: this.state.email2}
                            }}>CLOSE THIS WINDOW</Link>
               
            </div>
        )
    }
}