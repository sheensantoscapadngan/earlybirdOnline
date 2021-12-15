import React, { useState } from 'react';
import InputProcess from './InputProcess';
import { ButtonPill } from '../styles/LoginStyles/LoginPage.styled';
import { InputContainer } from '../styles/LoginStyles/Input.styled';

const Input = () => {
  console.log('render');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsError(false);
  };

  const handleSubmitState = () => {
    setIsSubmitted(false);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <>
      <InputContainer onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Moodle Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Moodle Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isSubmitted && (
          <InputProcess
            username={username}
            password={password}
            handleSubmitState={handleSubmitState}
            handleError={handleError}
          />
        )}
        {isError && <p style={{ textAlign: 'center' }}>Login Failed</p>}
        <ButtonPill
          type='submit'
          onClick={handleSubmit}
          disabled={username && password ? false : true}
        >
          LOGIN
        </ButtonPill>
      </InputContainer>
    </>
  );
};

export default Input;
