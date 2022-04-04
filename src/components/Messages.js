import PropTypes from "prop-types";
import Message from '../Message';


const Messages = (props) => {
    const {messages} = props;
    return <>
            {messages.map((element, index) => (<Message text={element} key={index} />))}
            </>
}

export default Messages;

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}