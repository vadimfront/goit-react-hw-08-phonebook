import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const apiBaseUrl = 'https://connections-api.herokuapp.com';

const apiBaseQuery = fetchBaseQuery({
  baseUrl: apiBaseUrl,
  prepareHeaders: headers => {
    const token = Cookies.get('authorization');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export default apiBaseQuery;
