import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

const ContainerEl = styled(Container)`
  padding-top: 25px;
  padding-bottom: 25px;
`;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 25px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;

export { Image, Title, ContainerEl };
