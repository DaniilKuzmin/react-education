import { GET_GISTS_REQUEST } from './actions';
import { GET_GISTS_SUCCESS } from './actions';
import { GET_GISTS_FAILURE } from './actions';

export const STATUSES = {
	IDLE: 0,
	REQUEST: 1,
	SUCCESS: 2,
	FAILURE: 3
}

const inicialState = {
	gists: [],
	request: STATUSES.IDLE,
	error: null,
	loading: false
}

const gistsReducer = (state = inicialState, action) => {
	switch (action.type) {
		case GET_GISTS_REQUEST:
			return {
				...state,
				request: STATUSES.REQUEST,
				loading: true
			};
		case GET_GISTS_SUCCESS:
			return {
				...state,
				request: STATUSES.SUCCESS,
				gists: action.payload,
				loading: false
			}
		case GET_GISTS_FAILURE:
			return {
				...state,
				request: STATUSES.FAILURE,
				error: action.payload,
				loading: false
			}
		default:
			return state;
	}
}

export default gistsReducer; 