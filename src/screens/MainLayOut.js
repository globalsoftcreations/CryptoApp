import { View, Animated } from 'react-native'
import React,{useEffect, useRef}from 'react';
import { constants,
    theme,
    COLORS,
    SIZES,
    FONTS,
    icons,} from '../../constants/index';
import IconTextButton from '../components/homenavigation/IconTextButton';
import { useSelector, useDispatch } from 'react-redux' ;



const MainLayOut = ({children}) => {
  const state = useSelector((state) => state.TabReducer);
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
   
  useEffect(()=>{
      if(state){
          Animated.timing(modalAnimatedValue,{
            toValue:1,
            duration:500,
            useNativeDriver:false
          }
          ).start();
        }
        else{
          Animated.timing(modalAnimatedValue,{
            toValue:0,
            duration:500,
            useNativeDriver:false
          }
          ).start();
        }
  },[state])

  const modalY = modalAnimatedValue.interpolate({
    inputRange:[0, 1],
    outputRange: [SIZES.height, SIZES.height -260]
  })

  return(
    <View style={{flex:1}}>
      {children}

      {/* Dim backgroundColor */}
      {
        state && <Animated.View style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          backgroundColor: COLORS.transparentBlack
        }}
        opacity={modalAnimatedValue}
        />
      }
      {/* Modal */}
      <Animated.View style={{ position:'absolute', top: modalY, left:0, width:"100%", padding:SIZES.padding, backgroundColor: COLORS.primary}}>
         <IconTextButton label="Transfer" icon={icons.send} onPress={()=> console.log("transfer")}/>
         <IconTextButton label="Withdrow" icon={icons.withdraw} onPress={()=> console.log("withdrow")} containerStyle={{marginTop:SIZES.base}}/>
      </Animated.View>
      
    </View>
  )
}

export default MainLayOut;