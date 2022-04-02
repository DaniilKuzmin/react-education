const Message = ({text}) => {
	return (
				<>
					<div>Message: {text.text}</div>
					<div>Author: {text.author}</div>
				</>
			)
}

export default Message;