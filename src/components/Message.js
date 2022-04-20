import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector } from 'react-redux';
import AUTHOR from '../constants/common';

const Message = ({text}) => {
	const isAuthorBot = (author) => {
		return author === AUTHOR.bot
	}
	const { name } = useSelector(state => state.profile)
	return (
			<>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							{isAuthorBot(text.author) ? <AdbIcon /> : <AccountCircleIcon />}
						</Avatar>
					</ListItemAvatar>
					<ListItemText className={!isAuthorBot(text.author) ? 'myMessage messageCloud' : 'messageCloud'}
						primary={text.text}
						secondary={isAuthorBot(text.author) ? AUTHOR.bot : name}
					/>
				</ListItem>				
			</>
			)
}

export default Message;

