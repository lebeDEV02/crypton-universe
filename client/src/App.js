import logo from './logo.svg';
import Header from './components/shared/components/Header/Header';
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
import './styles/App.scss';
import MainPage from './components/MainPage/MainPage';
function App() {
	return (
		<>
			<div className="app">
				<Header></Header>
				<div className="app__container">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="login" element={<Login />} />
						<Route path="sign-up" element={<SignUp />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
