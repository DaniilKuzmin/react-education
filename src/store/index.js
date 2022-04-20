import { createStore, combineReducers } from 'redux';
import profileReducer from './profile/reducer';
import chatReducer from './chats/reducer';
import messagesReducer from './messages/reducer';

const reducers = combineReducers({
	profile: profileReducer,
	chats: chatReducer,
	messages: messagesReducer
})

const store = createStore(reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;