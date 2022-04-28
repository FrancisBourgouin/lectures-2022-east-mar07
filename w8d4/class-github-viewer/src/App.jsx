import "./App.css";
import CommitList from "./components/CommitList";
import RepoForm from "./components/RepoForm";
import { Component } from "react";
import axios from "axios";
import Spy from "./components/Spy";

// https://api.github.com/repos/owner/repo/commits

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentOwner: "",
      currentRepo: "",
      commits: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.owner !== this.state.owner || prevState.repo !== this.state.repo) {
      console.log("DO THE AXIOS CALL");
    }
  }

  updateRepoAndOwnerAndCommits = (formData) => {
    const { owner, repo } = formData;

    const newState = {
      ...this.state,
      currentOwner: owner,
      currentRepo: repo,
    };

    if (owner !== this.state.currentOwner || repo !== this.state.currentRepo) {
      return axios
        .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
        .then((res) => (newState.commits = res.data))
        .then(() => this.setState(newState))
        .catch(() => this.setState({ ...this.state, commits: null }));
    }
    return this.setState(newState);
  };

  render() {
    const { commits } = this.state;
    const { updateRepoAndOwnerAndCommits } = this;

    return (
      <div className="App">
        <header>
          <h1>Super Git Commit Checker Yeah.</h1>
        </header>
        <RepoForm onSubmit={updateRepoAndOwnerAndCommits} />
        <CommitList commits={commits} />
        {commits && <Spy amountOfCommits={commits.length} />}
      </div>
    );
  }
}
