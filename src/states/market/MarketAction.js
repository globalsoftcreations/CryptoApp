import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
import { GET_HOLDING_REQUEST, GET_HOLDING_SUCCESS, GET_HOLDING_FAIL, GET_COIN_MARKET_REQUEST, GET_COIN_MARKET_SUCCESS, GET_COIN_MARKET_FAIL} from './MarketConstant';
import { holdings } from '../../../constants/dummy'

const holding = holdings;

export const getHoldingsBegin = () =>({
  type:GET_HOLDING_REQUEST
})

export const getHoldingsSuccess = (myholdings) =>({
  type:GET_HOLDING_SUCCESS,
  payload: myholdings
})

export const getHoldingsFail = (error) =>({
  type:GET_HOLDING_FAIL,
  payload: error
})

export const getHoldings = (holdings = [], currency ="usd", orderBy ="market_cap_desc", sparkline = true, priceChangePerc="7d", perPage=10, page=1, ids ="bitcoin")  => {
    return async (dispatch) => {
      dispatch(getHoldingsBegin)
 
        let ids = holdings.map((item)=> {return item.id}).join(",");
        let apiUrl =`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`
      
      try {
        const respons = await axios({
          url: apiUrl,
          method: "GET",
          header: {
            Accept: 'application/json'
          }
        });
        if (respons.status == 200) {
          // console.log("Ape data", respons.data)
          let myholdings = respons.data.map((item_1) => {
            let coin = holdings.find(a => a.id == item_1.id);
            let price7d = item_1.current_price / (1 + item_1.price_change_percentage_7d_in_currency * 0.01);
            return {
              id: item_1.id,
              symbol: item_1.symbol,
              cname: item_1.name,
              image: item_1.image,
              current_price: item_1.current_price,
              qty: coin.qty,
              total: coin.qty * item_1.current_price,
              price_change_percentage_7d_in_currency: item_1.price_change_percentage_7d_in_currency,
              holding_value_change_7d: (item_1.current_price - price7d) * coin.qty,
              sparkline_in_7d: {
                value: item_1.sparkline_in_7d.price.map(
                  (price) => {
                    return price * coin.qty;
                  }
                )
              }
            };
          });
          // console.log("My Currency", myholdings);
          dispatch(getHoldingsSuccess(myholdings));
        }
        else {
          dispatch(getHoldingsFail(respons.data));
        }
      } catch (error_1) {
        getHoldingsFail(error_1);
      }

  }

}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${orderBy}&per_page=10&page=1&sparkline=true&price_change_percentage=7d&ids=bitcoin

export const getCoinMarketBegining = () =>({
  type:GET_COIN_MARKET_REQUEST
})

export const getCoinMarketSuccess = (myholdings) =>({
  type:GET_COIN_MARKET_SUCCESS,
  payload: myholdings
})

export const getCoinMarketFail = (error) =>({
  type:GET_COIN_MARKET_FAIL,
  payload: error
})

export const getCoinMarket = (currency ="usd", orderBy ="market_cap_desc", sparkline = true, priceChangePerc="7d", perPage=10, page=1)  => {
    return async (dispatch) => {
      dispatch(getCoinMarketBegining())
       
      let apiUrl =`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`
      
      try {
        const respons = await axios({
          url: apiUrl,
          method: "GET",
          header: {
            Accept: 'application/json'
          }
        });
        if (respons.status == 200) {
          dispatch(getCoinMarketSuccess(respons.data));
        }
        else {
          dispatch(getCoinMarketFail(respons.data));
        }
      } catch (error_1) {
        getCoinMarketFail(error_1);
      }

  }

}