import { useState, useEffect, useCallback } from 'react';
import { API_URL_PUBLIC } from '../constants/gists';

const Gists = () => {
	const [gists, setGists] = useState([]);

	useEffect(() => {
		fetch(API_URL_PUBLIC)
		.then((response) => response.json())
		.then((result) => setGists(result));
	}, [])

	const renderGists = useCallback((gist) => <li key={gist.id}>{gist.description || "No description"}</li>, [])

	return <ul>
		{gists.map(renderGists)}
	</ul>
}

export default Gists;