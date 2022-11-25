import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';
export const getAll = async () => {
	const { data } = await $host.get('api/comic-card');
	console.log(data);
	return data;
};
