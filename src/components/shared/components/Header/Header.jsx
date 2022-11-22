import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
export default function Head() {
	return (
		<header className="header">
			<div className="header__logo">
				<img src="logo.svg"></img>
			</div>
			<div className="header__navigation">
				<Link to={'/login'} className="header__navigation-link">
					Login
				</Link>
				<Link to={'/sign-up'} className="header__navigation-link">
					Sign Up
				</Link>
			</div>
		</header>
	);
}
