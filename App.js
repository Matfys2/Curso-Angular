import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
  useFonts
} from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/Routes';
import { theme } from './src/Styles';

export default function App() {
  let [fontLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  if(!fontLoaded)
    return <AppLoading/>

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
