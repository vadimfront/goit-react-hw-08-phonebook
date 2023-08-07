import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RequireAuth } from './hoc/RequireAuth';

const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Registration = lazy(() => import('../Pages/Registration/Registration'));
const Home = lazy(() => import('../Pages/Home/Home'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <RequireAuth>
              <Contacts />
            </RequireAuth>
          }
        />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
