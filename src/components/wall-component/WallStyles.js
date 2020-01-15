import styled from "styled-components";

//styles for WallContainer
export const Wall = styled.div`
  padding: 15px;
  width: 100%;
`;

//styles for WallForm
export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;

export const LabelContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 20px;
`;

export const Message = styled.textarea`
  width: 60%;
  height: 100px;
  padding: 10px;
`;

export const SubmitBtn = styled.button`
  width: 20%;
  height: 20px;
  font-size: 0.6rem;
`;

//styles for WallPosts
export const PostContainer = styled.div`
  min-height: 15vh;
  padding: 10px;
`;

export const PostBox = styled.div`
  padding: 10px 0;
  border-bottom: 2px dotted white;
  display: grid;
  grid-template-areas:
    "u . d"
    "m m m"
    "l s c";
  grid-gap: 5px;
`;

export const User = styled.h2`
  font-size: 1rem;
  justify-self: left;
  grid-area: u;
`;

export const Delete = styled.button`
  font-size: 0.6rem;
  width: 60%;
  height: 20px;
  justify-self: right;
  grid-area: d;
`;
export const Like = styled.button`
  font-size: 0.6rem;
  width: 60%;
  height: 20px;
  justify-self: left;
  grid-area: l;
`;
export const Share = styled.button`
  font-size: 0.6rem;
  width: 60%;
  height: 20px;
  justify-self: left;
  grid-area: s;
`;
export const Comment = styled.button`
  font-size: 0.6rem;
  width: 60%;
  height: 20px;
  justify-self: right;
  grid-area: c;
`;

export const MessageContainer = styled.div`
  border: 0.5px solid white;
  min-height: 50px;
  padding: 5px;
  text-align: left;
  grid-area: m;
`;

export const Content = styled.p`
  font-size: 0.8rem;
`;
