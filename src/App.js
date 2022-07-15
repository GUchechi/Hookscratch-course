import React,{ createContext, useState } from 'react';
import './App.css';
import Login from './Login';
import User from './User';


export const AppContext = createContext(null);
function App() {
  const [username, setUsername] = useState("");

 
  return (
    <AppContext.Provider value={{username,setUsername}} className="App"> 
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default App;  