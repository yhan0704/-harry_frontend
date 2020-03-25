import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import sound from './harry_song.mp3'


export default class Welcome extends Component{

    constructor(){
        super()
        this.state ={
            audio: true
        }
    }

    playAudio = () => {

        if(!this.state.audio){
        this.setState({
            audio: true
        })
    }else{
        this.setState({
            audio: null
        })
    }
    }

    render() {
        return (
            <div className="backgroundWelcome">                
                <audio id="player" autoPlay controls> <source ref='audio_tag' src={sound} type="audio/mp3"/></audio>
                
                <h1 className="welcomePhase" style={{textAlign:"center"}}>My Horcrux</h1>
                <div className="welcomeButtonContainer" style={{marginTop:"120px"}} > 
                <button className="btn btn-secondary welcome"><NavLink to='/signup' exact><h1>Sign Up!</h1></NavLink></button>
                <button className="btn btn-secondary welcome"><NavLink to='/login' exact><h1>Log In!</h1></NavLink></button>
                </div>
                
                <div className="welcomeAudioButton">
                </div>
            </div>
        
           

      
        );
    }
    
}