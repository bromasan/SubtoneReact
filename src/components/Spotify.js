import React, { Component } from "react";
import styled from 'styled-components';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  background: rgb(179,252,194);
  background: linear-gradient(180deg, rgba(179,252,194,1) 0%, rgba(202,255,213,1) 59%, rgba(212,254,221,1) 100%);
  margin: 1% auto;
  border-radius:25px;
  width: 50%;
  height: 100%;
  min-height: 200px;
  text-align: center;
  box-shadow: 0px 2px 5px #A1FFB4;
  padding: 15px;
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', redirect: '', error: ''};

    this.onChange = this.onChange.bind(this);

  }

  onChange = e => {
    this.setState({ value: e.target.value });

  };

  handleSubmit = e => {
    axios.post('https://subtone.herokuapp.com/api/spot-login', this.state)
    .then((res) => {this.setState({redirect: res.data['response'], error: res.data['error']})})
    .then(res => {
      if(this.state.redirect !== 'logged'){
        window.open(this.state.redirect, '_self').focus();
      }
    });

    e.preventDefault();

  };

  render() {

    if(this.state.redirect === 'logged'){
      return(
        <Redirect to='/Search'/>
      )
    }

    return (
      <div className="containerMe">
        <h1> Please enter your Spotify username</h1>
      <Form onSubmit={this.handleSubmit} style={{width:"30%", margin: "auto", paddingTop: "10px"}}>
        <FormGroup>

          <Input
            name="username"
            onChange={this.onChange}
            value={this.state.value}
            placeholder="Spotify Username"
          />
        </FormGroup>

        <Button color="secondary" size="lg">CONNECT</Button>
        <div>{this.state.error}</div>

      </Form>
    </div>

    );
  }
}

export default Login;
