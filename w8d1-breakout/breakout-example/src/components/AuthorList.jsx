import AuthorListItem from "./AuthorListItem";

export default function AuthorList(props) {
  const { authors } = props;

  const parsedAuthors =
    Array.isArray(authors) &&
    authors.map((author) => <AuthorListItem key={author.id} {...author} />);
  return (
    <div>
      <h1>Author List</h1>
      {parsedAuthors}
    </div>
  );
}
