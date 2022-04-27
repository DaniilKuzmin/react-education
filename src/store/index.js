import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import profileReducer from './profile/reducer';
import chatReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
// import middleware from '../middlewares/middleware'



const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
	profile: profileReducer,
	chats: chatReducer,
	messages: messagesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
	persistedReducer,
	composeEnhancer(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

export default persistor;

sagaMiddleware.run(mySaga);