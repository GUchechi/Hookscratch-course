import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputvalue, setInputValue] = useState('Uche');
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div className="App">     
     <input placeholder='enter sth...' onChange={onChange} />
      {inputvalue}
    </div>
  );
}

export default App;
