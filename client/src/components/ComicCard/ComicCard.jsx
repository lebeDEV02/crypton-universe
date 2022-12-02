import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComicCard } from '../../http/comicCardApi';

export default function ComicCard() {
	const { id } = useParams();
	const [comicCard, setComicCard] = useState([]);

	useEffect(() => {
		fetchComicCard(id).then((res) => {
			console.log('carD', res);
			setComicCard(res);
		});
	}, []);
	return (
		<li className="comic-card">
			<div className="comic-card__info">
				<h5 className="comic-card__title">{comicCard.title}</h5>
				<p className="comic-card__circulation">Price {comicCard.price}</p>
			</div>
			<img className="comic-card__img" src={process.env.REACT_APP_API_URL + comicCard.img}></img>
		</li>
	);
}
