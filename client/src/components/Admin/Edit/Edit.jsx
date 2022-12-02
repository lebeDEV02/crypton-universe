import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchComicById, fetchComics, updateComic } from '../../../http/comicApi';
import Comic from '../../Comics/Comic/Comic';
import { useHistory } from 'react-router-dom';

import { Box, Button, Tab, Tabs, TextField } from '@mui/material';
import { useFormik } from 'formik';

export default function Edit() {
	const { id } = useParams();
	let navigate = useNavigate();
	const [comic, setComic] = useState([]);
	const location = useLocation();
	useEffect(() => {
		fetchComicById(id).then((res) => {
			setComic(res);
			formik.setValues(res);
		});
	}, []);

	const formik = useFormik({
		initialValues: {
			title: '',
			circulation: '',
			season: '',
			release_year: '',
			img: '',
		},
		onSubmit: ({ title, circulation, season, release_year, img }) => {
			const formData = new FormData();
			formData.append('title', title);
			formData.append('circulation', circulation);
			formData.append('season', season);
			formData.append('release_year', release_year);
			formData.append('img', img);
			// createComic(formData);
			updateComic(formData, id);
			formik.resetForm();
			navigate('/comics');
		},
	});

	return (
		<div>
			Edit
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="title"
					type="text"
					name="title"
					label="Title"
					value={formik.values.title}
					onChange={formik.handleChange}
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
				/>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="circulation"
					type="number"
					name="circulation"
					label="circulation"
					value={formik.values.circulation}
					onChange={formik.handleChange}
					error={formik.touched.circulation && Boolean(formik.errors.circulation)}
					helperText={formik.touched.circulation && formik.errors.circulation}
				/>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="season"
					type="number"
					name="season"
					label="season"
					value={formik.values.season}
					onChange={formik.handleChange}
					error={formik.touched.season && Boolean(formik.errors.season)}
					helperText={formik.touched.season && formik.errors.season}
				/>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="release_year"
					type="number"
					name="release_year"
					label="Release Year"
					value={formik.values.release_year}
					onChange={formik.handleChange}
					error={formik.touched.release_year && Boolean(formik.errors.release_year)}
					helperText={formik.touched.release_year && formik.errors.release_year}
				/>
				{/* <p>Img</p>
				<Button variant="contained" component="label" onChange={onFileChange}>
					Upload File
					<input type="file" accept="image/*" hidden id="img" name="img" />
				</Button>
				{selectedFile && (
					<div>
						<p>Name: {selectedFile.name}</p>
						<img src={loadedImage}></img>
					</div>
				)} */}

				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
