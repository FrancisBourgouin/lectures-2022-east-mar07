import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      repo: "",
    };

    this.oldHandleChange = this.oldHandleChange.bind(this);
  }

  oldHandleChange = function (event) {
    const { name, value } = event.target;
    console.log(this);
    this.setState({ ...this.state, [name]: value });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(this);
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      owner: "",
      repo: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo name"
          onChange={this.handleChange}
          value={this.state.repo}
        />
        <input
          type="text"
          name="owner"
          placeholder="Enter the owner name"
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <button type="submit">Search!</button>
      </form>
    );
  }
}
