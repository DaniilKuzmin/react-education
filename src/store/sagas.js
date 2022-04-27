import { takeLatest, put, delay } from 'redux-saga/effects';
import { ADD_MESSAGE_WITH_SAGA, addMessage } from './messages/actions';
import { AUTHOR } from '../constants/common';

function* onAddMessageWithSaga(action) {
	yield put(addMessage(action.payload.chatId, action.payload.message))
	if (action.payload.message.author !== AUTHOR.bot) {
		const botMessage = {text: 'God day, sir. I from saga.', author: AUTHOR.bot};
		yield delay(2000);
		yield put(addMessage(action.payload.chatId, botMessage));
	}
}

function* mySaga() {
	yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
}

export default mySaga;