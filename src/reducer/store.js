import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterContactsReducer } from './filterSlice';
import { contactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSliceReducer } from './authSlice';
import { authApi } from './authApi';

const rootReducer = combineReducers({
  authApi: authApi.reducer,
  contactsApi: contactsApi.reducer,
  filter: filterContactsReducer,
  auth: authSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);
