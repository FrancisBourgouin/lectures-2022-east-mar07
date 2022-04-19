import "./App.css";

const SomeComponentThatTakesInChildrenProps = (props) => {
  return (
    <section>
      <h1>BEGINNING OF COMPONENT</h1>
      <div>{props.children}</div>
      <h1>END OF COMPONENT</h1>
    </section>
  );
};

// [1, 2, 3].forEach((value, index, array) => console.log(value, index, array));

// $.ajax(url, method, path, callback, payload);

// $.ajax({
//   url: "...",
//   method: "...",
// });

function App() {
  return (
    <div className="App">
      <header>
        <h1>Super breakout example!</h1>
      </header>
      <SomeComponentThatTakesInChildrenProps>
        <p>Some content</p>
        <p>Some other content</p>
      </SomeComponentThatTakesInChildrenProps>
      <SomeComponentThatTakesInChildrenProps>
        <p>🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔</p>
      </SomeComponentThatTakesInChildrenProps>
      {/* <SomeComponentThatTakesInChildrenProps name="Alvin" /> */}
      {/* {SomeComponentThatTakesInChildrenProps({name:"Alvin"})} */}
    </div>
  );
}

export default App;
