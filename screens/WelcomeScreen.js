import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


const WelcomeScreen = ({navigation}) => {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(2)), 200)
        setTimeout(() => ring2padding.value = withSpring(ring2padding.value+hp(4.5)), 200)

        setTimeout(() => navigation.navigate('UserName'), 3000)
    },[])


  return (
    <View className='flex-1 justify-center items-center space-y-10 bg-yellow-400'>
      <StatusBar style='light'/>

      {/* logo image with rings */}
      <Animated.View className='bg-white/20 rounded-full' style={{padding: ring2padding}}>
        <Animated.View className='bg-white/20 rounded-full' style={{padding: ring1padding}}>
            <Image source={require('../assets/images/welcome2.png')}
            style={{width: hp(28), height: hp(20)}} />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className='items-center space-y-2'>
        <Text style={{fontSize: hp(6)}} className='text-white font-semibold tracking-widest'>Food-cipe</Text>
        <Text style={{fontSize: hp(2.5)}} className='text-white font-medium tracking-widest'>Manage your meal</Text>
      </View>
      
    </View>
  )
}

export default WelcomeScreen