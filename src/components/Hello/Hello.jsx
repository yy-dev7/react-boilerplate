import React from 'react'
import './Hello.scss'

export default class App extends React.Component {
  state = {
    msg: 'Hello World!',
    info: 'Hope you can enjoy your time with React.',
  };

  render() {
    return (
      <div id="Hello">
        <div styleName="msg">{this.state.msg}</div>
        <p styleName="info">{this.state.info}</p>
      </div>
    )
  }
}
