import React, { Component } from "react";
import styled from 'styled-components';
import { Redirect, Link } from "react-router-dom";



class Header extends Component {
  render() {
    return (
      <div className='navBar'>
        <Link to='/' className='header'>Subtone Selector</Link>
      </div>
    );
  }
}

export default Header;
