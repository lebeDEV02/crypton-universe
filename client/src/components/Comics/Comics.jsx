import { InputLabel, Select } from '@material-ui/core';
import { FormControl, MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchComics } from '../../http/comicApi';
import Comic from './Comic/Comic';
import './Comics.scss';

export default function Comics({ isAdmin }) {
	const [comics, setComics] = useState([]);
	useEffect(() => {
		fetchComics().then((res) => {
			setComics(res);
		});
	}, []);

	const [season, setSeason] = React.useState();

	const [circulation, setCirculation] = React.useState();

	const handleSeasonChange = (event) => {
		setSeason(event.target.value);
		if (circulation) {
			fetchComics({ circulation, season: +event.target.value }).then((res) => {
				setComics(res);
			});
			return;
		}
		fetchComics({ season: +event.target.value }).then((res) => {
			setComics(res);
		});
	};
	const handleCirculationChange = (event) => {
		setCirculation(event.target.value);
		if (season) {
			fetchComics({ season, circulation: +event.target.value }).then((res) => {
				setComics(res);
			});
			return;
		}
		fetchComics({ circulation: +event.target.value }).then((res) => {
			setComics(res);
		});
	};
	return (
		<>
			<div>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Season</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleSeasonChange}>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
					</Select>
					<InputLabel id="demo-simple-select-label">Circulation</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleCirculationChange}>
						<MenuItem value={500}>500</MenuItem>
						<MenuItem value={1000}>1000</MenuItem>
					</Select>
				</FormControl>
				<div>
					{comics.length && (
						<ul className="comics">
							{comics.map((comic) => {
								return <Comic {...comic} key={comic.id} isAdmin={isAdmin} />;
							})}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}
