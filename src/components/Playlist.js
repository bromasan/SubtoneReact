import React, { Component } from "react";
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const ArtistContainer = styled.div`

  display: flex;
  width:100%;
  margin: 0 auto;
  justify-content: center;
  padding: .5em;

`

const ArtistImage = styled.img`
  width:5em;
  height: 5em;
  border-radius:50%;
  border: 1px solid #212529;
  padding:.25em;
  margin: auto;
  transition: width .5s, height .5s;

  &:hover {
    border: 2px solid #4FE86E;
    width:7em;
    height:7em;
  }
`

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.location.state.playlist,
      artists: this.props.location.state.artists,
      playlist_name: this.props.location.state.playlist_name,
      loading: true,
      name:''
    };

  }

  componentDidMount() {
    this.setState({...this.state, loading: false})
  }

  render() {
    let {playlist, playlist_name, artists, name} = this.state;
    if ( this.state.loading) {
      return (
        <div className="loading">
          <ReactLoading type="bars" color='#D1D1D1' height={300} width={169} className="loading-bar"/>
        </div>

      );
    }


    return (
      <div className="containerMe">
        <h1>Here is your new playlist</h1>
        <a href={playlist} style={{textDecoration:"underline", color:"inherit", paddingBottom: "30px"}}><h4>{playlist_name}</h4></a>
        <h3 style={{padding: "10px"}}>Here are your artists:</h3>
        <ArtistContainer>

          <a href={artists[0][2]} onMouseEnter={() => this.setState({name: artists[0][0]})} onMouseLeave={() => this.setState({name: ''})}><ArtistImage src={artists[0][1]} alt=""/></a>
          <a href={artists[1][2]} onMouseEnter={() => this.setState({name: artists[1][0]})} onMouseLeave={() => this.setState({name: ''})}><ArtistImage src={artists[1][1]} alt=""/></a>
          <a href={artists[2][2]} onMouseEnter={() => this.setState({name: artists[2][0]})} onMouseLeave={() => this.setState({name: ''})}><ArtistImage src={artists[2][1]} alt=""/></a>
          <a href={artists[3][2]} onMouseEnter={() => this.setState({name: artists[3][0]})} onMouseLeave={() => this.setState({name: ''})}><ArtistImage src={artists[3][1]} alt=""/></a>
          <a href={artists[4][2]} onMouseEnter={() => this.setState({name: artists[4][0]})} onMouseLeave={() => this.setState({name: ''})}><ArtistImage src={artists[4][1]} alt=""/></a>
        </ArtistContainer>

          <h4>{name}</h4>


      </div>
    );
  }
}

export default Playlist;
