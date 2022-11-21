import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
	const [counter, setCounter] = useState(0);

	const increaseCounter = () => {
		setCounter(counter + 1);
	};
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="sign-up" element={<SignUp />} />
				{/* <Route path='' element=/> */}
			</Routes>
			{/* <Head />
			body
			<Footer /> */}
		</div>
	);
}

export default App;
