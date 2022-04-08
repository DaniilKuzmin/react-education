import React, {useState, useRef, useEffect} from "react";
import AUTHOR from '../constants/common.js';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const ControlPanel = ({ addMessage }) => {

let { chatId } = useParams();

const [value, setValue] = useState('');
const inputRef = useRef(null);

// useEffect(() => {
//   if (messageList.length > 0) {
//     if (messageList[messageList.length - 1].author === AUTHOR.me) {
//         setTimeout(() => {
//           let messageObj = {text: 'You get nothing. You lose. Good day, sir.', author: AUTHOR.bot}

//           setMessageList([...messageList, messageObj])
//         }, 1500)
//     }
//   }

// }, [messageList])



const handleChange = (event) => {
  setValue(event.target.value);
}

const handler = () => {

  const newMessage = {text: value, author: AUTHOR.me}
  inputRef.current.value = ''
  addMessage(chatId, newMessage);
  inputRef.current?.focus();
}

useEffect(() => {

	inputRef.current?.focus();
}, [value])
const enterHandler = (event) => {
  if (event.key === 'Enter') {
    handler()
  } else return
}

	return (
			<div>
			<div className="form">
              <TextField
                inputRef={inputRef}
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
		)
}

export default ControlPanel;