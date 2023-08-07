import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  createContactsError,
  nameRegExp,
  phoneRegExp,
} from 'constants/constants';
import { checkIfContactExists } from 'utils/phoneBookUtils';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'reducer/contactsApi';
import { Box, Button } from '@mui/material';
import { ErrorMessage, FormEl, InputText } from './PhoneBookForm.styled';
import useErrorMessage from 'hooks/useStatusMessage';

const PhoneBookForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isError, error, status: statusCreate }] =
    useAddContactMutation();
  const {
    toggleState,
    showErrorMessage,
    showSuccessfulMessage,
    showInfoMessage,
  } = useErrorMessage();
  const [isContactExist, setIsContactExist] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegExp, 'Invalid name')
      .required('Name is required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      const checkResult = await checkIfContactExists(contacts, values.name);
      if (checkResult) {
        setIsContactExist(true);
        toggleState();
        return;
      }
      try {
        await addContact(values);
        toggleState();

        resetForm();
      } catch (error) {
        toggleState();
      }
    },
  });
  return (
    <>
      {isError && showErrorMessage(error.status, createContactsError)}
      {isContactExist && showInfoMessage('This user already exists')}
      {statusCreate === 'fulfilled' &&
        showSuccessfulMessage('The contact was successfully created.')}
      <FormEl onSubmit={formik.handleSubmit}>
        <Box>
          <InputText
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            label="name"
            variant="standard"
          />
          {formik.touched.name && formik.errors.name && (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          )}
        </Box>

        <Box>
          <InputText
            id="number"
            name="number"
            placeholder="Number"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            label="number"
            variant="standard"
          />
          {formik.touched.number && formik.errors.number && (
            <div>
              <ErrorMessage>{formik.errors.number}</ErrorMessage>
            </div>
          )}
        </Box>

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </FormEl>
    </>
  );
};

export default PhoneBookForm;
