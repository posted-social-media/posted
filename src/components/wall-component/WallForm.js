import React, { useState } from "react";

const WallForm = ({ addPost }) => {
  //data to be sent to WallContainer
  const [post, setPost] = useState({
    postMessage: ""
  });

  //onChange handler for textarea
  const handler = e => {
    //spread operator just in case we add another input field besides postMessage
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  //onSubmit function which will send data to WallContainer
  const submit = e => {
    e.preventDefault();
    addPost(post);
    setPost({
      postMessage: ""
    });
  };

  return (
    <form onSubmit={e => submit(e)}>
      <label>
        Label here
        <textarea
          name="postMessage"
          value={post.postMessage}
          cols="30"
          rows="10"
          onChange={e => handler(e)}
        ></textarea>
      </label>
      <button type="submit">Post</button>
    </form>
  );
};

export default WallForm;
