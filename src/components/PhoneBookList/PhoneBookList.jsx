import React from 'react';
import PropTypes from 'prop-types';
import {
  BtnDelete,
  BtnEdit,
  ContactName,
  ContactNumber,
  List,
  ListItem,
  NotFound,
} from './PhoneBookList.styed';
import { contactsFilter } from 'utils/phoneBookUtils';
import { useDeleteContactMutation } from 'reducer/contactsApi';
import { getFilterContactsTerm } from 'reducer/selectors';
import { useSelector } from 'react-redux';
import { ReactComponent as IconDelete } from '../../assets/svg/iconDelete.svg';
import useStatusMessage from 'hooks/useStatusMessage';
import { EditNote } from '@mui/icons-material';
import { useState } from 'react';
import { EditContact } from 'components/EditeContact/EditContact';

export const PhoneBookList = ({ contacts }) => {
  const [editeModal, setEditModal] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [deleteContacts, { status: statusDelete }] = useDeleteContactMutation();
  const { toggleState, showSuccessfulMessage } = useStatusMessage();
  const filterTerm = useSelector(getFilterContactsTerm);

  const handlerDelete = id => {
    deleteContacts(id);
    toggleState();
  };

  const toggleEditModal = contactData => {
    setEditModal(!editeModal);
    setContactData(contactData);
  };

  const filteredContacts = contacts && contactsFilter(contacts, filterTerm);
  const isContent = filteredContacts.length > 0;

  const noFilterResults = contacts.length > 0 && !filteredContacts.length > 0;

  return (
    <>
      {isContent && (
        <List>
          {filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              <BtnEdit onClick={() => toggleEditModal({ name, number, id })}>
                <EditNote />
              </BtnEdit>
              <BtnDelete size="small" onClick={() => handlerDelete(id)}>
                <IconDelete />
              </BtnDelete>
            </ListItem>
          ))}
        </List>
      )}
      {editeModal && (
        <EditContact
          contactData={contactData}
          editeModal={editeModal}
          toggleEditModal={toggleEditModal}
        />
      )}
      {noFilterResults && <NotFound>There is no matches</NotFound>}
      {statusDelete === 'fulfilled' &&
        showSuccessfulMessage('The contact was successfully deleted.')}
    </>
  );
};

PhoneBookList.propsTypes = {
  contacts: PropTypes.object,
};
