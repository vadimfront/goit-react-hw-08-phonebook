import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

const useStatusMessage = () => {
  const [isSnackbarShown, setIsSnackbarShown] = useState(false);

  const toggleState = () => {
    setIsSnackbarShown(!isSnackbarShown);
  };

  const chooseErrorMessage = (code, errorMessage) => {
    const res = errorMessage.filter(m => m.code === code);
    return res;
  };

  const snackbarEl = (message, status) => {
    return (
      <Snackbar
        open={isSnackbarShown}
        autoHideDuration={1000}
        onClose={toggleState}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" severity={status}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

  const showErrorMessage = (code, message) => {
    const chosenMessage = chooseErrorMessage(code, message);
    return snackbarEl(chosenMessage[0].message, 'error');
  };

  const showSuccessfulMessage = message => {
    return snackbarEl(message, 'success');
  };

  const showInfoMessage = message => {
    return snackbarEl(message, 'info');
  };

  return {
    toggleState,
    showErrorMessage,
    showSuccessfulMessage,
    showInfoMessage,
  };
};

export default useStatusMessage;
