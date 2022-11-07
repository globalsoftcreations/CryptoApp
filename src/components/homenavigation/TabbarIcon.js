import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const TabbarIcon = ({focused, icon, label, isTrade}) => {
    if(isTrade){
        return (
            <View style={{width:50, height:50, borderWidth:1, borderRadius:50, backgroundColor: COLORS.black, alignItems:'center', justifyContent:'center'}}>
                <Image source={icon} resizeMode='contain' style={{tintColor:  COLORS.white, width:25, height:25}}/>
                <Text style={{ color: COLORS.white, fontSize: 12, fontWeight:'500'}}>{label}</Text>
            </View>
            
          )
    }
   else{
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                 <Image source={icon} resizeMode='contain' style={{tintColor: focused ? COLORS.white: COLORS.secondary, width:25, height:25}}/>
                 <Text style={{ color: focused ? COLORS.white: COLORS.secondary, fontSize: 12, fontWeight:'500'}}>{label}</Text>
            </View>
           
            )
    }
    
}

export default TabbarIcon;