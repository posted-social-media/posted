import React, { useState } from "react";

//styled components
import {
  FormContainer,
  LabelContainer,
  Message,
  SubmitBtn
} from "../../theme/WallStyles";

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
    <FormContainer onSubmit={e => submit(e)}>
      <LabelContainer>
        Label here
        <Message
          name='postMessage'
          value={post.postMessage}
          onChange={e => handler(e)}></Message>
      </LabelContainer>
      <SubmitBtn type='submit'>Post</SubmitBtn>
    </FormContainer>
  );
};

export default WallForm;
