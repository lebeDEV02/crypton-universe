import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.scss';
export default function ComicCard({ title, price, img, id, comicId }) {
	return (
		<li className="comic-card">
			<Link className="comic-card__link" to={`comic-card/${id}`}>
				<div className="comic-card__info">
					<h5 className="comic-card__title">{title}</h5>
					<p className="comic-card__circulation">Price {price}</p>
				</div>
				<img className="comic-card__img" src={process.env.REACT_APP_API_URL + img}></img>
			</Link>
		</li>
	);
}

// comicId: 1;
// createdAt: '2022-11-24T13:20:50.666Z';
// id: 1;
// img: 'e9daf66b-4cd9-44f3-82d6-9d336b68894f.jpg';
// price: 1000;
// title: 'The Beginning';
// updatedAt: '2022-11-24T13:20:50.666Z';
