import Message from './Message';
import { useParams } from 'react-router-dom';
const MessageList = ({ chats }) => {
	let { chatId } = useParams();

	if (!chats[chatId]) return null;

	const messages = chats[chatId].messages;
	return <div className="messageList">
            <h4>Message List</h4>
            {messages.map((element, index) => (<Message text={element} key={index} />))}
            </div>
}

export default MessageList;