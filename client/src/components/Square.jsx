import React from 'react';

class Square extends React.Component {

// rather than hardcoding 'X' we want to pass in the player whose turn it is -> this.props.player

  render() {
    return(
      <button className="square" onClick={() => this.props.setValue(this.props.index)}>
      {this.props.value}
      </button>
    );
  }
}

export default Square;