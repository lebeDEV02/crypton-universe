import { Box, Button, Tab, Tabs, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { createComic } from '../../http/comicApi';
import { TabPanel, TabContext, TabList } from '@mui/lab';

export default function Admin({ isAdmin }) {
	const [selectedFile, setSelectedFile] = useState(null);
	const [loadedImage, setLoadedImage] = useState(null);
	const onFileChange = async (event) => {
		setSelectedFile(event.target.files[0]);
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onloadend = () => {
			setLoadedImage(reader.result);
		};

		await formik.setFieldValue('img', event.target.files[0]);
	};
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
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
			console.log(season);
			formData.append('title', title);
			formData.append('circulation', circulation);
			formData.append('season', season);
			formData.append('release_year', release_year);
			formData.append('img', img);
			createComic(formData);
			formik.resetForm();
		},
	});
	return (
		<>
			{!isAdmin && <h1>You don't have permissions</h1>}
			{isAdmin && (
				<div>
					Admin Panel
					<div>
						<TabContext value={value}>
							<div>
								<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
									<TabList onChange={handleChange} aria-label="lab API tabs example">
										<Tab label="Добавить комикс" value="1" />
										<Tab label="Добавить карточку" value="2" />
										<Tab label="Item Three" value="3" />
									</TabList>
								</Box>
							</div>
							<div>
								<TabPanel value="1">
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
										<p>Img</p>
										<Button variant="contained" component="label" onChange={onFileChange}>
											Upload File
											<input type="file" accept="image/*" hidden id="img" name="img" />
										</Button>
										{selectedFile && (
											<div>
												<p>Name: {selectedFile.name}</p>
												<img src={loadedImage}></img>
											</div>
										)}

										<Button color="primary" variant="contained" fullWidth type="submit">
											Submit
										</Button>
									</form>
								</TabPanel>
								<TabPanel value="2">Item Two</TabPanel>
								<TabPanel value="3">Item Three</TabPanel>
							</div>
						</TabContext>
					</div>
				</div>
			)}
		</>
	);
}
