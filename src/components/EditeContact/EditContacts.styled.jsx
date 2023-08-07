import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';

const ModalEl = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const FormEl = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
  width: 400px;
  background-color: #fff;
`;

export { FormEl, ModalEl };
