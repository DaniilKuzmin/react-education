import PropTypes from "prop-types";
import Message from './Message';


const Messages = (props) => {
    const {messages} = props;
    return <div className="messageList">
            <h4>Message List</h4>
            {messages.map((element, index) => (<Message text={element} key={index} />))}
            </div>
}

export default Messages;

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}