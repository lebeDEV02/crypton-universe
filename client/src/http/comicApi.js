import { $authHost, $host } from '.';

export const fetchComics = async (params) => {
	if (params) {
		console.log(params);
		const { season, circulation } = params;
		if (season && circulation) {
			const { data } = await $host.get(
				'api/comic' + '?season=' + season + '&' + 'circulation=' + circulation,
			);
			return data;
		}
		if (season) {
			const { data } = await $host.get('api/comic' + '?season=' + season);
			return data;
		}
		if (circulation) {
			const { data } = await $host.get('api/comic' + '?circulation=' + circulation);
			return data;
		}
	}
	const { data } = await $host.get('api/comic');
	return data;
};

export const fetchComicById = async (id) => {
	const { data } = await $host.get('api/comic/' + id);
	return data;
};

export const createComic = async (params) => {
	const { data } = await $authHost.post('api/comic', params);
	console.log(data);
	return data;
};

export const updateComic = async (values, id) => {
	const comic = await $authHost.put('api/comic/' + id, values);
	return comic;
};

export const deleteComic = async (id) => {
	const comic = await $authHost.delete('api/comic/' + id);
	return comic;
};
