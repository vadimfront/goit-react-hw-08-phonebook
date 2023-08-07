import React from 'react';
import ReactDOM from 'react-dom';
import { SpinnerEl } from './Spinner.styled';

const appRoot = document.getElementById('root');

export default function Spinner() {
  return ReactDOM.createPortal(<SpinnerEl />, appRoot);
}
