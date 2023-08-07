import React from 'react';
import * as Yup from 'yup';
import { Box, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'reducer/authApi';
import { setCredentials } from 'reducer/authSlice';
import { ErrorMessage, InputText } from './LoginForm.styled';
import Spinner from 'components/Spinner/Spinner';
import useStatusMessage from 'hooks/useStatusMessage';
import { loginErrorMessage } from 'constants/constants';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggleState, showErrorMessage } = useStatusMessage();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email address')
      .required('Email field is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        const user = await login(values).unwrap();
        dispatch(setCredentials(user));
        navigate('/');
      } catch (err) {
        toggleState();
      }
      formik.resetForm();
    },
  });

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ pt: '25px', pb: '25px' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputText
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              onChange={formik.handleChange}
              variant="standard"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div>
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputText
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={formik.handleChange}
              variant="standard"
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div>
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              </div>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
      {isLoading && <Spinner />}
      {isError && showErrorMessage(error.status, loginErrorMessage)}
    </>
  );
};

export default LoginForm;
