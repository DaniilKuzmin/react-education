import DeleteIcon from'@mui/icons-material/Delete';
import IconButton from'@mui/material/IconButton';
import ListItem from'@mui/material/ListItem';
import ListItemAvatar from'@mui/material/ListItemAvatar';
import ListItemText from'@mui/material/ListItemText';
import Avatar from'@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { addChat } from '../store/chats/actions'

const ChatList = () => {
	const chats = useSelector(state => state.chats.chatList)
	const [visible, setVisible] = useState(false);
	const [chatName, setChatName] = useState('');
	const dispatch = useDispatch();

	const chatNameHandler = (e) => {
		setChatName(e.target.value)
	}


	const closeHandler = () => {
		setVisible(false);
	}

	const addChatHandler = () => {
		setVisible(true);
	}

	const saveHandler = () => {
		dispatch(addChat(chatName));
		setChatName('')
		closeHandler();
	}

	return <div>
			{chats?.length > 0 ? (chats.map((chat) => (
				<Link to={`/chats/${chat.id}`} key={chat.id}>
							<div className='chat'>
								<ListItem 
									secondaryAction={<IconButton edge="end" aria-label="delete">
										<DeleteIcon />
										</IconButton>
								}
								>
								<ListItemAvatar>
									<Avatar>
										<AdbIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={chat.name}
									secondary=''
								/>
								</ListItem>
								</div>
								</Link>
				))
			) : (
				<div>Chats not found.</div>)}
				<Button onClick={addChatHandler}>Add chat</Button>
				<Dialog open={visible} onClose={closeHandler}>
					<DialogTitle>Please enter a name for a new chat</DialogTitle>
					<TextField 
						placeholder='Chat name'
						value={chatName}
						onChange={chatNameHandler}
					/>
				<Button onClick={saveHandler}>Save</Button>
				</Dialog>
			
		</div>
}
export default ChatList;