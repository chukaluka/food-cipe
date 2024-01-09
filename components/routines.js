import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Routines = () => {
  return (
    <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className='flex-row'
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            <TouchableOpacity className='m-4 rounded-lg overflow-hidden'>
                <Image 
                    source={require('../assets/images/Breakfast.jpg')}
                    style={{width: hp(20), height: hp(20)}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-white font-extrabold text-center'>Breakfast</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='m-4 rounded-lg overflow-hidden'>
                <Image 
                    source={require('../assets/images/lunch.jpg')}
                    style={{width: hp(20), height: hp(20)}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-black font-extrabold text-center'>Lunch</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='m-4 rounded-lg overflow-hidden'>
                <Image 
                    source={require('../assets/images/dinner.jpg')}
                    style={{width: hp(20), height: hp(20)}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-white font-extrabold text-center'>Dinner</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Routines