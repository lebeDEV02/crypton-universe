import Header from './components/shared/components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
import './styles/App.scss';
import MainPage from './components/MainPage/MainPage';
import { useEffect, useState } from 'react';
import { check } from './http/userApi';
function App() {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		check().then((res) => {
			setIsAuth(true);
			console.log('RESULT IS', res);
		});
	});
	return (
		<>
			<div className="app">
				<Header isAuth={isAuth}></Header>
				<div className="app__container">
					<Routes>
						<Route path="/" element={<MainPage isAuth={isAuth} />} />
						{!isAuth && <Route path="login" element={<Login />} />}
						{!isAuth && <Route path="sign-up" element={<SignUp isAuth={isAuth} />} />}
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
