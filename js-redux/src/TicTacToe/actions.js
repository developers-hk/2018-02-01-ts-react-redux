export const NEW_GAME = 'NEW_GAME';
export const MAKE_MOVE = 'MAKE_MOVE';

export function newGame(first) {
  return {
    type: NEW_GAME,
    first: first
  }
}

export function makeMove(player, position) {
  return {
    type: MAKE_MOVE,
    player,
    position
  }
}