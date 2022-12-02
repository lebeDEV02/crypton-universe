import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComicCards } from '../../http/comicCardApi';
import ComicCard from './ComicCard/ComicCard';
import './ComicsCards.scss';

export default function ComicsCards() {
	const { id } = useParams();
	const [comicCards, setComicCards] = useState([]);

	useEffect(() => {
		fetchComicCards(id).then((res) => {
			console.log('cards', res);
			setComicCards(res);
		});
	}, []);

	return (
		<>
			{comicCards.length && (
				<ul className="comic-cards">
					{comicCards.map((comicCard) => {
						return <ComicCard {...comicCard} key={comicCard.id} />;
					})}
				</ul>
			)}
		</>
	);
}
