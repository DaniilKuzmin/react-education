import { useCallback, useState } from 'react';
import { changeVisible, updateName } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Profile = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const {showName, name} = useSelector((state) => state.profile);
	const [value, setValue] = useState(name);
	const handleInput = (e) => {
		setValue(e.target.value)
	}
	const saveName = () => {
		dispatch(updateName(value))
	}

	const dispatch = useDispatch()

	const setShowName = useCallback(() => {
		dispatch(changeVisible);
	}, [dispatch])

	return <div>
			<h2>Profile</h2>
			<h3>Показать имя<Checkbox {...label}
				sx={{color: grey[100], '&.Mui-checked': {color: grey[100]}}}
				defaultChecked
				onChange={setShowName} />
			</h3>
			<blockquote>
				{showName && <h3>Здравствуйте, {name}.</h3>}
			</blockquote>
			<TextField sx={{color: grey[100]}} placeholder="Введите имя" label="name" value={value} onChange={handleInput} />
			<Button onClick={saveName}>Сохранить</Button>
			</div>
}
export default Profile;