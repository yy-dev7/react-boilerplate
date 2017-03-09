import React, { Component } from 'react'
import logo from 'assets/logo.svg'
import './Logo.css'

export class Logo extends Component {
  state = {

  };

  render() {
    return (
      <img
        styleName="App-logo shake-rotate"
        src={logo}
        alt="logo"
      />
    )
  }
}

export default Logo
