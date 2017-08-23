import React from 'react';

class Square extends React.Component {

  render() {
    return(
      <button className="square" onClick={() => this.props.setValue(this.props.index)}>
      {this.props.value}
      </button>
    );
  }
}

export default Square;