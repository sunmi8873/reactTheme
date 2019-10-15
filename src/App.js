import React from 'react';
import { Checkbox } from "./styles";

function App() {
  return (
    <div className="App">
      <Checkbox label="check" onChange={(event) => console.log(event.target.checked)} />
    </div>
  );
}

export default App;
