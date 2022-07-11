import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    Axios.get('http://aws.random.cat/meow').then((url) => {
      setUrl(url.data['file']);
    })
}, [])


  
  return (
    <div className="App"> 
      {url !== '' && (
        <img src={url} alt={'first-api'} />
      )}
    </div>
  );
}

export default App;
