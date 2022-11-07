import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import {ChartDot, ChartPath, ChartPathProvider, ChartXLabel, ChartYLabel, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { COLORS, icons, images, SIZES } from '../../../constants';
import moment from 'moment';

const Chart = ({containerStyle, chartPrices}) => {
  const startUnixTimeStamp = moment().subtract(7, 'day').unix();
  const {width: SIZE} = Dimensions.get('window');

  const data = chartPrices ? chartPrices?.map((item, index)=>{
    return{
      x: startUnixTimeStamp + (index + 1)* 3600,
      y: item
    }
  }): []

  const formateUSD =(value)=>{
    'worklet';
    if(value === ''){
      return ''
    }
    return `$${Number(value).toFixed}`

  }

  const formatNumber =(value, roundingPoint)=>{
    if(value > 1e9){
        return `${(value/ 1e9).toFixed(roundingPoint)}B`
    }
    else if(value > 1e6){
      return `${(value/ 1e6).toFixed(roundingPoint)}M`
      }
     else if(value > 1e3){
        return `${(value/ 1e3).toFixed(roundingPoint)}K`
      }
      else{
        return value.toFixed(roundingPoint)
      }
  }

  const getYaxiceLabelValue = ()=>{
    if(chartPrices != undefined){
      const minValue = Math.min(...chartPrices);
      const maxValue = Math.max(...chartPrices);
      const midValue = (minValue + maxValue)/2; 
      const hiughMidValue = (maxValue + midValue)/2;
      const lowerMidValue = (minValue + midValue)/2;

      const roundingPoint = 2

      return[
        formatNumber(maxValue, roundingPoint),
        formatNumber(hiughMidValue, roundingPoint),
        formatNumber(lowerMidValue, roundingPoint),
        formatNumber(minValue, roundingPoint),
      ]

    }else{
      return []
    }

  }

  return (
    <View style={{...containerStyle}}>
      <Text style={{color: COLORS.white}}>Chart</Text>
      <View style={{position:'absolute', left: SIZES.padding, top: 20, bottom: 0, justifyContent: 'space-between'}}>
       {getYaxiceLabelValue().map((item, index)=>{
        return(
          <Text key={index} style={{color: COLORS.lightGray3, fontSize: 12}}>
              {item}
          </Text>
        )
       })}
      </View>
      { data.length >0 && 
        <ChartPathProvider data={{ points: data.map((item)=> ({x: item.x, y: item.y})) , smoothingStrategy: 'bezier' }}>
          <View>
            <ChartPath height={130} stroke={COLORS.lightGreen} width={SIZE} />
            <ChartDot size= {15}  style={{ backgroundColor: "white" }} />
            {/* <ChartDot>
              <View style={{position:'absolute', left:-35, width:80, alignItems:'center', backgroundColor: COLORS.transparentBlack}}>
                <View style={{alignItems:'center', justifyContent:'center', width: 25, height: 25, borderRadius: 15, backgroundColor: COLORS.white}}>
                  <View style={{ width: 15, height: 15, borderRadius: 10, backgroundColor: COLORS.lightGreen}}/>
                </View>
                <ChartYLabel 
                   format={formateUSD}
                   style={{ color: COLORS.white, fontsize: 12}}
                  />

               
              </View>
            </ChartDot> */}
          </View>
       </ChartPathProvider>
      }
        
    </View>
  )
}

export default Chart;