import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo, Text } from '../../Components';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text color="red">StarWars - Wiki</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
