import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useCallback, useState} from 'react';
import MainLayOut from '../MainLayOut'
import { useSelector, useDispatch } from 'react-redux';
import HeaderComponent from '../../components/HomeScreen/HeaderComponent'
import { marketActionCreater } from '../../states'
import { COLORS, icons, images, SIZES, dummyData } from '../../../constants';
import { useFocusEffect } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import Chart from '../../components/HomeScreen/Chart'

const Portfolio = () => {
  const myHoldings = useSelector((state) => state.getHoldingReducer);
  const dispatch = useDispatch();
  const { getHoldings} = bindActionCreators(marketActionCreater, dispatch);
  const[selectedCoin, setSelectedCoin] = useState(null);

  useFocusEffect(
    useCallback(()=>{
      getHoldings(holdings = dummyData.holdings);
    }, [])
  )


  if(myHoldings.holdings.length == 0 ){
    return <ActivityIndicator size={'large'} color="white"/>
  }
  
  const totalVal = myHoldings?.holdings.reduce((a,b)=> a +(b.total || 0), 0);
  const valueChange = myHoldings?.holdings.reduce((a,b) => a+ (b.holding_value_change_7d || 0), 0);
  const rate = valueChange/(totalVal - valueChange)*100;

  return (
    <MainLayOut>
      <View style={{flex:1, backgroundColor: COLORS.black}}>
         <HeaderComponent title="Portfolio" total={totalVal}  rate={rate} titleFontSize={20}/>
         <Chart
            containerStyle ={{ marginTop: SIZES.padding *2}}
            chartPrices = {selectedCoin ? selectedCoin.sparkline_in_7d?.value : myHoldings.holdings[0]?.sparkline_in_7d?.value}
           />
       <FlatList
        data={myHoldings.holdings}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
        }}
        ListHeaderComponent={
          <View style={{marginBottom: SIZES.radius, marginTop: 15}}>
            <Text style={{color: COLORS.white, fontWeight:'600', fontSize: 18}}>Your Assets</Text>
            <View style={{ flexDirection: 'row', marginTop:10}}> 
                <Text style={{flex:1, color: COLORS.white, fontSize:12, fontWeight: '400' }}>Assets</Text>
                <Text style={{flex:1, color: COLORS.white, fontSize:12, fontWeight: '400', textAlign:'right'}}>Price</Text>
                <Text style={{flex:1, color: COLORS.white, fontSize:12, fontWeight: '400', textAlign:'right'}}>holdings</Text>
            </View>
          </View>
        }
        renderItem={({item})=> {
          let priceColor = (item.price_change_percentage_7d_in_currency == 0)? COLORS.lightGray3 : (item.price_change_percentage_7d_in_currency > 0)? COLORS.lightGreen : COLORS.red
          return(
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', height: 55}} onPress={() => setSelectedCoin(item)}>
             
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                  <View style={{ width: 35, height:35, borderRadius:25, backgroundColor: COLORS.white, alignItems:'center', justifyContent:'center'}}>
                      <Image style={{width: 20, height: 20}} source={{uri: item.image}}/>
                  </View>
                    <Text style={{color: COLORS.white, fontSize: 17, fontWeight:'500', marginLeft: 10}}>{item.id}</Text>
                </View>
             
              <View style={{flex:1, alignItems:'flex-end'}}>
                 <Text style={{color: COLORS.white, fontSize: 17, fontWeight:'500', textAlign:'right'}}>${item.current_price}</Text>
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
              <View style={{flex:1, alignItems:'flex-end'}}>
                 <Text style={{color: COLORS.white, fontSize: 15, fontWeight:'500', textAlign:'right'}}>${(item.qty * item.current_price).toFixed(2)}</Text>
                 <View style={{flexDirection:'row'}}>
                    <Text style={{color: COLORS.lightGray3, fontSize: 14, fontWeight:'500', textAlign:'right'}}>{item.qty}</Text>
                    <Text style={{color: COLORS.lightGray3, fontSize: 12, fontWeight:'500', textAlign:'right', marginLeft:5}}>{(item.symbol).toUpperCase()}</Text>
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

export default Portfolio;