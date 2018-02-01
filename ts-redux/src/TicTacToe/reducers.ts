import * as TicTacToeActions from './actions'

export interface State {
  moves: TicTacToe.Move[],
  squares: (TicTacToe.Player | null)[]
};

export function reducer(state: State, action: TicTacToeActions.Actions) {
  if (typeof state === 'undefined') {
    return {
      moves: [],
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }
  switch (action.type) {
    case TicTacToeActions.NEW_GAME:
      return Object.assign({}, state, {
        moves: [],
        squares: [null, null, null, null, null, null, null, null, null]
      });
    case TicTacToeActions.MAKE_MOVE:
      let squares = state.squares.slice();
      squares[action.position] = action.player;
      
      return Object.assign({}, state, {
        moves: state.moves.concat([
          {
            player: action.player,
            position: action.position
          }
        ]),
        squares: squares
      });
    default:
      return state;
  }
};