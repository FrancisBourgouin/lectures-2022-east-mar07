import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);
  }

  report = (event) => console.log("User clicked!");

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.amountOfCommits !== prevProps.amountOfCommits) {
      console.log("Amount of commits is changed!");
    }
  }

  render() {
    return <div>🕵️</div>;
  }
}
