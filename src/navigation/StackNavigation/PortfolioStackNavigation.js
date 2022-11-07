import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Portfolio from '../../screens/PortfolioScreen';
import Portfolio from '../../screens/PortfolioScreen'


const Stack = createNativeStackNavigator();


const PortfolioStackNavigation = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name='PortfolioScreen' component={Portfolio} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default PortfolioStackNavigation;