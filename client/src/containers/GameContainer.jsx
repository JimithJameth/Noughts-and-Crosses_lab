import React from 'react'
import Board from '../components/Board.jsx'
import Square from '../components/Square.jsx'

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "",
              "", "", "", 
              "", "", ""]
    };
    this.setValue = this.setValue.bind(this)
  }

  setValue(player, position) {
    const newBoard = [...this.state.board]
    newBoard[position] = player
    this.setState({board: newBoard})
  }

  render() {
    return(
      <div>
      <h1>Noughts and Crosses</h1>
      <Board board = {this.state.board} setValue = {this.setValue} />
      </div>

      );
  }
}


export default GameContainer;