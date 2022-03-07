import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  
  const [value, setValue] = useState();

function setValueAsNum(){
  setValue(value);
}
  
  return (
    <div className="App">
       <input type ="text" onChange={setValueAsNum}/>

    </div>
  );
}

export default App;
