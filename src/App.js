import React, {useRef} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
 
  return (
    <div className="App"> 
      <h1>Uche</h1>
      <input type="text" placeholder='Ex...' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default App;