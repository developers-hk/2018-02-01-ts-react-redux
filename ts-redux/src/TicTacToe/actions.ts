export const NEW_GAME = 'NEW_GAME';
export type NEW_GAME = typeof NEW_GAME;

export interface NewGameAction {
  type: NEW_GAME;
  first: TicTacToe.Player;
}

export const MAKE_MOVE = 'MAKE_MOVE';
export type MAKE_MOVE = typeof MAKE_MOVE;

export interface MakeMoveAction {
  type: MAKE_MOVE;
  player: TicTacToe.Player;
  position: TicTacToe.Position;
}

export type Actions = NewGameAction | MakeMoveAction;

export function newGame(first: TicTacToe.Player) {
  return {
    type: NEW_GAME,
    first: first
  }
}

export function makeMove(player: TicTacToe.Player, position: TicTacToe.Position) {
  return {
    type: MAKE_MOVE,
    player,
    position
  }
}