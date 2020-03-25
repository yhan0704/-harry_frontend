import React, { Component } from 'react';

export default class CharacterCard extends Component{

    addToFavorites = (e) => {
       
      let user =  this.props.currentUser.characters.filter(char => char.id === parseInt(e.currentTarget.dataset.id,10))
        if(user.length === 0){
        let objectConfig = {
            method: 'POST',
            headers: {
               'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
             user_id: e.currentTarget.dataset.userId,
             character_id: e.currentTarget.dataset.id
            })
        }
            fetch('http://127.0.0.1:3000/favorite_characters', objectConfig)
            .then(res => res.json())
            .then(user => this.props.updateUsers(user))
        }else{
            window.alert("You already added this Wizard")
        }
    }
    
    deleteCharacter=(e)=>{
        // debugger
        let fav_character = this.props.fav_characters.find(char => char.character_id === parseInt(e.currentTarget.dataset.id, 10))
          
        let objectConfig = {
            method: 'DELETE',
            headers: {
               'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
             user_id: e.currentTarget.dataset.userId
            })
          }
            fetch(`http://127.0.0.1:3000/favorite_characters/${fav_character.id}`, objectConfig)
            .then(res => res.json())
            .then(user => this.props.updateUsers(user))
    }

    render() {
     
        return (
            <div className="ui cards" id="image">
                <span></span>
                <div id= 'cards'>
                <div className="card" >
                    <div className="image">
                    <img alt="pic" width={285} height={340} src={this.props.character.image} />
                    </div>
                    <div className="content">
                    <div className="header">{this.props.character.name}</div>
                    <div className="right floated">
                        Date Of Birth: {this.props.character.dateBirth}
                    </div>
                    <div className="description">
                        Actor: {this.props.character.actor}
                    </div>
                    </div>
                    <div className="extra content">
                    <div className="meta">
                        {
                            this.props.delete ? <button data-id={this.props.character.id} data-user-id={this.props.currentUser.id} onClick={this.deleteCharacter} >Delete</button>
                        : <button data-id={this.props.character.id} data-user-id={this.props.currentUser.id} onClick={this.addToFavorites}>Add to My Wizards</button>
                        }
                    </div>
                    </div>
                </div>
               </div>
            </div>
        );
    }
}