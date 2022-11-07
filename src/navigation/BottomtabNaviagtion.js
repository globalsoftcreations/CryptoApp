import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator , BottomTabBar} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './StackNavigation/HomeStackNavigation';
import MarketStackNavigation from './StackNavigation/MarketStackNavigation';
import PortfolioStackNavigation from './StackNavigation/PortfolioStackNavigation';
import ProfileStackNavigation from './StackNavigation/ProfileStackNavigation';
import TabbarIcon from '../components/homenavigation/TabbarIcon';
import TabBarCustomButton from '../components/homenavigation/TabBarCustomButton'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../states'

import { constants,
    dummyData,
    theme,
    COLORS,
    SIZES,
    FONTS,
    icons,} from '../../constants/index'

const Tab = createBottomTabNavigator();

const BottomtabNaviagtion = () => {
  const state = useSelector((state)=> state.TabReducer);

  const dispatch = useDispatch();
  const { setTradeModelVisibility } = bindActionCreators(actionCreators, dispatch)

  const trateTabButtonClickHadler =()=>{
    setTradeModelVisibility(!state)
  }

  return (
    <Tab.Navigator
        screenOptions={{
            "tabBarShowLabel": false,
            "tabBarStyle": [
                {
                  "height": 120,
                  "backgroundColor": COLORS.primary,
                  "borderTopColor":'transparent'
                },
              ]
       }}
    >
        <Tab.Screen 
            name='Home' 
            component={HomeStackNavigation} 
            options={{
                headerShown:false,
                tabBarIcon: ({focused}) =>{
                    if(!state){
                        return(
                            <TabbarIcon
                              focused = {focused}
                              icon = {icons.home}
                              label ='Home'
                            />
                        )
                    }
                }             
           }}
           listeners={{
            tabPress:e =>{
                if(state){
                    e.preventDefault()
                }
            }
           }}
        />

        <Tab.Screen 
                name='Portfolio' 
                component={PortfolioStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) =>{
                        if(!state){
                        return(
                            <TabbarIcon
                              focused = {focused}
                              icon = {icons.briefcase}
                              label ='Portfolio'
                            />
                        )
                        }
                    }             
               }}
               listeners={{
                tabPress:e =>{
                    if(state){
                        e.preventDefault()
                    }
                }
               }}
                /> 

        <Tab.Screen 
                name='Trade' 
                component={MarketStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) =>{
                        return(
                            <TabbarIcon
                              focused = {focused}
                              icon = {!state ? icons.trade: icons.close}
                              iconStyle={state ? { width:8, height:8}: null}
                              label ='Trade'
                              isTrade ={true}
                            />
                        )
                    },
                    tabBarButton: (props)=>{
                       return (
                            <TabBarCustomButton
                                {...props}
                                onPress={trateTabButtonClickHadler}
                            />
                        )
                        
                    }           
               }}
                />

        <Tab.Screen 
                name='Market' 
                component={MarketStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) =>{
                        if(!state){
                        return(
                            <TabbarIcon
                              focused = {focused}
                              icon = {icons.market}
                              label ='Market'
                            />
                        )
                        }
                    }             
               }}
               listeners={{
                tabPress:e =>{
                    if(state){
                        e.preventDefault()
                    }
                }
               }}
                />
        <Tab.Screen 
                name='Profile' 
                component={ProfileStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) =>{
                        if(!state){
                        return(
                          
                            <TabbarIcon
                              focused = {focused}
                              icon = {icons.profile}
                              label ='Profile'
                            />
                        )
                        }
                    }             
               }}
               listeners={{
                tabPress:e =>{
                    if(state){
                        e.preventDefault()
                    }
                }
               }}
                
                />
         </Tab.Navigator>
  )
}
 const styles = StyleSheet.create({
    image:{
        width: 30,
        height:30,
        resizeMode:'content'
    }

 })
export default BottomtabNaviagtion