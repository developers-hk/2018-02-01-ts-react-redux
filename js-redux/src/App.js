import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TicTacToeActions from './TicTacToe/actions';
import logo from './logo.svg';
import './App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class PureApp extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick('X', i)}
      />
    );
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

const App = connect((state) => ({
  squares: state.tictactoe.squares,
}), (dispatch) => ({
  onClick: (player, position) => dispatch(TicTacToeActions.makeMove(player, position))
}))(PureApp);

export default App;