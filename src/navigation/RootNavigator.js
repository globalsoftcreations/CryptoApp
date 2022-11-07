import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomtabNaviagtion from './BottomtabNaviagtion'

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  name='BottomtabNaviagtion' component={BottomtabNaviagtion} options={{headerShown:false}}/>
    </Stack.Navigator>
  
  )
}

export default RootNavigator