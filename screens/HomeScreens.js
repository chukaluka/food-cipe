import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Routines from '../components/routines';


const HomeScreens = ({ route }) => {
  // Collects and Displays the username from the username.js to homescreen.js

    const { name } = route.params || {};

  return (
    <View className='flex-1 bg-white space-x-5'>
      <StatusBar style='dark'/>

      {/* For scrolling */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className='space-y-6 pt-14'
      >

        {/* avatar image */}
        <View>
          <Image
            source={require('../assets/images/avatar.png')}
            style={{width: hp(5), height: hp(5.5)}}/>
        </View>

        {/* Greetings, punchline */}
        <View>
          <Text style={{fontSize: hp(1.7)}} className='pb-3'>Hello, <Text className='text-orange-400 font-semibold'>{name}</Text></Text>
          <Text style={{fontSize: hp(3.8)}} className='font-medium'>Daily delights,</Text>
          <Text style={{fontSize: hp(3.8)}} className='font-medium'>organise your own <Text className='text-amber-400 font-medium'>food</Text></Text>
        </View>

        {/* Routines components from routines.js*/}
        <View>
          <Routines/> 
        </View>
       
      </ScrollView>
    </View>
  )
}

export default HomeScreens