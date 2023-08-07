import styled from '@emotion/styled';
import { Container, List, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const ContainerEl = styled(Container)`
  display: flex;
  flexdirection: row;
  justify-content: space-between;
  align-items: center;
`;

const ListEl = styled(List)`
  display: flex;
  flex-direction: row;
`;

const LinkEl = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const NavEl = styled(Toolbar)`
  @media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const MenuLink = styled(Link)({
  color: '#000',
});

export { ContainerEl, ListEl, LinkEl, NavEl, MenuLink };
