import React, { useEffect, useState } from 'react';
import './MainPage.scss';
export default function MainPage() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/api/test')
			.then((res) => res.json())
			.then((response) => {
				setCards(response);
			});
	}, []);

	return (
		<ul className="comic-cards">
			{cards.length &&
				cards.map((card) => {
					return (
						<li key={card.id_comic} className="comic-cards__card">
							<p>Title: {card.title}</p>
							<p>Year of release: {card.year_of_release}</p>
							<p>Amount: {card.amount}</p>
							<p>Circulation: {card.circulation}</p>
							<p>Season: {card.season}</p>
						</li>
					);
				})}
		</ul>
	);
}
