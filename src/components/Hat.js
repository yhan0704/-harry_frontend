import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const USER = process.env.REACT_APP_USER_URL;

export default class Hat extends Component{

    postUser(house){
   
        let objectConfig = {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
          name: this.props.userName,
          house: house
        })
    }
        fetch(USER, objectConfig)
        .then(res => res.json())
        .then(user => this.props.setCurrentUser(user))
    }
   
    sortHouse = () => {

        let houses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw']
           return houses[Math.floor(Math.random() * houses.length)]
      
    }

    render() {
     let house = this.sortHouse()
        return (
            <div className="hatContainer">
                <div className="hatImagePosition" id="hatFrame">
                    <img alt='sorting hat' height={320} width={488} id="hatImage" src='https://media1.tenor.com/images/426045f4dc47e5bfaaa2b095ed179895/tenor.gif?itemid=13986854'></img>
                </div>
                <div className="hatFontButton">
                    <h1>Your destiny is: {house} </h1>
                    <Link to='Main' value ="link" className="clickContinue" onClick={(event) => {this.postUser(house)}}
                        >Continue your magical journey!</Link>
                </div>
            </div>
        )
        
    }

}