import { Dispatch } from "redux";
import axios from 'axios';

export function submitMoves(moves: TicTacToe.Move[]) {
  return (dispatch: Dispatch<any>) => {
    let game:TicTacToe.Game = {
      moves: moves
    };
  
    axios
      .post<TicTacToe.Game>('/moves', {
        data: game
      })
      .then((res) => {

      })
      .catch((err) => {

      });
  };
}

export function fetchGames(games: TicTacToe.Games) {
  return (dispatch: Dispatch<any>) => {
    axios
      .get<TicTacToe.Games>('/games')
      .then((res) => {

      })
      .catch((errr) => {

      });
  };
}
