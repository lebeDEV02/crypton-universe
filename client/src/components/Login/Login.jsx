import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Button from '@material-ui/core/Button';
import './Login.scss';

export default function Login() {
	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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
					id="login"
					name="login"
					label="Login"
					value={formik.values.login}
					onChange={formik.handleChange}
					error={formik.touched.login && Boolean(formik.errors.login)}
					helperText={formik.touched.login && formik.errors.login}
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
					disabled={!(formik.values.login && formik.values.password)}
					fullWidth
					type="submit">
					Submit
				</Button>
			</form>
		</>
	);
}
