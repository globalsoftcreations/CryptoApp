import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import MainLayOut from '../MainLayOut';
import { COLORS, icons, images, SIZES, dummyData } from '../../../constants';

const ProfileScreen = () => {
  const[isVerified, setIsVerified] =useState(false);
  return (
    <MainLayOut>
      <View style={{flex:1, backgroundColor: COLORS.black}}>
        <View style={{padding:15, marginTop:50}}>
           <Text style={{color: COLORS.white, fontSize: 20, fontWeight:'600'}}> Profile</Text>
           <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
              <View style={{}}>
                  <Text style={{color: COLORS.white, fontSize: 13, fontWeight:'600'}}>{dummyData.profile.email}</Text>
              </View>
               <View style={{ flexDirection:'row'}}>
                  <Image source={isVerified ? icons.verified: null} style={{width:20, height:20, tintColor: COLORS.lightGreen}}/>
                  <Text style={{color: isVerified ? COLORS.lightGreen:COLORS.lightGray3, fontSize: 13, fontWeight:'600', marginLeft:5}}>Verified</Text>
               </View>
           </View>
           <Text style={{color: COLORS.lightGray3, fontSize: 13, fontWeight:'600'}}>ID: {dummyData.profile.id}</Text>

           <View style={{ marginTop:20}}>
            <Text style={{color: COLORS.lightGray3, fontSize: 13, fontWeight:'600'}}> ABN</Text>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                <View style={{}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>Launch Screen</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: COLORS.white, fontSize: 13, fontWeight:'600', }}>Home</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white, marginLeft:15}}/>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                <View style={{}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>Apperence</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: COLORS.white, fontSize: 13, fontWeight:'600', }}>Dark</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white, marginLeft:15}}/>
                </View>
            </View>
            
          </View>
          <View style={{ marginTop:20}}>
            <Text style={{color: COLORS.lightGray3, fontSize: 13, fontWeight:'600'}}> ACCOUNT</Text>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                <View style={{}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>Payment Currency</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: COLORS.white, fontSize: 13, fontWeight:'600', }}>USD</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white, marginLeft:15}}/>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                <View style={{}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>Language</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: COLORS.white, fontSize: 13, fontWeight:'600', }}>English</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white, marginLeft:15}}/>
                </View>
            </View>
            
          </View>
          <View style={{ marginTop:20}}>
            <Text style={{color: COLORS.lightGray3, fontSize: 13, fontWeight:'600'}}> SECCURITY</Text>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>FaceID</Text>
                    <Switch/>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>Password setting</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white}}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>change password</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white}}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15}}>
                    <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'600'}}>2-factor Authentication</Text>
                    <Image source={icons.rightArrow} style={{width:13, height:13, tintColor: COLORS.white}}/>
            </View>

            
          </View>
        </View>
      
      
      </View>
    </MainLayOut>
    
  )
}

export default ProfileScreen