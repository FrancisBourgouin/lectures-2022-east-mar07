import { useEffect, useState } from "react";

export default function Weather(props) {
  const { weather, city } = props;
  const [clickPosition, setClickPosition] = useState([0, 0]);

  useEffect(() => {
    const message = (event) => {
      console.log(event.target);
      setClickPosition([
        clickPosition[0] + event.clientX,
        clickPosition[1] + event.clientY,
      ]);
    };
    if (weather) {
      document.addEventListener("click", message);
    }
    return () => document.removeEventListener("click", message);
  }, [weather]);
  return (
    <section>
      <h1>Current weather for {city} !</h1>
      <p>It is currently {weather.temperature}C</p>
      <p>And it is {weather.description}</p>
    </section>
  );
}
