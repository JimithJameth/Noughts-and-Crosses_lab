import React from 'react'
import Board from '../components/Board.jsx'
import Square from '../components/Square.jsx'

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switch: "X"
    };
  }
  render() {
    return(
    <div>
    <h1>Noughts and Crosses</h1>
    <Board />
    </div>

    );
  }
}


export default GameContainer;