import { Container, Grid } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
