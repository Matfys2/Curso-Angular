import React from 'react';
import { Hero, HomeList, ScreenScrollContainer } from '../../Components';

const FAKE_DATA_ATIVIDADES = [
  {
    id: 0,
    image_url:
      'https://a-static.mlcdn.com.br/1500x1500/darth-vader-star-wars-desenho-retro-vintage-quadro-conspecto/conspecto/135057/4373745dc9ab38b94fc87f73205af9c8.jpg',
  },
  {
    id: 1,
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Daffy_Duck_Duck_Dodgers.jpg/1280px-Daffy_Duck_Duck_Dodgers.jpg',
  },
  {
    id: 2,
    image_url: 'https://i.ytimg.com/vi/cBqQi7JT1ZQ/maxresdefault.jpg',
  },
  {
    id: 3,
    image_url:
      'http://s2.glbimg.com/e5PIbbdXcWLCJp1A-IPJvrhZLqg=/290x217/s2.glbimg.com/HDuuWgCne0ZB8s00VQpINNZR8rQ=/s.glbimg.com/jo/g1/f/original/2015/10/14/srbarriga_02.jpg',
  },
];

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero />
      <HomeList title="Atividades" data={FAKE_DATA_ATIVIDADES}/>
      <HomeList title="Atividades" data={FAKE_DATA_ATIVIDADES}/>
    </ScreenScrollContainer>
  );
}