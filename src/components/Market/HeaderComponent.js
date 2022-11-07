import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { COLORS, icons, images, SIZES, dummyData } from '../../../constants';

const HeaderComponent = () => {
  const[issellected, setIssellected]= useState(false);

  return (
    <View style={{marginTop:35, padding:15}}>
      <Text style={{color: COLORS.white, fontSize: 20, fontWeight:'800'}}>Market</Text>
      <View style={{flexDirection:'row', marginTop:15}}>
          <TouchableOpacity onPress={()=> setIssellected(!issellected)} style={{ flex:1, borderRadius: 10, height: 30, alignItems:'center', justifyContent:'center', backgroundColor: issellected? COLORS.gray: COLORS.lightGray3}}>
             <Text  style={{color: COLORS.white, fontSize: 14, fontWeight:'500'}}>CryptoAssets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setIssellected(!issellected)}  style={{ flex:1, borderRadius: 10, height: 30, alignItems:'center',justifyContent:'center', backgroundColor: issellected? COLORS.lightGray3: COLORS.gray}}>
              <Text  style={{color: COLORS.white, fontSize: 14, fontWeight:'500'}}>Exchanges</Text>
          </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', marginTop: 15}}>
        <View style={{alignItems: 'center', justifyContent:'center', borderRadius:5, backgroundColor: COLORS.lightGray3, padding:5}}>
            <Text style={{color: COLORS.white, fontSize: 12}}>USD</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent:'center', borderRadius:5, backgroundColor: COLORS.lightGray3, padding:5, marginLeft:10}}>
            <Text style={{color: COLORS.white, fontSize: 12}}>%(7d)</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent:'center', borderRadius:5, backgroundColor: COLORS.lightGray3, padding:5, marginLeft:10}}>
            <Text style={{color: COLORS.white, fontSize: 12}}>Top</Text>
        </View>
      </View>
    </View>
  )
}

export default HeaderComponent