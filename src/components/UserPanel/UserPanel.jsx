import { BtnLogout } from 'components/BtnLogout/BtnLogout';
import Spinner from 'components/Spinner/Spinner';
import React from 'react';
import { useCurrentUserQuery } from 'reducer/contactsApi';

export const UserPanel = () => {
  const { data, isLoading } = useCurrentUserQuery();

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && data && `Hello ${data.name}`}
      {!isLoading && data && <BtnLogout />}
    </>
  );
};
