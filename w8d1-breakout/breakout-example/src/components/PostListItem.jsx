export default function PostListItem(props) {
  const { isFeatured, title, author, changeFeaturedStatus } = props;

  let divClass = "PostListItem";
  divClass += isFeatured ? " featured" : "";
  return (
    <div className={divClass} onClick={changeFeaturedStatus}>
      <h1>{title}</h1>
      <h2>By {author.name}</h2>
    </div>
  );
}
