import { View, Text } from 'react-native'
import React from 'react';
import { GET_HOLDING_REQUEST, GET_HOLDING_SUCCESS, GET_HOLDING_FAIL, GET_COIN_MARKET_REQUEST, GET_COIN_MARKET_SUCCESS, GET_COIN_MARKET_FAIL } from './MarketConstant'

export const getHoldingReducer = (state= { holdings:[]}, action) => {
  switch(action.type){
    case GET_HOLDING_REQUEST:
      return { 
            loading: true, 
            holdings: [] 
           }
    case GET_HOLDING_SUCCESS:
      return {
            loading: false,
            holdings: action.payload
           }  
    case GET_HOLDING_FAIL:
      return { 
            loading: false, 
            error: action.payload 
          } 
    default:
        return state
  }
}

export const getCoinReducer = (state= {coin:[] }, action) => {
  switch(action.type){
    
    case GET_COIN_MARKET_REQUEST:
      return { 
            loading: true, 
            coin: [] 
       }       
    case GET_COIN_MARKET_SUCCESS:
      return {
            loading: false,
            coin: action.payload
       }         
    case GET_COIN_MARKET_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }         
    default:
        return state
  }
}
