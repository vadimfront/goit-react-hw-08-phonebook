import {
  AppBar,
  ListItem,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'reducer/selectors';
import { AccountCircle } from '@mui/icons-material';
import { BtnLogout } from 'components/BtnLogout/BtnLogout';
import { ContainerEl, LinkEl, ListEl, NavEl, MenuLink } from './Header.styled';

export const Header = () => {
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handlerOpen = e => {
    setAnchorEl(e.currentTarget);
  };
  const handlerClose = e => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <ContainerEl>
        <Box>
          <NavEl variant="dense" component="nav">
            <ListEl>
              <ListItem>
                <LinkEl to="/" sx={{ color: '#fff' }}>
                  Home
                </LinkEl>
              </ListItem>
              {user && (
                <ListItem>
                  <LinkEl to="/contacts" sx={{ color: '#fff' }}>
                    Contacts
                  </LinkEl>
                </ListItem>
              )}
            </ListEl>
          </NavEl>
        </Box>
        <Box>
          <IconButton onClick={handlerOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="account-menu"
            open={open}
            onClose={handlerClose}
            anchorEl={anchorEl}
          >
            {!user && (
              <MenuItem>
                <MenuLink to={'/login'}>Login</MenuLink>
              </MenuItem>
            )}
            {!user && (
              <MenuItem>
                <MenuLink to={'/register'}>Registration</MenuLink>
              </MenuItem>
            )}
            {user && (
              <MenuItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography>Hello {user.name}</Typography>
                <BtnLogout />
              </MenuItem>
            )}
          </Menu>
        </Box>
      </ContainerEl>
    </AppBar>
  );
};
