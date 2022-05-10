import { createModel, listenerOptions } from "./helpers/listenerHelpers";

import "./App.css";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModelReady, setIsModelReady] = useState(false);

  const sampleResults = [
    0.05180280655622482, 0.09192834049463272, 0.759290337562561, 0.09697842597961426,
  ];
  const sampleLabels = ["Background Noise", "Eeeuh", "Potato", "Toaster"];
  const coolLabels = ["📕📙📘📙📗", "🧟🧟🧟🧟🧟", "🥔🥔🥔🥔🥔", "🔥🍞🍞🔥"];

  const findBiggestValueIndex = (results) => {
    const biggestValue = Math.max(...results);

    const biggestValueIndex = results.indexOf(biggestValue);

    return biggestValueIndex;
  };

  const startListening = async (listenerOptions) => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels();

    recognizer.listen((result) => {
      const scores = Array.from(result.scores);
      !isModelReady && setIsModelReady(true);

      const newIndex = findBiggestValueIndex(scores);
      newIndex !== 0 && setCurrentIndex(newIndex);
    }, listenerOptions);

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  };

  return (
    <div className="App">
      <header>
        <h1>🔥🔥🔥 Super Voice to Emoji Yeah ! 🔥🔥🔥</h1>
      </header>
      {!isModelReady && (
        <button onClick={() => startListening(listenerOptions)}>NAVI</button>
      )}
      <span style={{ fontSize: 60, display: "block" }}>{coolLabels[currentIndex]}</span>
    </div>
  );
}

export default App;
