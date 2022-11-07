import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketScreen from '../../screens/MarketScreen'


const Stack = createNativeStackNavigator();


const MarketStackNavigation = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name='MarketScreen' component={MarketScreen} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MarketStackNavigation;