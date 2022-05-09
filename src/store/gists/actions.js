export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCES';
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE';
export const FETCH_GISTS = 'GISTS::FETCH_GISTS';

export const getGistsRequest = () => ({
	type: GET_GISTS_REQUEST,
	loading: true
});

export const getGistsSuccess = (gists) => ({
	type: GET_GISTS_SUCCESS,
	payload: gists
});

export const getGistsFailure = (error) => ({
	type: GET_GISTS_FAILURE,
	payload: error
});

export const setGists = payload => ({type: GET_GISTS_REQUEST, payload})
export const fetchGists = () => ({type: FETCH_GISTS})

// 	dispatch(getGistsRequest());

	// try {

	// 	const response = await fetch(API_URL_PUBLIC);

	// 	if (!response.ok) {
	// 		throw new Error('Request error')
	// 	}

	// 	const result = await response.json();

	// 	dispatch(getGistsSuccess(result))
	// } catch (err) {
	// 	dispatch(getGistsFailure(err.message))
	// 	console.log(err);
	// }