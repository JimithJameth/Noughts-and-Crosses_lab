import React from 'react'
import Board from '../components/Board.jsx'
import Square from '../components/Square.jsx'

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "",
              "", "", "", 
              "", "", ""],
      player: 'X'
    };
    this.setValue = this.setValue.bind(this)
  }

  // player needs to be either 'X' or 'O'
  // needs to take turns
  // needs to start with 'X'

  switchPlayer() {
    // console.log(this.state.player)
    if (this.state.player === 'X') {
    this.setState({player: 'O'})
    }
    else
    this.setState({player: 'X'})
  }

  setValue(position) {
    const newBoard = [...this.state.board]
    newBoard[position] = this.state.player
    this.setState({board: newBoard});
    this.switchPlayer();
  }

  render() {
    return(
      <div>
      <h1>Noughts and Crosses</h1>
      <Board board = {this.state.board} setValue = {this.setValue}/>
      </div>

      );
  }
}


export default GameContainer;