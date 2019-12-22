import styled from "styled-components";

//styles for WallContainer
export const Wall = styled.div`
  padding: 15px;
  width: 100%;
`;

//styles for WallForm
export const FormContainer = styled.form`
  border: 2px solid white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
