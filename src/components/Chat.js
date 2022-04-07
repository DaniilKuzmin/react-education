import DeleteIcon from'@mui/icons-material/Delete';
import IconButton from'@mui/material/IconButton';
import ListItem from'@mui/material/ListItem';
import ListItemAvatar from'@mui/material/ListItemAvatar';
import ListItemText from'@mui/material/ListItemText';
import Avatar from'@mui/material/Avatar';

const Chat = ({props}) => {
	return <div className='chat'>
				<ListItem
					secondaryAction={<IconButton edge="end" aria-label="delete">
						<DeleteIcon/>
						</IconButton>
				}
				>
				<ListItemAvatar>
					<Avatar>
						{props.ava}
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.name}
					secondary={props.id}
				/>
				</ListItem>
			</div>
}

export default Chat