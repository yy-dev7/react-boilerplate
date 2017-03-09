import React from 'react'
import Hello from './components/Hello/Hello'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <div styleName="App">
      <div styleName="App-header">
        <img
          src={logo}
          styleName="App-logo shake-rotate"
          alt="logo"
        />
      </div>
      <Hello />
    </div>
  )
}

export default App
