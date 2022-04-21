import { useState } from "react";

export default function Switch(props) {
  const { initialValue, initialNumber } = props;
  const [isOn, setIsOn] = useState(!!initialValue);
  const [count, setCount] = useState(initialNumber || 0);

  const handleClick = () => {
    setIsOn(!isOn);
    setCount(count + 1);
  };

  let bob = 5;
  return (
    <div>
      {isOn && <h1>I AM ON {count}</h1>}
      {!isOn && <h1>I AM OFF {count}</h1>}
      <button onClick={() => (bob += 5)}>🎛️</button>
    </div>
  );
}
