import './App.css';
//import React from "react";
import {useState} from "react";
    
    // Классовый компонент

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   handleClick = () => {
//     const { count } = this.state;
//     this.setState({ count: count + 1 });
//   }

//   render() {
//     return (
//         <div className="App">
//           <span className="counter">{this.state.count}</span>
//           <button className="counter-button" onClick={this.handleClick}>Click!</button>
//         </div>
//       )
//   }
// }
      
      //Функциональный компонент

function App(props) {
  // Между function и return можно писать JavaScript

  // useEffect импортируется из 'react'

// useEffect( () => {}, [] ) // () => {}, [] // cb + [], где массив это зависимости
// (отслеживаем ли мы изменения) или нет (при неуказанном массиве, отслеживает все изменения)
// чтобы отработал unmount, надо использовать return

// useCallback(async () => {}, []) // сохраняет ссылку на функцию, а не саму функцию, обновляется 
// только по изменению [] каких то deps'ов

// useMemo( () ={}, [] ) // сохраняет результаты

//<React.Fragment> // используется вместо обобщающего <div> (нужен itput React) чтобы можно было 
// вернуть несколько div'вов одним return

const [count, setCount] = useState(0); // 0, () => {} hookState - Значение + изменение значения.
const [value, setValue] = useState('');
                                       // Ассинхронная функция.
  // Такая ↑ запись заменяет такую ↓

  // const countState = useState();
  // const count = countState[0]
  // const setCount = countState[1]

const handleClick = () => {
  //setCount(count + 1); // Синхронный код
  setCount((prevCount) => prevCount + 1) // cb
}

    // Синтетическое событие

const handleChange = (event) => {
  setValue(event.target.value);
}

  return (
    <div className="App">
      <header className="App-header">
        <span className="counter">{count}</span>
        <button className="counter-button" onClick={handleClick}>Click!</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </header>
    </div>
  );
}

export default App;
