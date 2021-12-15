import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 90%;
  margin: 2rem auto 0;

  @media (max-width: 767px) {
    width: 100%;
  }

  input {
    display: block;
    width: 100%;
    height: 3.5rem;
    border-radius: 1rem;
    border: 2px solid #eaeced;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1rem;
  }
`;
