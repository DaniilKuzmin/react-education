import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdbIcon from '@mui/icons-material/Adb';

const Message = ({text}) => {
	return (
			<> {text.author === 'bot' ? 
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<AdbIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText className="messageCloud"
						primary={text.text}
						secondary={text.author}
					/>
				</ListItem> :
				<ListItem>
					<ListItemText className="myMessage messageCloud"
						primary={text.text}
						secondary={text.author}
					/>
					<ListItemAvatar>
						<Avatar>
							<AccountCircleIcon />
						</Avatar>
					</ListItemAvatar>
				</ListItem> }
				
			</>
			)
}

export default Message;

