import React, { Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'


class CharacterContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      search: "",
      fav_characters:null,
      fav_spells:null
    }
  }

  searchedCharacter=()=>{

    return this.props.characters.filter(character => character.name.toLowerCase().includes(this.state.search))

  }

  searchCharacter=(e)=>{

    this.setState({
      search : e.target.value
    })

  }


  render(){
  
      return(
        <Fragment>
         
        <div className="characterCardBackground">
          <div className="ui category search">
          <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..." onChange={this.searchCharacter}/>
              <i className="search icon"></i>
          </div>
          <div className="results"></div>
          </div>
          <div className="ui two column centered grid">

            {
            this.searchedCharacter().map(character => <CharacterCard updateUsers={this.props.updateUsers} currentUser={this.props.currentUser} key={character.id} character={character}/>)
            }
            
          </div>
        </div>
        </Fragment>
        )
  }
}

export default CharacterContainer
