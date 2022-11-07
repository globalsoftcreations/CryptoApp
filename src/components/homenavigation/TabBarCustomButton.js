import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={onPress}>
         {children}
    </TouchableOpacity>
  )
}

export default TabBarCustomButton