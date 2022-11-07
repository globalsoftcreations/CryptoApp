import { View, Text , FlatList, Image, TouchableOpacity} from 'react-native'
import React, {useCallback} from 'react';
import MainLayOut from '../MainLayOut';
import { useSelector, useDispatch } from 'react-redux';
import { marketActionCreater } from '../../states';
import { useFocusEffect } from '@react-navigation/native'
import { bindActionCreators } from 'redux';
import { COLORS, icons, images, SIZES, dummyData } from '../../../constants';
import HeaderComponent from '../../components/Market/HeaderComponent';
import MarketChart from '../../components/Market/MarketChart'

const MarketScreen = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.getCoinReducer);
  const { getCoinMarket } = bindActionCreators(marketActionCreater, dispatch)

  useFocusEffect(
    useCallback(()=>{
      getCoinMarket();
    }, [])
  )
 console.log("Hodata kara", coins.coin);
  return (
    <MainLayOut>
      <View style={{flex:1, backgroundColor: COLORS.black}}>
         <HeaderComponent/>
         <FlatList
        data={coins.coin}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
        }}
       
        renderItem={({item})=> {
          let priceColor = (item.price_change_percentage_7d_in_currency == 0)? COLORS.lightGray3 : (item.price_change_percentage_7d_in_currency > 0)? COLORS.lightGreen : COLORS.red
          return(
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', height: 55}} onPress={() => setSelectedCoin(item)}>
             
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                  <View style={{ width: 25, height:25, borderRadius:25, backgroundColor: COLORS.white, alignItems:'center', justifyContent:'center'}}>
                      <Image style={{width: 15, height: 15}} source={{uri: item.image}}/>
                  </View>
                    <Text style={{color: COLORS.white, fontSize: 14, fontWeight:'500', marginLeft: 10}}>{item.id}</Text>
                </View>
             
              <View style={{flex:1, alignItems:'flex-end'}}>
                <MarketChart
                    containerStyle ={{ marginTop: SIZES.padding *2}}
                    chartPrices = {item.sparkline_in_7d?.price}
                    />
              </View>
              <View style={{flex:1, alignItems:'flex-end'}}>
                 <Text style={{color: COLORS.white, fontSize: 14, fontWeight:'500', textAlign:'right'}}>${item.current_price}</Text>
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
            </View>
           
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

export default MarketScreen