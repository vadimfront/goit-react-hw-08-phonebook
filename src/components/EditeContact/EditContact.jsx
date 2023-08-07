import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import { FormEl, ModalEl } from './EditContacts.styled';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'reducer/contactsApi';
import { useState } from 'react';
import { checkIfContactExists } from 'utils/phoneBookUtils';
import useStatusMessage from 'hooks/useStatusMessage';

export const EditContact = ({ contactData, editeModal, toggleEditModal }) => {
  const [name, setName] = useState(contactData.name);
  const [number, setNumber] = useState(contactData.number);
  const [isUserExist, setIsUserExist] = useState(false);
  const { data: contacts } = useGetContactsQuery();
  const [updateContact] = useUpdateContactMutation();
  const { toggleState, showInfoMessage } = useStatusMessage();

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      const data = {
        contactId: contactData.id,
        contact: { name, number },
      };
      const checkResult = contacts && checkIfContactExists(contacts, name);
      if (checkResult) {
        console.log(checkResult);
        toggleState();
        setIsUserExist(true);
        return;
      }
      await updateContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalEl
      open={editeModal}
      onClose={toggleEditModal}
      onSubmit={handleUpdate}
    >
      <FormEl component="form">
        <TextField
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          placeholder="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Save
        </Button>
        {isUserExist &&
          showInfoMessage('A user with the same name already exists')}
      </FormEl>
    </ModalEl>
  );
};

EditContact.propsTypes = {
  contactData: PropTypes.object,
  editeModal: PropTypes.bool,
  toggleEditModal: PropTypes.func,
};
