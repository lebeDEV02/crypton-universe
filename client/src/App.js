import Header from './components/shared/components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
import './styles/App.scss';
import MainPage from './components/MainPage/MainPage';
import { useEffect, useState } from 'react';
import { check } from './http/userApi';
import Comics from './components/Comics/Comics';
import ComicsCards from './components/ComicsCards/ComicsCards';
import ComicCard from './components/ComicCard/ComicCard';
import Admin from './components/Admin/Admin';
import Edit from './components/Admin/Edit/Edit';
function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	useEffect(() => {
		check().then((res) => {
			setIsAuth(true);
			setIsAdmin(res.role === 'admin');
		});
	}, [isAuth]);
	return (
		<>
			<div className="app">
				<Header isAuth={isAuth} setIsAuth={setIsAuth}></Header>
				<div className="app__container">
					<Routes>
						<Route path="/" element={<MainPage isAuth={isAuth} />} />
						<Route path="/comics" element={<Comics isAuth={isAuth} isAdmin={isAdmin} />} />
						<Route path="/comic/:id" element={<ComicsCards />} />
						<Route path="/comic/:id/comic-card/:id" element={<ComicCard />} />
						<Route path="/admin" element={<Admin isAdmin={isAdmin} />} />
						<Route path="/edit/:id" element={<Edit />} />
						{!isAuth && (
							<Route path="login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
						)}
						{!isAuth && <Route path="sign-up" element={<SignUp isAuth={isAuth} />} />}
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
