import styled from 'styled-components';

export const ButtonPill = styled.button`
  display: block;
  margin: 1.8rem auto 0.8rem;

  width: 75%;
  max-width: ${(props) => (props.maxW ? props.maxW : 75)};
  height: 3rem;
  max-height: ${(props) => (props.maxH ? props.maxH : '3rem')};
  border-radius: 2rem;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#e18829')};
  border: 2px solid ${(props) => (props.bgcolor ? props.bgcolor : '#e18829')};
  color: ${(props) => (props.color ? props.color : '#fff')};

  font-size: ${(props) => (props.fntSize ? props.fntSize : '1rem')};

  cursor: pointer;
`;

export const LoginForm = styled.form`
  background-color: #fff;
  border: 3px solid #eaeced;
  border-radius: 1rem;

  width: 400px;
  margin: 60px auto 40px;

  padding: 1.5rem 0.5rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
