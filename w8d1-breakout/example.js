const authors = [
  {
    id: 1,
    name: "Michael",
    nbOfPostFeatured: 2,
    posts: [1, 2],
  },
  {
    id: 2,
    name: "Nicole",
    nbOfPostFeatured: 1,
    posts: [3, 4],
  },
  {
    id: 3,
    name: "Prashanth",
    nbOfPostFeatured: 0,
    posts: [5],
  },
];

const posts = {
  1: {
    id: 1,
    title: "Potatoes, good or bad ?",
    isFeatured: true,
    content: "...",
    author: 1,
  },
  2: {
    id: 2,
    title: "Chicken, good or bad ?",
    isFeatured: true,
    content: "...",
    author: 1,
  },
  3: {
    id: 3,
    title: "Little Chicken, good or bad ?",
    isFeatured: false,
    content: "...",
    author: 2,
  },
  4: {
    id: 4,
    title: "Toaster, good or bad ?",
    isFeatured: true,
    content: "...",
    author: 2,
  },
  5: {
    id: 5,
    title: "Depends, good or bad ?",
    isFeatured: false,
    content: "...",
    author: 3,
  },
};

const postList = Object.values(posts);
const updatedPostList = postList.map((post) => {
  const authorObj = authors.find((author) => author.id === post.author);
  const updatedPost = { ...post };
  updatedPost.author = authorObj;

  return updatedPost;
});
console.log(updatedPostList);

const updatedPostList2 = postList.map((post) => {
  const authorObj = authors.find((author) => author.id === post.author);
  const updatedPost = { ...post };
  updatedPost.author = authorObj;

  return updatedPost;
});
console.log(updatedPostList2);
