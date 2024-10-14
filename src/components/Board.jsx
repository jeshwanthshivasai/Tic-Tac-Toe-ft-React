import React, { useState } from 'react';
import Square from './Square';

function Board({ player }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(player);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    const newWinner = checkWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (!squares.includes(null)) {
      return "It's a Tie!";
    } else {
      return `Next Player: ${currentPlayer}`;
    }
  };

  return (
    <div className="board">
      <h2>{renderStatus()}</h2>
      <div className="grid">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
