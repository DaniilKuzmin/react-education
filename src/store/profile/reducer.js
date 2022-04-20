import { TOGGLE_NAME, UPDATE_NAME } from './actions'

const inicialState = {
	showName: true,
	name: 'Volodya',
}

const profileReducer = (state = inicialState, action) => {
	switch (action.type) {
		case TOGGLE_NAME:
			return {
				...state,
				showName: !state.showName
			}
		case UPDATE_NAME:
			return {
				...state,
				name: action.payload
			}
		default:
			return state;
	}
}

export default profileReducer;