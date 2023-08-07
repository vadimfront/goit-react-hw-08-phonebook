import React from 'react';
import { Container } from '@mui/material';
import { PhoneBookFilter } from 'components/PhoneBookFilter/PhoneBookFilter';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import { PhoneBookList } from 'components/PhoneBookList/PhoneBookList';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'reducer/contactsApi';
import { selectUser } from 'reducer/selectors';

const Contacts = () => {
  const {
    data: contacts,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetContactsQuery();

  const user = useSelector(selectUser);

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  return (
    <Container>
      {isFetching && <Spinner />}
      {isError && error.message}
      <PhoneBookForm />
      <PhoneBookFilter />
      {!isFetching && contacts.length > 0 && (
        <PhoneBookList contacts={contacts} />
      )}
    </Container>
  );
};

export default Contacts;
