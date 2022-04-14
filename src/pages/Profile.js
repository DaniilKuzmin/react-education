import { useCallback } from 'react';
import { changeVisible, checkBoxChecked } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';

const Profile = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const {showName, name} = useSelector((state) => state);

	const dispatch = useDispatch()

	const setShowName = useCallback(() => {
		dispatch(changeVisible);
		dispatch(checkBoxChecked);
	}, [dispatch])

	return <div>
			<h2>Profile</h2>
			<h3>Show Name<Checkbox {...label}
				sx={{color: grey[100], '&.Mui-checked': {color: grey[100]}}}
				defaultChecked={false}
				onChange={setShowName} />
			</h3>
			<blockquote>
				{showName && <h3>{name}</h3>}
			</blockquote>
			</div>
}
export default Profile;