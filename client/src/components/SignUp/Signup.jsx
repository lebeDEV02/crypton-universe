import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { register } from '../../http/userApi';
export default function Signup() {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			isAdmin: false,
		},
		onSubmit: ({ username, password, isAdmin }) => {
			console.log('ID ASMIN IS', isAdmin);
			let role = 'user';
			if (isAdmin) {
				role = 'admin';
			}
			register(username, password, role).then((res) => {
				console.log(res);
			});
		},
	});
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="username"
					name="username"
					sx={{
						marginBottom: '1.25rem',
					}}
					label="Username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					sx={{
						marginBottom: '0.75rem',
					}}
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<FormControlLabel
					id="isAdmin"
					name="isAdmin"
					control={<Checkbox />}
					checked={formik.values.isAdmin}
					onChange={formik.handleChange}
					label="Admin"
				/>
				<Button
					color="primary"
					disabled={!(formik.values.username && formik.values.password)}
					variant="contained"
					fullWidth
					type="submit">
					Submit
				</Button>
			</form>
			<h5>
				Already have an account? <Link to="/login">Login now!</Link>
			</h5>
		</>
	);
}
