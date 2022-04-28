// commit.commit.author.date
// commit.commit.message

export default function CommitListItem(props) {
  const date = new Date(props.commit.author.date);
  const message = props.commit.message;
  return (
    <li>
      <span>{date.toLocaleString()}</span>
      <span> - {message}</span>
    </li>
  );
}
