import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteComic } from '../../../http/comicApi';
import './Comic.scss';
export default function Comic({ title, season, release_year, circulation, img, id, isAdmin }) {
	const edit = (id) => {};
	const onDeleteClick = (id) => {
		deleteComic(id).then((res) => {
			console.log('deleted comic', res);
		});
	};
	return (
		<li className="comic">
			<Link className="comic__link" to={'/comic/' + id}>
				<div className="comic__info">
					<h5 className="comic__title">Title: {title}</h5>
					<p className="comic__season">Season: {season}</p>
					<time className="comic__release-year">Release year: {release_year}</time>
					<p className="comic__circulation">Circulation {circulation}</p>
				</div>
				<img className="comic__img" src={process.env.REACT_APP_API_URL + img}></img>
			</Link>
			{isAdmin && (
				<div>
					<Button variant="contained" color="success">
						<Link onClick={edit(id)} to={'/edit/' + id}>
							Edit
						</Link>
					</Button>
					<Button variant="outlined" color="error" onClick={onDeleteClick.bind(null, id)}>
						Delete
					</Button>
				</div>
			)}
		</li>
	);
}
