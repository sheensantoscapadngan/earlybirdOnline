import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  margin: auto;
  width: 15.7rem;

  div {
    margin-top: 4.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  img {
    height: 10rem;
    width: auto;
    margin-left: -3.5rem;
  }

  @media (max-width: 320px) {
    width: 14.2rem;

    div {
      margin-top: 3.5rem;
    }

    h1 {
      font-size: 2.3rem;
      margin: 0;
    }

    img {
      height: 8rem;
      width: auto;
      margin-left: -2.5rem;
    }
  }
`;
