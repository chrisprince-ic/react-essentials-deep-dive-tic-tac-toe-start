import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player1", symbol: "X", active: true },
    { name: "Player2", symbol: "O", active: false },
  ]);

  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);

  function handlePlayerSwitch(rowIndex, colIndex, symbol) {
    const currentPlayer = players.find((player) => player.active);
    const nextPlayers = players.map((player) => ({
      ...player,
      active: player.symbol !== currentPlayer.symbol,
    }));
    setPlayers(nextPlayers);

    // Add move to log
    const move = `${currentPlayer.name} placed ${symbol} at [${rowIndex + 1}, ${
      colIndex + 1
    }]`;
    setLog((prevLog) => [...prevLog, move]);
  }

  return (
    <div>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player, index) => (
            <Player
              key={index}
              initialName={player.name}
              symbol={player.symbol}
              active={player.active}
            />
          ))}
        </ol>
        <GameBoard
          players={players}
          onPlayerSwitch={handlePlayerSwitch}
          setWinner={setWinner}
        />
        <Log log={log} />
      </div>
      {winner && (
        <div id="game-over">
          <h2>{winner} Wins!</h2>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
