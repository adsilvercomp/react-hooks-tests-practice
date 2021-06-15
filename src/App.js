import React, { useState } from 'react';
import './App.css';


function App() {
  const [buttonColor, setColor] = useState('red')
  return (
    <div data-testid="background" className={`App ${buttonColor}`}>
      <button onClick={()=> buttonColor === 'red'? setColor('blue'): setColor('red')}  name="change-color-button" className="change-color">Change Color</button>
    </div>
  );
}

export default App;
