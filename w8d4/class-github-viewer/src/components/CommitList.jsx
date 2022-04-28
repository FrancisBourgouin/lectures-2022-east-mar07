import CommitListItem from "./CommitListItem";

// commit.sha will be the index (key)
export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    Array.isArray(commits) &&
    commits.map((commit) => <CommitListItem key={commit.sha} {...commit} />);

  return (
    <ul>
      <h1>List of commits</h1>
      {parsedCommits}
    </ul>
  );
}
