import React, { Component } from 'react';
import { Redirect  } from "react-router-dom";
import './HomePage.scss';

import * as ROUTES from '../../routes/index';

export default class HomePage extends Component{
  constructor(){
    super()
    this.state = {inputValue: '', field: {}, errors: {}, render: false};
 
  }
  
  setValue(e){
    this.setState({
      inputValue: e.target.value
    })
    let field = this.state.field;
    field[e.target.name] = e.target.value;
    this.setState({
      field
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let field = {};

      field["emailid"] = "";
      
      this.setState({field:field});
     
    }
  }

  validateForm() {

    let field = this.state.field;
    let errors = {};
    let formIsValid = true;
    this.setState({render:true})

    if (!field["emailid"]) {

      formIsValid = false;
      this.setState({render:false})
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof field["emailid"] !== "undefined") {
      
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(field["emailid"])) {

        formIsValid = false;
        this.setState({render:false})
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render(){
    if(this.state.render === true){
      return <Redirect  to={{
      pathname: ROUTES.SECONDPAGE,
      state: { email: this.state.inputValue}
            }} />
          }
    return(
      <div className="container-left" ref={(c) => this.modalWindow = c }>
      
            <h1>Welcome message</h1>
            <p>Note that the service is only available to legal entities</p>
            <p>Enter your email to proceed</p>
            <p>Your email will be your user name in internet bank</p>
            <form method="post"  name="userRegistrationForm" >

              <input  placeholder="INFO@COMAPNY.COM" type="text" name="emailid"
                      value={this.state.field.emailid}
                      onChange={this.setValue.bind(this)}/><br/>
              <div className="errorMsg">{this.state.errors.emailid}</div>

              <button type="submit" className="button"
                      onClick= {this.submitForm.bind(this)}>START</button> 
              
            </form>          
      </div>
        )
    }
}