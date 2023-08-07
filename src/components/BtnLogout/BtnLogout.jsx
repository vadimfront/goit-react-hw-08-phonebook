import { Button } from '@mui/material';
import Spinner from 'components/Spinner/Spinner';
import useLogout from 'hooks/useLogout';
import React from 'react';

export const BtnLogout = () => {
  const { isLoading, handleLogout } = useLogout();

  return (
    <>
      {isLoading && <Spinner />}
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};
