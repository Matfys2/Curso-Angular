import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { theme } from '../../../Styles/theme';
import { Text } from '../../atoms';
import { IconBottonContainer } from './styles';

export const IconButton = ({ iconName, label, onPress }) => {
  return(
    <IconBottonContainer onPress={onPress}>
      <Ionicons name={iconName} size={theme.metrics.px(24)} color={theme.colors.white}/>
      <Text fontFamily="semiBold" size={10} mt={6}>{label}</Text>
    </IconBottonContainer>
  )
}