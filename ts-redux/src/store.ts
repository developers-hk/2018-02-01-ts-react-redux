import { reducer as TicTacToeReducer, State as TicTacToeState } from './TicTacToe/reducers';
import { createStore, combineReducers } from 'redux';

export interface RootState {
  tictactoe: TicTacToeState
}

const store = createStore<RootState>(combineReducers({
  tictactoe: TicTacToeReducer
}), window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']())

export { store };