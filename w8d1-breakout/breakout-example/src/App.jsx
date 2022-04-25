import { useState } from "react";
import "./App.css";
import AuthorList from "./components/AuthorList";
import PostList from "./components/PostList";

import authorData from "./data/authorData";
import postData from "./data/postData";

function App() {
  const [authors, setAuthors] = useState(authorData);
  const [posts, setPosts] = useState(postData);

  const addAuthorsToPosts = () => {
    const postList = Object.values(posts);
    const updatedPostList = postList.map((post) => {
      const authorObj = authors.find((author) => author.id === post.author);
      const updatedPost = { ...post };
      updatedPost.author = authorObj;

      return updatedPost;
    });

    return updatedPostList;
  };

  const updateFeaturedAndAmount = (postId) => {
    //  Update the post and post object
    const updatedPost = { ...posts[postId] };
    updatedPost.isFeatured = !updatedPost.isFeatured;
    const updatedPosts = { ...posts, [postId]: updatedPost };

    // Find the author id

    const authorId = updatedPost.author;

    // Find the updated count

    const listOfPostIds = authors.find((author) => authorId === author.id).posts;
    const listOfPostObjs = listOfPostIds.map((postId) => updatedPosts[postId]);
    const amountOfFeatured = listOfPostObjs.filter((post) => post.isFeatured).length;

    // Find the author and update it

    const updatedAuthor = { ...authors.find((author) => author.id === authorId) };
    const updatedAuthorIndex = authors.findIndex((author) => author.id === authorId);
    updatedAuthor.nbOfPostFeatured = amountOfFeatured;

    // Update all authors

    const updatedAuthors = [...authors];
    updatedAuthors[updatedAuthorIndex] = updatedAuthor;

    // Update the state

    setPosts(updatedPosts);
    setAuthors(updatedAuthors);
  };

  // const updateNumberOfFeatured = (authorId, postList) => {
  //   const listOfPostIds = authors[authorId].posts;
  //   const listOfPostObjs = listOfPostIds.map((postId) => postList[postId]);

  //   const amountOfFeatured = listOfPostObjs.filter((post) => !post.isFeatured).length;
  //   console.log(postList, amountOfFeatured);

  //   const updatedAuthor = { ...authors.find((author) => author.id === authorId) };
  //   const updatedAuthorIndex = authors.findIndex((author) => author.id === authorId);
  //   updatedAuthor.nbOfPostFeatured = amountOfFeatured;
  //   const updatedAuthors = [...authors];
  //   updatedAuthors[updatedAuthorIndex] = updatedAuthor;

  //   setAuthors(updatedAuthors);
  // };

  // const updateFeaturedStatus = (postId) => {
  //   const updatedPost = { ...posts[postId] };
  //   updatedPost.isFeatured = !updatedPost.isFeatured;
  //   const updatedPosts = { ...posts, [postId]: updatedPost };

  //   updateNumberOfFeatured(updatedPost.author, updatedPosts);

  //   setPosts(updatedPosts);
  // };

  return (
    <div className="App">
      <AuthorList authors={authors} />
      <PostList
        posts={addAuthorsToPosts()}
        changeFeaturedStatus={updateFeaturedAndAmount}
      />
    </div>
  );
}

export default App;
