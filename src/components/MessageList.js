import Message from './Message';
import { useParams } from 'react-router-dom';
import ControlPanel from '../components/ControlPanel';

const MessageList = ({ chats, addMessage }) => {
	let { chatId } = useParams();

	if (!chats[chatId]) return null;

	const messages = chats[chatId].messages;
	return <>
		<div className="messageList">
			<h4>Message List</h4>
			{messages.map((element, index) => (<Message text={element} key={index} />))}
			</div>
			<ControlPanel addMessage={addMessage} />
			</>
}

export default MessageList;