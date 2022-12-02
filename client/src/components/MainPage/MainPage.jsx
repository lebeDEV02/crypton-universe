import React, { useEffect, useState } from 'react';
import './MainPage.scss';
export default function MainPage() {
	const [cards, setCards] = useState([]);

	return (
		<ul className="comic-cards">
			{cards.length &&
				cards.map((card) => {
					return (
						<li key={card.id_comic} className="comic-cards__card">
							<p>Title: {card.title}</p>
							<p>Year of release: {card.year_of_release}</p>
							<p>price: {card.price}</p>
							<p>Circulation: {card.circulation}</p>
							<p>Season: {card.season}</p>
							<img src={process.env.REACT_APP_API_URL + card.img} alt="" />
						</li>
					);
				})}
		</ul>
	);
}
