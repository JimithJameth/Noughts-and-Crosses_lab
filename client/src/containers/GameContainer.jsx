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

  // after each move need to check array
  // game will end:
  // 1) array is full i.e. every value is either 'X' or 'O'
  // 2) wither three O  or X in a row (either vertical, horizontal, diagonal)


  // checkGameStatus() {
  //   const board = this.state.board;

  //   // board.forEach(function(square) {
  //   //   if (square === "X" || "O") {
  //   //     this.setState({board: ["", "", "", "", "", "", "", "", ""]})
  //   //   }
  //   // });
  //   console.log(this.state.board);
  // }

  switchPlayer() {
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
    console.log(this.state.board)
    // this.checkGameStatus();
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