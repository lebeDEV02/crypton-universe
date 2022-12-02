import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
export default function Head({ isAuth, setIsAuth }) {
	const navigate = useNavigate();
	const handleLogoutClick = () => {
		localStorage.clear();
		setIsAuth(false);
		navigate('login');
	};
	useEffect(() => {
		console.log('aboba))');
	}, [isAuth]);
	return (
		<header className="header">
			<div className="header__logo">
				<img src="logo.svg"></img>
			</div>
			<div className="header__navigation">
				{!isAuth && (
					<Link to={'/login'} className="header__navigation-link">
						Login
					</Link>
				)}
				{!isAuth && (
					<Link to={'/sign-up'} className="header__navigation-link">
						Sign Up
					</Link>
				)}
				{isAuth && (
					<Link to={'/comics'} className="header__navigation-link">
						Comics
					</Link>
				)}
				{isAuth && (
					<Button className="header__navigation-link" onClick={handleLogoutClick}>
						Log Out
					</Button>
				)}
			</div>
		</header>
	);
}
