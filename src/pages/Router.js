import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
const Router = () => {
	return (
			<BrowserRouter>
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="/chats">Chats</Link>
				</li>
			</ul>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/chats" element={<Chats />} />
				</Routes>
			</BrowserRouter>
		)
}

export default Router;