import React from 'react';
import { Input, Checkbox, Radio } from "./styles";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Sec>
        <Tilte>CheckBox</Tilte>
        <Checkbox label="check" onChange={(event) => console.log(event.target.checked)} />
      </Sec>
      <Sec>
        <Tilte>Radio</Tilte>
        <Radio label="라디오1" name="radio" onChange={(event) => console.log(event.target.checked)} />
        <Radio label="라디오2" name="radio" onChange={(event) => console.log(event.target.checked)} />
      </Sec>
      <Sec>
        <Tilte>Input</Tilte>
        <Input type="text" placeholder="text" onChange={(event) => console.log(event.target.checked)} />
        <Input type="password" placeholder="password" onChange={(event) => console.log(event.target.checked)} />
        <Input type="Number" placeholder="number"  onChange={(event) => console.log(event.target.checked)} />
        <Input type="search" placeholder="search"  onChange={(event) => console.log(event.target.checked)} />
      </Sec>
    </div>
  );
}

export default App;

const Sec = styled.div`
  margin-top: 50px; 

  :first-child {
    margin-top: 0;
  }
`;

const Tilte = styled.h2`
  margin-top: 20px;
  color: #333;
  line-height: 20px;
  font-size: 16px;  
`;