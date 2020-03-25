import React, { Component } from 'react';

export default class Login extends Component{

    constructor(){
        super()
        this.state = {
            checked: null
        }
    }
    
    clickBox = () => {

    if(this.state.checked){
        this.setState({
            checked: null
        })
    }else{
        this.setState({
            checked: true
       })
     }
    }

    render() {
        return (
            <div className="logInContainer">
            <div className="ui inverted segment" id="logInForm">
            <div className="ui inverted form">
              <div className="one field">
                <div className="field">
                  <label id='firstName'>Name</label>
                  <input placeholder="Name" type="text" onChange={this.props.setLogInUser}/>
                </div>
             
              </div>
              <div className="inline field">
                <div className="ui checkbox"  id='checkBox' onClick={this.clickBox}>
                    {
                        !this.state.checked ? <input type="checkbox" tabIndex="0" className="hidden" defaultChecked/>:
                        <input type="checkbox" tabIndex="0" className="hidden" />
                    }
       
                  <label id="solemnly">I solemnly swear <p></p><p></p>I'm up to no good.</label>
                </div>
              </div>
              <div className="ui submit button" id="subButton" onClick={this.props.setCurrentUser}>Log In</div>
              <a href="/"><div className="ui submit button" >Back to Welcom page</div></a>

            </div>
          </div>
        </div>        
        );
    }
}