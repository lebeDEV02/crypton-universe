import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';
export const fetchComicCards = async (id = 0) => {
	if (!id) {
		const { data } = await $host.get('api/comic-card');
		return data;
	}
	const { data } = await $host.get('api/comic-card' + `?comicId=${id}`);
	return data;
};

export const fetchComicCard = async (id) => {
	const { data } = await $host.get('api/comic-card' + `/${id}`);
	return data;
};
