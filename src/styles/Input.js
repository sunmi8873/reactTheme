import React from "react";
import styled from "styled-components";

const Input = ({ label = "", ...props }) => {

  return (
    <Wrap>
      <Label>{label}</Label>
      <InputStyle {...props} />
    </Wrap>
  )
}

export default Input;


const Wrap = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const InputStyle = styled.input`
  padding: 0 10px; 
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px; 
  border-bottom: 1px solid #eee;
  transition: border .2s ease-in;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: red;
  }
`;