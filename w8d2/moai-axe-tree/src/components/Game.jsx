import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [computerIsOn, setComputerIsOn] = useState(true);

  const toggleComputer = () => setComputerIsOn(!computerIsOn);
  return (
    <div>
      <main className="game">
        <Computer isOn={computerIsOn} toggleComputer={toggleComputer} />
        <Player />
      </main>
      <Result />
    </div>
  );
}
