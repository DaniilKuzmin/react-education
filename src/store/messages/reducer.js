import { ADD_MESSAGE } from './actions';

const inicialState = {
	messageList: {}
}

/**
 * 
	{
		chatId: [{ id, text, author }]
	} 
 *
 */ 

const messagesReducer = (state = inicialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const { chatId, message } = action.payload;
			const oldMessages = state.messageList[chatId] || [];
			return {
				...state,
				messageList: {
					...state.messageList,
					[chatId]: [
						...oldMessages,
						{
							...message,
							id: `${chatId}${oldMessages.length}`
						}
					]
				}
			}
		}

		default: 
			return state;
	}
} 

export default messagesReducer;