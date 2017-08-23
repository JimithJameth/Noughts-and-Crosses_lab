import React from 'react'

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board:[],
      selectedSquare:null
    };
  }
  render() {
    return(
    <div>
    <h1>Noughts and Crosses</h1>
    </div>

    );
  }
}


export default GameContainer;