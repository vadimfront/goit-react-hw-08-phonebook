import React from 'react';
import { InputText } from './PhoneBookFilter.styled';
import { useDispatch } from 'react-redux';
import { filterContactsByName } from 'reducer/filterSlice';
import { Box } from '@mui/material';

export const PhoneBookFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContactsByName(value));
  };

  return (
    <Box>
      <InputText
        type="text"
        id="filter"
        placeholder="Find contacts by name"
        onChange={handleFilter}
        autoComplete="off"
        label="Find contacts by name"
        variant="standard"
      />
    </Box>
  );
};
