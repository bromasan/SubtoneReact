import React, { Component } from "react";
import styled from 'styled-components';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import ReactLoading from 'react-loading';
import { Redirect } from "react-router-dom";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      playlist: '',
      artists: '',
      playlist_name: '',
      error: '',
      loading: false
    };

    this.onChange = this.onChange.bind(this);

  }

  componentDidMount(){
    axios.post('https://subtone.herokuapp.com/api/logged', {value: window.location.href})
    .then(res => this.setState({logged: res.data['logged']}));
  }

  onChange = e => {
    this.setState({ value: e.target.value });

  };

  handleSubmit = e => {
    this.setState({loading: true});
    axios.post('https://subtone.herokuapp.com/api/search', this.state)
    .then((res) => {this.setState({error: res.data['error'], loading: false, playlist: res.data['playlist'], artists: res.data['new_artists'], playlist_name: res.data['playlist_name']})})
    e.preventDefault();

  };

  render() {
    if ( this.state.loading) {
      return (
      <div className="containerMe">
        <h3>Please wait a second while we get your playlist!</h3>
        <ReactLoading type="bars" color='#ABABAB' height={300} width={169} className="loading-bar"/>
      </div>


      );
    }

    if(this.state.playlist){
      return <Redirect to={{
        pathname: '/Playlist',
        state: {
          playlist: this.state.playlist,
          artists: this.state.artists,
          playlist_name: this.state.playlist_name
          }
      }} />
    }

    return (
      <div className="containerMe">
        <h1>Pick one of your favorite artists</h1>
      <Form onSubmit={this.handleSubmit} style={{width:"30%", margin: "auto", paddingTop: "10px"}}>
        <FormGroup>
          <Input
            type="text"
            name="artist"
            onChange={this.onChange}
            value={this.state.value}
            placeholder="Favorite Artist Name"
          />
        </FormGroup>
        <Button color="secondary" size="lg">SEARCH</Button>
        <div>{this.state.error}</div>

      </Form>
    </div>

    );
  }
}

export default Search;
