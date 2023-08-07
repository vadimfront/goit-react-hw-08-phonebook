import React from 'react';
import PhoneBookImage from '../../assets/phone-book.png';
import { ContainerEl, Image, Title } from './Home.styled';

const Home = () => {
  return (
    <ContainerEl>
      <Title variant="h3">Welcome to the phone book</Title>
      <Image src={PhoneBookImage} alt="phone book" />
    </ContainerEl>
  );
};

export default Home;
