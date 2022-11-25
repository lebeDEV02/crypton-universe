import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
export default function Head({ isAuth }) {
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
			</div>
		</header>
	);
}
