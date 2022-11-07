import { View, Text } from 'react-native'
import React from 'react';
import { SET_TRADE_MODEL_VISIBILITY } from '../TabConstant'

const initialvalue =0
const initialState = false

export const TabReducer = (state= initialState, action) => {
  switch(action.type){
    case SET_TRADE_MODEL_VISIBILITY:
      return action.payload
    default:
        return state;
    }
}

export const AccountReducer = (state = initialvalue, action) => {
  switch(action.type){
    case "DEPOSITE":
      return state + action.payload
    case "WITHDROW":
        return state - action.payload
    default:
        return state
    }
}

