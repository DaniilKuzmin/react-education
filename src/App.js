import './App.css';
import React, {useState, useEffect} from "react";
import AUTHOR from './constants/common.js'
import Messages from './components/Messages'
import ChatList from './components/ChatList'

function App() {

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

  setMessageList([...messageList, messageObj]);
  setValue('');
}

  return (
    <div className="App">
      <header className="App-header">
        <h4>Chat List</h4>
        <ChatList />
        <h4>Message List</h4>
        <Messages messages={messageList} />
        <div>
          <input
          type="text"
          placeholder="Введите сообщение"
          onChange={handleChange}/>
          <button onClick={handler}>Отправить</button>
        </div>
      </header>
    </div>
  );
}

export default App;
