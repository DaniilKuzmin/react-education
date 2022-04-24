
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';
import { useSelector } from 'react-redux';

const Chats = () => {

    const chats = useSelector(state => state.chats.chatList)

	return <div>

	<div className="chatWindow">
        <div className="chatList">
        <h4>Chat List</h4>
        <ChatList />
        </div>
        <div className="columnTwo">
        <MessageList />
        {chats.length > 0 ? <ControlPanel className='form' /> : (<div><p>Change Chat</p></div>)}
        </div>
      </div>
      </div>
}


export default Chats;