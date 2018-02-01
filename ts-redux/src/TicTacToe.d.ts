declare module TicTacToe {
  export type Games = Game[];

  export interface Game {
    moves: Move[];
    createdAt?: number;
  }

  export type Player = 'X' | 'O';
  export type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  export interface Move {
    player: Player;
    position: Position;
  }
}