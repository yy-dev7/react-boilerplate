import React from 'react'
import { Hello, Logo } from 'components'
import './App.css'

function App() {
  return (
    <div styleName="App">
      <div styleName="App-header">
        <Logo />
      </div>
      <Hello />
    </div>
  )
}

export default App
