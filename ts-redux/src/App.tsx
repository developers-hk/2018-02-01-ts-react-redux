import * as React from 'react';
import { connect } from 'react-redux';
import * as TicTacToeActions from './TicTacToe/actions';
import { RootState } from './store';
import './App.css';

interface SquareProps {
  value: TicTacToe.Player | null;
  onClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

interface AppProps {
  squares: (TicTacToe.Player | null)[];
  onClick: (player: TicTacToe.Player, position: TicTacToe.Position) => TicTacToeActions.MakeMoveAction;
}

class PureApp extends React.Component<AppProps> {
  renderSquare(i: TicTacToe.Position) {
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

const App = connect((state: RootState) => ({
  squares: state.tictactoe.squares,
}), (dispatch) => ({
  onClick: (player: TicTacToe.Player, position: TicTacToe.Position) => dispatch(TicTacToeActions.makeMove(player, position))
}))(PureApp);

export default App;
