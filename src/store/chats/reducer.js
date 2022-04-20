import { ADD_CHAT } from './actions'


const inicialState = {
	chatList: []
}

// const chatList = [
// 	{
// 		id:'',
// 		name: ''
// 	}
// ]

const chatsReducer = (state = inicialState, action) => {
	switch (action.type) 	{
		case ADD_CHAT:
			return {
				...state,
				chatList: [
					...state.chatList,
					{
						id: `id${state.chatList.length}`,
						name: action.payload
					}
				]
			}
		default:
			return state
	}
}

export default chatsReducer;