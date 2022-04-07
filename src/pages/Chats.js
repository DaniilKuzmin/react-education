
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';
import { useParams } from 'react-router-dom';



const Chats = ({ chats, addMessage }) => {
	let { id } = useParams();
	console.log(id);
	return <div>
	<div className="chatWindow">
        <div className="chatList">
        <h4>Chat List</h4>
        <ChatList chats={chats} />
        </div>
        <div className="columnTwo">
        <MessageList chats={chats} />
        <ControlPanel addMessage={addMessage} />
        </div>
      </div>
      </div>
}


export default Chats;