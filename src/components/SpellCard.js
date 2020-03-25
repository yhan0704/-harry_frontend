import React, { Component } from 'react';

export default class SpellCard extends Component{
    
    addToFavorites = (e) => {

        let spell =  this.props.currentUser.spells.filter(spell => spell.id === parseInt(e.currentTarget.dataset.id,10))

        if(spell.length === 0 ){

            window.alert("spell added!")

        let objectConfig = {
            method: 'POST',
            headers: {
               'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
             user_id: e.currentTarget.dataset.userId,
             spell_id: e.currentTarget.dataset.id
            })
        }
            fetch('http://127.0.0.1:3000/favorite_spells', objectConfig)
            .then(res => res.json())
            .then(user => this.props.updateUsers(user))
        }else{
            window.alert("You already added this spell")
        }
    }

        deleteSpell=(e)=>{

            let fav_spell = this.props.fav_spells.find(spell => spell.spell_id === parseInt(e.currentTarget.dataset.id, 10))
          
            let objectConfig = {
                method: 'DELETE',
                headers: {
                   'Content-Type':'application/json'
                }, 
                body: JSON.stringify({
                 user_id: e.currentTarget.dataset.userId
                })
              }
                fetch(`http://127.0.0.1:3000/favorite_spells/${fav_spell.id}`, objectConfig)
                .then(res => res.json())
                .then(user => this.props.updateUsers(user))
        }

    render() {

        let {name, category, effect} = this.props.spell
        return (
            <div>
                <table className="ui inverted puple table">
                <thead>
                    <tr>
                        <th align="left">Name</th>
                        <th align="left">Category</th>
                        <th align="left">Effect</th>
                        <th align="left">Favorite ? </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="left">{name}</td>
                        <td align="left">{category}</td>
                        <td align="left">{effect}</td>
                        <td>
                            {
                                this.props.delete ? <button data-id={this.props.spell.id} data-user-id={this.props.currentUser.id} onClick={this.deleteSpell}>Delete</button> :
                                <button data-id={this.props.spell.id} data-user-id={this.props.currentUser.id} onClick={this.addToFavorites}>Add to Favorite</button>
                            
                            }
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
                
            </div>
        );
    }
}