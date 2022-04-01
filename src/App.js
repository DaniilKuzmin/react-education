import './App.css';
import React, {useState, useEffect} from "react";
import Message from './Message.js'
import AUTHOR from './constants/common.js'

function App(props) {

const [messageList, setMessageList] = useState([]);
const [value, setValue] = useState('');

useEffect(() => {
  if (messageList.length > 0) {
    if (messageList[messageList.length - 1].author === AUTHOR.me) {
        setTimeout(() => {
          let messageObj = {text: 'Some robot text', author: AUTHOR.bot}

          setMessageList([...messageList, messageObj])
        }, 1500)
    }
  }
}, [messageList])

const handleChange = (event) => {
  setValue(event.target.value)
}

const handler = () => {

  let messageObj = {text: value, author: AUTHOR.me}

  setMessageList([...messageList, messageObj])

}

  return (
    <div className="App">
      <header className="App-header">
        <h4>Список сообщений:</h4>
        <br/>
        {messageList.map((element, index) => (<Message text={element} key={index} />))}
        <div>
          <input type="text" placeholder="Введите сообщение" onChange={handleChange}/> 
          <button onClick={handler}>Отправить</button>
        </div>
      </header>
    </div>
  );
}

export default App;
