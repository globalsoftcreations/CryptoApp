import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';


const Stack = createNativeStackNavigator();


const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default ProfileStackNavigation;