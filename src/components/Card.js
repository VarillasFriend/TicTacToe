import './Card.css'
import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locked: false
    }

    this.changeMarker = this.changeMarker.bind(this);
  }

  changeMarker() {
    if (this.state.locked) {
      return;
    }

    this.setState({
      locked: true
    })

    this.props.updateBoard(this.props.index);
  }

  render() {
    return (
      <div className='card' onClick={this.changeMarker}>
        {this.props.board[this.props.index]}
      </div>
    );
  }
}

export default Card;
