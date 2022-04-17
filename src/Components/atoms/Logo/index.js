import React from 'react';
import logoImage from '../../../../assets/Logo/LogoDefault.png';
import { LogoImage } from './styles';

export const Logo = () => {
  return(
    <LogoImage source={logoImage} />
  )
}
