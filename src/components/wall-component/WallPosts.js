import React from "react";

//styled components
import {
  PostContainer,
  PostBox,
  User,
  Delete,
  Like,
  Share,
  Comment,
  MessageContainer,
  Content
} from "./WallStyles";

const WallPost = ({ data }) => {
  return (
    <PostContainer>
      {data.map(post => {
        return (
          <PostBox key={post.postMesage}>
            <User>User</User>
            <Delete>Delete</Delete>
            <MessageContainer>
              <Content>{post.postMessage}</Content>
            </MessageContainer>
            <Like>Like</Like>
            <Share>Share</Share>
            <Comment>Comment</Comment>
          </PostBox>
        );
      })}
    </PostContainer>
  );
};

export default WallPost;
