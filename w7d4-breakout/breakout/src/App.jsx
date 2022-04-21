import logo from "./logo.svg";
import "./App.css";
import Switch from "./components/Switch";
import SomeForm from "./components/SomeForm";

function App() {
  return (
    <div className="App">
      <Switch initialValue={0} />
      <SomeForm />
    </div>
  );
}

export default App;
