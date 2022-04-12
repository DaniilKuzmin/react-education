import DeleteIcon from'@mui/icons-material/Delete';
import IconButton from'@mui/material/IconButton';
import ListItem from'@mui/material/ListItem';
import ListItemAvatar from'@mui/material/ListItemAvatar';
import ListItemText from'@mui/material/ListItemText';
import Avatar from'@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyCounterContext } from '../App';
//import React, { useState } from "react";

// import Chat from './Chat';
//import Chats from './Chats';
//import { useParams } from 'react-router-dom';

const ChatList = ({ chats }) => {

	const contextValue = useContext(MyCounterContext);

	const chatsArray = Object.keys(chats);

	const removeHandler = (event) => {

		delete chats[event.target.id]

		console.log(chats)
		console.log(event.target.id)
	}

	return <div>
		My Counter is <h1>{contextValue.counter}</h1>
		<button
			onClick={() =>
				contextValue.setCounter(contextValue.counter + 1)}>Change counter</button>
			{chatsArray.map((chat, index) => (
				<Link to={`/chats/${chat}`} key={index}>
							<div className='chat'>
								<ListItem 
									secondaryAction={<IconButton onClick={removeHandler} id={`id${index + 1}`} edge="end" aria-label="delete">
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
									primary={chats[chat].name}
									secondary=''
								/>
								</ListItem>
								</div>
								</Link>
				))}
			
		</div>
}
export default ChatList;