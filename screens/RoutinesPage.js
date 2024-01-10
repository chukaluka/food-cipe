import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const RoutinesPage = ({ route, navigation }) => {
    // The route that brings either the breakfast, lunch or dinner image source from the routines.js . The routines.js navigates to this RoutinesPage.js 
    const { imageSource} = route.params;

  return (
    <Animated.View entering={FadeInDown.duration(500).delay(500).springify()} style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
          <Image source={imageSource} style={{ width: wp(100), height: hp(50), borderBottomLeftRadius: 70, borderBottomRightRadius:70 }} />
      </ScrollView>

        {/* back button */}
        <View className='w-full absolute flex-row justify-between items-center pt-14'>
            <TouchableOpacity onPress={() => navigation.goBack()} className='p-2 ml-2'>
             <Ionicons name="arrow-back-circle" size={hp(5)} strokeWidth={4.5} color="black" />
            </TouchableOpacity>

        </View>
    </Animated.View>

  )
}

export default RoutinesPage
