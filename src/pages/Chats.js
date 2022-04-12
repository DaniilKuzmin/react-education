
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import { useParams } from 'react-router-dom';



const Chats = ({ chats, addMessage }) => {

    let { chatId } = useParams()

	return <div>

	<div className="chatWindow">
        <div className="chatList">
        <h4>Chat List</h4>
        <ChatList chats={chats} />
        </div>
        <div className="columnTwo">
        <MessageList chats={chats} addMessage={addMessage}/>
        {chats[chatId] ? null : <div><p>Change Chat</p></div>}
        </div>
      </div>
      </div>
}


export default Chats;