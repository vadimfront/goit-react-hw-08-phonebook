import { Header } from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
