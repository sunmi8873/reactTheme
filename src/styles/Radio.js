import React from "react";
import styled from "styled-components";

const RadioComponent = (props) => {
  return (
    <Wrap>
      <input type="radio" {...props} />
      <div className="radio" />
      <div className="label">{props.label}</div>
    </Wrap>
  )
}

export default RadioComponent;

const Wrap = styled.label`
  display: inline-block;
  height: 22px;
  font-size: 14px;
  margin-left: 10px; 

  input {
    display: none;
  }

  div.radio {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border: 2px solid #777;
    border-radius: 999px;
    vertical-align: top; 
  }

  div.label {
    display: inline-block;
    vertical-align: top; 
    line-height: 22px; 
  }

  input[type="radio"]:checked ~ div.radio {
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #777;
      transform: translate(-50%, -50%);
      border-radius: 999px;
    }
  }
`;