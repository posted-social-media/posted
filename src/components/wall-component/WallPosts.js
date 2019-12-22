import React from "react";

const WallPost = ({ data }) => {
  return (
    <div>
      {data.map(post => {
        return (
          <div key={post.postMesage}>
            <h2>Name of user here</h2>
            <button>Delete</button>
            <div>
              <p>{post.postMessage}</p>
            </div>
            <button>Like</button>
            <button>Share</button>
            <button>Comment</button>
          </div>
        );
      })}
    </div>
  );
};

export default WallPost;
