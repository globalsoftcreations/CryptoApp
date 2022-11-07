import { View, Text } from 'react-native'
import React from 'react';
import { combineReducers } from 'redux';
import {TabReducer, AccountReducer } from './tab/TabReducer';
import { getHoldingReducer, getCoinReducer } from './market/MarketReducer';

 const reducers = combineReducers(
    {
        TabReducer,
        AccountReducer,
        getHoldingReducer,
        getCoinReducer
    }
 )


export default  reducers;