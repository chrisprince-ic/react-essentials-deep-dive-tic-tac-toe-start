import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ players, onPlayerSwitch, setWinner }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function checkWinner(board, currentSymbol) {
    // Check rows, columns, and diagonals
    const winPatterns = [
      // Rows
      ...board,
      // Columns
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      // Diagonals
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];
    return winPatterns.some((line) =>
      line.every((cell) => cell === currentSymbol)
    );
  }

  function handleSelectSquare(rowIndex, colIndex) {
    const currentPlayer = players.find((player) => player.active);
    if (gameBoard[rowIndex][colIndex] || !currentPlayer) return;

    setGameBoard((prevGameBoard) => {
      const updatedBoard = prevGameBoard.map((row) => [...row]);
      updatedBoard[rowIndex][colIndex] = currentPlayer.symbol;

      // Check for a winner
      if (checkWinner(updatedBoard, currentPlayer.symbol)) {
        setWinner(currentPlayer.name);
      }
      return updatedBoard;
    });

    onPlayerSwitch(rowIndex, colIndex, currentPlayer.symbol);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
