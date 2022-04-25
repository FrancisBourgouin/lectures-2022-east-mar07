export default function AuthorListItem(props) {
  const { name, nbOfPostFeatured } = props;
  return (
    <div className="AuthorListItem">
      <h1>
        {name}, {nbOfPostFeatured} posts featured
      </h1>
    </div>
  );
}
