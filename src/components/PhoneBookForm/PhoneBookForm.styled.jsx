import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const FormEl = styled.form({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  gap: '20px',
  marginTop: '25px',
});

const InputText = styled(TextField)`
  padding-top: 10px;
  padding-bottm: 10px;
  .MuiInput-underline::before {
    border-color: #fff;
  }
  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border-color: #fff;
  }
  .MuiFormLabel-root,
  .MuiInputBase-root {
    color: #fff;
  }
`;

const ErrorMessage = styled.div({
  marginTop: '10px',
  color: 'red',
});

export { InputText, FormEl, ErrorMessage };
