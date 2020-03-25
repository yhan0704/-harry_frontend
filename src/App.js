import React from 'react';
import './App.css';
import './containers/app.scss';
import Main from './components/Main'
import { Switch, Route, Redirect } from 'react-router-dom';
import CharacterContainer from './containers/characterContainer';
import SpellsContainer from './containers/spellsContainer';
import Hat from './components/Hat'
import Welcome from './components/Welcome'
import Login from './components/Login'
import SignUp from './components/SignUp'
import FavoritesContainer from './containers/FavoritesContainer';


class App extends React.Component{

  constructor(){
    super()
    this.state={
      characters:[],
      spells:[],
      currentUser: null,
      users:[],
      logInUser: null,
      validName: null,
    }

  }

  setCurrentUser = (e) =>{
  
    e.preventDefault()
  
    let findUser = this.state.users.find(user => user.name === this.state.logInUser)

    if(findUser !== undefined){
      this.setState({
        currentUser: findUser
      })
    }else{
      window.alert("Wrong username")
    }
  }

  setCurrentUserSignUp = (user) =>{
 
    this.setState({

      currentUser: user

    })
  }

  setLogInUser = (e) => {
    
    this.setState({
      logInUser: e.currentTarget.value

    })
  }

  signUp = () => {

    if(this.state.users.find(user => user.name === this.state.logInUser) === undefined){

      this.setState({
        validName:true
      })
      }else{
        window.alert('username already taken')
      }
   
  }

  updateUsers = (user) => {
    this.setState({
      currentUser: user
    })
  }
  

  componentDidMount(){

      fetch("http://localhost:3000/characters")
      .then(res=>res.json())
      .then(characters=> {
        this.setState({
          characters
        })
      })

      fetch("http://localhost:3000/spells")
      .then(res => res.json())
      .then(spells=>{
        this.setState({
          spells
        })
      })

      fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users=>{
        this.setState({
          users
        })
      })

  }

  render(){
  
  return (
    <Switch>
      <Route exact path='/'           component={Welcome}/>

      <Route exact path='/hat'        render={()=> this.state.validName   ? <Hat setCurrentUser={this.setCurrentUserSignUp} userName={this.state.logInUser}/>  : <Redirect to ='signup'/>}/>
      <Route exact path='/favorites'  render={()=> this.state.currentUser ? <FavoritesContainer updateUsers={this.updateUsers} characters={this.state.characters} currentUser={this.state.currentUser}/> : <Redirect to ="/login"/>}/>
      <Route exact path='/main'       render={()=> this.state.currentUser ? <Main userInfo={this.state.currentUser}/> : <Redirect to ="/login"/>}/> 
      <Route exact path='/login'      render={()=> this.state.currentUser ? <Redirect to ='/main'/> : <Login setCurrentUser={this.setCurrentUser} setLogInUser={this.setLogInUser}/>} /> 
      <Route exact path='/signup'     render={()=> this.state.currentUser ? <Redirect to ='/main'/> : <SignUp signUp={this.signUp} setLogInUser={this.setLogInUser} user={this.state.logInUser}/> } />
      <Route exact path='/characters' render={()=> this.state.currentUser ? <CharacterContainer updateUsers={this.updateUsers} currentUser={this.state.currentUser} characters={this.state.characters} /> :  <Redirect to ="/login"/>} /> 
      <Route exact path='/spells'     render={()=> this.state.currentUser ? <SpellsContainer updateUsers={this.updateUsers} currentUser={this.state.currentUser} spells={this.state.spells} /> : <Redirect to ="/login"/>} />
    </Switch>
   
  )};
}

export default App;
