import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { theme } from '../../../Styles/theme';
import { Text } from '../../atoms';
import { PlayBottonContainer } from './style';

export const PlayButton = ({ onPress }) => (
  <PlayBottonContainer onPress={onPress}>
    <Ionicons name="play" size={theme.metrics.px(12)} color={theme.colors.black} />
    <Text fontFamily="bold" size={14}>Play</Text>
  </PlayBottonContainer>
)