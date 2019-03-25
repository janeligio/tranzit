import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Favorites from './components/Favorites';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      favorites: ["yo"]
    };
  }

  handleLocation = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    this.setState({
      location: e.currentTarget.value
    });
    console.log(this.state.location);
  }

  favorite = (e) => {
    e.preventDefault();
    let newFavs = this.state.favorites;
    newFavs.push(this.state.location);
    this.setState({ favorites: newFavs});
    console.log(this.state.favorites);
  }




  render() {
    return (
      <div className="App">
        <Navbar />
        <UserInfo location={this.state.location} handleLocation={(e) => this.handleLocation(e)} 
        favorite={(e) => this.favorite(e) } />
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
