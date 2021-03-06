import { ADD_MESSAGE, addMessage } from '../store/messages/actions';
import { AUTHOR } from '../constants/common'

const middleware = store => next => action => {
if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
	const newMessage = {text: 'God day, sir. From middleware.', author: AUTHOR.bot};
	setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)), 1500)
}

return next(action);
}

export default middleware;