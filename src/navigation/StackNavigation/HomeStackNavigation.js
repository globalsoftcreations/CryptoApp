import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}> 
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation