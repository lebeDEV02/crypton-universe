import { $host } from '.';
import jwt_decode from 'jwt-decode';
export const login = async (username, password) => {
	console.log(username, password);
	const { data } = await $host.post('api/user/login', { username, password });
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};

export const register = async (username, password, role) => {
	const { data } = await $host.post('api/user/registration', { username, password, role });
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};

export const check = async () => {
	const { data } = await $host.get('api/user/auth');
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};
