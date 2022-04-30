import React, {useState, useRef, useEffect} from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithSaga } from '../store/messages/actions';
//import AUTHOR from '../constants/common';

const ControlPanel = () => {

let { chatId } = useParams();

const [value, setValue] = useState('');
const inputRef = useRef(null);
const dispatch = useDispatch();
const author = useSelector(state => state.profile.name)
// const allMessages = useSelector(state => state.messages.messageList);

// const messages = allMessages[chatId] || [];

const handleChange = (event) => {
  setValue(event.target.value);
}

const handler = () => {

  const newMessage = {text: value, author: author};
  inputRef.current.value = '';
  dispatch(addMessageWithSaga(chatId, newMessage));
  inputRef.current?.focus();
}

useEffect(() => {

	inputRef.current?.focus();
}, [value, chatId])

const enterHandler = (event) => {
  if (event.key === 'Enter') {
    handler()
  } else return
}

// useEffect(() => {
//   let timerId;
//   if (
//     messages?.length > 0 &&
//     messages[messages.length - 1].author !== AUTHOR.bot
//     ) {
//     const newMessage = {text: 'God day, sir.', author: AUTHOR.bot}
//     timerId = setInterval(() => {
//       dispatch(addMessage(chatId, newMessage))
//     }, 1500)
//   }
//   return () => {
//     if (timerId) {
//       clearInterval(timerId);
//     }
//   };
// }, [messages, chatId])

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