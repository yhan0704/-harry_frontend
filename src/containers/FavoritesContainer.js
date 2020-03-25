import React, { Component, Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'
import SpellCard from '../components/SpellCard'


const FAVORITE_CHARACTER_URL = process.env.REACT_APP_FAVORITE_CHARACTER_URL;
const FAVORITE_SPELL = process.env.REACT_APP_FAVORITE_SPELL_URL;

export default class FavoritesContainer extends Component{

  constructor(){
    super()
    this.state = {
      fav_characters: null,
      fav_spells: null
      }
    }

    componentDidMount(){
        fetch(FAVORITE_CHARACTER_URL)
        .then(res => res.json())
        .then(fav_characters => {
            this.setState({
                fav_characters
            })
        })

        fetch(FAVORITE_SPELL)
        .then(res => res.json())
        .then(fav_spells => {
            this.setState({
                fav_spells
            })
        })

      }

    render(){
        return(
            <Fragment>
                
            <div className="characterCardBackground">
            <div className="ui category search">
            <div className="results"></div>
            </div>
            <h1 className="favoriteChaSpell">Favorite Character(s)</h1>
            <div className="ui two column centered grid">

            { 
                this.props.currentUser.characters.map(char => <CharacterCard fav_characters={this.state.fav_characters} updateUsers={this.props.updateUsers} currentUser={this.props.currentUser} delete={"delete"} character={char} key={char.id}/>)                
            }
          
            </div>
            </div>
            <h1 className="favoriteChaSpell">Favorite spell(s)</h1>
            <div>

            {              
                this.props.currentUser.spells.map(spell => <SpellCard fav_spells={this.state.fav_spells} updateUsers={this.props.updateUsers} currentUser={this.props.currentUser} spell={spell} key={spell.id} delete={"delete"}/>) 
            }
            </div>

        </Fragment>
        )
    }
}
