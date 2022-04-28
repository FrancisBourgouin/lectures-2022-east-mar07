export default function Computer(props) {
  const { isOn, toggleComputer } = props;
  const className = isOn ? "cheating" : "";
  return (
    <section className="computer">
      <span role="img" className={className} aria-label="robot" onClick={toggleComputer}>
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              ❔
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
