import React, { Component } from "react";
import styled from 'styled-components';
import { Redirect, Link } from "react-router-dom";
import { Button, Jumbotron } from 'reactstrap';


class Home extends Component {


  render() {
    return (
      <div className="homeDiv">
        <div className="intro">
          <h1 className="display-6">Welcome to Subtone Selector</h1>
          <p className="lead">Our goal here is to introduce you to newer or relatively unknown artists based on artists that you already like!</p>

        </div>
        <div className="containerMe">
          <h2 style={{paddingBottom: "20px"}}>Log in to get started:</h2>
          <Button color="secondary" size="lg">
            <Link to='/spotify' style={{textDecoration: "none", color: "inherit"}}>START</Link>
          </Button>
        </div>
      </div>

    );
  }
}

export default Home;
