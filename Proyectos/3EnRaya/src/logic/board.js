import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (BoardToCheck) => {
  //revisar todas las combinaciones ganadoras para X u O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      BoardToCheck[a] &&
      BoardToCheck[a] === BoardToCheck[b] &&
      BoardToCheck[a] === BoardToCheck[c]
    ) {
      return BoardToCheck[a]; //  X u O
    }
  }
  //no hay ganador
  return null;
};
export const checkEndGameFrom = (newBoard) => {
  //empate -> no hay mas espacios vacios en el tablero
  return newBoard.every((square) => square !== null);
};

export const saveBoard = (newBoard, newTurn) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);
};

export const cleanBoard = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
