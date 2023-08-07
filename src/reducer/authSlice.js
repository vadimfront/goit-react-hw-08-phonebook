import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  user: JSON.parse(localStorage.getItem('userData')),
  token: Cookies.get('authorization') ?? null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      Cookies.set('authorization', token, { expires: 1 });
      localStorage.setItem('userData', JSON.stringify(user));
    },
  },
});

export const { setCredentials } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
