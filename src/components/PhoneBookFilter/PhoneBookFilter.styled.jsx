import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const InputText = styled(TextField)`
  margin-top: 25px;
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

export { InputText };
