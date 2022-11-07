// import { View, Text } from 'react-native'
// import React from 'react'
import { SET_TRADE_MODEL_VISIBILITY } from '../TabConstant'


export const setTradeModelVisibility = (isVisible) => {
    return (dispatch) => {
        dispatch({
            type: SET_TRADE_MODEL_VISIBILITY,
            payload: isVisible
        });
    }
}


export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DEPOSITE",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITHDROW",
            payload: amount
        });
    }
}
