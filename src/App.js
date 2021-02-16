import React, {useState,useEffect} from "react";
import "./App.css";
import  axios from 'axios';
import Form from './component/Form';

function App() {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let url = 'https://us-east4-frapp-prod.cloudfunctions.net/dumdum-brand-details'
    axios.get(url)
    .then(response => setState(response.data))
    .catch(error => setError(error));
    console.log(state);
  }, [state])

  return (
    <div className="App">
      <p>{error ? error : null}</p>
      {state ? <Form data={state} /> : <h3 className="loading">Loading...</h3>}
    </div>
  )
}

export default App;
