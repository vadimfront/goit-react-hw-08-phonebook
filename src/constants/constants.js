const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const resetUser = { user: null, token: null };

const loginErrorMessage = [{ code: 400, message: 'Login error.' }];
const registrationErrorMessage = [
  { code: 400, message: 'User creation error' },
  { code: 500, message: 'Server error.' },
];
const createContactsError = [
  { code: 400, message: 'Error creating contact.' },
  { code: 401, message: 'Missing header with authorization token.' },
];

export {
  nameRegExp,
  phoneRegExp,
  resetUser,
  loginErrorMessage,
  registrationErrorMessage,
  createContactsError,
};
