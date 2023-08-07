import React from 'react';
import * as Yup from 'yup';
import { Box, Button, Grid } from '@mui/material';
import Spinner from 'components/Spinner/Spinner';
import { useFormik } from 'formik';
import { useSingnupMutation } from 'reducer/authApi';
import { setCredentials } from 'reducer/authSlice';
import { ErrorMessage, InputText } from './RegistrationForm.styled';
import { registrationErrorMessage } from 'constants/constants';
import useStatusMessage from 'hooks/useStatusMessage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const [signup, { isLoading, isError, error }] = useSingnupMutation();
  const { toggleState, showErrorMessage } = useStatusMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .required('Name is required'),

    email: Yup.string()
      .email('Enter a valid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const user = await signup(values).unwrap();

        dispatch(setCredentials(user));
        navigate('/contacts');
      } catch (err) {
        toggleState();
      }
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
              id="name"
              label="name"
              name="name"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputText
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
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
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
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
      {isError && showErrorMessage(error.status, registrationErrorMessage)}
    </>
  );
};
