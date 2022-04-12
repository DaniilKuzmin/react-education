import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import React, { useState } from "react";
import AUTHOR from '../constants/common.js';

const initialChats = {
	id1: {
		name: 'chat 1',
		messages: [{text:'Some robot text', author: AUTHOR.bot}, {text:'Good day, sir', author: AUTHOR.me}]
	},
	id2: {
		name: 'chat 2',
		messages: [{text:'What?', author: AUTHOR.me}, {text:'nvm', author: AUTHOR.bot}]
	}
}

const Router = () => {

	const [chats, setChats] = useState(initialChats);

	const addMessage = (chatId, message) => {
		setChats({...chats, [chatId]: {
			name: chats[chatId].name,
			messages: [...chats[chatId].messages, message] 
		}})
	}

	return (
			<BrowserRouter>
			<ul className='menu'>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/chats">Chats</Link>
				</li>
			</ul>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/chats/:chatId" element={<Chats chats={chats} addMessage={addMessage} />} />
					<Route path="*" element={<Chats chats={chats} />} />
				</Routes>
			</BrowserRouter>
		)
}

export default Router;