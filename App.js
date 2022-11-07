
import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import store from './src/states/store'


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootNavigator/>
      </NavigationContainer>
    </Provider>
    
  )
}
