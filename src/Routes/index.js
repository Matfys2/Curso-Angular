import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Home, SplashScreen } from '../Screens'
export const Routes = () => {
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}