import { Container, Grid } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'reducer/selectors';

const Registration = () => {
  const user = useSelector(selectUser);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <RegistrationForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
