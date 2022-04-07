import DeleteIcon from'@mui/icons-material/Delete';
import IconButton from'@mui/material/IconButton';
import ListItem from'@mui/material/ListItem';
import ListItemAvatar from'@mui/material/ListItemAvatar';
import ListItemText from'@mui/material/ListItemText';
import Avatar from'@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';


// import Chat from './Chat';
//import Chats from './Chats';
//import { useParams } from 'react-router-dom';

const ChatList = ({ chats }) => {
	//let { chatId } = useParams();

	return <div>
		{Object.keys(chats).map((chat, index) => (
			<Link to={`/chats/${chat}`} key={index}>
			<div className='chat' key={index}>
				<ListItem 
					secondaryAction={<IconButton edge="end" aria-label="delete">
						<DeleteIcon/>
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