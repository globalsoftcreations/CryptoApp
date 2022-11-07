import { View, Text, Image, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import MainLayOut from '../MainLayOut';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { marketActionCreater } from '../../states'
import { COLORS, icons, images, SIZES, dummyData } from '../../../constants';
import HeaderComponent from '../../components/HomeScreen/HeaderComponent'
import Chart from '../../components/HomeScreen/Chart';
import { useFocusEffect } from '@react-navigation/native'

const HomeScreen = () => {
  const holding = useSelector((state)=> state.getHoldingReducer);
  const coins = useSelector((state)=> state.getCoinReducer);
  const state = useSelector((state)=> state.TabReducer);
  const dispatch = useDispatch();
  const { getHoldings, getCoinMarket } = bindActionCreators(marketActionCreater, dispatch);
  const[selectedCoin, setSelectedCoin] = useState(null);

  useFocusEffect(
    useCallback(()=>{
      getHoldings(holdings = dummyData.holdings);
      getCoinMarket();
    }, [])
  )

  if(holding.holdings.length == 0 && coins.coin.length == 0){
    return <ActivityIndicator size={'large'} color="white"/>
  }
  
  const totalVal = holding?.holdings.reduce((a,b)=> a +(b.total || 0), 0);
  const valueChange = holding?.holdings.reduce((a,b) => a+ (b.holding_value_change_7d || 0), 0)
  const rate = valueChange/(totalVal - valueChange)*100


  return (
    <MainLayOut>
     
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        <HeaderComponent title="Your Wollet" total={totalVal} rate={rate} titleFontSize={13}/>
       <Chart
         containerStyle ={{ marginTop: SIZES.padding *2}}
         chartPrices = {selectedCoin ? selectedCoin.sparkline_in_7d?.price : coins.coin[0]?.sparkline_in_7d?.price}
        />
       <FlatList
        data={coins.coin}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
        }}
        ListHeaderComponent={
          <View style={{marginBottom: SIZES.radius, marginTop: 15}}>
            <Text style={{color: COLORS.white, fontWeight:'600', fontSize: 18}}>Top currency</Text>
          </View>
        }
        renderItem={({item})=> {

          let priceColor = (item.price_change_percentage_7d_in_currency == 0)? COLORS.lightGray3 : (item.price_change_percentage_7d_in_currency > 0)? COLORS.lightGreen : COLORS.red
          return(
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', height: 55}} onPress={() => setSelectedCoin(item)}>
              {/* <View style={{ flexDirection:'row', marginBottom: 10}}> */}
                <View style={{ width: 35, height:35, borderRadius:25, backgroundColor: COLORS.white, alignItems:'center', justifyContent:'center'}}>
                    <Image style={{width: 20, height: 20}} source={{uri: item.image}}/>
                </View>
                  <Text style={{color: COLORS.white, fontSize: 17, fontWeight:'500', marginLeft: 10}}>{item.id}</Text>
              {/* </View> */}
              <View style={{marginLeft:'auto'}}>
                 <Text style={{color: COLORS.white, fontSize: 17, fontWeight:'500', textAlign:'right'}}>{item.current_price}</Text>
                 <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'flex-end'}}>
                  <View>
                      {
                        item.price_change_percentage_7d_in_currency != 0 && <Image source={icons.upArrow} 
                        style={{ height:10, width:10, tintColor: priceColor, transform: item.price_change_percentage_7d_in_currency > 0 ? [{
                          rotate: '45deg'
                        }] : [{ rotate: '125deg'}]}}/>
                      }
                    </View>
                    <Text style={{color: priceColor}}>{item.price_change_percentage_7d_in_currency.toFixed(2)}%</Text>
                 </View>
                
              </View>
               
                
            </TouchableOpacity>
           
        ) }
        }
        ListFooterComponent={
          <View style={{ marginBottom: 50}}>

          </View>
        }
      />
      </View>
      
    </MainLayOut>
   ) 
}

export default HomeScreen