import './App.css';
import React, {useState, useEffect} from "react";
import AUTHOR from './constants/common.js';
import Messages from './components/Messages';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Chat from './components/Chat'
import AdbIcon from '@mui/icons-material/Adb';
import AndroidIcon from '@mui/icons-material/Android';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

function App() {

const [messageList, setMessageList] = useState([]);
// const [chatList, setChatList] = useState([]);
const [value, setValue] = useState('');
const [input, setInput] = useState('');

const theme = createTheme({
  status: {
    danger: green[500],
  },
});

// setChatList([
//     {
//       name: 'bot',
//       id: 't800'
//     },
//     {
//       name: 'angryBot',
//       id: 't1000'
//     }
//   ])

const chatList = [
    {
      name: 'bot',
      id: 't800',
      ava: <AdbIcon />
    },
    {
      name: 'angryBot',
      id: 't1000',
      ava: <AndroidIcon />
    }
  ]

useEffect(() => {
  if (messageList.length > 0) {
    if (messageList[messageList.length - 1].author === AUTHOR.me) {
        setTimeout(() => {
          let messageObj = {text: 'You get nothing. You lose. Good day, sir.', author: AUTHOR.bot}

          setMessageList([...messageList, messageObj])
        }, 1500)
    }
  }

}, [messageList])

const handleChange = (event) => {
  setInput(event.target)
  setValue(event.target.value)
}

const handler = () => {

  let messageObj = {text: value, author: AUTHOR.me};

  setMessageList([...messageList, messageObj]);

  setValue("");
  input.value = '';
  input.focus();
}

const enterHandler = (event) => {
  if (event.key === 'Enter') {
    handler()
  } else return
}

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
      </header>
      <div className="chatWindow">
        <div className="chatList">
          <h4>ChatList</h4>
          <Chat props={chatList[0]} key={chatList[0].id}/>
          <Chat props={chatList[1]} key={chatList[1].id}/>
        </div>
        <div className="columnTwo">
        <Messages messages={messageList} />
        <div className="form">
              <TextField
                id='input'
                autoFocus={true}
                type="text"
                placeholder="Введите сообщение"
                onChange={handleChange}
                onKeyDown={enterHandler}
                />
              <Button
                variant="contained"
                onClick={handler}
                endIcon={<SendIcon />}>
                  Send
              </Button>
            </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
