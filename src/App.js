// As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.

import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render() {
    return(
      <>
      <h1>Treasure Hunt Game</h1>
      <div className='board'>
        {this.state.board.map((value, index) => {
          return(
          <Square
            key={index}
            value={value}
          />
          )
        })}
      </div>
      </>
    )
  }
}



export default App
