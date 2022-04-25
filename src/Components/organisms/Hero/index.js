import React from 'react';
import { colors } from '../../../Styles/colors';
import { Logo, Text } from '../../atoms';
import { IconButton, PlayButton, Tag } from '../../molecules';
import { ButtonsView, HeroContainer, HeroGradient, HeroImageBackground } from './styles';

export const Hero = () => {
  return(
    <HeroContainer>
      <HeroImageBackground source={{ uri: 'https://i.ytimg.com/vi/rz0aZQ0PoWI/maxresdefault.jpg'}}>
        <HeroGradient colors={['transparent', 'transparent', colors.dark]}>
          <Logo size="small"/>
          <Tag mt={200}>Entrar</Tag>
          <Text fontFamily="bold" size={28} mt={8}>Sorteio</Text>
          <Text size={18}>Sorteia um numero aleatório dentro de um intervalo selecionado pelo usuário.</Text>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline"/>
            <PlayButton />
            <IconButton label="Saiba Mais" iconName="information-circle-outline"/>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
};