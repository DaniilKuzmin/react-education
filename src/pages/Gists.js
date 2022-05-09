import { useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectGists, selectGistsLoading, selectGistsError } from '../store/gists/selectors';
import { fetchGists } from '../store/gists/actions';

const Gists = () => {
	const dispatch = useDispatch();
	const gists = useSelector(selectGists);
	const loading = useSelector(selectGistsLoading);
	const error = useSelector(selectGistsError);

	const requestGists = () => {

	dispatch(fetchGists());
	}	

	useEffect(() => {
	requestGists();
	}, [])

	const renderGists = useCallback((gist) => <li key={gist.id}>{gist.description || "No description"}</li>, []);

	if (loading) {
		return <CircularProgress />
	}

	if (error) {
		return (
		<>
			<h3>Error</h3>
			<button onClick={requestGists}>Повторить</button>
		</>
		)
	}

	return <ul>
		{gists.map(renderGists)}
	</ul>
}

export default Gists;