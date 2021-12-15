import React from 'react';
import { LogoContainer } from '../styles/LoginStyles/WelcomeLogo.styled';

import Welcome_logo from './welcome_logo.png';

const WelcomeLogo = () => {
  return (
    <LogoContainer>
      <div>
        <h1>Welcome online,</h1>
        <h1 style={{ color: '#E18829' }}>earlybird!</h1>
      </div>
      <img src={Welcome_logo} alt='earlybird' />
    </LogoContainer>
  );
};

export default WelcomeLogo;
