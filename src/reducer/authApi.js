import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from './apiBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: apiBaseQuery,
  endpoints: builder => ({
    singnup: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSingnupMutation, useLoginMutation, useLogoutMutation } =
  authApi;
