import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Spotify from "./components/Spotify";
import Playlist from "./components/Playlist";
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';



class App extends Component {



  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spotify" component={Spotify} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/playlist" component={Playlist} />
        </Switch>
      </BrowserRouter>

    );
  }

}

export default App;
