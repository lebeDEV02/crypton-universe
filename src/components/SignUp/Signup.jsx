import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import Button from '@material-ui/core/Button';

export default function Signup() {
	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
			isAdmin: false,
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
					id="login"
					name="login"
					sx={{
						marginBottom: '1.25rem',
					}}
					label="Login"
					value={formik.values.login}
					onChange={formik.handleChange}
					error={formik.touched.login && Boolean(formik.errors.login)}
					helperText={formik.touched.login && formik.errors.login}
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
					disabled={!(formik.values.login && formik.values.password)}
					variant="contained"
					fullWidth
					type="submit">
					Submit
				</Button>
			</form>
		</>
	);
}
