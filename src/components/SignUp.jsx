import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';

export default function SignUp() {
	const formik = useFormik({
		initialValues: {
			login: '',
			password: 'foobar',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
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
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
