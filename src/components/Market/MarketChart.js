import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import {ChartDot, ChartPath, ChartPathProvider, ChartXLabel, ChartYLabel, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { COLORS, icons, images, SIZES } from '../../../constants';
import moment from 'moment';

const MarketChart = ({containerStyle, chartPrices}) => {
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
     
      { data.length >0 && 
        <ChartPathProvider data={{ points: data.map((item)=> ({x: item.x, y: item.y})) , smoothingStrategy: 'bezier' }}>
          <View>
            <ChartPath height={30} stroke={COLORS.lightGreen} width={100} />
            <ChartDot size= {15}  style={{ backgroundColor: "white" }} />
          </View>
       </ChartPathProvider>
      }
        
    </View>
  )
}

export default MarketChart;