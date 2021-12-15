import React from 'react';
import WelcomeLogo from './WelcomeLogo';
import Input from './Input';
import { LoginForm, ButtonPill } from '../styles/LoginStyles/LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <LoginForm>
        <WelcomeLogo />
        <Input />
      </LoginForm>
      <p
        style={{
          textAlign: 'center',
          fontSize: '15px',
          color: '#979797',
        }}
      >
        To learn more about the app and the developers, click the button below.
      </p>
      <a href='https://ezerssss.github.io/' target='_blank' rel='noreferrer'>
        <ButtonPill
          maxW='7rem'
          maxH='2rem'
          fntSize='.8rem'
          bgcolor='gray'
          style={{ marginTop: '15px' }}
        >
          Learn More
        </ButtonPill>
      </a>
    </>
  );
};

export default LoginPage;
