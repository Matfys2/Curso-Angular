import React from 'react';
import logoImage from '../../../../assets/Logo/LogoDefault.png';
import { LogoImage } from './styles';

const sizes = {
  small: 28,
  large: 64,
}

export const Logo = ({ size }) => {
  return(
    <LogoImage source={logoImage} size={sizes[size || 'large']}/>
  )
}
