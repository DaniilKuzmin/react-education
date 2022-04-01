import './App.css';
//import React from "react";
import {useState} from "react";
    


function App(props) {

const [count, setCount] = useState(0); 
const [value, setValue] = useState('');


  return (
    <div className="App">
      <header className="App-header">

        <input type="text" placeholder="Введите сообщение" /> 
        <button>Отправить</button>

      </header>
    </div>
  );
}

export default App;
