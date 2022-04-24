import Message from './Message';
import { useParams } from 'react-router-dom';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';

const MessageList = () => {

	const allMessages = useSelector(state => state.messages.messageList);
	let { chatId } = useParams();

	if (!allMessages[chatId]) return null;

	const messages = allMessages[chatId];
	return <>
		<div className="messageList">
			<h4>Message List</h4>
			<List style={{maxWidth: '100%'}} sx={{ width: '100%', bgcolor: 'background.paper' }}>
			{messages.map((element) => (<Message text={element} key={element.id} />))}
			</List>
			</div>
			</>
}

export default MessageList;