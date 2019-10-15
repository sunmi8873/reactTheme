import React from "react";
import styled from "styled-components";

// disabled 효과
// useState를 이용해서 

const CheckboxComponent = (props) => {
  return (
    <Wrap>
      <input type="checkbox" {...props} />
      <div className="checkbox" />
      <div>{props.label}</div>
    </Wrap>
  )
}

export default CheckboxComponent;

const Wrap = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  line-height: 18px;
  input {
    display: none;
  }

  div.checkbox {
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border: 2px solid #19827c;
    border-radius: 2px;
  }

  input[type="checkbox"]:checked ~ div.checkbox {
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #19827c;
      border-radius: 2px;
      transform: translate(-50%, -50%);
    }
  }
`;