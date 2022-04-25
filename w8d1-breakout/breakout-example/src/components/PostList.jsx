import PostListItem from "./PostListItem";

export default function PostList(props) {
  const { posts, changeFeaturedStatus } = props;

  const parsedPosts =
    Array.isArray(posts) &&
    posts.map((post) => (
      <PostListItem
        key={post.id}
        {...post}
        changeFeaturedStatus={() => changeFeaturedStatus(post.id)}
      />
    ));
  return (
    <div>
      <h1>Post List</h1>
      {parsedPosts}
    </div>
  );
}
