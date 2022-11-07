import { View, Text, TouchableOpacity , StyleSheet, Image} from 'react-native'
import React from 'react'
import { constants,
    dummyData,
    theme,
    COLORS,
    SIZES,
    FONTS,
    icons,} from '../../../constants/index'

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle}} 
        onPress={onPress}>
        <Image source={icon} resizeMode='contain' style={styles.image}/>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create(
    {
        image:{
           width:15,
           height:15
        },
        text:{
           padding:10,
           
        }
    }
);
export default IconTextButton