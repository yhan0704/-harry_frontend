import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component{
    render() {
        return (

            <div className="formContainer" id="signupFrame">
            <div className="ui inverted segment" >
            <div className="ui inverted form">
              <div className="one field">
                <div className="field">
                  <label id='firstName'>Sign Up</label>
                  <input placeholder="Name" type="text" onChange={this.props.setLogInUser}/>
                </div>
              </div>
              <div className="inline field">
                <div className="ui checkbox"  id='checkBox' onClick={this.clickBox}>
                    
                    <input type="checkbox" tabIndex="0" className="hidden"  defaultChecked/>:
                
                  <label id="muggle"> I'm not a muggle.</label>
                </div>
              </div>
              <Link 
                to ={{pathname:'/hat',}}
                className="ui button"
                type="submit"
                onClick={this.props.signUp}
                >Sign up   
              </Link>
            <a href="/"><div className="ui submit button" >Back to Welcom page</div></a>
            </div>
          </div>
          </div>
        );
    }
}