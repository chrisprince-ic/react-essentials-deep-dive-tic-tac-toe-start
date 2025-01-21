import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function onSelect() {}
function App() {
  return (
    <div>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
