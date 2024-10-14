import React from 'react';

function StartPage({ setPlayer }) {
  return (
    <div className="start-page">
      <h1 className="title">
        Tic <span className="highlight">Tac</span> Toe
      </h1>
      <p>Choose your player:</p>
      <button onClick={() => setPlayer('X')}>X</button>
      <button onClick={() => setPlayer('O')}>O</button>
    </div>
  );
}

export default StartPage;
