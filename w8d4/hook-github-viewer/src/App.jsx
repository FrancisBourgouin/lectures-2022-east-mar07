import { useState } from "react";
import axios from "axios";
import "./App.css";
import CommitList from "./components/CommitList";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";

// https://api.github.com/repos/owner/repo/commits

function App() {
  const [currentOwner, setCurrentOwner] = useState("");
  const [currentRepo, setCurrentRepo] = useState("");
  const [commits, setCommits] = useState(null);

  const updateOwnerAndRepo = (formData) => {
    const { owner, repo } = formData;

    setCurrentOwner(owner);
    setCurrentRepo(repo);

    if (currentOwner !== owner || currentRepo !== repo) {
      axios
        .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
        .then((res) => {
          setCommits(res.data);
          console.log(res.data);
        })
        .catch((err) => setCommits(null));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Super Git Commit Checker Yeah.</h1>
      </header>
      <RepoForm onSubmit={updateOwnerAndRepo} />
      <CommitList commits={commits} />
      {commits && <Spy />}
    </div>
  );
}

export default App;
