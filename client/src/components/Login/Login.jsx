import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Button from '@material-ui/core/Button';
import { login } from '../../http/userApi';
import './Login.scss';

export default function Login() {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: ({ username, password }) => {
			login(username, password).then((res) => {
				console.log(res);
			});
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="username"
					name="username"
					label="Username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					fullWidth
					sx={{
						marginBottom: '1.25rem',
					}}
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button
					color="primary"
					variant="contained"
					disabled={!(formik.values.username && formik.values.password)}
					fullWidth
					type="submit">
					Submit
				</Button>
			</form>
			<h5>
				Don't have an account? <Link to="/sign-up">Sign up now!</Link>
			</h5>
		</>
	);
}
