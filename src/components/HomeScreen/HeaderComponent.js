import { View, Text, Image } from 'react-native'
import React from 'react';
import { COLORS, icons, images, SIZES } from '../../../constants/index';
import IconTextButton from '../../components/homenavigation/IconTextButton'

const HeaderComponent = ({title, total, rate, titleFontSize}) => {
  return (
    <View style={{backgroundColor: COLORS.gray, borderBottomLeftRadius:20, borderBottomRightRadius:20, height:150}}>
        <View style={{marginLeft:17}}>
        <Text style={{fontSize: titleFontSize, fontWeight:'700', color: COLORS.lightGray3, marginTop: 40, marginBottom:8}}> {title}</Text>
            <View style={{flexDirection:'row', alignItems: "flex-end"}}>
            <Text style={{fontSize: 12, fontWeight:'400', color: COLORS.lightGray3}}>$ </Text>
            <Text style={{fontSize: 17, fontWeight:'700', color: COLORS.white}}>{total.toLocaleString()} </Text>
            <Text style={{fontSize: 12, fontWeight:'400', color: COLORS.lightGray3}}> USD</Text>
            </View>
            {rate != 0 && 
              <View style={{flexDirection:'row', alignItems: 'flex-end', marginTop:5}}>
              <Image source={icons.upArrow} style={{width: 8, height:8, tintColor: ((rate > 0) ? COLORS.lightGreen : COLORS.red), transform:(rate >0) ? [{
                rotate: '45deg'}]: [{ rotate:'125deg'}]
              }} />
              <Text style={{fontSize: 12, fontWeight:'400', marginLeft: 5, color: ((rate > 0) ? COLORS.lightGreen : COLORS.red)}}>{rate.toFixed(2)} % </Text>
              <Text style={{fontSize: 10, fontWeight:'400', color: COLORS.lightGray3, }}> 7d change</Text>
          </View>
            
            }
            
        </View>
        <View style={{ flexDirection:'row', marginTop: 30, marginBottom: -15, paddingHorizontal: SIZES.radius}}>
            <IconTextButton label="Transfert" icon={icons.send} onPress={() => console.log("Transfer")} containerStyle={{ flex:1,  marginRight: SIZES.radius}}/>
            <IconTextButton label="WithDrow" icon={icons.withdraw} onPress={() => console.log("Withdrow")} containerStyle={{ flex: 1,}}/>
           
        </View>
   </View>
  )
}

export default HeaderComponent