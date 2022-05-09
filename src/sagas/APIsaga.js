import { takeEvery, put, call } from 'redux-saga/effects';
import { API_URL_PUBLIC } from '../constants/gists';
import { FETCH_GISTS } from '../store/gists/actions';
import { getGistsSuccess, getGistsFailure, getGistsRequest } from '../store/gists/actions';

const fetchGistsApi = () => fetch(API_URL_PUBLIC);

function* getAllGists() {
	try {
		yield put(getGistsRequest());
		const response = yield call(fetchGistsApi);


		if (!response.ok) {
			throw new Error('Request error')
		}

		const gists = yield call(() => new Promise(res => res(response.json())));

		yield put(getGistsSuccess(gists))
	} catch (err) {
		yield put(getGistsFailure(err.message))
		console.log(err);
	}
	// const gistsPromise = yield call(fetchGistsApi)
	// 	if (!gistsPromise.ok) {
	// 		throw new Error('Request error')
	// 	}
	// const gists = yield call(() => new Promise(res => res(gistsPromise.json())));

	// yield put(getGistsSuccess(gists))
}

export function* gistsWatcher() {
	yield takeEvery(FETCH_GISTS, getAllGists)
}

export default getAllGists;